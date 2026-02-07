"use client"

import { PrequalForm } from "@/components/pro-blocks/landing-page/prequal-form"

export function CtaBanner() {
  return (
    <section className="section-padding-y bg-background" id="eligibility">
      <div className="container-padding-x container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — messaging */}
          <div className="flex flex-col justify-center pt-4">
            <h2 className="heading-lg text-foreground mb-4">Check your eligibility in minutes</h2>
            <p className="text-lg text-muted-foreground font-light mb-6 leading-relaxed">
              Answer a few quick questions and we&apos;ll tell you what you may qualify for. No commitment, no hard credit pull, no pressure.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                Soft inquiry only — won&apos;t affect your credit
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                Results in under 60 seconds
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                No obligation to proceed
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                Your data is encrypted and never sold
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-border bg-background shadow-lg p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Eligibility Check</h3>
            <PrequalForm />
          </div>
        </div>
      </div>
    </section>
  )
}
