"use client"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, UserGroupIcon, ShieldCheckIcon, LightBulbIcon, BoltIcon } from "@heroicons/react/24/outline"

export function BentoGrid6() {
  return (
    <section className="section-padding-y bg-secondary/40 border-y border-border/50" id="why">
      <div className="container-padding-x container mx-auto">
        <div className="mb-12 max-w-2xl mx-auto flex flex-col items-center text-center gap-4">
          <Tagline>Why Fund44</Tagline>
          <h2 className="heading-lg text-foreground">A better way to get funded</h2>
          <p className="text-lg text-muted-foreground font-light">
            Fund44 is a lending marketplace — not a lender or broker. Our platform automatically matches your business with the right SBA loan programs and lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto md:auto-rows-[280px]">
          {/* Card 1: Advocacy - Large */}
          <div className="md:col-span-2 row-span-1 relative overflow-hidden rounded-xl border border-border bg-background p-8 md:p-10 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
            <div className="relative z-10">
              <div className="h-11 w-11 rounded-lg bg-amber/10 flex items-center justify-center mb-5">
                <UserGroupIcon className="h-5 w-5 text-amber" />
              </div>
              <h3 className="heading-md mb-2">One Application, Many Lenders</h3>
              <p className="text-muted-foreground max-w-md font-light leading-relaxed">
                Apply once and our marketplace automatically matches you with multiple SBA-approved lenders competing for your business.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-amber/5 to-transparent rounded-tl-full translate-x-1/3 translate-y-1/3" />
          </div>

          {/* Card 2: Speed */}
          <div className="md:col-span-1 row-span-1 rounded-xl border border-border bg-background p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="h-11 w-11 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                <BoltIcon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="heading-sm mb-2">Streamlined Process</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                No back-and-forth. Apply online, get matched instantly, and review offers in your secure portal — all in one place.
              </p>
            </div>
          </div>

          {/* Card 3: Transparency */}
          <div className="md:col-span-1 row-span-1 rounded-xl border border-border bg-background p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="h-11 w-11 rounded-lg bg-primary/8 flex items-center justify-center mb-5">
                <LightBulbIcon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="heading-sm mb-2">Transparent Terms</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                No hidden fees, no surprises. You&apos;ll know your rate, terms, and timeline before you commit to anything.
              </p>
            </div>
          </div>

          {/* Card 4: Security - Large */}
          <div className="md:col-span-2 row-span-1 relative overflow-hidden rounded-xl border border-primary/20 bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
            <div className="relative z-10">
              <div className="h-11 w-11 rounded-lg bg-white/15 flex items-center justify-center mb-5">
                <ShieldCheckIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="heading-md mb-2 text-white">Your Data Is Protected</h3>
              <p className="text-primary-foreground/80 max-w-md font-light leading-relaxed">
                256-bit encryption on all data. We never sell your information and only share what&apos;s necessary with lenders you&apos;ve approved.
              </p>
            </div>
            <Button variant="secondary" className="w-fit mt-4 shadow-sm font-medium">
              Start Your Application
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
