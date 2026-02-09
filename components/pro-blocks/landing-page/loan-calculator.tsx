"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowRightIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function formatCurrencyExact(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`
}

// ---------------------------------------------------------------------------
// Constants — update these when rates or SBA fee schedules change
// ---------------------------------------------------------------------------

/** WSJ Prime Rate — update when the Fed moves */
const CURRENT_PRIME_RATE = 7.5

/** SBA Guarantee Fee fiscal year label */
const SBA_GTY_FY = "FY 2026"

// Loan amount
const LOAN_MAX = 5_000_000
const LOAN_DEFAULT = 250_000

// Loan purpose → determines available terms and default
const PURPOSE_CONFIG = {
  working_capital: {
    label: "Working Capital",
    defaultTerm: 10,
    terms: [5, 7, 10],
  },
  equipment: {
    label: "Equipment Purchase",
    defaultTerm: 10,
    terms: [5, 7, 10],
  },
  real_estate: {
    label: "Real Estate / Construction",
    defaultTerm: 25,
    terms: [10, 15, 20, 25],
  },
  acquisition: {
    label: "Business Acquisition",
    defaultTerm: 10,
    terms: [7, 10],
  },
  refinancing: {
    label: "Debt Refinancing",
    defaultTerm: 10,
    terms: [5, 7, 10, 15, 20, 25],
  },
} as const

type LoanPurpose = keyof typeof PURPOSE_CONFIG

const CREDIT_TIERS = [
  { value: "740", label: "740+", score: 1.0 },
  { value: "720", label: "720 – 739", score: 0.8 },
  { value: "700", label: "700 – 719", score: 0.6 },
  { value: "680", label: "680 – 699", score: 0.4 },
  { value: "650", label: "650 – 679", score: 0.2 },
  { value: "620", label: "620 – 649", score: 0.0 },
] as const

const BUSINESS_AGE_TIERS = [
  { value: "10plus", label: "10+ years", score: 1.0 },
  { value: "5to10", label: "5 – 10 years", score: 0.75 },
  { value: "2to5", label: "2 – 5 years", score: 0.4 },
  { value: "under2", label: "Less than 2 years", score: 0.0 },
] as const

const CASH_FLOW_TIERS = [
  {
    value: "25kplus",
    label: "$25,000+ / month",
    score: 1.0,
    midpoint: 35_000,
  },
  {
    value: "10to25k",
    label: "$10,000 – $25,000 / month",
    score: 0.8,
    midpoint: 17_500,
  },
  {
    value: "5to10k",
    label: "$5,000 – $10,000 / month",
    score: 0.6,
    midpoint: 7_500,
  },
  {
    value: "1to5k",
    label: "$1,000 – $5,000 / month",
    score: 0.3,
    midpoint: 3_000,
  },
  {
    value: "breakeven",
    label: "About breaking even",
    score: 0.1,
    midpoint: 0,
  },
  {
    value: "losing",
    label: "Currently losing money",
    score: 0.0,
    midpoint: 0,
  },
] as const

// ---------------------------------------------------------------------------
// Calculation functions
// ---------------------------------------------------------------------------

function getMaxSpread(loanAmount: number): number {
  if (loanAmount <= 50_000) return 3.0
  if (loanAmount <= 250_000) return 2.75
  return 2.25
}

function estimateRateRange(
  loanAmount: number,
  creditScore: number,
  businessAge: number,
  cashFlow: number,
  equityPct: number,
): { lowRate: number; highRate: number } {
  const maxSpread = getMaxSpread(loanAmount)
  const minSpread = maxSpread * 0.55

  let equityScore: number
  if (equityPct >= 20) equityScore = 1.0
  else if (equityPct >= 15) equityScore = 0.75
  else if (equityPct >= 10) equityScore = 0.5
  else if (equityPct >= 5) equityScore = 0.2
  else equityScore = 0.0

  const profileScore =
    creditScore * 0.4 +
    businessAge * 0.25 +
    cashFlow * 0.2 +
    equityScore * 0.15

  const spreadRange = maxSpread - minSpread
  const estimatedSpread = maxSpread - profileScore * spreadRange

  let lowSpread = estimatedSpread - 0.25
  let highSpread = estimatedSpread + 0.25
  lowSpread = Math.max(minSpread, lowSpread)
  highSpread = Math.min(maxSpread + 0.25, highSpread)

  return {
    lowRate: Math.round((CURRENT_PRIME_RATE + lowSpread) * 100) / 100,
    highRate: Math.round((CURRENT_PRIME_RATE + highSpread) * 100) / 100,
  }
}

