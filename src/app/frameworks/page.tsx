import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const frameworks = [
  {
    href: '/frameworks/goldline',
    name: 'Goldline™',
    desc: 'A diagnostic framework for identifying the decision-making patterns that keep leaders and organizations stuck — and the pathway out.',
  },
  {
    href: '/frameworks/the-read',
    name: 'The Read',
    desc: 'A methodology for developing superior situational awareness: reading rooms, systems, dynamics, and signals with greater accuracy.',
  },
  {
    href: '/frameworks/cavey-growth',
    name: 'CAVE Growth System™',
    desc: 'Counter-Adaptive Growth — a structured approach to navigating organizational change when the environment actively resists it.',
  },
  {
    href: '/frameworks/exploration-imperative',
    name: 'Exploration Imperative™',
    desc: 'A strategic principle for building organizational cultures that treat uncertainty as a design condition, not a problem to solve.',
  },
  {
    href: '/frameworks/coaching-metaskills',
    name: 'Coaching Metaskills™',
    desc: 'The underlying capabilities that make coaching conversations transformational — not just competent.',
  },
]

export default function FrameworksPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
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
              The ecosystem is designed to be coherent: frameworks reinforce each other,
              diagnostics reveal where to apply them, and field notes document the patterns
              that do not fit neatly into any single framework but are worth knowing.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="framework-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {frameworks.map(({ href, name, desc }) => (
                <Link key={href} href={href} className="framework-card">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <span className="arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}