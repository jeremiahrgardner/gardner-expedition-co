import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const expeditions = [
  {
    title: 'Roche Diabetes Care — Organizational Navigation',
    tag: 'Healthcare',
    year: '2022–Present',
    desc: 'A multi-year engagement navigating the intersection of culture, capability, and large-scale change in a global healthcare organization. The work centered on leadership development architecture, change resistance dynamics, and the intersection of Goldline™ diagnostics with team-level coaching interventions.',
    outcomes: [
      'Designed a leadership development program that reached 200+ leaders across 3 regions',
      'Developed a change readiness assessment protocol adopted organization-wide',
      'Built internal coaching capability through a train-the-coach program',
      'Facilitated the resolution of a multi-year organizational alignment crisis',
    ],
  },
  {
    title: 'Regional Health System — Capability Architecture',
    tag: 'Healthcare',
    year: '2021–2023',
    desc: 'Designing a leadership development architecture that could sustain growth across a rapidly expanding regional footprint. The challenge: a decentralized organizational structure that had been effective at small scale but was showing serious strain under expansion.',
    outcomes: [
      'Created a competency framework that became the foundation for all talent decisions',
      'Designed and delivered a senior leader cohort program across 8 facilities',
      'Built an internal coaching network of 24 trained peer coaches',
      'Established a feedback infrastructure that improved manager effectiveness scores by 34%',
    ],
  },
  {
    title: 'Manufacturing Enterprise — Exploration Culture',
    tag: 'Manufacturing',
    year: '2023',
    desc: 'A focused engagement with a precision manufacturing company facing technological disruption. The leadership team had identified the need to build a more exploration-oriented culture but did not have the internal language or architecture to make it operational.',
    outcomes: [
      'Introduced the Exploration Imperative™ framework as the organizing principle for strategic planning',
      'Designed an "uncertainty budget" process for the annual planning cycle',
      'Facilitated three off-site strategy sessions using field-grade exploration methods',
      'Developed a metrics framework that tracked learning behaviors, not just outcomes',
    ],
  },
]

export default function ExpeditionsPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="eyebrow">Applied Work</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              Expeditions
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75' }}>
              Organizational transformations and field engagements where the frameworks
              meet real-world complexity. Not case studies in the conventional sense —
              careful observations from sustained engagement with systems that
              were genuinely difficult to navigate.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75', marginTop: '1em' }}>
              These are written with the benefit of hindsight and the discipline of
              accuracy: what actually happened, what we understood too late,
              what we would do differently.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {expeditions.map(({ title, tag, year, desc, outcomes }) => (
              <div
                key={title}
                style={{
                  padding: 'var(--space-lg) 0',
                  borderBottom: '1px solid var(--soft-gray)',
                }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                  <span className="tag">{tag}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>{year}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: 'var(--space-sm)' }}>{title}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: '1.75', maxWidth: '72ch', marginBottom: 'var(--space-md)' }}>
                  {desc}
                </p>
                <div style={{ maxWidth: '56ch' }}>
                  <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--muted)' }}>Selected Outcomes</h4>
                  <ul style={{ paddingLeft: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {outcomes.map((o) => (
                      <li key={o} style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.6' }}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}