"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

const faqs = [
  {
    question: "What is Fund44?",
    answer:
      "Fund44 is a small business lending marketplace. When you apply, our platform automatically matches you with SBA loan programs and lenders that fit your business. You can compare offers, review terms, and track your application — all through your secure portal. We are not a lender or broker.",
  },
  {
    question: "What are the basic requirements for an SBA loan?",
    answer:
      "Requirements vary by program, but most SBA loans require your business to be a for-profit entity operating in the U.S., with a reasonable credit history and demonstrated ability to repay. Some programs have minimum time-in-business or revenue requirements. The best way to find out if you qualify is to complete our free eligibility check.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Timelines vary depending on the loan type and your documentation readiness. SBA 7(a) loans typically take 2–6 weeks from application to funding. SBA 504 loans can take longer due to the two-lender structure. We'll give you a realistic timeline upfront based on your specific situation — no inflated promises.",
  },
  {
    question: "Does Fund44 charge fees?",
    answer:
      "We do not charge upfront application fees. Our compensation comes through the lending process, and any fees are disclosed transparently before you commit to anything. You'll never be surprised by hidden costs.",
  },
  {
    question: "Will applying affect my credit score?",
    answer:
      "Our initial eligibility check uses a soft pull that does not impact your credit score. A hard credit inquiry only occurs when you formally apply with a specific lender, and we'll always let you know before that happens.",
  },
  {
    question: "What can I use the loan funds for?",
    answer:
      "SBA loan funds can be used for most legitimate business purposes: working capital, equipment purchases, commercial real estate, inventory, hiring, debt refinancing, and business acquisition. Specific uses depend on the loan program — our platform will match you with the right one.",
  },
  {
    question: "What if I don't qualify?",
    answer:
      "If you don't qualify for an SBA loan right now, we'll tell you honestly and explain what would need to change. We don't push products that aren't a good fit. In some cases, we can suggest steps to improve your eligibility for a future application.",
  },
]

export function FaqSection2() {
  return (
    <section id="faq" className="section-padding-y bg-secondary/40 border-y border-border/50">
      <div className="container-padding-x container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Tagline>FAQ</Tagline>
          <h2 className="heading-lg mb-4 text-foreground">Common questions</h2>
          <p className="text-lg text-muted-foreground font-light">
            Straightforward answers about SBA loans and how Fund44 works.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl bg-background px-6 shadow-xs data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed font-light">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
