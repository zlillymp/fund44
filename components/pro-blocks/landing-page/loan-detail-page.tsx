import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"

interface KeyFact {
  label: string
  value: string
}

interface LoanDetailPageProps {
  title: string
  subtitle: string
  intro: string
  keyFacts: KeyFact[]
  sections: {
    title: string
    content: string | string[]
  }[]
  eligibility?: string[]
  ctaText?: string
}

export function LoanDetailPage({
  title,
  subtitle,
  intro,
  keyFacts,
  sections,
  eligibility,
  ctaText = "Check Your Eligibility",
}: LoanDetailPageProps) {
  return (
    <>
      <LpNavbar1 />
      <main className="bg-secondary/30 min-h-screen">
        {/* Hero */}
        <div className="bg-foreground text-background">
          <div className="container-padding-x container mx-auto py-16 md:py-20">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-1.5 text-sm text-background/60 hover:text-background/90 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All Loan Programs
            </Link>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">{subtitle}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">{title}</h1>
            <p className="text-background/70 text-lg font-light max-w-2xl leading-relaxed">{intro}</p>
          </div>
        </div>

        {/* Key Facts Bar */}
        <div className="border-b border-border bg-background">
          <div className="container-padding-x container mx-auto py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyFacts.map((fact, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">{fact.label}</p>
                  <p className="text-lg font-bold text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-padding-x container mx-auto py-12 md:py-16">
          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                )}
              </div>
            ))}

            {eligibility && (
              <div className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Eligibility Requirements</h2>
                <ul className="space-y-3">
                  {eligibility.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-foreground text-background">
              <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-background/70 font-light mb-6">
                Our pre-qualification takes 60 seconds with no impact to your credit score.
              </p>
              <Link
                href="/#eligibility"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  )
}
