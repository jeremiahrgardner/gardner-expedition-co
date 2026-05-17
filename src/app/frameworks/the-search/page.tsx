import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

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
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/cave-growth">CAVE Growth System™</Link>
              <Link href="/frameworks/the-read">The Read™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/field-notes">Field Notes</Link>
              <Link href="/expeditions">Applied Expeditions</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}