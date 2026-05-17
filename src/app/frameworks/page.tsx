import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const frameworks = [
  {
    href: '/frameworks/goldline',
    name: 'Goldline™',
    subtitle: 'Find the center that lets you explore.',
    desc: 'A personal clarity and alignment framework for identifying your central contribution, building the systems that support it, and navigating growth without losing your center.',
  },
  {
    href: '/frameworks/the-read',
    name: 'The Read™',
    subtitle: 'See what the moment is really telling you.',
    desc: 'A diagnostic leadership framework for observing beneath the surface, separating symptoms from signals, and choosing the intervention the moment actually needs.',
  },
  {
    href: '/frameworks/cave-growth',
    name: 'CAVE Growth System™',
    subtitle: 'Navigate growth when the path is not yet visible.',
    desc: 'An organizational growth system that helps teams surface assumptions, learn from customers, run rapid experiments, and make evidence-based decisions under uncertainty.',
  },
  {
    href: '/frameworks/the-search',
    name: 'The Search System™',
    subtitle: 'Make exploration a permanent enterprise function.',
    desc: 'An operating model for organizations that need to continuously discover, validate, and invest in new opportunities alongside the work of execution.',
  },
  {
    href: '/frameworks/coaching-metaskills',
    name: 'Coaching Metaskills™',
    subtitle: 'Build the human capability to lead through uncertainty.',
    desc: 'A capability-building system for leaders and coaches who need to observe clearly, diagnose accurately, intervene deliberately, and help teams learn from evidence.',
  },
  {
    href: '/frameworks/progress-metrics',
    name: 'Progress Metrics™',
    subtitle: 'Measure evidence before certainty arrives.',
    desc: 'A measurement system for tracking learning, confidence, and opportunity progress before traditional business metrics are available.',
  },
  {
    href: '/frameworks/program-as-product',
    name: 'Program as a Product™',
    subtitle: 'Build transformation systems that evolve.',
    desc: 'A change philosophy that treats organizational programs as evolving products shaped by stakeholder insight, adoption patterns, experimentation, and evidence.',
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
              The ecosystem is designed to be coherent. Frameworks reinforce each other:
              from personal clarity to diagnostic leadership, team capability,
              organizational growth, and enterprise exploration.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="framework-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {frameworks.map(({ href, name, subtitle, desc }) => (
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

        <SiteFooter />
      </div>
    </>
  )
}