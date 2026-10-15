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
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email_address: email,
          first_name: firstName,
          last_name: lastName,
          tags: [`source:${source}`],
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || `Subscription failed (${res.status})`)
      }

      setFormState('success')
      track('form_success', { placement: source })
      setFirstName('')
      setLastName('')
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
          <p className={styles.successHeading}>You&apos;re in.</p>
          <p className={styles.successText}>
            Watch for Field Notes in your inbox. No spam, ever.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-busy={formState === 'loading'} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${source}-fn`} className={styles.fieldLabel}>
                First name
              </label>
              <input
                id={`${source}-fn`}
                type="text"
                name="first_name"
                autoComplete="given-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={formState === 'loading'}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${source}-ln`} className={styles.fieldLabel}>
                Last name
              </label>
              <input
                id={`${source}-ln`}
                type="text"
                name="last_name"
                autoComplete="family-name"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                disabled={formState === 'loading'}
                className={styles.input}
              />
            </div>
          </div>

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