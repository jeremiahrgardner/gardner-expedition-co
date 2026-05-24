import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const books = [
  {
    title: 'The Read',
    year: '2024',
    desc: 'A methodology for developing superior situational awareness — reading rooms, systems, dynamics, and signals with accuracy that most people mistake for intuition. The book that anchors the framework.',
    status: 'Available',
  },
  {
    title: 'The Lean Brand',
    year: '2019',
    desc: 'A strategic approach to brand building that rejects brand-as-costume in favor of brand-as-commitment — doing the internal work that makes external expression authentic.',
    status: 'Available',
  },
]

const speaking = [
  {
    type: 'Keynote',
    topics: ['Navigating Organizational Uncertainty', 'The Exploration Imperative', 'Reading Systems', 'Goldline Decision Diagnostics', 'Building Exploration Culture'],
  },
  {
    type: 'Facilitation',
    topics: ['Off-site Strategy Sessions', 'Leadership Team Alignment', 'Change Readiness Workshops', 'Executive Coaching Engagements'],
  },
]

const podcast = {
  title: 'Exploration Imperative Podcast',
  desc: 'Conversations with leaders, thinkers, and practitioners who have navigated genuine complexity — and what they learned from the journey. Published periodically when the right conversation presents itself.',
  episodes: 12,
}

export default function MediaPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="eyebrow">Books, Speaking, Podcast</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              Media
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75' }}>
              Books, podcast conversations, keynote speaking, and organizational
              facilitation. The work is primarily done in the room, but some of
              it leaves a record.
            </p>
          </div>
        </section>

        {/* Books */}
        <section className="section">
          <div className="container">
            <div className="media-section">
              <h2>Books</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                {books.map(({ title, year, desc, status }) => (
                  <div key={title} style={{ padding: 'var(--space-md)', border: '1px solid var(--soft-gray)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--space-sm)' }}>
                      <h3 style={{ fontSize: '1.2rem' }}>{title}</h3>
                      <span className="tag">{status}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 'var(--space-sm)' }}>{year}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.65' }}>{desc}</p>
                    {title === 'The Read' && (
                      <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-sm)' }}>
                        <Link href="#" className="btn-primary" style={{ fontSize: '0.75rem', padding: '10px 20px' }}>Order</Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Podcast */}
            <div className="media-section" style={{ marginTop: 'var(--space-xl)' }}>
              <h2>Podcast</h2>
              <div style={{ padding: 'var(--space-md)', border: '1px solid var(--soft-gray)', marginTop: 'var(--space-md)', maxWidth: '640px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>{podcast.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)', marginBottom: 'var(--space-sm)' }}>{podcast.episodes} Episodes</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.65', marginBottom: 'var(--space-md)' }}>{podcast.desc}</p>
                <Link href="#" className="btn-ghost" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>Listen →</Link>
              </div>
            </div>

            {/* Speaking */}
            <div className="media-section" style={{ marginTop: 'var(--space-xl)' }}>
              <h2>Speaking</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                {speaking.map(({ type, topics }) => (
                  <div key={type} style={{ padding: 'var(--space-md)', border: '1px solid var(--soft-gray)' }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-sm)' }}>{type}</h3>
                    <ul style={{ paddingLeft: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {topics.map((t) => (
                        <li key={t} style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.5' }}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-md)' }}>
                <Link href="https://jeremiahgardner.com" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                  Inquire About Speaking →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}