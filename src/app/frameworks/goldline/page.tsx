import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function GoldlinePage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>Goldline™</h1>
            <p className="lead">
              A diagnostic framework for identifying the precise decision-making patterns
              that keep leaders and organizations stuck — and the specific pathway out.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              Goldline™ is a diagnostic assessment and accompanying interpretive framework
              designed to reveal the specific cognitive and organizational patterns that
              shape how a leader makes decisions under uncertainty. It surfaces what
              appears rational but is actually reflexive — the inherited logic that operates
              below conscious awareness and quietly governs behavior.
            </p>
            <p>
              The name comes from the navigation principle: a goldline is the course a
              ship is actually on, as opposed to the course it intends to be on. The
              gap between intention and trajectory is where organizational struggle lives.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              Most organizational dysfunction is not a motivation problem. The people
              involved are capable, experienced, and trying hard. The problem is
              structural — a failure of pattern recognition. Leaders are operating from
              mental models that were accurate in previous environments but are actively
              misguiding them in the current one.
            </p>
            <p>
              Goldline™ makes that misalignment visible and provides the vocabulary
              and framework to address it systematically.
            </p>

            <h2>What It Reveals</h2>
            <p>The framework identifies several critical pattern domains:</p>
            <ul>
              <li><strong>Decision Architecture</strong> — How information is gathered, filtered, and weighted before a decision is made</li>
              <li><strong>Risk Calibration</strong> — The implicit risk tolerance that governs strategic choices without being explicitly stated</li>
              <li><strong>Alignment Dynamics</strong> — How consensus is manufactured, maintained, or avoided in leadership teams</li>
              <li><strong>Feedback Loops</strong> — The quality and honesty of the signals an organization uses to evaluate its own performance</li>
              <li><strong>Trajectory Gap</strong> — The measurable distance between stated intent and actual organizational behavior</li>
            </ul>

            <h2>Practical Application</h2>
            <p>
              Goldline™ is used in coaching engagements, team development programs,
              and organizational诊断 projects. It is particularly effective when a
              leader or team knows something is not working but cannot articulate
              what it is — the classic symptoms of a pattern problem, not a competence problem.
            </p>
            <p>
              The diagnostic typically requires 30–45 minutes to complete and produces
              a detailed report that becomes the foundation for a 90-day coaching arc.
            </p>

            <h2>Background</h2>
            <p>
              Goldline™ was developed through years of field engagement with senior
              leaders in healthcare, manufacturing, and professional services. It draws
              on cognitive science, organizational behavior research, and systems
              thinking — synthesized into a practical diagnostic tool that can be
              used without academic infrastructure.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/the-read">The Read</Link>
              <Link href="/frameworks/cavey-growth">CAVE Growth System™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/field-notes">Field Notes</Link>
              <Link href="/diagnostics">Take the Assessment</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Status</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Active · Field-tested · Available for engagement
              </p>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}