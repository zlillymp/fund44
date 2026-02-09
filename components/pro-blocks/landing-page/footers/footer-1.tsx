"use client"

import Link from "next/link"

export function Footer1() {
  return (
    <footer className="bg-primary/[0.03] border-t border-border/50 pt-14 pb-8">
      <div className="container-padding-x container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-5">
              <span className="text-xl font-bold tracking-tight">Fund<span className="text-amber">44</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-light">
              A small business lending marketplace. Apply once, get matched with SBA-approved lenders, and compare offers — all in one place.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
            Fund44 is not a lender or broker. Our marketplace connects businesses with SBA-approved lending partners. All loan decisions are made by the lending institutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
