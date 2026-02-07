"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

const TIME_IN_BUSINESS_OPTIONS = [
  "3 - 5 Months",
  "6 - 12 Months",
  "1 - 2 Years",
  "2 - 5 Years",
  "5 - 10 Years",
  "10 Years",
]

const MONTHLY_REVENUE_OPTIONS = [
  { label: "Under $4,000", value: "0 - 4000" },
  { label: "$4,000 – $8,000", value: "4001 - 8000" },
  { label: "$8,000 – $14,000", value: "8001 - 14000" },
  { label: "$14,000 – $20,000", value: "14001 - 20000" },
  { label: "$20,000 – $30,000", value: "20001 - 30000" },
  { label: "$30,000 – $50,000", value: "30001 - 50000" },
  { label: "$50,000 – $100,000", value: "50001 - 100000" },
  { label: "$100,000 – $150,000", value: "100001 - 150000" },
  { label: "$150,000 – $250,000", value: "150001 - 250000" },
  { label: "$250,000 – $500,000", value: "250001 - 500000" },
  { label: "$500,000 – $1,000,000", value: "500001 - 1000000" },
  { label: "Over $1,000,000", value: "10000001+" },
]

const CREDIT_SCORE_OPTIONS = [
  { label: "720+", value: "720 or above" },
  { label: "650 – 719", value: "650 - 719" },
  { label: "600 – 649", value: "600 - 649" },
  { label: "550 – 599", value: "550 - 599" },
  { label: "500 – 549", value: "500 - 549" },
  { label: "450 – 499", value: "450 - 499" },
  { label: "Below 450", value: "449 or below" },
  { label: "Not sure", value: "Unsure" },
]

const LOAN_PURPOSE_OPTIONS = [
  "Working Capital",
  "Equipment Purchase",
  "Commercial Real Estate",
  "Debt Refinancing",
  "Business Acquisition",
  "Expansion",
  "Inventory",
  "Other",
]

type FormStep = "info" | "business" | "submitting" | "result"

interface PrequalResult {
  prequalification_amount_min?: number
  prequalification_amount_max?: number
  prequalification_id?: string
}

export function PrequalForm() {
  const [step, setStep] = useState<FormStep>("info")
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<PrequalResult | null>(null)

  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    phone: "",
    businessName: "",
    timeInBusiness: "",
    monthlyRevenue: "",
    creditScore: "",
    requestedAmount: "",
    loanPurpose: "",
  })

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setStep("submitting")
    setError(null)

    try {
      const res = await fetch("/api/prequalify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setResult(data.prequalification)
      setStep("result")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setStep("business")
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
  const selectClass = `${inputClass} appearance-none`
  const labelClass = "block text-sm font-medium text-foreground mb-1.5"

  if (step === "result" && result) {
    return (
      <div className="text-center py-8">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="heading-sm mb-3">You may qualify!</h3>
        {result.prequalification_amount_min && result.prequalification_amount_max ? (
          <p className="text-muted-foreground mb-6 font-light">
            Based on your information, you may qualify for{" "}
            <span className="font-semibold text-foreground">
              ${result.prequalification_amount_min.toLocaleString()} – ${result.prequalification_amount_max.toLocaleString()}
            </span>
          </p>
        ) : (
          <p className="text-muted-foreground mb-6 font-light">
            We&apos;ve received your information and will be in touch shortly.
          </p>
        )}
        <Button asChild size="lg" className="shadow-md px-8">
          <a href="/apply">
            Complete Full Application
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )
  }

  if (step === "submitting") {
    return (
      <div className="text-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground font-light">Checking your eligibility...</p>
      </div>
    )
  }

  return (
    <div>
      {error && (
        <div className="mb-5 flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {step === "info" && (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Jane Smith"
              value={formData.contactName}
              onChange={(e) => update("contactName", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              placeholder="jane@company.com"
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Business Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Your Business LLC"
              value={formData.businessName}
              onChange={(e) => update("businessName", e.target.value)}
            />
          </div>
          <Button
            className="w-full mt-2 shadow-sm h-11"
            onClick={() => setStep("business")}
            disabled={!formData.contactName || !formData.email || !formData.businessName}
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {step === "business" && (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Time in Business</label>
            <select
              className={selectClass}
              value={formData.timeInBusiness}
              onChange={(e) => update("timeInBusiness", e.target.value)}
            >
              <option value="">Select...</option>
              {TIME_IN_BUSINESS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Average Monthly Revenue</label>
            <select
              className={selectClass}
              value={formData.monthlyRevenue}
              onChange={(e) => update("monthlyRevenue", e.target.value)}
            >
              <option value="">Select...</option>
              {MONTHLY_REVENUE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Estimated Credit Score</label>
            <select
              className={selectClass}
              value={formData.creditScore}
              onChange={(e) => update("creditScore", e.target.value)}
            >
              <option value="">Select...</option>
              {CREDIT_SCORE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Requested Amount ($)</label>
            <input
              type="number"
              className={inputClass}
              placeholder="250000"
              value={formData.requestedAmount}
              onChange={(e) => update("requestedAmount", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Loan Purpose</label>
            <select
              className={selectClass}
              value={formData.loanPurpose}
              onChange={(e) => update("loanPurpose", e.target.value)}
            >
              <option value="">Select...</option>
              {LOAN_PURPOSE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 mt-2">
            <Button variant="outline" className="flex-1 h-11" onClick={() => setStep("info")}>
              Back
            </Button>
            <Button
              className="flex-1 shadow-sm h-11"
              onClick={handleSubmit}
              disabled={
                !formData.timeInBusiness ||
                !formData.monthlyRevenue ||
                !formData.creditScore ||
                !formData.requestedAmount
              }
            >
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground/70 text-center mt-4">
        This is a soft inquiry and will not affect your credit score.
      </p>
    </div>
  )
}
