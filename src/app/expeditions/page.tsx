import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const expeditions = [
  {
    title: 'Roche Diabetes Care — Organizational Navigation',
    tag: 'Healthcare',
    year: '2022–Present',
    desc: 'A multi-year engagement navigating culture, capability, and large-scale change in a global healthcare organization. The work established a unified innovation practice grounded in customer insight, built capability in platform discovery and rapid experimentation, and created the conditions for sustained organizational learning.',
    whatChanged: [
      'Unified innovation practice established across three regional organizations',
      'Platform discovery capability built from the ground up — from customer insight through to scaled initiatives',
      'Rapid experimentation discipline introduced and embedded across leadership teams',
      '$50M in new NPV identified and accelerated through evidence-based portfolio decisions',
      '10x portfolio growth in new opportunity areas over three years',
    ],
    whatWeExplored: 'How a large healthcare organization could build genuine exploration capability alongside execution — without turning it into a separate innovation theater. The challenge was making exploration feel like work, not a特别好 project.',
    whatWeLearned: 'The most important intervention was not the methodology. It was the language. Organizations cannot build what they cannot name. Before the frameworks could work, the team needed a new vocabulary for uncertain work.',
  },
  {
    title: 'Regional Health System — Capability Architecture',
    tag: 'Healthcare',
    year: '2021–2023',
    desc: 'Designing a leadership development architecture that could sustain growth across a rapidly expanding regional footprint. The challenge: a decentralized structure that had been effective at small scale but showed serious strain under expansion.',
    whatChanged: [
      'Competency framework became the foundation for all talent decisions across eight facilities',
      'Senior leader cohort program delivered across eight facilities simultaneously',
      'Internal coaching network of 24 trained peer coaches established and embedded',
      'Manager effectiveness scores improved 34% through structured feedback infrastructure',
    ],
    whatWeExplored: 'How to build leadership capability at scale without turning it into a compliance exercise. The work had to feel like development, not training.',
    whatWeLearned: 'When you give managers a feedback infrastructure instead of a training curriculum, they build their own development practices. The system had to be designed for emergence, not control.',
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
              Applied bodies of work where Gardner Expedition Co. helps leaders
              and organizations navigate uncertainty in the field — through
              customer insight, experimentation, evidence, coaching, and
              capability building.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75', marginTop: '1em' }}>
              Not case studies in the conventional sense. Careful observations
              from sustained engagement with systems that were genuinely
              difficult to navigate.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {expeditions.map(({ title, tag, year, desc, whatChanged, whatWeExplored, whatWeLearned }) => (
              <div
                key={title}
                style={{
                  padding: 'var(--space-xl) 0',
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

                <div style={{ maxWidth: '64ch' }}>
                  <h4 style={{ marginBottom: 'var(--space-xs)', color: 'var(--ink)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>What We Explored</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: '1.75', marginBottom: 'var(--space-md)' }}>{whatWeExplored}</p>

                  <h4 style={{ marginBottom: 'var(--space-xs)', color: 'var(--ink)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>What Changed</h4>
                  <ul style={{ paddingLeft: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 'var(--space-md)' }}>
                    {whatChanged.map((o) => (
                      <li key={o} style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.6' }}>{o}</li>
                    ))}
                  </ul>

                  <h4 style={{ marginBottom: 'var(--space-xs)', color: 'var(--ink)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>What We Learned</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: '1.75', fontStyle: 'italic' }}>{whatWeLearned}</p>
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