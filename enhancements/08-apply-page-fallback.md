# Enhancement: Add Fallback UI for /apply When LendFlow Widget Fails to Load

## File to modify
`app/apply/page.tsx`

## Problem
The LendFlow widget key (`NEXT_PUBLIC_LENDFLOW_WIDGET_KEY`) is currently empty, causing the /apply page to show a blank white box. Every CTA on the site points here. Users hitting a blank form is the #1 conversion killer.

## Requirements

1. In the `LendflowWidget` component, add a loading state and a timeout-based fallback:
   - Show a loading spinner/skeleton for the first 5 seconds while the widget attempts to load
   - After 5 seconds, if no content has rendered inside the widget container (check if `containerRef.current` has meaningful child content beyond the script tag and empty div), show a fallback card

2. The fallback card should contain:
   - Heading: "Application temporarily unavailable"
   - Subtext: "Our full application is being set up. In the meantime, you can start with a quick eligibility check below."
   - A prominent button: "Check Your Eligibility →" linking to `/#eligibility`
   - A secondary line: "Or call us directly at (phone number)" — use a placeholder `(800) 555-0199` for now

3. Also add a check: if `process.env.NEXT_PUBLIC_LENDFLOW_WIDGET_KEY` is falsy/empty, skip loading the script entirely and show the fallback immediately (no need to wait 5 seconds).

4. Keep the existing widget logic intact for when the key IS present — this fallback is only for the broken state.

## Design notes
- Use the existing card styling: `rounded-2xl border border-border bg-background shadow-lg p-8`
- Center the fallback content
- Use `text-primary` for the CTA button styling, consistent with the rest of the site
- Add an icon (e.g., `AlertCircle` from lucide-react) above the heading in a muted yellow/amber circle
