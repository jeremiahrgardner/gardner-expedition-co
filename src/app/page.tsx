import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import KitNewsletterForm from '@/components/KitNewsletterForm'

const fieldSystems = [
  {
    href: '/frameworks/goldline',
    name: 'The Goldline Framework™',
    job: 'For personal clarity and centered contribution.',
    desc: 'Identify your central contribution, build the systems that support it, and navigate growth without losing your center.',
  },
  {
    href: '/frameworks/the-read',
    name: 'The Read™',
    job: 'For diagnosing what is really happening in a room, team, or system.',
    desc: 'Observe beneath the surface, separate symptoms from signals, and choose the intervention the moment actually needs.',
  },
  {
    href: '/frameworks/cave-growth',
    name: 'CAVE Growth System™',
    job: 'For building evidence-led growth capability.',
    desc: 'Surface assumptions, learn from customers, run rapid experiments, and make evidence-based decisions under uncertainty.',
  },
  {
    href: '/frameworks/the-search',
    name: 'The Search System™',
    job: 'For turning uncertainty into disciplined exploration.',
    desc: 'An operating model for organizations that need to continuously discover, validate, and invest in new opportunities.',
  },
  {
    href: '/frameworks/progress-metrics',
    name: 'Progress Metrics™',
    job: 'For measuring learning before outcomes arrive.',
    desc: 'Track learning, confidence, and opportunity progress before traditional business metrics are available.',
  },
]

const routingCards = [
  {
    href: 'https://jeremiahgardner.com',
    title: 'Book Jeremiah to Speak',
    desc: 'For conferences, leadership events, and offsites.',
  },
  {
    href: 'https://haloclinepress.com',
    title: 'Read the Books',
    desc: 'For leaders who want the ideas in a practical, durable form.',
  },
  {
    href: '/diagnostics',
    title: 'Use a Diagnostic',
    desc: 'For individuals or teams trying to see their current pattern clearly.',
  },
  {
    href: 'https://www.deadreckon.io',
    title: 'Bring This Into Your Organization',
    desc: 'For teams navigating uncertainty, change, evidence, and growth.',
  },
]

