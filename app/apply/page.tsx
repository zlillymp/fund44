import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"
import { Shield } from "lucide-react"

export default function ApplyPage() {
  const clientId = process.env.LENDFLOW_CLIENT_ID || ""
  const workflowId = process.env.LENDFLOW_WORKFLOW_ID || ""

  const iframeSrc = clientId && workflowId
    ? `https://app.lendflow.com/applications/new?client_id=${clientId}&workflow_id=${workflowId}`
    : ""

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
              <Shield className="h-4 w-4 text-primary/70" />
              <span>256-bit SSL encryption · Soft pull only</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-background shadow-lg overflow-hidden">
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                width="100%"
                height="800"
                frameBorder="0"
                style={{ border: "none", minHeight: "600px" }}
                title="Fund44 Loan Application"
                allow="clipboard-write"
              />
            ) : (
              <div className="p-12 text-center text-muted-foreground">
                <p className="text-lg font-medium mb-2">Application form loading...</p>
                <p className="text-sm font-light">
                  If this persists, please contact us at{" "}
                  <a href="mailto:apply@fund44.com" className="text-primary underline">
                    apply@fund44.com
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
