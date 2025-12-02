import { Resend } from 'resend'

const resendKey = process.env.RESEND_API_KEY
if (!resendKey) {
  console.warn('⚠️ RESEND_API_KEY not found. Email features will be disabled.')
}

export const resend = resendKey ? new Resend(resendKey) : null

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@jengalabs.com'

export async function sendWelcomeEmail(
  email: string,
  name: string
) {
  if (!resend) {
    throw new Error('Resend is not configured')
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Welcome to Jengalabs!',
      html: `
        <h1>Welcome, ${name}!</h1>
        <p>Thank you for joining Jengalabs. We're excited to have you on board.</p>
        <p><a href="${process.env.NEXT_PUBLIC_APP_URL}">Get Started</a></p>
      `,
    })

    return result
  } catch (error) {
    console.error('Email sending error:', error)
    throw error
  }
}

export async function sendNewsletterEmail(
  email: string,
  subject: string,
  html: string
) {
  if (!resend) {
    throw new Error('Resend is not configured')
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject,
      html,
    })

    return result
  } catch (error) {
    console.error('Newsletter email error:', error)
    throw error
  }
}

export async function sendContactNotification(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  if (!resend) {
    throw new Error('Resend is not configured')
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: process.env.NEXT_PUBLIC_APP_URL || 'contact@jengalabs.com',
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return result
  } catch (error) {
    console.error('Contact notification error:', error)
    throw error
  }
}