function calcMonthlyPayment(
  principal: number,
  annualRate: number,
  termYears: number,
): number {
  const monthlyRate = annualRate / 100 / 12
  const totalMonths = termYears * 12
  if (monthlyRate === 0) return principal / totalMonths
  const factor = Math.pow(1 + monthlyRate, totalMonths)
  return principal * ((monthlyRate * factor) / (factor - 1))
}

/** SBA 7(a) upfront guarantee fee — matches official SBA LGPC calculator */
function calcGuarantyFee(loanAmount: number): {
  gtyPct: number
  gtyAmount: number
  fee: number
} {
  const gtyPct = loanAmount <= 150_000 ? 0.85 : 0.75
  const gtyAmount = loanAmount * gtyPct

  let fee: number
  if (loanAmount <= 150_000) {
    fee = gtyAmount * 0.02
  } else if (loanAmount <= 700_000) {
    fee = gtyAmount * 0.03
  } else {
    const firstMillion = Math.min(gtyAmount, 1_000_000)
    const overMillion = Math.max(gtyAmount - 1_000_000, 0)
    fee = firstMillion * 0.035 + overMillion * 0.0375
  }

  return { gtyPct, gtyAmount, fee }
}

function getRecommendedEquity(
  businessAge: string,
  creditTier: string,
  cashFlowTier: string,
): number {
  let base = 10
  if (businessAge === "under2") base += 10
  if (creditTier === "620" || creditTier === "650") base += 5
  if (creditTier === "620") base += 5
  if (cashFlowTier === "losing" || cashFlowTier === "breakeven") base += 5
  return Math.min(base, 30)
}

type AssessmentLevel = "strong" | "moderate" | "challenging"

