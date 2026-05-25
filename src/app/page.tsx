import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import KitNewsletterForm from '@/components/KitNewsletterForm'
import FieldNotebookOrnaments from '@/components/diagrams/FieldNotebookOrnaments'
import PaperTexture from '@/components/diagrams/PaperTexture'

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

        {/* ─── HERO — Asymmetric Editorial Composition ─── */}
        <section className="hero-editorial">
          <div className="container">
            <span className="eyebrow-label">Gardner Expedition Co.</span>
            
            <h1 className="hero-headline">
              Built for leaders who cannot wait for certainty.
            </h1>
            
            <div className="hero-pull-quote">
              <div className="pull-quote-bar" />
              <p>Frameworks and field systems for navigating complexity — from the individual to the enterprise.</p>
            </div>
            
            <div className="hero-description">
              <p className="hero-desc-text">
                Frameworks, diagnostics, and field systems for seeing clearly,
                deciding wisely, and moving through the unknown — from personal
                clarity to enterprise-level exploration.
              </p>
            </div>
            
            <div className="hero-cta-single">
              <Link href="/frameworks" className="btn-primary">
                Explore the Frameworks
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TRUST STRIP — Authority signals before philosophy ─── */}
        <section className="trust-strip-home">
          <div className="trust-strip-home-inner">
            <p className="trust-strip-home-label">Frameworks developed through work with</p>
            <div className="trust-strip-home-logos">
              <span className="trust-strip-org">Roche</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">Genentech</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">Nike</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">GE</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">ING</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">eBay</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">American Family</span>
              <span className="trust-strip-dot">·</span>
              <span className="trust-strip-org">WD-40</span>
            </div>
            <div className="trust-strip-outcomes">
              <div className="trust-outcome">
                <span className="trust-outcome-num">$50M</span>
                <span className="trust-outcome-label">new NPV identified</span>
              </div>
              <span className="trust-strip-divider"></span>
              <div className="trust-outcome">
                <span className="trust-outcome-num">10x</span>
                <span className="trust-outcome-label">portfolio growth in new areas</span>
              </div>
              <span className="trust-strip-divider"></span>
              <div className="trust-outcome">
                <span className="trust-outcome-num">30x</span>
                <span className="trust-outcome-label">acceleration in evidence-based decisions</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Transitional Zone ─── */}
        <div className="section-transition">
          <div className="container">
            <div className="transition-rule">
              <FieldNotebookOrnaments variant="divider" className="transition-ornament" color="#F1C233" opacity={0.5} />
            </div>
          </div>
        </div>

        {/* ─── CORE THESIS — Left-offset with paper texture ─── */}
        <section className="section thesis-section">
          <div className="relative">
            <PaperTexture className="paper-texture-overlay" opacity={0.035} variant="fine" />
            <div className="container thesis-inner">
              <span className="gold-rule" />
              <h2 className="thesis-headline">
                The work begins with a single observation.
              </h2>
              <div className="thesis-pull-quote">
                <p>
                  Most organizational struggle is not a competence problem. It is a clarity problem.
                </p>
              </div>
              <p className="thesis-body">
                Most organizational struggle is not a competence problem. It is a
                clarity problem — a failure to accurately read the system you are
                operating within, to distinguish signal from noise, and to act with
                conviction in the absence of complete information.
              </p>
              <p className="thesis-body">
                Gardner Expedition Co. exists to build the intellectual infrastructure
                that makes high-quality navigation possible: frameworks that bring
                structure to complexity, diagnostics that reveal what is actually
                happening, and field notes that document the patterns worth knowing.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section Break ─── */}
        <div className="section-break">
          <div className="container">
          </div>
        </div>

        {/* ─── FRAMEWORKS — Sparse header, field notebook cards ─── */}
        <section className="section frameworks-section">
          <div className="container">
            <header className="frameworks-header">
              <h2 className="frameworks-title">Frameworks</h2>
            </header>
            
            <div className="framework-grid">
              {frameworks.map(({ href, name, subtitle, desc }) => (
                <Link key={href} href={href} className="framework-card">
                  <h3 className="framework-card-title">{name}</h3>
                  <p className="framework-subtitle">{subtitle}</p>
                  <p className="framework-desc">{desc}</p>
                  <div className="framework-arrow">
                    <svg width="24" height="8" viewBox="0 0 24 8" aria-hidden="true">
                      <line x1="0" y1="4" x2="18" y2="4" stroke="currentColor" strokeWidth="0.75" opacity={0.6} />
                      <polyline points="14,1 18,4 14,7" fill="none" stroke="currentColor" strokeWidth="0.75" opacity={0.6} />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section Break ─── */}
        <div className="section-break">
          <div className="container">
          </div>
        </div>

        {/* ─── FIELD NOTES ─── */}
        <section className="section field-notes-section">
          <div className="container">
            <header className="frameworks-header">
              <h2 className="frameworks-title">Field Notes</h2>
            </header>
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

        {/* ─── Section Break ─── */}
        <div className="section-break">
          <div className="container">
          </div>
        </div>

        {/* ─── EXPEDITIONS — Evidence surfacing ─── */}
        <section className="section expeditions-section">
          <div className="container">
            <header className="frameworks-header">
              <h2 className="frameworks-title">Expeditions</h2>
            </header>
            <div className="expeditions-intro">
              <p className="expeditions-intro-label">Built in the Field</p>
              <p className="expeditions-intro-quote">FastWorks. Ignite. PACE. The names change. The pattern stays the same.</p>
              <p className="expeditions-intro-line">Enterprise transformation work with Roche, Genentech, ING, Nike, GE, and more.</p>
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
            <div style={{ marginTop: 'var(--space-md)' }}>
              <Link href="/expeditions" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                See all expeditions →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section Break ─── */}
        <div className="section-break">
          <div className="container">
          </div>
        </div>

        {/* ─── DIAGNOSTICS TEASER — Dark section with texture ─── */}
        <section className="section diagnostics-section">
          <div className="relative">
            <div className="diagnostics-texture">
              <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}
              >
                {/* Topographic contour lines */}
                <ellipse cx="200" cy="150" rx="180" ry="120" fill="none" stroke="#F1C233" strokeWidth="0.5" />
                <ellipse cx="200" cy="150" rx="140" ry="95" fill="none" stroke="#F1C233" strokeWidth="0.5" />
                <ellipse cx="200" cy="150" rx="100" ry="70" fill="none" stroke="#F1C233" strokeWidth="0.5" />
                <ellipse cx="200" cy="150" rx="60" ry="45" fill="none" stroke="#F1C233" strokeWidth="0.5" />
                <ellipse cx="200" cy="150" rx="25" ry="20" fill="none" stroke="#F1C233" strokeWidth="0.5" />
                {/* Cross contour lines for irregularity */}
                <path d="M 30 100 Q 100 80 200 100 T 370 100" fill="none" stroke="#F1C233" strokeWidth="0.3" />
                <path d="M 50 180 Q 120 200 200 180 T 350 180" fill="none" stroke="#F1C233" strokeWidth="0.3" />
                <path d="M 80 250 Q 150 230 200 250 T 320 250" fill="none" stroke="#F1C233" strokeWidth="0.3" />
              </svg>
            </div>
            <div className="container diagnostics-inner">
              <span className="eyebrow" style={{ color: 'var(--goldline)' }}>Diagnostics</span>
              <h2 style={{ color: 'var(--paper)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                See your starting point clearly.
              </h2>
              <p style={{ color: 'var(--ink-subtle)', fontSize: '1rem', maxWidth: '52ch', margin: '0 auto var(--space-md)' }}>
                Gardner Expedition Co. develops diagnostics that help leaders and organizations
                make uncertainty visible. Tools are available in pilot form or under active
                development — designed for leaders who want accuracy before action.
              </p>
              <Link href="/diagnostics" className="btn-primary" style={{ background: 'var(--goldline)', color: 'var(--ink)' }}>
                Explore Diagnostics
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section Break ─── */}
        <div className="section-break">
          <div className="container">
          </div>
        </div>

        {/* ─── MEDIA STRIP ─── */}
        <section className="section media-section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Books, Speaking, Podcast</span>
              <h2>Media</h2>
            </div>
            <div className="media-grid">
              <Link href="https://haloclinepress.com/books/the-read" className="media-card" target="_blank" rel="noopener noreferrer">
                <div className="media-card-box" style={{ background: 'var(--ink)' }}>
                  <span>The Read</span>
                </div>
                <div className="media-card-title">The Read</div>
                <div className="media-card-sub">Book · October 2026</div>
              </Link>
              <Link href="/media" className="media-card">
                <div className="media-card-box" style={{ background: 'var(--ink-light)' }}>
                  <span>Podcast</span>
                </div>
                <div className="media-card-title">Exploration Imperative Podcast</div>
                <div className="media-card-sub">Podcast Series</div>
              </Link>
              <Link href="/media" className="media-card">
                <div className="media-card-box" style={{ background: 'var(--ink-light)' }}>
                  <span>Speaking</span>
                </div>
                <div className="media-card-title">Keynote Speaking</div>
                <div className="media-card-sub">Conferences & Organizations</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section Break ─── */}
        <div className="section-break">
          <div className="container">
          </div>
        </div>

        {/* ─── WORK WITH US ─── */}
        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--goldline)' }}>Work With Us</span>
            <h2 style={{ color: 'var(--paper)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
              Three ways to engage.
            </h2>
            <div style={{ display: 'grid', gap: 'var(--space-md)', textAlign: 'left', marginTop: 'var(--space-lg)' }}>
              <div style={{ borderTop: '1px solid var(--ink-light)', paddingTop: 'var(--space-md)' }}>
                <p style={{ fontWeight: 600, color: 'var(--goldline)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Speaking & Keynotes</p>
                <p style={{ color: 'var(--ink-subtle)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>For conference planners and event teams.</p>
                <a href="https://jeremiahgardner.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'underline', fontSize: '0.85rem' }}>JeremiahGardner.com →</a>
              </div>
              <div style={{ borderTop: '1px solid var(--ink-light)', paddingTop: 'var(--space-md)' }}>
                <p style={{ fontWeight: 600, color: 'var(--goldline)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Enterprise Advisory</p>
                <p style={{ color: 'var(--ink-subtle)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>For organizations seeking structured frameworks and diagnostic work.</p>
                <a href="https://www.deadreckon.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--paper)', textDecoration: 'underline', fontSize: '0.85rem' }}>DeadReckon.io →</a>
              </div>
              <div style={{ borderTop: '1px solid var(--ink-light)', paddingTop: 'var(--space-md)' }}>
                <p style={{ fontWeight: 600, color: 'var(--goldline)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Books & Publications</p>
                <p style={{ color: 'var(--ink-subtle)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>For readers exploring the frameworks in depth.</p>
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

        {/* ─── CLOSING — Atmospheric pull quote ─── */}
        <section className="closing-section">
          <div className="relative">
            <PaperTexture className="paper-texture-overlay" opacity={0.04} variant="fine" />
            <div className="container closing-inner">
              <blockquote className="closing-quote">
                The capacity to see clearly in uncertain conditions is not a talent. It is a practice.
              </blockquote>
              <Link href="/about" className="closing-link">
                About the work →
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}