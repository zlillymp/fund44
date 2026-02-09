# Enhancement: Add Progress Indicator to Pre-Qualification Form

## File to modify
`components/pro-blocks/landing-page/prequal-form.tsx`

## Problem
The prequal form has a 2-step flow (contact info → business details) but there is NO visual progress indicator. When users see the first step with just name/email/phone/business name and a "Continue" button, they have no idea what comes next. This causes drop-off because the form looks like a dead-end lead capture.

## Requirements

1. Add a step indicator bar at the TOP of the form (above any error messages) that shows:
   - **Step 1: Contact Info** — **Step 2: Business Details**
   - Visual: Two connected dots/circles with a line between them. Active step is filled (primary color), upcoming step is gray/muted.
   - Include text labels below each dot.

2. Below the step indicator, add context text:
   - Step 1: "Tell us about yourself" (small muted text)
   - Step 2: "Help us match you with the right lenders" (small muted text)

3. Hide the progress indicator during "submitting" and "result" states.

4. The "Continue" button text on step 1 should change to: **"Next: Business Details →"** instead of just "Continue →"

## Design notes
- Use the existing design system: `text-primary` for active, `text-muted-foreground` for inactive
- The connecting line between dots should use `bg-primary` for completed segments, `bg-border` for incomplete
- Keep it compact — this should add maybe 60px of height, not dominate the form
- Use Tailwind classes only, no additional dependencies needed
