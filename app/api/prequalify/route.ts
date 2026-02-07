import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      businessName,
      contactName,
      email,
      phone,
      timeInBusiness,
      monthlyRevenue,
      creditScore,
      requestedAmount,
      loanPurpose,
    } = body

    // 1. Create HubSpot contact + deal (non-blocking — don't fail the request if HubSpot errors)
    const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN
    if (hubspotToken) {
      try {
        const contactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${hubspotToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            properties: {
              email,
              firstname: contactName?.split(" ")[0] || "",
              lastname: contactName?.split(" ").slice(1).join(" ") || "",
              phone,
              company: businessName,
              hs_lead_status: "NEW",
              lifecyclestage: "lead",
            },
          }),
        })

        let contactId: string | null = null
        if (contactRes.ok) {
          const contactData = await contactRes.json()
          contactId = contactData.id
        } else if (contactRes.status === 409) {
          const conflict = await contactRes.json()
          contactId = conflict?.message?.match(/ID: (\d+)/)?.[1] || null
        }

        if (contactId) {
          await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${hubspotToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              properties: {
                dealname: `${businessName} — Pre-Qualification`,
                pipeline: "default",
                dealstage: "appointmentscheduled",
                amount: String(requestedAmount),
                description: `Loan Purpose: ${loanPurpose}\nTime in Business: ${timeInBusiness}\nMonthly Revenue: ${monthlyRevenue}\nCredit Score: ${creditScore}`,
              },
              associations: [
                {
                  to: { id: contactId },
                  types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }],
                },
              ],
            }),
          })
        }
      } catch (hubspotErr) {
        console.error("HubSpot error (non-blocking):", hubspotErr)
      }
    }

    // 2. Call LendFlow pre-qualification
    const lendflowKey = process.env.LENDFLOW_API_KEY
    if (!lendflowKey) {
      return NextResponse.json({ error: "LendFlow API key not configured" }, { status: 500 })
    }

    const lendflowRes = await fetch("https://api.lendflow.com/api/v2/prequalification", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lendflowKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time_in_business: timeInBusiness,
        monthly_avg_revenue: monthlyRevenue,
        credit_score: creditScore,
        requested_amount: Number(requestedAmount),
        currency: "USD",
      }),
    })

    if (!lendflowRes.ok) {
      const errText = await lendflowRes.text()
      console.error("LendFlow pre-qual error:", lendflowRes.status, errText)
      return NextResponse.json(
        { error: "Pre-qualification request failed", details: errText },
        { status: lendflowRes.status }
      )
    }

    const lendflowData = await lendflowRes.json()

    return NextResponse.json({
      success: true,
      prequalification: lendflowData.data,
    })
  } catch (err) {
    console.error("Pre-qualification API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