const ecosystemItems = [
  {
    href: 'https://jeremiahgardner.com',
    name: 'JeremiahGardner.com',
    desc: 'Speaking and event booking',
  },
  {
    href: 'https://haloclinepress.com',
    name: 'Halocline Press',
    desc: 'Books and publishing',
  },
  {
    href: 'https://asknoema.ai',
    name: 'AskNoema.ai',
    desc: 'AI-guided leadership reflection',
  },
  {
    href: 'https://www.deadreckon.io',
    name: 'DeadReckon',
    desc: 'Organizational systems and advisory work',
  },
  {
    href: 'https://gardnerunderwater.com',
    name: 'Gardner Underwater',
    desc: 'Exploration, training, and source metaphor',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">

        {/* ─── HERO ───────────────────────────────────────── */}
        <section className="hero-editorial">
          <div className="hero-editorial-inner">
            <h1>Navigate uncertainty before it becomes drift.</h1>
            <p className="hero-sub">
              Gardner Expedition Co. builds field-tested frameworks, books, diagnostics,
              and advisory systems that help leaders see what is really happening, decide
              what matters, and move with confidence.
            </p>
            <div className="hero-cta-row">
              <Link href="/frameworks" className="btn-primary">
                Explore the Field Systems
              </Link>
              <Link href="https://jeremiahgardner.com" className="btn-ghost">
                Book Jeremiah to Speak
              </Link>
            </div>
          </div>
        </section>

        {/* ─── ROUTING CARDS ────────────────────────────────── */}
        <section className="routing-section">
          <div className="routing-section-inner">
            <p className="routing-section-label">Where are you trying to move?</p>
            <div className="routing-grid">
              {routingCards.map(({ href, title, desc }) => (
                <a key={title} href={href} className="routing-card" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <p className="routing-card-title">{title}</p>
                  <p className="routing-card-desc">{desc}</p>
                  <span className="routing-card-arrow">Explore →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROBLEM SECTION ─────────────────────────────── */}
        <section className="problem-section">
          <div className="problem-inner">
            <h2 className="problem-headline">
              The problem is not uncertainty. The problem is misreading it.
            </h2>
            <p className="problem-body">
              Most leaders do not fail because they lack intelligence, effort, or ambition.
              They fail because <strong>the room is sending signals they have not learned to read</strong>.
              Teams drift. Decisions slow down. Evidence gets replaced by opinion.
              People perform alignment while quietly disengaging.
            </p>
            <p className="problem-body" style={{ marginBottom: '2rem' }}>
              Gardner Expedition Co. exists to help leaders read the terrain,
              find the line, and move.
            </p>
            <p className="problem-closing">
              The capacity to see clearly in uncertain conditions is not a talent.
              It is a practice — and it can be learned.
            </p>
          </div>
        </section>

        {/* ─── FIELD SYSTEMS ──────────────────────────────── */}
        <section className="fieldsystems-section">
          <div className="fieldsystems-section-inner">
            <div className="fieldsystems-header">
              <h2 className="fieldsystems-title">Field Systems</h2>
              <p className="fieldsystems-sub">
                Tools for specific jobs — not a library to browse, but a set of instruments
                calibrated for real leadership situations.
              </p>
            </div>
            <div className="fieldsystem-grid">
              {fieldSystems.map(({ href, name, job, desc }) => (
                <a key={href} href={href} className="fieldsystem-card">
                  <p className="fieldsystem-name">{name}</p>
                  <p className="fieldsystem-job">{job}</p>
                  <p className="fieldsystem-desc">{desc}</p>
                  <span className="fieldsystem-arrow">→</span>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <Link href="/frameworks" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                See all frameworks →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PROOF LAYER ────────────────────────────────── */}
        <section className="proof-section">
          <div className="proof-inner">
            <p className="proof-label">Field-tested with teams and leaders across</p>
            <div className="proof-logos">
              {['Roche', 'Nike', 'ING', 'eBay', 'GE', 'Genentech'].map((org, i) => (
                <span key={org}>
                  {i > 0 && <span className="dot">·</span>}
                  <span>{org}</span>
                </span>
              ))}
            </div>
            <p className="proof-text">
              These systems were not built in theory. They emerged from keynote stages,
              executive rooms, innovation programs, leadership offsites, and high-pressure
              environments where clarity had to become action.
            </p>
          </div>
        </section>

        {/* ─── FIELD NOTES TEASER ──────────────────────────── */}
        <section className="section" style={{ padding: 'var(--space-xl) 0' }}>
          <div className="container">
            <div className="field-notes-split">
              <div className="field-notes-left">
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
                  Field Notes
                </h2>
                <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink-subtle)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  Essays written when something is worth saying — on reading rooms,
                  navigating uncertainty, and the discipline of evidence-based movement.
                </p>
                <div style={{ marginTop: 'var(--space-md)' }}>
                  <Link href="/articles" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                    Read Field Notes →
                  </Link>
                </div>
              </div>
              <div className="field-notes-right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--border)' }}>
                  {[
                    { title: 'On Navigating Uncertainty Without a Map', date: 'Field Notes', href: '/articles/navigating-uncertainty' },
                    { title: 'The Intelligence of Systems', date: 'Field Notes', href: '/articles/the-intelligence-of-systems' },
                    { title: 'Alignment as Practice', date: 'Field Notes', href: '/articles/alignment-as-practice' },
                  ].map(({ title, date, href }) => (
                    <a key={title} href={href} style={{ display: 'block', padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', color: 'var(--ink)' }}>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--goldline)', marginBottom: '4px' }}>{date}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600 }}>{title}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM MAP ──────────────────────────────── */}
        <section className="ecosystem-section">
          <div className="ecosystem-inner">
            <h2 className="ecosystem-headline">The Gardner Expedition Co. ecosystem</h2>
            <div className="ecosystem-grid">
              {ecosystemItems.map(({ href, name, desc }) => (
                <a key={name} href={href} className="ecosystem-item" target="_blank" rel="noopener noreferrer">
                  <p className="ecosystem-name">{name}</p>
                  <p className="ecosystem-desc">{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NEWSLETTER ─────────────────────────────────── */}
        <section className="section" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <KitNewsletterForm source="gec" heading="Stay in the field." subtext="Essays, frameworks, and observations — written when something is worth saying." />
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}