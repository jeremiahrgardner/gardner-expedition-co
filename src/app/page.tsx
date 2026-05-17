import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const frameworks = [
  {
    href: '/frameworks/goldline',
    name: 'Goldline™',
    desc: 'A diagnostic framework for identifying the precise decision-making patterns that keep leaders and organizations stuck — and the pathway out.',
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
]

const essays = [
  {
    href: '/field-notes/navigating-uncertainty',
    title: 'On Navigating Uncertainty Without a Map',
    date: 'Field Notes',
    excerpt: 'The absence of certainty is not the absence of direction. It is the condition under which direction is most honestly discovered.',
  },
  {
    href: '/field-notes/the-intelligence-of-systems',
    title: 'The Intelligence of Systems',
    date: 'Field Notes',
    excerpt: "Every organization is a living system with its own gravity, resistance, and momentum. The leader's task is not to control it — but to read it.",
  },
  {
    href: '/field-notes/alignment-as-practice',
    title: 'Alignment as Practice',
    date: 'Field Notes',
    excerpt: 'Alignment is not a state you reach. It is a discipline you practice — daily, in the face of evidence that suggests you are off course.',
  },
]

const expeditions = [
  {
    href: '/expeditions',
    title: 'Roche Diabetes Care — Organizational Navigation',
    tag: 'Healthcare',
    desc: 'A multi-year engagement navigating the intersection of culture, capability, and large-scale change in a global healthcare organization.',
  },
  {
    href: '/expeditions',
    title: 'Regional Health System — Capability Architecture',
    tag: 'Healthcare',
    desc: 'Designing a leadership development architecture that could sustain growth across a rapidly expanding regional footprint.',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">

        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-eyebrow">Gardner Expedition Co.</p>
            <h1>
              The world rewards those who learn to <em>navigate</em> —<br />
              not just those who <em>arrive</em>.
            </h1>
            <p>
              We build frameworks, diagnostics, and intellectual architecture for leaders
              and organizations who operate in environments where the map is always being
              redrawn. The work is grounded in systems thinking, psychological depth,
              and applied fieldwork.
            </p>
            <div className="hero-cta">
              <Link href="/frameworks" className="btn-primary">
                Explore the Frameworks
              </Link>
              <Link href="/field-notes" className="btn-ghost">
                Read Field Notes
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CORE THESIS ─── */}
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px' }}>
              <span className="gold-rule" />
              <h2 style={{ marginBottom: 'var(--space-md)' }}>
                The work begins with a single observation.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                Most organizational struggle is not a competence problem. It is a
                clarity problem — a failure to accurately read the system you are
                operating within, to distinguish signal from noise, and to act with
                conviction in the absence of complete information.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--muted)', marginTop: '1.2em' }}>
                Gardner Expedition Co. exists to build the intellectual infrastructure
                that makes high-quality navigation possible: frameworks that bring
                structure to complexity, diagnostics that reveal what is actually
                happening, and field notes that document the patterns worth knowing.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FRAMEWORKS ─── */}
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Intellectual Backbone</span>
              <h2>Frameworks</h2>
              <p>
                Rigorous, field-tested conceptual architecture for navigating organizational
                complexity, growth, and change.
              </p>
            </div>
            <div className="framework-grid">
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

        {/* ─── FIELD NOTES ─── */}
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Essays & Reflections</span>
              <h2>Field Notes</h2>
              <p>
                Observations, principles, and explorations written from the intersection
                of strategy, psychology, and organizational life.
              </p>
            </div>
            <div className="essay-grid">
              {essays.map(({ href, title, date, excerpt }) => (
                <Link key={title} href={href} className="essay-card">
                  <p className="essay-card-meta">{date}</p>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <Link href="/field-notes" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                All Field Notes →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── EXPEDITIONS ─── */}
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Applied Work</span>
              <h2>Expeditions</h2>
              <p>
                Organizational transformations and field engagements where the frameworks
                meet real-world complexity.
              </p>
            </div>
            <div className="expedition-list">
              {expeditions.map(({ href, title, tag, desc }) => (
                <Link key={title} href={href} className="expedition-card">
                  <div>
                    <div className="expedition-title">{title}</div>
                    <div className="expedition-desc">{desc}</div>
                  </div>
                  <span className="expedition-tag">{tag}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DIAGNOSTICS TEASER ─── */}
        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Diagnostics</span>
            <h2 style={{ color: 'var(--paper)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
              See your starting point clearly.
            </h2>
            <p style={{ color: '#999', fontSize: '1rem', maxWidth: '52ch', margin: '0 auto var(--space-md)' }}>
              The Goldline™ Assessment and Uncertainty Readiness tools offer
              structured insight into decision-making patterns, organizational
              friction, and growth constraints — built for leaders who want
              accuracy before action.
            </p>
            <Link href="/diagnostics" className="btn-primary" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
              Explore Diagnostics
            </Link>
          </div>
        </section>

        {/* ─── MEDIA STRIP ─── */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Books, Speaking, Podcast</span>
              <h2>Media</h2>
            </div>
            <div className="media-grid">
              <Link href="/media" className="media-card">
                <div className="media-card-box" style={{ background: '#1a1a1a' }}>
                  <span>The Read</span>
                </div>
                <div className="media-card-title">The Read</div>
                <div className="media-card-sub">Book · 2024</div>
              </Link>
              <Link href="/media" className="media-card">
                <div className="media-card-box" style={{ background: '#2c2c2c' }}>
                  <span>Podcast</span>
                </div>
                <div className="media-card-title">Exploration Imperative Podcast</div>
                <div className="media-card-sub">Podcast Series</div>
              </Link>
              <Link href="/media" className="media-card">
                <div className="media-card-box" style={{ background: '#3a3a3a' }}>
                  <span>Speaking</span>
                </div>
                <div className="media-card-title">Keynote Speaking</div>
                <div className="media-card-sub">Conferences & Organizations</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CLOSING ─── */}
        <section className="section" style={{ borderTop: '1px solid var(--soft-gray)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 'var(--space-md)' }}>
              There is an entire body of thought, exploration, and applied wisdom here.
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '52ch', margin: '0 auto var(--space-md)' }}>
              The frameworks have been built over years of field engagement. The field notes
              are written for people who think carefully. The diagnostics are designed
              for leaders who want to know what is actually true.
            </p>
            <Link href="/about" className="btn-ghost">
              About the Work
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}