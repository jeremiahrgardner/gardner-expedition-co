import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const diagnostics = [
  {
    name: 'Goldline™ Assessment',
    href: '#',
    desc: 'A comprehensive diagnostic for identifying the decision-making patterns that keep leaders and organizations stuck. 30–45 minute self-assessment with detailed interpretive report.',
    availability: 'Available',
  },
  {
    name: 'Uncertainty Readiness Index',
    href: '#',
    desc: 'Evaluates an organization\'s or leader\'s capacity to operate effectively in ambiguous conditions — not just tolerance, but genuine navigational skill.',
    availability: 'In Development',
  },
  {
    name: 'The Read — Situational Awareness Scale',
    href: '#',
    desc: 'Assesses the accuracy of a leader\'s situational perception against calibrated benchmarks. Identifies systematic perceptual biases that operate below conscious awareness.',
    availability: 'In Development',
  },
  {
    name: 'CAVE Environment Diagnostic',
    href: '#',
    desc: 'Maps the specific resistance patterns in an organizational system and identifies the structural sources of counter-adaptive behavior.',
    availability: 'Available via Engagement',
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
              Structured insight into decision-making patterns, organizational friction,
              and growth constraints — built for leaders who want accuracy before action.
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
                  {availability === 'Available' && (
                    <div style={{ marginTop: 'var(--space-md)' }}>
                      <Link href={href} className="btn-primary" style={{ fontSize: '0.75rem', padding: '10px 20px' }}>
                        Begin Assessment
                      </Link>
                    </div>
                  )}
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
              The Goldline™ Assessment is most powerful when paired with a coaching
              engagement — someone who can help you read the results accurately
              and translate them into an action arc.
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