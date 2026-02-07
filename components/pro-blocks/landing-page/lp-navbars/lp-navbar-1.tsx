"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const MENU_ITEMS = [
  { label: "Loan Programs", href: "#programs" },
  { label: "How It Works", href: "#process" },
  { label: "Why Fund44", href: "#why" },
  { label: "FAQ", href: "#faq" },
] as const

interface NavMenuItemsProps {
  className?: string
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto text-foreground/70 hover:text-foreground">
          {label}
        </Button>
      </Link>
    ))}
  </div>
)

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="bg-background/80 backdrop-blur-lg sticky top-0 isolate z-50 border-b border-border/50 py-3 md:py-3.5">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-foreground">Fund<span className="text-amber">44</span></span>
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div className="hidden w-full flex-row justify-end gap-4 md:flex items-center">
          <NavMenuItems />
          <Link href="#eligibility">
            <Button className="shadow-sm bg-primary hover:bg-primary/90 px-5">
              Check Eligibility
            </Button>
          </Link>
        </div>

        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-4 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#eligibility">
              <Button className="w-full shadow-sm">Check Eligibility</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
