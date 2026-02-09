import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2"
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6"
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9"
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4"
import { ProcessSection } from "@/components/pro-blocks/landing-page/process-section"
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1"
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3"
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2"
import { CtaBanner } from "@/components/pro-blocks/landing-page/cta-banner"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { StickyMobileCta } from "@/components/pro-blocks/landing-page/sticky-mobile-cta"

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <BentoGrid6 />
      <FeatureSection9 />
      <ProcessSection />
      <StatsSection4 />
      <TestimonialsSection1 />
      <PricingSection3 />
      <FaqSection2 />
      <CtaBanner />
      <Footer1 />
      <StickyMobileCta />
    </main>
  )
}
