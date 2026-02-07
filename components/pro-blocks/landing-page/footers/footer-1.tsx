"use client"

import { Logo } from "@/components/pro-blocks/logo"
import { Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer1() {
  return (
    <footer className="bg-primary/[0.03] border-t border-border/50 pt-14 pb-8">
      <div className="container-padding-x container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Logo />
              <span className="text-lg font-bold tracking-tight">Fund<span className="text-amber">44</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-light">
              A business funding advocate helping small businesses access SBA loans and lines of credit with transparency and integrity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/70">Loan Programs</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>
                <Link href="#programs" className="hover:text-foreground transition-colors">
                  SBA 7(a) Loans
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-foreground transition-colors">
                  SBA 504 Loans
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-foreground transition-colors">
                  Working Capital
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-foreground transition-colors">
                  Lines of Credit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/70">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>
                <Link href="#why" className="hover:text-foreground transition-colors">
                  About Fund44
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/70">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
          <p>&copy; {new Date().getFullYear()} Fund44. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/70 max-w-md text-center md:text-right">
            Fund44 is not a lender. We connect businesses with SBA-approved lending partners. All loan decisions are made by the lending institutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
