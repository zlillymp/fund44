"use client"

import { useEffect, useRef } from "react"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { ShieldCheckIcon } from "@heroicons/react/24/outline"

function LendflowWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any previous widget
    containerRef.current.innerHTML = ""

    // Create the widget container div
    const widgetDiv = document.createElement("div")
    widgetDiv.id = "container"
    widgetDiv.style.maxWidth = "550px"
    widgetDiv.style.minWidth = "300px"
    widgetDiv.style.margin = "0 auto"
    containerRef.current.appendChild(widgetDiv)

    // Load the LendFlow loader script
    const script = document.createElement("script")
    const widgetKey = process.env.NEXT_PUBLIC_LENDFLOW_WIDGET_KEY || ""
    script.src = `https://iw.lendflow.com/js/lendflow-loader.js?env=${widgetKey}`
    script.async = true
    containerRef.current.appendChild(script)

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [])

  return <div ref={containerRef} className="min-h-[600px]" />
}

export default function ApplyPage() {
  return (
    <>
      <LpNavbar1 />
      <main className="bg-secondary/30 min-h-screen">
        <div className="container-padding-x container mx-auto py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="heading-lg text-foreground mb-3">Complete Your Application</h1>
            <p className="text-muted-foreground text-lg font-light">
              Fill out the application below. Your information is encrypted and only shared with lenders you approve.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <ShieldCheckIcon className="h-4 w-4 text-primary/70" />
              <span>256-bit SSL encryption · Soft pull only</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-background shadow-lg overflow-hidden p-8">
            <LendflowWidget />
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  )
}
