import { Metadata } from "next"
import { LoanDetailPage } from "@/components/pro-blocks/landing-page/loan-detail-page"

export const metadata: Metadata = {
  title: "SBA 504 Loans — Fund44",
  description: "Long-term, fixed-rate financing for commercial real estate, heavy equipment, and large-scale expansion. Low down payments with terms up to 25 years.",
}

export default function SBA504Page() {
  return (
    <LoanDetailPage
      title="SBA 504 Loan Program"
      subtitle="Fixed-Rate Financing"
      intro="Long-term, fixed-rate financing for major fixed assets like commercial real estate and heavy machinery. Delivered through a unique three-way partnership that keeps down payments low and rates locked in."
      keyFacts={[
        { label: "Max Loan Amount", value: "Up to $5.5M" },
        { label: "Maturity", value: "10, 20, or 25 years" },
        { label: "SBA Guaranty", value: "100% (CDC portion)" },
        { label: "Down Payment", value: "As low as 10%" },
      ]}
      sections={[
        {
          title: "The 504 Loan Structure",
          content: "The 504 loan divides project costs among three parties: a private-sector lender (bank or credit union) covers 50% as the senior mortgage, a Certified Development Company (CDC) provides up to 40% backed by a 100% SBA-guaranteed debenture, and the business owner contributes a minimum 10% down payment. This structure means lower down payments and a fixed rate on the CDC portion for the life of the loan.",
        },
        {
          title: "Use of Proceeds",
          content: [
            "Purchasing existing buildings or land",
            "Constructing new facilities or modernizing existing ones",
            "Acquiring long-term machinery and equipment (minimum 10-year useful life)",
            "Improving land, streets, utilities, and parking lots",
          ],
        },
        {
          title: "What 504 Loans Cannot Be Used For",
          content: "504 loans are restricted to fixed assets. They cannot be used for working capital, inventory, consolidating debt (unless part of a larger real estate acquisition), or investing in rental real estate.",
        },
        {
          title: "Loan Terms & Rates",
          content: "The CDC/SBA portion carries a fixed interest rate for the life of the loan, pegged to an increment above the current market rate for 10-year U.S. Treasury issues. The private lender's portion has its own separate rate and terms. Fees on the CDC/SBA portion total approximately 3% of the debenture amount and can often be financed with the loan.",
        },
        {
          title: "Down Payment Details",
          content: [
            "Standard: 10% minimum from the borrower",
            "New businesses (less than 2 years): 15% minimum",
            "Single-purpose properties (hotels, gas stations, etc.): 15% minimum",
            "New business AND single-purpose property: 20% minimum",
          ],
        },
      ]}
      eligibility={[
        "Must be a for-profit business operating in the United States",
        "Tangible net worth less than $20 million",
        "Average net income less than $6.5 million (after taxes, preceding two years)",
        "Project must meet a job creation or public policy goal (typically 1 job per $75K of SBA loan)",
        "Alternative goals related to community development or energy efficiency may also qualify",
      ]}
    />
  )
}
