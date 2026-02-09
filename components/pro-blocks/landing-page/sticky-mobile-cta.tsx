"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false)
  const isEligibilityInViewRef = useRef(false)

  useEffect(() => {
    // Scroll listener to show/hide based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const shouldShow = scrollY > 500 && !isEligibilityInViewRef.current
      setIsVisible(shouldShow)
    }

    // IntersectionObserver to detect when #eligibility section is in viewport
    const eligibilitySection = document.getElementById("eligibility")
    if (eligibilitySection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isEligibilityInViewRef.current = entry.isIntersecting
            // Update visibility when eligibility section visibility changes
            const scrollY = window.scrollY || window.pageYOffset
            setIsVisible(scrollY > 500 && !entry.isIntersecting)
          })
        },
        {
          threshold: 0.1, // Trigger when 10% of the section is visible
          rootMargin: "-50px 0px", // Add some margin to trigger slightly before fully in view
        }
      )

      observer.observe(eligibilitySection)

      // Initial check
      handleScroll()

      window.addEventListener("scroll", handleScroll, { passive: true })

      return () => {
        observer.disconnect()
        window.removeEventListener("scroll", handleScroll)
      }
    } else {
      // Fallback if section not found - just use scroll listener
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden",
        "bg-background/95 backdrop-blur-sm border-t border-border shadow-lg",
        "px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        "transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-foreground whitespace-nowrap">
          Ready to get funded?
        </p>
        <Button
          size="sm"
          className="shrink-0 shadow-sm"
          asChild
        >
          <Link href="/#eligibility">Check Eligibility</Link>
        </Button>
      </div>
    </div>
  )
}
