import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import TheSearchSystemDiagram from '@/components/diagrams/TheSearchSystem'
import FieldNotebookOrnaments from '@/components/diagrams/FieldNotebookOrnaments'

export default function TheSearchPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>The Search System™</h1>
            <p className="lead">
              Make exploration a permanent enterprise function.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              The Search System™ is an operating model for organizations that need
              to continuously discover, validate, and invest in new opportunities —
              alongside the work of executing on what they already know.
            </p>
            <p>
              Most organizations are built for exploitation: efficiently executing
              on known capabilities, optimizing known processes. Exploration —
              operating into the unknown, building capabilities before they are
              needed — is treated as a luxury, a risk, or a special initiative.
              The Search System treats it as a permanent, non-negotiable function
              of the enterprise.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              Organizations only thrive in uncertainty when they treat exploration
              as a permanent, non-negotiable function alongside execution. The
              Search System provides the structure, vocabulary, and governance
              model for making that operational.
            </p>
            <p>
              The framework reframes innovation: not as a project or a initiative
              but as a continuous capability. The same way finance, HR, and
              operations are permanent functions, exploration is a permanent
              function — with its own leadership, metrics, and governance.
            </p>

            <h2>Key Principles</h2>
            <ul>
              <li><strong>Exploration as Function</strong> — Treat discovery work with the same seriousness and governance as execution work</li>
              <li><strong>Evidence Before Certainty</strong> — Build the discipline to act on decreasing uncertainty without waiting for complete confidence</li>
              <li><strong>Uncertainty Budget</strong> — Every strategy should carry an explicit allocation for exploration and genuine option-building</li>
              <li><strong>Learning Metrics</strong> — Measure the quality of the learning system, not just the outcomes of individual bets</li>
            </ul>

            {/* Framework diagram — visual anchor for the core concept */}
            <div className="diagram-insert" style={{ margin: '2.5rem 0 2rem', display: 'flex', justifyContent: 'center' }}>
              <TheSearchSystemDiagram width={480} height={310} />
            </div>

            {/* Section ornamental divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
              <FieldNotebookOrnaments variant="divider" color="var(--gold)" opacity={0.5} />
              <div style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
            </div>

            <h2>Connection to the Ecosystem</h2>
            <p>
              The Search System™ is the enterprise-level layer of the framework
              ecosystem. It runs on top of the CAVE Growth System™ (which provides
              the methodology for navigating uncertainty), Progress Metrics™ (which
              tracks the evidence and confidence of exploration investments), and
              Program as a Product™ (which governs how exploration systems are
              built and scaled).
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Field Work Evidence</h4>
              <div className="fw-expedition-list">
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">eBay</span>
                  <span className="fw-exp-sub">Global Growth & Search Systems</span>
                </Link>
                <span className="fw-exp-tag">E-Commerce</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">ING</span>
                  <span className="fw-exp-sub">PACE Transformation</span>
                </Link>
                <span className="fw-exp-tag">Financial Services</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">American Family Insurance</span>
                  <span className="fw-exp-sub">Ignite Leadership Academy</span>
                </Link>
                <span className="fw-exp-tag">Insurance</span>
              </div>
              </div>
            </div>
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/cave-growth">CAVE Growth System™</Link>
              <Link href="/frameworks/the-read">The Read™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/articles">Articles</Link>
              <Link href="/expeditions">Applied Expeditions</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}