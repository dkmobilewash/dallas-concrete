import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service is not configured. Please call us at 214-239-0709.' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, phone, email, service, city, description } = body

        // Forward to Zapier webhook for lead tracking
        try {
                await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                                      ...body,
                                      website: 'Dallas Concrete',
                                      submittedAt: new Date().toISOString(),
                          }),
                });
        } catch (zapierError) {
                console.error('[Zapier Webhook Error]', zapierError);
        }

    if (!name || !phone || !email || !service || !city || !description) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    await resend.emails.send({
      from: `Dallas Concrete Solutions <${process.env.FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: process.env.CONTACT_EMAIL || 'info@dallasconcretesolutions.net',
      replyTo: email,
      subject: `New Estimate Request — ${service} in ${city}`,
      html: `
        <h2>New Estimate Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(service)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">City</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(city)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Description</td><td style="padding:8px;">${escapeHtml(description)}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please call us at 214-239-0709.' }, { status: 500 })
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
