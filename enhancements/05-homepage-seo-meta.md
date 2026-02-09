# Enhancement: Improve Homepage Meta Tags and SEO

## File to modify
`app/layout.tsx`

## Problem
The current metadata is minimal — just a title and description. Missing Open Graph tags, Twitter cards, and other SEO fundamentals that affect social sharing and search visibility.

## Requirements

Update the `metadata` export to include:

```typescript
export const metadata: Metadata = {
  title: "Fund44 — SBA Loans & Business Capital, Simplified",
  description:
    "Fund44 is a small business lending marketplace. Apply once and get matched with SBA 7(a), 504 loans, working capital, and lines of credit. 2,400+ businesses funded, $168M+ deployed.",
  keywords: [
    "SBA loan",
    "SBA 7a loan",
    "SBA 504 loan",
    "small business loan",
    "business line of credit",
    "working capital loan",
    "small business lending marketplace",
    "SBA loan application",
    "business funding",
  ],
  openGraph: {
    title: "Fund44 — SBA Loans & Business Capital, Simplified",
    description:
      "Apply once. Get matched with SBA lenders competing for your business. 2,400+ businesses funded.",
    url: "https://fund44.com",
    siteName: "Fund44",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fund44 — SBA Loans & Business Capital",
    description:
      "A lending marketplace where SBA lenders compete for your business. Apply once, compare offers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fund44.com",
  },
}
```

## Important
- Remove the `generator: "Next.js"` field — it serves no purpose and leaks technology info
- Do NOT change anything else in layout.tsx (font, body classes, etc.)
