# Enhancement: Add Sticky Mobile CTA Bar

## Files to modify
1. Create new file: `components/pro-blocks/landing-page/sticky-mobile-cta.tsx`
2. `app/page.tsx` — Add the component

## Problem
On mobile, once users scroll past the hero section, there's no persistent CTA visible. They have to scroll back up or all the way down to the form. A sticky bottom bar keeps the primary action always accessible.

## Requirements

### New component: `sticky-mobile-cta.tsx`

1. Fixed to the bottom of the viewport, only visible on mobile/tablet (`lg:hidden`).

2. Contains:
   - Left side: Brief text — "Ready to get funded?" in small bold text
   - Right side: "Check Eligibility" button (compact, primary style) linking to `#eligibility`

3. Behavior:
   - **Hidden when user is at the top of the page** (hero is visible). Use an IntersectionObserver or scroll listener — only show the bar after scrolling past ~500px.
   - **Hidden when the CTA form section (#eligibility) is in viewport** — no point showing a "go to form" button when they're already at the form.
   - Smooth entrance: translate-y animation sliding up from bottom when it appears.

4. Styling:
   - `bg-background/95 backdrop-blur-sm border-t border-border shadow-lg`
   - Padding: `px-4 py-3`
   - `z-50` to stay above everything
   - Safe area padding for phones with home indicators: `pb-[env(safe-area-inset-bottom)]`

5. Mark as `"use client"` since it uses hooks.

### Add to homepage

In `app/page.tsx`, import and add it at the very end, after `<Footer1 />`:

```tsx
import { StickyMobileCta } from "@/components/pro-blocks/landing-page/sticky-mobile-cta"
```

## Important
- Do NOT show on desktop — this is mobile only (`lg:hidden`)
- The bar should not cover the footer — hide it when the footer is in view
- Keep the total height under 60px so it doesn't eat too much screen space on small phones
