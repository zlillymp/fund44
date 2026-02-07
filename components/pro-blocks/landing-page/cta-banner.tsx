"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="section-padding-y bg-background">
      <div className="container-padding-x container mx-auto">
        <div className="relative rounded-2xl bg-primary p-10 md:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] -translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="heading-lg text-white mb-4">Ready to explore your options?</h2>
            <p className="text-primary-foreground/70 text-lg font-light mb-8 max-w-lg mx-auto">
              Check your eligibility in minutes — no commitment, no hard credit pull, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" className="shadow-md px-8 text-base h-12 font-medium">
                Check Eligibility
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white border border-white/20 hover:bg-white/10 px-8 text-base h-12">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
