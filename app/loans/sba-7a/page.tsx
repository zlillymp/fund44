import { Metadata } from "next"
import { LoanDetailPage } from "@/components/pro-blocks/landing-page/loan-detail-page"

export const metadata: Metadata = {
  title: "SBA 7(a) Loans — Fund44",
  description: "The SBA's flagship loan program. Up to $5M for working capital, real estate, equipment, debt refinancing, or business acquisition with terms up to 25 years.",
}

export default function SBA7aPage() {
  return (
    <LoanDetailPage
      title="SBA 7(a) Loan Program"
      subtitle="Most Popular"
      intro="The SBA's flagship and most versatile lending program. Government-guaranteed loans for virtually any business purpose, helping entrepreneurs who might not qualify for conventional financing."
      keyFacts={[
        { label: "Max Loan Amount", value: "Up to $5M" },
        { label: "Maturity", value: "Up to 25 years" },
        { label: "SBA Guaranty", value: "Up to 85%" },
        { label: "Rate Type", value: "Fixed or Variable" },
      ]}
      sections={[
        {
          title: "What is a 7(a) Loan?",
          content: "The 7(a) loan is the SBA's primary program for helping small businesses obtain financing. The SBA doesn't lend money directly — it sets guidelines for loans made by partner lenders and guarantees a significant portion of the loan amount. This reduces risk for lenders and makes it easier for them to provide capital to small businesses. Lenders work with applicants to determine the most suitable loan type within the 7(a) framework.",
        },
        {
          title: "Use of Proceeds",
          content: [
            "Working capital — both short-term and long-term needs",
            "Real estate — acquiring, refinancing, or improving commercial real estate and buildings",
            "Equipment and machinery — purchasing and installing machinery, equipment, furniture, fixtures, and supplies",
            "Debt refinancing — refinancing existing business debt under better terms",
            "Business acquisition — funding a change of ownership, whether a complete or partial buyout",
          ],
        },
        {
          title: "Loan Terms & Rates",
          content: "Terms are negotiated between borrower and lender within SBA maximums. Working capital loans run up to 10 years; real estate up to 25 years. Interest rates can be fixed or variable, pegged to the prime rate plus a spread. For loans over $350K, the maximum variable rate is Prime + 3.0%. The SBA guarantees up to 85% for loans of $150K or less, and up to 75% for larger loans.",
        },
        {
          title: "Types of 7(a) Loans",
          content: [
            "Standard 7(a) — up to $5M, the most common and flexible option",
            "7(a) Small — up to $350K with a streamlined approval process",
            "SBA Express — up to $500K with accelerated approval times and 50% SBA guaranty",
            "Export Express — up to $500K for export activities with up to 90% guaranty",
            "Export Working Capital — up to $5M for financing export transactions",
            "International Trade — up to $5M for businesses expanding export capacity",
            "CAPLines — lines of credit for short-term and cyclical working capital needs",
          ],
        },
      ]}
      eligibility={[
        "Must operate as a for-profit business",
        "Located and operating within the United States or its territories",
        "Meets the SBA's size standards for its industry",
        "Does not fall into a category of ineligible businesses",
        "Creditworthy with a demonstrated ability to repay",
        "Unable to obtain credit on reasonable terms from non-governmental sources",
      ]}
    />
  )
}
