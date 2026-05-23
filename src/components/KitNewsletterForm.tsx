"use client"

import { useState } from 'react'
import styles from './KitNewsletterForm.module.css'

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
      setFirstName('')
      setLastName('')
      setEmail('')
    } catch (err) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.label}>{label}</div>

      {formState === 'success' ? (
        <div className={styles.success}>
          <p className={styles.successHeading}>You&apos;re in.</p>
          <p className={styles.successText}>
            Watch for Field Notes in your inbox. No spam, ever.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${source}-fn`} className={styles.srOnly}>
                First name
              </label>
              <input
                id={`${source}-fn`}
                type="text"
                name="first_name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={formState === 'loading'}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${source}-ln`} className={styles.srOnly}>
                Last name
              </label>
              <input
                id={`${source}-ln`}
                type="text"
                name="last_name"
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
            <label htmlFor={`${source}-email`} className={styles.srOnly}>
              Email address
            </label>
            <input
              id={`${source}-email`}
              type="email"
              name="email_address"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={formState === 'loading'}
              className={styles.input}
            />
          </div>

          {formState === 'error' && errorMessage && (
            <p className={styles.errorText}>{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={formState === 'loading'}
            className={styles.button}
          >
            {formState === 'loading' ? 'Subscribing…' : 'Join Field Notes'}
          </button>

          <p className={styles.finePrint}>No spam. Unsubscribe anytime.</p>
        </form>
      )}
    </div>
  )
}