"use client"

import { useState } from 'react'
import { HumanCheck, humanFields, resetHumanCheck } from './HumanCheck'
import styles from './ContactForm.module.css'
import { track } from '@/lib/posthog'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const TOPICS = ['Working together', 'Frameworks and diagnostics', 'Media or podcast', 'Something else']

// Posts to /api/contact, which saves the message and relays it to the shared
// contact forms sheet. Success is shown only after the server accepts it.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [reference, setReference] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending' || status === 'sent') return
    const data = Object.fromEntries(new FormData(event.currentTarget))
    setStatus('sending')
    setError('')
    try {
      const human = await humanFields()
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sourcePath: window.location.pathname, ...human }),
        signal: AbortSignal.timeout(30_000),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success !== true) {
        throw new Error(typeof result.error === 'string' ? result.error : 'Your message was not sent. Please try again.')
      }
      setReference(typeof result.reference === 'string' ? result.reference : '')
      setStatus('sent')
      try { track('contact_form_submit', { topic: String(data.topic || '') }) } catch {}
    } catch (err) {
      resetHumanCheck()
      setStatus('error')
      setError(err instanceof Error && err.name !== 'TimeoutError' ? err.message : 'The request timed out. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p className={styles.successHeading}>Your message has been sent.</p>
        <p className={styles.successText}>We&apos;ll reply by email. A confirmation is on its way to your inbox.</p>
        {reference && <p className={styles.successText}>Reference: {reference.slice(0, 8)}</p>}
      </div>
    )
  }

  const busy = status === 'sending'
  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={busy}>
      <div hidden aria-hidden="true">
        <label htmlFor="contact-website">Leave this empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className={styles.row}>
        <div>
          <label htmlFor="contact-name" className={styles.fieldLabel}>Name</label>
          <input id="contact-name" name="name" required maxLength={120} autoComplete="name" className={styles.input} readOnly={busy} />
        </div>
        <div>
          <label htmlFor="contact-email" className={styles.fieldLabel}>Email</label>
          <input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" className={styles.input} readOnly={busy} />
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <label htmlFor="contact-organization" className={styles.fieldLabel}>Organization <span className={styles.optional}>(optional)</span></label>
          <input id="contact-organization" name="organization" maxLength={200} autoComplete="organization" className={styles.input} readOnly={busy} />
        </div>
        <div>
          <label htmlFor="contact-topic" className={styles.fieldLabel}>Topic</label>
          <select id="contact-topic" name="topic" className={styles.input} disabled={busy} defaultValue={TOPICS[0]}>
            {TOPICS.map(topic => <option key={topic}>{topic}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className={styles.fieldLabel}>Message</label>
        <textarea id="contact-message" name="message" required maxLength={5000} rows={6} className={`${styles.input} ${styles.textarea}`} readOnly={busy} />
      </div>
      <HumanCheck />
      {status === 'error' && (
        <p className={styles.errorText} role="alert">
          {error} <a href="mailto:j@jeremiahgardner.com?subject=Gardner%20Expedition%20Co.%20inquiry">Email us instead</a>.
        </p>
      )}
      <button type="submit" className={styles.button} disabled={busy}>{busy ? 'Sending…' : 'Send message'}</button>
      <p className={styles.finePrint}>We use these details only to reply to you.</p>
    </form>
  )
}
