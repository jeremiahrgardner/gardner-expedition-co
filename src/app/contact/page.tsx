import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ContactForm from '@/components/ContactForm'
import { metadataFor } from '@/lib/metadata'

export const metadata = metadataFor('/contact')

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="page-wrapper">
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>Contact</span>
          <h1>Get in touch</h1>
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            Questions about the frameworks, working together, or media requests. Send a note and we&apos;ll reply by email.
          </p>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
