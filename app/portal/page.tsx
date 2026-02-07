import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { Shield } from "lucide-react"

export default function PortalPage() {
  const portalUrl = process.env.LENDFLOW_PORTAL_URL || ""

  return (
    <>
      <LpNavbar1 />
      <main className="bg-secondary/30 min-h-screen">
        <div className="container-padding-x container mx-auto py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="heading-lg text-foreground mb-3">Borrower Portal</h1>
            <p className="text-muted-foreground text-lg font-light">
              Track your application status, upload documents, and view your offers — all in one place.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary/70" />
              <span>Secure login · Bank-level encryption</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-background shadow-lg overflow-hidden">
            {portalUrl ? (
              <iframe
                src={portalUrl}
                width="100%"
                height="900"
                frameBorder="0"
                style={{ border: "none", minHeight: "700px" }}
                title="Fund44 Borrower Portal"
                allow="clipboard-write"
              />
            ) : (
              <div className="p-12 text-center text-muted-foreground">
                <p className="text-lg font-medium mb-2">Portal is being configured</p>
                <p className="text-sm font-light">
                  If you need to check your application status, please contact us at{" "}
                  <a href="mailto:support@fund44.com" className="text-primary underline">
                    support@fund44.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  )
}
