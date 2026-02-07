import { Metadata } from "next"
import { LoanDetailPage } from "@/components/pro-blocks/landing-page/loan-detail-page"

export const metadata: Metadata = {
  title: "Business Lines of Credit — Fund44",
  description: "SBA CAPLines and export credit programs. Draw funds as needed for seasonal fluctuations, contracts, construction, and international trade.",
}

export default function LinesOfCreditPage() {
  return (
    <LoanDetailPage
      title="Business Lines of Credit"
      subtitle="Revolving Capital"
      intro="SBA CAPLines provide revolving lines of credit up to $5 million to help businesses manage short-term and cyclical working capital needs. Draw funds as needed, repay, and draw again — perfect for seasonal businesses, contractors, and exporters."
      keyFacts={[
        { label: "Max Credit Line", value: "Up to $5M" },
        { label: "Export Express", value: "Up to $500K" },
        { label: "SBA Guaranty", value: "Up to 90%" },
        { label: "Best For", value: "Cyclical needs" },
      ]}
      sections={[
        {
          title: "SBA CAPLines Program",
          content: "CAPLines are a subset of the 7(a) program, providing lines of credit specifically designed for short-term and cyclical working capital needs. Unlike term loans, these revolving credit lines let you draw funds as you need them and replenish as you repay — you only pay interest on what you use.",
        },
        {
          title: "Types of CAPLines",
          content: [
            "Seasonal CAPLine — for businesses with seasonal inventory and accounts receivable fluctuations",
            "Contract CAPLine — finances direct labor and material costs of specific contracts",
            "Builders CAPLine — for small general contractors or builders financing construction or renovation",
            "Working Capital CAPLine — a general revolving line of credit for short-term working capital",
          ],
        },
        {
          title: "Export Credit Programs",
          content: "The SBA offers specialized lines of credit for businesses engaged in international trade, with higher guaranty rates to offset the additional risk of global commerce.",
        },
        {
          title: "Export Program Details",
          content: [
            "Export Express — up to $500K with accelerated turnaround and up to 90% SBA guaranty",
            "Export Working Capital (EWCP) — up to $5M to finance export transactions from purchase order to collection",
            "International Trade — up to $5M for businesses expanding export capacity or affected by import competition",
          ],
        },
        {
          title: "Surety Bond Guarantee Program",
          content: "Not a loan, but worth knowing about — the SBA guarantees 80–90% of a surety company's loss if a contractor defaults. This helps small contractors who couldn't otherwise secure surety bonds to bid on and win contracts. It's a vital tool for construction and service businesses pursuing government or large commercial contracts.",
        },
      ]}
      eligibility={[
        "Must be a for-profit small business operating in the U.S.",
        "Meets the SBA's size standards for your industry",
        "Creditworthy with demonstrated ability to repay",
        "Export programs: must be engaged in or developing export activities",
        "Builders CAPLine: must be a licensed general contractor or builder",
      ]}
    />
  )
}
