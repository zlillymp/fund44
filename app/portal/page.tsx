"use client"

import { useEffect } from "react"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { ShieldCheckIcon } from "@heroicons/react/24/outline"

export default function PortalPage() {
  useEffect(() => {
    if (document.getElementById("lendflow-bp-script")) return

    const script = document.createElement("script")
    script.id = "lendflow-bp-script"
    script.src =
      "https://borrower.lendflow.com/lfbp.js?token=borrower-platform-087ca54534ea43e69bf38795d3cc9ea1&branding=1483&borrowerPlatformTemplate=019a5ac5-3125-72e4-a711-16fbe53b43cd&target=lendflow-portal"
    script.defer = true
    document.body.appendChild(script)

    return () => {
      const existing = document.getElementById("lendflow-bp-script")
      if (existing) existing.remove()
    }
  }, [])

  return (
    <>
      <LpNavbar1 />
      <main className="bg-secondary/30 min-h-screen">
        <div className="container-padding-x container mx-auto py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="heading-lg text-foreground mb-3">Borrower Portal</h1>
            <p className="text-muted-foreground text-lg font-light">
              Track your application status, upload documents, and view your offers — all in one
              place.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <ShieldCheckIcon className="h-4 w-4 text-primary/70" />
              <span>Secure login · Bank-level encryption</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-background shadow-lg p-6 md:p-8 min-h-[700px]">
            <div id="lendflow-portal" style={{ minHeight: "600px" }} />
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  )
}
