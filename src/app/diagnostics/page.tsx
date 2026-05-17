import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const diagnostics = [
  {
    name: 'Goldline Clarity Snapshot™',
    href: '#',
    desc: 'A short assessment that helps high performers identify where they are losing alignment across Trace, Anchor, and Navigate. Available in pilot form.',
    availability: 'Pilot',
  },
  {
    name: 'Uncertainty Readiness Diagnostic™',
    href: '#',
    desc: 'An organizational diagnostic that helps leaders assess whether their teams have the clarity, behaviors, evidence practices, and decision systems needed to operate in uncertainty.',
    availability: 'In Development',
  },
  {
    name: 'The Read Diagnostic',
    href: '#',
    desc: 'A pilot tool for helping leaders identify what they are seeing, what may be driving it, and what the moment actually needs.',
    availability: 'Available by Request',
  },
]

export default function DiagnosticsPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="eyebrow">Diagnostics & Assessments</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              Diagnostics
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75' }}>
              Gardner Expedition Co. develops diagnostics that help leaders and
              organizations make uncertainty visible. Some tools are available
              in pilot form; others are under active development.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75', marginTop: '1em' }}>
              Not BuzzFeed quizzes. Not marketing lead magnets. Genuine diagnostic
              instruments with interpretive frameworks attached.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="diag-grid">
              {diagnostics.map(({ name, href, desc, availability }) => (
                <div key={name} className="diag-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--space-sm)' }}>
                    <h3>{name}</h3>
                    <span className="tag" style={{ fontSize: '0.65rem' }}>{availability}</span>
                  </div>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--paper)', marginBottom: 'var(--space-md)' }}>
              Want a guided diagnostic experience?
            </h2>
            <p style={{ color: '#999', maxWidth: '48ch', margin: '0 auto var(--space-md)' }}>
              Diagnostics are most powerful when paired with a coaching
              engagement — someone who can help read the results and
              translate them into an action arc.
            </p>
            <Link href="/about" className="btn-primary" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
              Get in Touch
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}