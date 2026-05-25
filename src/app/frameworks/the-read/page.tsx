import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import PerceptionMap from '@/components/diagrams/PerceptionMap'

export default function TheReadPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>The Read™</h1>
            <p className="lead">
              See what the moment is really telling you.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              The Read™ is Jeremiah's diagnostic leadership framework. It teaches
              leaders to see what is actually happening beneath the surface of a
              team, organization, or decision moment — before they intervene.
            </p>
            <p>
              The name comes from the skill that separates exceptional leaders from
              competent ones: not intelligence, not experience, but the specific
              capacity to calibrate their perception against reality and update
              accordingly. The Read is a trained skill — not intuition, not
              personality, not experience. A disciplined practice of seeing clearly.
            </p>

            {/* Field diagram — the perception gap at the heart of The Read */}
            <div className="fw-diagram-container">
              <PerceptionMap width={480} height={320} />
              <p className="fw-diagram-caption">
                The gap between what is observed and what is interpreted — the core perceptual failure The Read addresses.
              </p>
            </div>

            <h2>Core Philosophy</h2>
            <p>
              Most leaders believe they are reading situations accurately. Most are not.
              They are reading through the filter of their own mental models, emotional
              reactions, and professional identities. The Read is a practice for
              recognizing when that filter is active — and for seeing past it.
            </p>
            <p>
              The framework is built around a central distinction: symptoms versus
              signals. Most leaders treat symptoms — the visible expressions of
              organizational dysfunction — as the problem. The Read trains leaders
              to look for the signals that are generating those symptoms, and to
              choose the intervention the moment actually needs.
            </p>

            <h2>Key Dimensions</h2>
            <ul>
              <li><strong>Observation</strong> — The discipline of attending to what is actually present, not what you expect or hope to find</li>
              <li><strong>Diagnosis</strong> — Separating symptoms from signals and identifying what is actually driving the situation</li>
              <li><strong>Intervention</strong> — Choosing the move that addresses the root, not just the expression</li>
              <li><strong>Review</strong> — Updating your mental model when the evidence contradicts what you believed</li>
            </ul>

            <h2>Practical Application</h2>
            <p>
              The Read becomes most valuable in high-stakes situations: board
              conversations, organizational transformations, negotiations, and
              crisis moments where the cost of misreading is highest. It is
              developed through coaching, structured exercises, and case analysis.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Field Work Evidence</h4>
              <div className="fw-expedition-list">
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">Roche Diabetes Care</span>
                  <span className="fw-exp-sub">Organizational Navigation</span>
                </Link>
                <span className="fw-exp-tag">Healthcare</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">Genentech PHC</span>
                  <span className="fw-exp-sub">Product & Customer System Design</span>
                </Link>
                <span className="fw-exp-tag">Biopharma</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">Nike Innovation Lab</span>
                  <span className="fw-exp-sub">Exploration Systems</span>
                </Link>
                <span className="fw-exp-tag">Consumer</span>
              </div>
              </div>
            </div>
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/goldline">Goldline™</Link>
              <Link href="/frameworks/cave-growth">CAVE Growth System™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/articles">Articles</Link>
              <Link href="/media">Speaking & Media</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}