"use client"

export function StatsSection4() {
  return (
    <section className="bg-primary section-padding-y" id="stats">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center gap-4">
            <h2 className="heading-lg text-white">Real numbers, real businesses</h2>
            <p className="text-primary-foreground/70 font-light text-lg">
              We&apos;ll update these with verified statistics from our lending partners as they come in.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-amber tabular-nums tracking-tight">—</span>
              <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
                Loans Funded
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-amber tabular-nums tracking-tight">—</span>
              <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Capital Deployed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-amber tabular-nums tracking-tight">—</span>
              <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Avg. Loan Size</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-amber tabular-nums tracking-tight">SBA</span>
              <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
                Backed Programs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
