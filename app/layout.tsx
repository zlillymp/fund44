import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Fund44 — SBA Loans & Business Capital, Simplified",
  description:
    "Fund44 helps small businesses secure SBA 7(a) and 504 loans, working capital, and lines of credit. Transparent process, real results, no surprises.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${outfit.variable} relative antialiased`}>{children}</body>
    </html>
  )
}
