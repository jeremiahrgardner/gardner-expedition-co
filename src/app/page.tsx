import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import KitNewsletterForm from '@/components/KitNewsletterForm'

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

const essays = [
  {
    href: '/articles/navigating-uncertainty',
    title: 'On Navigating Uncertainty Without a Map',
    date: 'Field Notes',
    excerpt: 'The absence of certainty is not the absence of direction. It is the condition under which direction is most honestly discovered.',
  },
  {
    href: '/articles/the-intelligence-of-systems',
    title: 'The Intelligence of Systems',
    date: 'Field Notes',
    excerpt: "Every organization is a living system with its own gravity, resistance, and momentum. The leader's task is not to control it — but to read it.",
  },
  {
    href: '/articles/alignment-as-practice',
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
              Built for leaders who cannot wait for certainty.
            </h1>
            <p>
              Frameworks, diagnostics, and field systems for seeing clearly,
              deciding wisely, and moving through the unknown — from personal
              clarity to enterprise-level exploration.
            </p>
            <div className="hero-cta">
              <Link href="/frameworks" className="btn-primary">
                Explore the Frameworks
              </Link>
              <Link href="/articles" className="btn-ghost">
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
                Field-tested systems for clarity, diagnostic leadership,
                team capability, organizational growth, and enterprise exploration.
              </p>
            </div>
            <div className="framework-grid">
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
              <Link href="/articles" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
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
              Gardner Expedition Co. develops diagnostics that help leaders and organizations
              make uncertainty visible. Tools are available in pilot form or under active
              development — designed for leaders who want accuracy before action.
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
              <Link href="https://haloclinepress.com/books/the-read" className="media-card" target="_blank" rel="noopener noreferrer">
                <div className="media-card-box" style={{ background: '#1a1a1a' }}>
                  <span>The Read</span>
                </div>
                <div className="media-card-title">The Read</div>
                <div className="media-card-sub">Book · October 2026</div>
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

        {/* ─── WORK WITH US ─── */}
        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Work With Us</span>
            <h2 style={{ color: 'var(--paper)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
              Three ways to engage.
            </h2>
            <div style={{ display: 'grid', gap: 'var(--space-md)', textAlign: 'left', marginTop: 'var(--space-lg)' }}>
              <div style={{ borderTop: '1px solid #333', paddingTop: 'var(--space-md)' }}>
                <p style={{ fontWeight: 600, color: 'var(--gold)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Speaking & Keynotes</p>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>For conference planners and event teams.</p>
                <a href="https://jeremiahgardner.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'underline', fontSize: '0.85rem' }}>JeremiahGardner.com →</a>
              </div>
              <div style={{ borderTop: '1px solid #333', paddingTop: 'var(--space-md)' }}>
                <p style={{ fontWeight: 600, color: 'var(--gold)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Enterprise Advisory</p>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>For organizations seeking structured frameworks and diagnostic work.</p>
                <a href="https://www.deadreckon.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'underline', fontSize: '0.85rem' }}>DeadReckon.io →</a>
              </div>
              <div style={{ borderTop: '1px solid #333', paddingTop: 'var(--space-md)' }}>
                <p style={{ fontWeight: 600, color: 'var(--gold)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Books & Publications</p>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>For readers exploring the frameworks in depth.</p>
                <a href="https://haloclinepress.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'underline', fontSize: '0.85rem' }}>HaloclinePress.com →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FIELD NOTES NEWSLETTER ─── */}
        <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--soft-gray)', borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '640px' }}>
            <KitNewsletterForm source="gec" heading="Stay in the field." subtext="Essays, frameworks, and observations — written when something is worth saying." />
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