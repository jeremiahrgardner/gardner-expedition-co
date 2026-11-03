"use client"

import { useState } from 'react'
import styles from './KitNewsletterForm.module.css'
import { track } from '@/lib/posthog'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface KitNewsletterFormProps {
  source: string
  label?: string
  heading?: string
  subtext?: string
  className?: string
  formId?: string
}

const FORM_ID = '7437813'

export default function KitNewsletterForm({
  source,
  label = 'Field Notes',
  heading = 'Get Field Notes in Your Inbox',
  subtext = 'Raw insights on perception, decision-making, and the patterns that shape how leaders see.',
  className = '',
  formId = FORM_ID,
}: KitNewsletterFormProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [verificationUrl, setVerificationUrl] = useState<string>()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      // Kit's public form endpoint only accepts the same multipart fields its
      // official embed sends. A JSON body is answered with an HTML page and a
      // 200, so nothing is saved; always check the JSON `status` it returns.
      const payload = new FormData()
      payload.set('email_address', email.trim())
      payload.set('fields[first_name]', firstName.trim())
      // Attribution: which site, placement and page this signup came from.
      payload.set('fields[signup_source]', `gardnerexpedition.co:${source}`)
      payload.set('fields[signup_page]', window.location.pathname)
      payload.set('referrer', document.referrer)
      payload.set('host', window.location.href)
      payload.set('ckjs_version', '6')
      const res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'X-CKJS-Version': '6' },
        body: payload,
        signal: AbortSignal.timeout(15_000),
      })
      const data = await res.json().catch(() => null) as { status?: string; url?: string; errors?: { messages?: string[] } } | null
      if (!res.ok || !data || (data.status !== 'success' && data.status !== 'quarantined')) {
        throw new Error(data?.errors?.messages?.[0] || 'We could not subscribe you. Please check your email and try again.')
      }

      // Kit's bot guard can quarantine a signup until the reader passes a check
      // on Kit's site. Without that step the subscriber is never created.
      if (data.status === 'quarantined') {
        const url = data.url ? new URL(data.url) : undefined
        if (!url || url.protocol !== 'https:' || !['app.kit.com', 'app.convertkit.com'].includes(url.hostname)) throw new Error('Please try signing up again.')
        setVerificationUrl(url.href)
        track('form_quarantined', { placement: source })
      } else {
        track('form_success', { placement: source })
      }
      setFormState('success')
      setFirstName('')
      setEmail('')
    } catch (err) {
      setFormState('error')
      track('form_error', { placement: source })
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.label}>{label}</div>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subtext}>{subtext}</p>

      {formState === 'success' ? (
        <div className={styles.success} role="status" aria-live="polite">
          {verificationUrl ? (
            <p className={styles.successText}>
              One more step: <a href={verificationUrl}>complete your signup verification</a>.
            </p>
          ) : (
            <>
              <p className={styles.successHeading}>You&apos;re in.</p>
              <p className={styles.successText}>
                Check your inbox to confirm your subscription. If you don&apos;t see the email, check your spam folder.
              </p>
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-busy={formState === 'loading'} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${source}-email`} className={styles.fieldLabel}>
                Email address
              </label>
              <input
                id={`${source}-email`}
                type="email"
                name="email_address"
                autoComplete="email"
                aria-describedby={`${source}-privacy`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={formState === 'loading'}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${source}-fn`} className={styles.fieldLabel}>
                First name <span className={styles.optional}>(optional)</span>
              </label>
              <input
                id={`${source}-fn`}
                type="text"
                name="first_name"
                autoComplete="given-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={formState === 'loading'}
                className={styles.input}
              />
            </div>
          </div>

          {formState === 'error' && errorMessage && (
            <p className={styles.errorText} role="alert">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={formState === 'loading'}
            className={styles.button}
          >
            {formState === 'loading' ? 'Subscribing…' : 'Join Field Notes'}
          </button>

          <p id={`${source}-privacy`} className={styles.finePrint}>No spam. Unsubscribe anytime.</p>
        </form>
      )}
    </div>
  )
}