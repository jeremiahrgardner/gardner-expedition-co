import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function ExplorationImperativePage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>Exploration Imperative™</h1>
            <p className="lead">
              A strategic principle for building organizational cultures that treat
              uncertainty as a design condition — the medium through which durable
              growth is actually achieved.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              Most organizations are built for exploitation — efficiently executing
              on what they already know, optimizing known processes, extending known
              capabilities. Exploration — operating into the unknown, building
              new capabilities before they are needed, maintaining curiosity as an
              organizational posture — is treated as a luxury or a risk.
            </p>
            <p>
              The Exploration Imperative is a framework for making exploration a
              structural discipline rather than a discretionary activity. It provides
              the logic, the vocabulary, and the practical architecture for organizations
              that want to build genuine adaptive capacity — not just efficiency.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              The organizations that navigate change best are not the ones that predict
              the future best. They are the ones that maintain the best access to
              useful surprise — that have built the organizational capacity to turn
              unexpected signals into genuine strategic options.
            </p>
            <p>
              This requires a different relationship with uncertainty. Not tolerance —
              not simply accepting what you cannot control. Active design. Making
              uncertainty itself a subject of strategic attention rather than
              something to be minimized or avoided.
            </p>

            <h2>Key Principles</h2>
            <ul>
              <li><strong>The Uncertainty Budget</strong> — Every strategy should carry an explicit allocation for exploration and genuine option-building, not just execution</li>
              <li><strong>Productive Discomfort</strong> — Organizations that are always comfortable are not learning; the absence of friction signals that exploration has stopped</li>
              <li><strong>Optionality as Strategy</strong> — Building real options — genuine strategic alternatives — before they are needed, when the cost of building them is still low</li>
              <li><strong>Exploration Metrics</strong> — What gets measured is not just financial performance, but the quality of the organization's learning system and its ability to detect weak signals</li>
              <li><strong>Intellectual Humility as Practice</strong> — Explicit organizational practices for updating mental models when the evidence contradicts them</li>
            </ul>

            <h2>Applications</h2>
            <p>
              Exploration Imperative is used in strategic planning engagements,
              leadership team development, and organizational culture work. It is
              particularly valuable for organizations in transition — growing,
              shrinking, entering new markets, or responding to technological disruption.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Field Work Evidence</h4>
              <div className="fw-expedition-list">
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">GE FastWorks</span>
                  <span className="fw-exp-sub">FastWorks Operating System</span>
                </Link>
                <span className="fw-exp-tag">Industrial</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">Roche Diabetes Care</span>
                  <span className="fw-exp-sub">Organizational Navigation</span>
                </Link>
                <span className="fw-exp-tag">Healthcare</span>
              </div>
              </div>
            </div>
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/the-read">The Read</Link>
              <Link href="/frameworks/cavey-growth">CAVE Growth System™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/articles">Articles</Link>
              <Link href="/media">Podcast →</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}