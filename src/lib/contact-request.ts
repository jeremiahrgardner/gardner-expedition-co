import { createHash, randomUUID } from 'node:crypto'
import type { RelayInquiry, RelayResult } from './contact-relay'

// Same flow on every site's contact form (except deadreckon.io):
// 1. save privately, 2. relay to the contact forms sheet (row + notification + confirmation).
// The visitor sees success when either step worked, so one outage never loses a message.

class InvalidForm extends Error {
  status: number
  constructor(message: string, status = 400) { super(message); this.status = status }
}

export type ContactDeps = {
  save: (contact: Record<string, string>, reference: string, submittedAt: string) => Promise<void>
  relay: (inquiry: RelayInquiry) => Promise<RelayResult>
}

const FALLBACK = 'Your message was not sent. Please try again or email j@jeremiahgardner.com.'

// Best-effort per-instance limiter; use a Vercel WAF rule for cross-instance limits.
const attempts = new Map<string, { count: number; expires: number }>()
function limit(email: string) {
  const now = Date.now()
  attempts.forEach((value, key) => { if (value.expires <= now) attempts.delete(key) })
  const key = createHash('sha256').update(email.toLowerCase()).digest('hex')
  const entry = attempts.get(key) || { count: 0, expires: now + 3_600_000 }
  if (entry.count >= 5 || attempts.size >= 10_000) throw new InvalidForm('Too many messages. Please try again later or email us.', 429)
  entry.count++
  attempts.set(key, entry)
}

async function read(request: Request) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) throw new InvalidForm('Please submit from this website.', 403)
  if (!request.headers.get('content-type')?.includes('application/json')) throw new InvalidForm('Expected JSON.', 415)
  const raw = await request.text()
  if (raw.length > 16_384) throw new InvalidForm('Your message is too long.', 413)
  let data: unknown
  try { data = JSON.parse(raw) } catch { throw new InvalidForm('Please check your details.') }
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new InvalidForm('Please complete the form.')
  const body = data as Record<string, unknown>
  if (body.website) throw new InvalidForm('Unable to submit this form.')
  return body
}

function field(body: Record<string, unknown>, key: string, max: number, required = false) {
  const value = body[key]
  if (value !== undefined && typeof value !== 'string') throw new InvalidForm(`Please check ${key}.`)
  const result = typeof value === 'string' ? value.trim() : ''
  if ((required && !result) || result.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(result)) throw new InvalidForm(`Please check ${key}.`)
  return result
}

export async function handleContact(request: Request, deps: ContactDeps) {
  try {
    const body = await read(request)
    const name = field(body, 'name', 120, true)
    const email = field(body, 'email', 254, true)
    if (!/^[^\s@<>"\\]+@[^\s@<>"\\]+\.[^\s@<>"\\]+$/.test(email)) throw new InvalidForm('Please enter a valid email address.')
    const organization = field(body, 'organization', 200)
    const topic = field(body, 'topic', 100) || 'General'
    const message = field(body, 'message', 5000, true)
    const sourcePath = field(body, 'sourcePath', 500) || '/contact'
    limit(email)

    const reference = randomUUID()
    const submittedAt = new Date().toISOString()
    const saved = await deps.save({ name, email, organization, topic, message, sourcePath }, reference, submittedAt)
      .then(() => true, () => { console.error('Contact storage failed', reference); return false })
    const relayed = await deps.relay({
      site: 'gardnerexpedition.co',
      reference, submittedAt, name, email,
      subject: `Gardner Expedition Co. inquiry: ${topic}`,
      fields: [
        ['Organization', organization || 'Not specified'], ['Topic', topic],
        ['Sent from', sourcePath], ['Message', message],
      ],
      confirmation: process.env.CONTACT_CONFIRMATION_ENABLED === 'false' ? undefined : {
        subject: 'We received your message',
        text: [
          `Hi ${name.split(/\s+/)[0]},`,
          '',
          'Thanks for reaching out to Gardner Expedition Co. Your message is in, and we will reply by email.',
          '',
          'Anything to add? Reply to this email.',
          '',
          'Gardner Expedition Co.',
          'gardnerexpedition.co',
        ].join('\n'),
        replyTo: process.env.CONTACT_REPLY_TO || 'j@jeremiahgardner.com',
        fromName: 'Gardner Expedition Co.',
      },
    }).then(result => {
      if (!result.notified) console.error('Contact relayed but notification email failed', reference)
      return true
    }, error => {
      // Never log form contents; the reference finds the saved copy.
      console.error('Contact relay failed', reference, error instanceof Error ? error.message : '')
      return false
    })

    if (!saved && !relayed) throw new Error('Contact not saved or relayed')
    return Response.json({ success: true, reference }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    if (error instanceof InvalidForm) return Response.json({ error: error.message }, { status: error.status })
    return Response.json({ error: FALLBACK }, { status: 503 })
  }
}