function getProfileAssessment(score: number): {
  level: AssessmentLevel
  message: string
} {
  if (score >= 0.65) {
    return {
      level: "strong",
      message:
        "Based on your profile, you\u2019re likely a strong SBA candidate with competitive rate options.",
    }
  }
  if (score >= 0.35) {
    return {
      level: "moderate",
      message:
        "You may qualify for SBA financing. Expect rates toward the higher end of the range shown below.",
    }
  }
  return {
    level: "challenging",
    message:
      "SBA financing may be more difficult with this profile. Consider increasing your equity injection or improving credit before applying.",
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function LoanCalculator() {
  // ── Form inputs ──
  const [loanAmount, setLoanAmount] = useState(LOAN_DEFAULT)
  const [loanPurpose, setLoanPurpose] = useState<LoanPurpose>("working_capital")
  const [loanTerm, setLoanTerm] = useState(
    PURPOSE_CONFIG.working_capital.defaultTerm,
  )
  const [creditTier, setCreditTier] = useState("700")
  const [businessAge, setBusinessAge] = useState("2to5")
  const [cashFlowTier, setCashFlowTier] = useState("5to10k")
  const [equityPct, setEquityPct] = useState(10)

  // ── UI state ──
  const [showResults, setShowResults] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [loanAmountRaw, setLoanAmountRaw] = useState(
    LOAN_DEFAULT.toLocaleString("en-US"),
  )
  const [loanInputFocused, setLoanInputFocused] = useState(false)

  const handlePurposeChange = useCallback((purpose: LoanPurpose) => {
    setLoanPurpose(purpose)
    setLoanTerm(PURPOSE_CONFIG[purpose].defaultTerm)
  }, [])

  const handleCalculate = useCallback(() => {
    setIsCalculating(true)
    setShowResults(false)

    setTimeout(() => {
      setIsCalculating(false)
      setShowResults(true)
    }, 1800)
  }, [])

  const handleStartOver = useCallback(() => {
    setShowResults(false)
    setIsCalculating(false)
  }, [])

  // ── Look up scores ──
  const purposeConfig = PURPOSE_CONFIG[loanPurpose]
  const creditScore =
    CREDIT_TIERS.find((t) => t.value === creditTier)?.score ?? 0.5
  const businessAgeScore =
    BUSINESS_AGE_TIERS.find((t) => t.value === businessAge)?.score ?? 0.5
  const cashFlowScore =
    CASH_FLOW_TIERS.find((t) => t.value === cashFlowTier)?.score ?? 0.5
  const cashFlowMidpoint =
    CASH_FLOW_TIERS.find((t) => t.value === cashFlowTier)?.midpoint ?? 0

  // ── Derived results ──
  const results = useMemo(() => {
    const equityDollar = Math.round(loanAmount * (equityPct / 100))
    const financedAmount = loanAmount - equityDollar
    const recommendedEquity = getRecommendedEquity(
      businessAge,
      creditTier,
      cashFlowTier,
    )
    const equityMeetsMin = equityPct >= recommendedEquity

    const { lowRate, highRate } = estimateRateRange(
      loanAmount,
      creditScore,
      businessAgeScore,
      cashFlowScore,
      equityPct,
    )

    const monthlyLow = calcMonthlyPayment(financedAmount, lowRate, loanTerm)
    const monthlyHigh = calcMonthlyPayment(financedAmount, highRate, loanTerm)

    const totalMonths = loanTerm * 12
    const totalInterestLow = monthlyLow * totalMonths - financedAmount
    const totalInterestHigh = monthlyHigh * totalMonths - financedAmount

    const gty = calcGuarantyFee(financedAmount)

    const totalCostLow = financedAmount + totalInterestLow + gty.fee
    const totalCostHigh = financedAmount + totalInterestHigh + gty.fee

    let equityScore: number
    if (equityPct >= 20) equityScore = 1.0
    else if (equityPct >= 15) equityScore = 0.75
    else if (equityPct >= 10) equityScore = 0.5
    else if (equityPct >= 5) equityScore = 0.2
    else equityScore = 0.0

    const profileScore =
      creditScore * 0.4 +
      businessAgeScore * 0.25 +
      cashFlowScore * 0.2 +
      equityScore * 0.15

    const assessment = getProfileAssessment(profileScore)

    let affordability: "comfortable" | "tight" | "difficult" | "unknown" =
      "unknown"
    if (cashFlowMidpoint > 0) {
      const midPayment = (monthlyLow + monthlyHigh) / 2
      const ratio = midPayment / cashFlowMidpoint
      if (ratio < 0.5) affordability = "comfortable"
      else if (ratio < 0.85) affordability = "tight"
      else affordability = "difficult"
    } else if (
      cashFlowTier === "losing" ||
      cashFlowTier === "breakeven"
    ) {
      affordability = "difficult"
    }

    return {
      equityDollar,
      financedAmount,
      recommendedEquity,
      equityMeetsMin,
      lowRate,
      highRate,
      monthlyLow,
      monthlyHigh,
      totalInterestLow,
      totalInterestHigh,
      gty,
      totalCostLow,
      totalCostHigh,
      assessment,
      affordability,
    }
  }, [
    loanAmount,
    loanTerm,
    equityPct,
    creditScore,
    businessAgeScore,
    cashFlowScore,
    cashFlowMidpoint,
    businessAge,
    creditTier,
    cashFlowTier,
  ])

  // ── Render ──
  return (
    <div className="max-w-3xl mx-auto">
      {/* ── VIEW 1: Form ──────────────────────────────────────────── */}
      {!showResults && !isCalculating && (
        <div className="animate-in fade-in duration-300">
          <div className="rounded-xl border border-border bg-background shadow-sm overflow-hidden">
            {/* Form sections */}
            <div className="p-8 md:p-10">
              {/* Section: Loan Details */}
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-primary/8 flex items-center justify-center">
                    <CurrencyDollarIcon className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Loan Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Loan Amount — full width */}
                  <div className="md:col-span-2">
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Loan Amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">
                        $
                      </span>
                      <Input
                        type="text"
                        inputMode="numeric"
                        className="pl-8 bg-secondary/40 border-border focus-visible:ring-primary/30 text-foreground font-medium"
                        value={
                          loanInputFocused
                            ? loanAmountRaw
                            : loanAmount.toLocaleString("en-US")
                        }
                        onFocus={(e) => {
                          setLoanInputFocused(true)
                          setLoanAmountRaw(String(loanAmount))
                          setTimeout(() => e.target.select(), 0)
                        }}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/[^0-9]/g, "")
                          setLoanAmountRaw(raw)
                          const v = parseInt(raw, 10)
                          if (!isNaN(v)) setLoanAmount(v)
                          else if (raw === "") setLoanAmount(0)
                        }}
                        onBlur={() => {
                          setLoanInputFocused(false)
                          const capped = Math.min(
                            LOAN_MAX,
                            Math.max(0, loanAmount),
                          )
                          setLoanAmount(capped)
                          setLoanAmountRaw(String(capped))
                        }}
                      />
                    </div>
                  </div>

                  {/* Purpose */}
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Loan Purpose
                    </Label>
                    <Select
                      value={loanPurpose}
                      onValueChange={(v) =>
                        handlePurposeChange(v as LoanPurpose)
                      }
                    >
                      <SelectTrigger className="bg-secondary/40 border-border focus:ring-primary/30 text-foreground font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(PURPOSE_CONFIG).map(([key, cfg]) => (
                          <SelectItem key={key} value={key}>
                            {cfg.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Term */}
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Loan Term
                    </Label>
                    <Select
                      value={String(loanTerm)}
                      onValueChange={(v) => setLoanTerm(Number(v))}
                    >
                      <SelectTrigger className="bg-secondary/40 border-border focus:ring-primary/30 text-foreground font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {purposeConfig.terms.map((t) => (
                          <SelectItem key={t} value={String(t)}>
                            {t} years
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Equity Injection */}
                  <div className="md:col-span-2">
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Equity Injection (%)
                    </Label>
                    <div className="relative">
                      <Input
                        type="text"
                        inputMode="numeric"
                        className="pr-8 bg-secondary/40 border-border focus-visible:ring-primary/30 text-foreground font-medium"
                        value={equityPct}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10)
                          if (!isNaN(v))
                            setEquityPct(Math.min(50, Math.max(0, v)))
                        }}
                        onBlur={() =>
                          setEquityPct(
                            Math.min(50, Math.max(0, equityPct)),
                          )
                        }
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="border-t border-border/60 mb-10" />

              {/* Section: Business Profile */}
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-amber/10 flex items-center justify-center">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-amber" />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Your Business Profile
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Time in Business */}
                  <div className="md:col-span-2">
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Time in Business
                    </Label>
                    <Select
                      value={businessAge}
                      onValueChange={setBusinessAge}
                    >
                      <SelectTrigger className="bg-secondary/40 border-border focus:ring-primary/30 text-foreground font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {BUSINESS_AGE_TIERS.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Credit Score */}
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Credit Score
                    </Label>
                    <Select
                      value={creditTier}
                      onValueChange={setCreditTier}
                    >
                      <SelectTrigger className="bg-secondary/40 border-border focus:ring-primary/30 text-foreground font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CREDIT_TIERS.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Monthly Cash Flow */}
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Monthly Cash Flow
                    </Label>
                    <Select
                      value={cashFlowTier}
                      onValueChange={setCashFlowTier}
                    >
                      <SelectTrigger className="bg-secondary/40 border-border focus:ring-primary/30 text-foreground font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CASH_FLOW_TIERS.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <p className="md:col-span-2 text-xs text-muted-foreground font-light">
                    Remaining profit after all monthly business expenses.
                  </p>
                </div>
              </section>

              {/* Submit */}
              <Button
                type="button"
                size="lg"
                onClick={handleCalculate}
                className="w-full h-12 text-base font-semibold shadow-md"
              >
                See My Estimate
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── VIEW 2: Loading ───────────────────────────────────────── */}
      {isCalculating && (
        <div className="rounded-xl border border-border bg-background shadow-sm">
          <div className="flex flex-col items-center justify-center py-24 animate-in fade-in duration-300">
            <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 animate-pulse">
              <CalculatorIcon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground font-light">
              Analyzing your scenario against current SBA guidelines...
            </p>
          </div>
        </div>
      )}

      {/* ── VIEW 3: Results ───────────────────────────────────────── */}
      {showResults && !isCalculating && (
        <div className="space-y-6 animate-in fade-in duration-500">
          {/* Profile Assessment */}
          <div
            className={`rounded-xl p-5 border ${
              results.assessment.level === "strong"
                ? "bg-emerald-50/50 border-emerald-200/60"
                : results.assessment.level === "moderate"
                  ? "bg-amber/5 border-amber/20"
                  : "bg-red-50/50 border-red-200/60"
            }`}
          >
            <div className="flex items-start gap-3">
              {results.assessment.level === "strong" ? (
                <CheckCircleIcon className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              ) : results.assessment.level === "moderate" ? (
                <ExclamationCircleIcon className="h-5 w-5 text-amber mt-0.5 shrink-0" />
              ) : (
                <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
              )}
              <p className="text-sm text-foreground/80 font-light leading-relaxed">
                {results.assessment.message}
              </p>
            </div>
          </div>

          {/* Monthly Payment — hero card */}
          <div className="rounded-xl border border-primary/20 bg-primary p-8 text-center shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60 mb-3">
              Estimated Monthly Payment
            </p>
            <p className="text-3xl md:text-4xl font-bold text-amber tracking-tight">
              {formatCurrencyExact(results.monthlyLow)} &ndash;{" "}
              {formatCurrencyExact(results.monthlyHigh)}
            </p>
            <p className="text-sm text-primary-foreground/50 font-light mt-3">
              Estimated rate: {formatPercent(results.lowRate)} &ndash;{" "}
              {formatPercent(results.highRate)}
            </p>
          </div>

          {/* Breakdown card */}
          <div className="rounded-xl border border-border bg-background p-6 md:p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Loan Breakdown
            </h3>
            <div className="space-y-5">
              <ResultRow
                icon={<CurrencyDollarIcon className="h-4 w-4" />}
                label="Financed Amount"
                value={formatCurrency(results.financedAmount)}
              />
              <ResultRow
                icon={<ArrowTrendingUpIcon className="h-4 w-4" />}
                label="Equity Injection"
                value={`${formatCurrency(results.equityDollar)} (${equityPct}%)`}
                badge={
                  results.equityMeetsMin
                    ? undefined
                    : `Recommended: ${results.recommendedEquity}%+`
                }
                badgeVariant={
                  results.equityMeetsMin ? undefined : "warning"
                }
              />
              <ResultRow
                icon={<ShieldCheckIcon className="h-4 w-4" />}
                label="SBA Guarantee Fee *"
                value={formatCurrencyExact(results.gty.fee)}
                subtext={`${Math.round(results.gty.gtyPct * 100)}% guaranteed (${formatCurrencyExact(results.gty.gtyAmount)})`}
              />
              <ResultRow
                icon={<ArrowTrendingUpIcon className="h-4 w-4" />}
                label="Total Interest"
                value={`${formatCurrency(results.totalInterestLow)} \u2013 ${formatCurrency(results.totalInterestHigh)}`}
              />

              <div className="border-t border-border/60 pt-5">
                <ResultRow
                  icon={<CalculatorIcon className="h-4 w-4" />}
                  label="Total Cost"
                  value={`${formatCurrency(results.totalCostLow)} \u2013 ${formatCurrency(results.totalCostHigh)}`}
                  subtext="Principal + Interest + Guarantee Fee"
                  bold
                />
              </div>
            </div>
          </div>

          {/* Affordability */}
          {results.affordability !== "unknown" && (
            <div
              className={`rounded-xl px-5 py-4 text-sm font-light leading-relaxed border ${
                results.affordability === "comfortable"
                  ? "bg-emerald-50/50 border-emerald-200/60 text-foreground/80"
                  : results.affordability === "tight"
                    ? "bg-amber/5 border-amber/20 text-foreground/80"
                    : "bg-red-50/50 border-red-200/60 text-foreground/80"
              }`}
            >
              {results.affordability === "comfortable"
                ? "Based on your stated cash flow, this payment appears manageable for your business."
                : results.affordability === "tight"
                  ? "Based on your stated cash flow, this payment may be tight. Lenders typically want your business to cover the payment at least 1.25\u00d7 over."
                  : "Based on your stated cash flow, affording this payment could be very difficult. Most lenders require demonstrated ability to service the debt."}
            </div>
          )}

          {/* Guarantee fee disclaimer */}
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            * The SBA Guarantee Fee is a standard fee charged on all SBA
            7(a) loans ({SBA_GTY_FY}). This fee is not unique to any
            lender &mdash; every SBA-approved lender is required to
            collect it. It can typically be financed into the loan.
          </p>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
            {results.assessment.level !== "challenging" ? (
              <div className="text-center space-y-5">
                <p className="text-muted-foreground font-light leading-relaxed">
                  Based on your inputs, we have lenders that would like to
                  take a look at this deal.
                </p>
                <Link href="/apply" className="block">
                  <Button
                    size="lg"
                    className="w-full h-12 text-base font-semibold shadow-md"
                  >
                    Start Your Application
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground font-light">
                  Free to apply &mdash; no credit impact until you choose
                  a lender.
                </p>
              </div>
            ) : (
              <div className="text-center space-y-5">
                <p className="text-muted-foreground font-light leading-relaxed">
                  This scenario may be challenging, but we work with
                  lenders who specialize in tougher deals. It&apos;s worth
                  a conversation.
                </p>
                <Link href="/apply" className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-12 text-base font-semibold"
                  >
                    Explore Your Options
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground font-light">
                  No commitment &mdash; let&apos;s see what&apos;s
                  possible.
                </p>
              </div>
            )}
          </div>

          {/* Start Over */}
          <div className="text-center">
            <button
              onClick={handleStartOver}
              className="text-sm text-muted-foreground hover:text-primary font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              Adjust inputs &amp; recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ResultRow({
  icon,
  label,
  value,
  subtext,
  badge,
  badgeVariant,
  bold,
}: {
  icon: React.ReactNode
  label: string
  value: string
  subtext?: string
  badge?: string
  badgeVariant?: "warning"
  bold?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <span className="text-muted-foreground mt-0.5">{icon}</span>
        <div>
          <p className={`text-sm ${bold ? "font-semibold text-foreground" : "text-foreground/80 font-light"}`}>
            {label}
          </p>
          {subtext && (
            <p className="text-xs text-muted-foreground font-light mt-0.5">
              {subtext}
            </p>
          )}
          {badge && (
            <span
              className={`inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                badgeVariant === "warning"
                  ? "bg-amber/10 text-amber-foreground border border-amber/20"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
      </div>
      <p className={`text-sm text-right whitespace-nowrap ${bold ? "font-bold text-foreground" : "font-semibold text-foreground"}`}>
        {value}
      </p>
    </div>
  )
}
