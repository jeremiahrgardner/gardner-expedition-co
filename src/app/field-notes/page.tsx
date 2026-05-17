import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const essays = [
  {
    slug: 'navigating-uncertainty',
    title: 'On Navigating Uncertainty Without a Map',
    date: 'March 2026',
    tag: 'Systems Thinking',
    excerpt: 'The absence of certainty is not the absence of direction. It is the condition under which direction is most honestly discovered.',
  },
  {
    title: 'The Intelligence of Systems',
    date: 'February 2026',
    tag: 'Organizational Dynamics',
    excerpt: 'Every organization is a living system with its own gravity, resistance, and momentum. The leader\'s task is not to control it — but to read it.',
  },
  {
    title: 'Alignment as Practice',
    date: 'January 2026',
    tag: 'Leadership',
    excerpt: 'Alignment is not a state you reach. It is a discipline you practice — daily, in the face of evidence that suggests you are off course.',
  },
  {
    title: 'Why Organizations Stop Learning',
    date: 'December 2025',
    tag: 'Organizational Learning',
    excerpt: 'The organizations that navigate change best are not the ones with the best predictions. They are the ones with the best feedback systems — genuine access to useful surprise.',
  },
  {
    title: 'The Difference Between Strategy and Planning',
    date: 'November 2025',
    tag: 'Strategy',
    excerpt: 'Strategy is the allocation of resources toward a theory of the future. Planning is the attempt to specify that future in detail. The first creates options; the second consumes them.',
  },
  {
    title: 'Reading the Field Before You Move',
    date: 'October 2025',
    tag: 'Situational Awareness',
    excerpt: 'Most organizational failures are not execution failures. They are observation failures — the decision was made before the decision-maker had seen the actual terrain.',
  },
]

export default function FieldNotesPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="eyebrow">Essays & Reflections</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              Field Notes
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75' }}>
              Observations, principles, and explorations written from the intersection
              of strategy, psychology, and organizational life. Published when something
              is worth saying — not on a schedule.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {essays.map(({ slug, title, date, tag, excerpt }) => (
                <Link
                  key={title}
                  href={`/field-notes/${slug}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'start',
                    gap: 'var(--space-md)',
                    padding: 'var(--space-md) 0',
                    borderBottom: '1px solid var(--soft-gray)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="eyebrow" style={{ color: 'var(--gold)' }}>{tag}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{title}</h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '60ch' }}>{excerpt}</p>
                  </div>
                  <span style={{ fontSize: '1.2rem', color: 'var(--gold)', paddingTop: '4px' }}>→</span>
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