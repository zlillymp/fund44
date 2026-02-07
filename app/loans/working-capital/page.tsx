import { Metadata } from "next"
import { LoanDetailPage } from "@/components/pro-blocks/landing-page/loan-detail-page"

export const metadata: Metadata = {
  title: "Working Capital Loans — Fund44",
  description: "SBA-backed working capital solutions including Microloans, Community Advantage loans, and disaster assistance to keep your business running smoothly.",
}

export default function WorkingCapitalPage() {
  return (
    <LoanDetailPage
      title="Working Capital Solutions"
      subtitle="Keep Operations Moving"
      intro="Multiple SBA-backed programs designed to cover day-to-day business expenses — from payroll and inventory to seasonal fluctuations and growth opportunities. Options available for startups, underserved communities, and established businesses alike."
      keyFacts={[
        { label: "Microloan Max", value: "Up to $50K" },
        { label: "Community Adv. Max", value: "Up to $350K" },
        { label: "7(a) Working Capital", value: "Up to $5M" },
        { label: "Best For", value: "Day-to-day expenses" },
      ]}
      sections={[
        {
          title: "SBA Microloan Program",
          content: "The Microloan Program provides small-scale financing up to $50,000 (average loan around $13,000) through nonprofit, community-based intermediary lenders. Ideal for startups and newly established businesses, the program includes business training and technical assistance alongside the capital — making it a great fit for owners who need both funding and guidance.",
        },
        {
          title: "Microloan Use of Proceeds",
          content: [
            "Working capital for daily operations",
            "Inventory and supplies",
            "Furniture, fixtures, and equipment",
            "Machinery for production",
          ],
        },
        {
          title: "Community Advantage Loans",
          content: "The Community Advantage program provides up to $350,000 through mission-focused lenders, specifically targeting businesses in low-to-moderate income communities and those owned by women, veterans, and minorities. These loans are delivered by Community Advantage Small Business Lending Companies (CA SBLCs) that combine capital with management and technical assistance.",
        },
        {
          title: "SBA 7(a) for Working Capital",
          content: "For larger working capital needs, the standard SBA 7(a) program provides up to $5 million with terms up to 10 years. This is the most flexible option — funds can cover payroll, rent, utilities, inventory, marketing, and any other legitimate operating expense. Variable or fixed rates are available, negotiated between you and the lender.",
        },
        {
          title: "Disaster & Economic Injury Loans",
          content: [
            "Physical Disaster Loans — repair or replace damaged real estate and personal property",
            "Economic Injury Disaster Loans (EIDL) — working capital to meet obligations that could have been met without the disaster",
            "Military Reservist EIDL — covers operating expenses when an essential employee is called to active duty",
          ],
        },
      ]}
      eligibility={[
        "Must be a for-profit small business operating in the U.S.",
        "Meets the SBA's size standards for your industry",
        "Creditworthy with demonstrated ability to repay",
        "Microloans: cannot be used for real estate or to repay existing debts",
        "Community Advantage: focused on underserved markets and communities",
      ]}
    />
  )
}
