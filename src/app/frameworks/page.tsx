import StructuredData from '@/components/StructuredData'
import { frameworkTermSet } from '@/lib/structured-data'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

import { frameworks } from '@/lib/frameworks'

import { metadataFor } from '@/lib/metadata'

export const metadata = metadataFor('/frameworks')

export default function FrameworksPage() {
  return (
    <>
      <StructuredData data={frameworkTermSet()} />
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="page-wrapper">
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="eyebrow">Intellectual Backbone</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              Frameworks
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75' }}>
              Each framework in this ecosystem was built through years of field engagement —
              applied in organizations, tested against complexity, refined through evidence.
              They are not theories. They are navigational architecture.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75', marginTop: '1em' }}>
              The ecosystem is designed to be coherent. Frameworks reinforce each other:
              from personal clarity to diagnostic leadership, team capability,
              organizational growth, and enterprise exploration.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="framework-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
              {frameworks.filter(framework => framework.showInIndex !== false).map(({ href, name, subtitle, desc }) => (
                <Link key={href} href={href} className="framework-card">
                  <h3>{name}</h3>
                  <p className="framework-subtitle">{subtitle}</p>
                  <p>{desc}</p>
                  <span className="arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}