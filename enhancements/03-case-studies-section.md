# Enhancement: Add Anonymized Case Studies Section to Homepage

## Files to modify
1. `components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1.tsx` — **Replace entirely**
2. `app/page.tsx` — Add the new component to the page

## Problem
The site has zero social proof beyond the stats section. Real (anonymized) case studies dramatically increase trust and conversion. The existing testimonials component has placeholder "MindSpace/TechCorp" content and only supports a single testimonial.

## Requirements

### New component: Replace `testimonials-section-1.tsx` with a case studies carousel/grid

1. Create a new component that displays 3 anonymized case studies in a horizontal card layout (3 columns on desktop, stacked on mobile).

2. Each card should include:
   - **Industry icon or emoji** (e.g., 🏭 Manufacturing, 🏥 Healthcare, 🍽️ Restaurant)
   - **Headline**: e.g., "Manufacturing Company — Texas"
   - **Loan type badge**: e.g., "SBA 7(a)"
   - **Amount funded**: e.g., "$1.2M"
   - **Key metric**: e.g., "Funded in 34 days"
   - **One-line description**: e.g., "Needed equipment financing to expand production capacity. Matched with 3 competing lenders."

3. Use these 3 case studies:
   - **Manufacturing Company — Texas**: SBA 7(a), $1.2M, funded in 34 days. Equipment financing for production expansion. Matched with 3 competing lenders.
   - **Healthcare Practice — Florida**: SBA 504, $850K, funded in 45 days. Commercial real estate acquisition for new clinic location. 10% down payment.
   - **Restaurant Group — California**: Line of Credit, $250K, funded in 12 days. Working capital for seasonal inventory and second location buildout.

4. Section header: Use `<Tagline>` component with text "Success Stories", heading "Real businesses, real results", and subtext "Every business is different. Here's how our marketplace has helped companies like yours."

5. Add a CTA below the cards: "See what you qualify for →" linking to `#eligibility`

### Add to homepage

In `app/page.tsx`, import and add the component AFTER `<StatsSection4 />` and BEFORE `<PricingSection3 />`. This places social proof right after the impressive stats, reinforcing credibility before the comparison table.

```tsx
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1"
```

Note: The existing component uses `export default` not a named export.

## Design notes
- Cards should have `border border-border rounded-xl bg-background shadow-xs` consistent with the rest of the site
- The amount funded should be large and bold (use the amber/primary color like the stats section)
- Use `bg-secondary/40` for the section background to alternate with the white sections above/below
- Keep it clean and factual — no fake quotes or made-up names
