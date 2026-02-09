# Enhancement: Build SBA Loan Calculator Page

## Files to create
1. `app/calculator/page.tsx` — The calculator page
2. `components/pro-blocks/landing-page/loan-calculator.tsx` — The calculator component

## File to modify
1. `components/pro-blocks/landing-page/lp-navbars/lp-navbar-1.tsx` — Add "Calculator" link to the navigation

## Problem
The site has zero interactive tools that provide value before asking for commitment. An SBA loan calculator is the single highest-impact tool for driving organic search traffic ("SBA loan calculator" has significant search volume) and keeping visitors engaged.

## Requirements

### Calculator component (`loan-calculator.tsx`)

A client-side React component with:

**Inputs (use sliders with number input fallbacks):**
- **Loan Amount**: Range $25,000 – $5,000,000, default $250,000, step $25,000
- **Interest Rate (%)**: Range 2% – 15%, default 7.5%, step 0.25%. Show a note below: "Current SBA 7(a) rates typically range from Prime + 1.5% to Prime + 3%"
- **Loan Term**: Dropdown — 5 years, 7 years, 10 years, 15 years, 20 years, 25 years. Default 10 years.
- **Down Payment (%)**: Range 0% – 30%, default 10%, step 5%. Note: "SBA 504 loans typically require 10% down"

**Outputs (update in real-time as inputs change):**
- **Monthly Payment** (large, prominent, use amber/primary color for the number)
- **Total Interest Paid** over the life of the loan
- **Total Cost** (principal + interest)
- **Financed Amount** (loan amount minus down payment)

**Calculation:** Standard amortization formula:
`M = P * [r(1+r)^n] / [(1+r)^n - 1]`
where P = financed amount, r = monthly rate, n = total months.

**CTA at the bottom:**
A card/banner below the results: "These are estimates. See what you actually qualify for with a free eligibility check — no credit impact." with a "Check Your Eligibility →" button linking to `/` anchor `#eligibility`.

### Calculator page (`app/calculator/page.tsx`)

- Include `<LpNavbar1 />` and `<Footer1 />` 
- Page title/heading: "SBA Loan Calculator"
- Subtext: "Estimate your monthly payments for SBA 7(a) and 504 loans. Adjust the inputs below to see how loan amount, rate, and term affect your costs."
- Render the `<LoanCalculator />` component
- Add brief educational content below the calculator explaining SBA rate structure (SBA sets maximum rates as Prime + spread, rates vary by loan size and term)

### Navigation update

Add a "Calculator" link in the navbar between "FAQ" and "Apply". Link to `/calculator`.

## Design notes
- The sliders should use the site's primary color for the filled track
- Format all dollar amounts with commas and $ prefix
- Format percentages to 2 decimal places
- The calculator should work entirely client-side — no API calls
- Use `"use client"` directive
- Responsive: On mobile, stack inputs above outputs. On desktop, use a 2-column layout (inputs left, results right in a sticky card).
- Use existing UI components where possible (the project has shadcn slider, input, select components)
- Add page metadata with title "SBA Loan Calculator — Fund44" and description targeting the "SBA loan calculator" keyword
