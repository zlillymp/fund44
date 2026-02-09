"use client"
import { Button } from "@/components/ui/button"
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

const loanOptions = [
  {
    name: "SBA 7(a) Loans",
    description: "The most flexible SBA loan for a wide range of business needs.",
    amount: "Up to $5M",
    features: [
      "Working capital & operations",
      "Equipment purchases",
      "Debt refinancing",
      "Business acquisitions",
      "Terms up to 25 years",
    ],
    cta: "Check Eligibility",
    popular: true,
  },
  {
    name: "SBA 504 Loans",
    description: "Fixed-rate financing for major asset purchases and expansion.",
    amount: "Up to $5.5M",
    features: [
      "Commercial real estate",
      "Heavy equipment",
      "Down payments as low as 10%",
      "Fixed interest rates",
      "Terms up to 25 years",
    ],
    cta: "Learn More",
    popular: false,
  },
  {
    name: "Lines of Credit",
    description: "Revolving access to capital when your business needs it most.",
    amount: "Varies",
    features: [
      "Draw funds as needed",
      "Pay interest only on usage",
      "Replenish as you repay",
      "Seasonal flexibility",
      "Quick access to capital",
    ],
    cta: "Get Started",
    popular: false,
  },
]

export function PricingSection3() {
  return (
    <section className="bg-background section-padding-y border-b border-border/50" aria-labelledby="pricing-section-title-3" id="apply">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center gap-4">
            <Tagline>Loan Comparison</Tagline>
            <h2 id="pricing-section-title-3" className="heading-lg text-foreground">
              Find the right loan for your business
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Not sure which program fits? Start with an eligibility check and we&apos;ll recommend the best option.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
            {loanOptions.map((option, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 ${
                  option.popular
                    ? "border-primary/30 shadow-lg bg-background ring-1 ring-primary/10"
                    : "border-border bg-background hover:shadow-md"
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="heading-sm mb-2">{option.name}</h3>
                  <p className="text-muted-foreground text-sm font-light mb-5">{option.description}</p>
                  <div className="text-3xl font-bold text-primary">{option.amount}</div>
                </div>

                <ul className="flex-1 space-y-3.5 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckIcon className="h-4 w-4 text-amber shrink-0 mt-0.5" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full shadow-sm ${option.popular ? "" : "bg-primary/5 text-foreground border border-border hover:bg-primary/10"}`}
                  variant={option.popular ? "default" : "ghost"}
                >
                  {option.cta}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
