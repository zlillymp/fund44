"use client"

import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { FileText, Search, CheckCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Apply Online",
    description: "Complete a simple application in under 10 minutes. We only ask for what lenders actually need.",
  },
  {
    icon: Search,
    step: "02",
    title: "Get Matched",
    description: "Our platform automatically matches you with the SBA loan programs and lenders best suited to your business.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Review Offers",
    description: "Log into your secure portal to compare offers, see terms, and choose the option that works best for you.",
  },
  {
    icon: Banknote,
    step: "04",
    title: "Receive Funding",
    description: "Accept your offer and funds are deposited directly. Track everything from application to funding in your portal.",
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding-y bg-secondary/40 border-y border-border/50" id="process">
      <div className="container-padding-x container mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Tagline>How It Works</Tagline>
          <h2 className="heading-lg mb-4 text-foreground">Four steps to funding</h2>
          <p className="text-lg text-muted-foreground font-light">
            We handle the complexity so you don&apos;t have to. Here&apos;s what the process looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-start text-left md:items-center md:text-center group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-border" />
              )}

              <div className="relative mb-5">
                <div className="h-16 w-16 rounded-2xl bg-background border border-border flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold text-amber bg-amber/10 border border-amber/20 px-2 py-0.5 rounded-full">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
