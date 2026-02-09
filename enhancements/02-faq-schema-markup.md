# Enhancement: Add FAQ Schema Markup (JSON-LD) for SEO

## File to modify
`components/pro-blocks/landing-page/faq-sections/faq-section-2.tsx`

## Problem
The FAQ section has excellent Q&A content but no structured data markup. This means Google cannot display FAQ rich results in search, which is free SEO traffic. The data is already structured perfectly in the `faqs` array — we just need to output it as JSON-LD.

## Requirements

1. Add a `<script type="application/ld+json">` tag that outputs FAQPage schema using the existing `faqs` array data.

2. The JSON-LD should follow this exact schema format:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "question text here",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "answer text here"
      }
    }
  ]
}
```

3. Generate the `mainEntity` array dynamically from the existing `faqs` array so it stays in sync automatically.

4. Use Next.js `<Script>` component from `next/script` with `strategy="afterInteractive"` OR simply render it as a `<script>` tag with `dangerouslySetInnerHTML` inside the component's return JSX. Either approach works.

5. Place the script tag BEFORE the `<section>` element in the return statement, wrapping both in a fragment `<>...</>`.

## Important
- Do NOT modify the visual FAQ rendering at all
- Do NOT change the `faqs` array structure
- The JSON-LD must be valid — escape any special characters in the FAQ text properly using `JSON.stringify()`
