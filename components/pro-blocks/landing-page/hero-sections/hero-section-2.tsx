"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ShieldCheckIcon, ClockIcon, CheckBadgeIcon } from "@heroicons/react/24/outline"

export function HeroSection2() {
  return (
    <section className="bg-background relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Subtle background texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container-padding-x container mx-auto pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          {/* Trust signal */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <ShieldCheckIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Small Business Lending Marketplace</span>
          </div>

          <div className="flex flex-col gap-5">
            <h1 id="hero-heading" className="heading-xl text-balance text-foreground">
              SBA Loans Built Around{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Your Business</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber/20 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Fund44 is a small business lending marketplace. Apply once, get matched with SBA 7(a) and 504 loans, working capital, and lines of credit — automatically.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="shadow-md px-8 text-base h-12" asChild>
              <a href="/#eligibility">
                Check Your Eligibility
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-base h-12 px-8 border-border" asChild>
              <a href="/#programs">View Loan Programs</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckBadgeIcon className="h-4 w-4 text-primary/70" />
              <span>No upfront fees</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-primary/70" />
              <span>Decisions in days, not months</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4 text-primary/70" />
              <span>Bank-level encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
