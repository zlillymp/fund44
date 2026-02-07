"use client"

import { Building2, LineChart, Wallet, Banknote } from "lucide-react"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

const features = [
  {
    icon: Building2,
    title: "SBA 7(a) Loans",
    description:
      "The most versatile SBA loan. Use for working capital, equipment, debt refinancing, or business acquisition. Loans up to $5M with terms up to 25 years.",
    highlight: "Up to $5M",
  },
  {
    icon: Wallet,
    title: "SBA 504 Loans",
    description:
      "Long-term, fixed-rate financing for major assets — commercial real estate, heavy equipment, and large-scale expansion. Low down payments available.",
    highlight: "Fixed rates",
  },
  {
    icon: Banknote,
    title: "Working Capital",
    description:
      "Keep operations running smoothly with flexible working capital solutions. Cover payroll, inventory, seasonal fluctuations, or growth opportunities.",
    highlight: "Flexible terms",
  },
  {
    icon: LineChart,
    title: "Business Lines of Credit",
    description:
      "Access capital when you need it. Draw funds as needed, pay interest only on what you use, and replenish your credit line as you repay.",
    highlight: "Draw as needed",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background section-padding-y border-b border-border/50" id="programs">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
          <Tagline>Loan Programs</Tagline>
          <h2 className="heading-lg text-foreground">Funding that fits your business</h2>
          <p className="text-muted-foreground text-lg font-light text-balance">
            We focus exclusively on SBA-backed loans and lines of credit — the most affordable financing available for small businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-background rounded-xl border border-border hover:border-primary/20 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-amber bg-amber/10 px-3 py-1.5 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="heading-sm mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
