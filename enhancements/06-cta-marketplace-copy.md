# Enhancement: Refine CTA Form Copy to Set Expectations About Marketplace

## File to modify
`components/pro-blocks/landing-page/cta-banner.tsx`

## Problem
The current CTA section says "Check your eligibility in minutes" and "Answer a few quick questions and we'll tell you what you may qualify for." This undersells the marketplace value proposition. Users don't understand that submitting leads to lenders *competing* for their business and offers appearing in their portal.

## Requirements

1. Update the heading from:
   > "Check your eligibility in minutes"
   
   to:
   > "Let lenders compete for your business"

2. Update the subtext from:
   > "Answer a few quick questions and we'll tell you what you may qualify for. No commitment, no hard credit pull, no pressure."
   
   to:
   > "Answer a few quick questions and our marketplace matches you with lenders who want your business. Compare real offers in your secure portal — no commitment, no hard credit pull."

3. Update the bullet points to better reflect the marketplace flow:
   - "Soft inquiry only — won't affect your credit" (keep as-is)
   - Change "Results in under 60 seconds" → "Multiple lenders review your application"
   - Change "No obligation to proceed" → "Compare competing offers in your portal"
   - Change "Your data is encrypted and never sold" → "Your data is encrypted and only shared with lenders you approve"

4. Update the form title from "Quick Eligibility Check" to "Get Started — Free & Fast"

## Important
- Do NOT modify the `PrequalForm` component itself — only the surrounding copy in `cta-banner.tsx`
- Keep the same HTML structure and Tailwind classes
