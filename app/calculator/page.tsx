import type { Metadata } from "next"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { LoanCalculator } from "@/components/pro-blocks/landing-page/loan-calculator"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export const metadata: Metadata = {
  title: "SBA Loan Calculator — Fund44",
  description:
    "Free SBA loan calculator. Estimate monthly payments for SBA 7(a) and 504 loans. Adjust loan amount, interest rate, and term to see real-time payment breakdowns.",
  keywords: [
    "SBA loan calculator",
    "SBA 7a loan calculator",
    "SBA 504 loan calculator",
    "small business loan calculator",
    "SBA loan payment estimator",
    "business loan monthly payment",
  ],
  openGraph: {
    title: "SBA Loan Calculator — Fund44",
    description:
      "Estimate your monthly payments for SBA 7(a) and 504 loans. Free, instant results — no sign-up required.",
    url: "https://fund44.com/calculator",
    siteName: "Fund44",
    type: "website",
  },
  alternates: {
    canonical: "https://fund44.com/calculator",
  },
}

export default function CalculatorPage() {
  return (
    <>
      <LpNavbar1 />
      <main className="min-h-screen">
        {/* Hero / header */}
        <section className="bg-background relative overflow-hidden">
          {/* Decorative blurs — matching hero pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="container-padding-x container mx-auto pt-16 pb-12 md:pt-20 md:pb-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-5">
              <Tagline>Calculator</Tagline>
              <h1 className="heading-lg text-foreground">SBA Loan Calculator</h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Get a realistic estimate — not a best-case fantasy. Tell us about your business and we&apos;ll show you what SBA financing actually looks like for your situation.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="container-padding-x container mx-auto section-padding-y">
          <LoanCalculator />
        </section>

        {/* Educational content */}
        <section className="bg-secondary/40 border-t border-border/50">
          <div className="container-padding-x container mx-auto section-padding-y max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12 gap-4">
              <Tagline>Learn More</Tagline>
              <h2 className="heading-lg text-foreground">Understanding SBA Loan Rates &amp; Terms</h2>
            </div>

            <div className="space-y-8">
              {/* Interest Rates */}
              <div className="rounded-xl border border-border bg-background p-8 shadow-xs">
                <h3 className="heading-sm text-foreground mb-4">How SBA Interest Rates Work</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-3">
                  <p>
                    SBA loan interest rates are typically tied to the Wall Street Journal Prime Rate and expressed as &ldquo;Prime + X%.&rdquo; The SBA sets maximum allowable spreads, but individual lenders may offer lower rates based on your credit profile, collateral, and business financials.
                  </p>
                  <p>
                    For <strong className="font-medium text-foreground">SBA 7(a) loans</strong>, the maximum variable rate is Prime + 3.0% for loans of $50,000 or less, and Prime + 2.75% for loans between $50,001 and $250,000. Loans above $250,000 cap at Prime + 2.25%.
                  </p>
                </div>
              </div>

              {/* 7a vs 504 */}
              <div className="rounded-xl border border-border bg-background p-8 shadow-xs">
                <h3 className="heading-sm text-foreground mb-6">SBA 7(a) vs. 504 Loans</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3">SBA 7(a) Loans</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        Up to $5 million
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        Variable or fixed rates
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        Terms up to 25 years (real estate) or 10 years (working capital)
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        General-purpose — equipment, working capital, refinancing, acquisition
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3">SBA 504 Loans</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                        Up to $5.5 million (CDC portion)
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                        Below-market fixed rates on the CDC portion
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                        10- or 20-year terms
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                        Real estate and major equipment only — requires 10% down
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Factors */}
              <div className="rounded-xl border border-border bg-background p-8 shadow-xs">
                <h3 className="heading-sm text-foreground mb-4">Factors That Affect Your Rate</h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-5">
                  The calculator above estimates your rate range based on the same factors real lenders evaluate:
                </p>
                <ul className="space-y-3 text-sm font-light">
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                    <span><strong className="font-medium text-foreground">Credit score:</strong> <span className="text-foreground/80">Higher personal credit typically earns lower spreads above Prime. Most SBA lenders require a minimum FICO of 620, but stronger scores unlock better terms.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                    <span><strong className="font-medium text-foreground">Time in business:</strong> <span className="text-foreground/80">Startups (under 2 years) are considered higher risk and typically face higher equity requirements and rates.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                    <span><strong className="font-medium text-foreground">Cash flow:</strong> <span className="text-foreground/80">Lenders want to see that your business can comfortably cover the loan payment — typically 1.25&times; the monthly payment or more.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                    <span><strong className="font-medium text-foreground">Equity injection:</strong> <span className="text-foreground/80">The standard minimum is 10%, but startups, weaker credit profiles, or businesses with thin cash flow may need 15–30%.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
                    <span><strong className="font-medium text-foreground">Loan size:</strong> <span className="text-foreground/80">Larger loans often qualify for tighter spreads. SBA caps the maximum spread at Prime + 2.25% for loans over $250,000.</span></span>
                  </li>
                </ul>
              </div>

              {/* Guarantee Fee */}
              <div className="rounded-xl border border-border bg-background p-8 shadow-xs">
                <h3 className="heading-sm text-foreground mb-4">About the SBA Guarantee Fee</h3>
                <div className="text-foreground/80 font-light leading-relaxed space-y-3">
                  <p>
                    Every SBA 7(a) loan carries an upfront guarantee fee — this is an SBA fee, not a lender fee, and every SBA-approved lender is required to collect it. The fee is based on the loan amount and the guaranteed portion:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span><strong className="font-medium text-foreground">Loans up to $150,000:</strong> 2% of the guaranteed portion (85% guarantee)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span><strong className="font-medium text-foreground">$150,001 – $700,000:</strong> 3% of the guaranteed portion (75% guarantee)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span><strong className="font-medium text-foreground">$700,001 – $5,000,000:</strong> 3.5% on the first $1M guaranteed, 3.75% on amounts above $1M</span>
                    </li>
                  </ul>
                  <p>
                    This fee can typically be financed into the loan, so you don&apos;t always need to pay it out of pocket at closing.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="rounded-xl border border-amber/20 bg-amber/5 p-6">
                <p className="text-sm text-foreground/80 font-light leading-relaxed">
                  <strong className="font-medium text-foreground">Important disclaimer:</strong> This calculator provides estimates only. Actual loan terms, rates, and eligibility are determined by SBA-approved lenders based on your full financial profile. Fund44 is not a lender — we connect you with lending partners who compete for your business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  )
}
