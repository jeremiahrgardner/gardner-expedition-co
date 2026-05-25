import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import CoachingMetaskillsDiagram from '@/components/diagrams/CoachingMetaskills'
import FieldNotebookOrnaments from '@/components/diagrams/FieldNotebookOrnaments'

export default function CoachingMetaskillsPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>Coaching Metaskills™</h1>
            <p className="lead">
              Build the human capability to lead through uncertainty.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              Coaching Metaskills™ is a capability-building system for leaders,
              managers, coaches, and teams who operate in conditions of genuine
              uncertainty. It is not a coaching technique. It is the underlying
              human capacity that makes any technique effective — or not.
            </p>
            <p>
              A coach with strong metaskills can use a simple framework and create
              transformation. A coach with weak metaskills can use a sophisticated
              framework and create nothing. The metaskills are the multiplier.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              The relationship between a coach and a client is the primary instrument.
              Not the framework. Not the assessment. Not the techniques. The quality
              of the coach's presence, attention, and capacity to meet what is
              actually happening in the room — in real time, without a predetermined
              answer.
            </p>
            <p>
              Most coaching training focuses on technique. Coaching Metaskills
              operates one level above technique: the underlying capabilities
              that determine how effective any technique will be in a given moment.
            </p>

            <h2>The Core Metaskills</h2>
            <ul>
              <li><strong>Self-Awareness</strong> — The capacity to notice your own patterns, reactions, and filters in real time — and choose your response rather than default to it</li>
              <li><strong>Observation</strong> — The discipline of attending to what is actually present — behavioral signals, emotional currents, systemic patterns — without imposing your narrative</li>
              <li><strong>Differential Diagnosis</strong> — The skill of distinguishing what is actually going on from what appears to be going on; separating root causes from symptoms</li>
              <li><strong>Intervention</strong> — The timing and framing of challenge or support that creates genuine movement without triggering defensiveness</li>
              <li><strong>Experimentation</strong> — Building the client's capacity to test new behaviors, beliefs, and strategies in low-stakes contexts before deploying them in high-stakes ones</li>
            </ul>

            {/* Framework diagram — the metaskill rings as a visual system */}
            <div style={{ margin: '2.5rem 0 2rem', display: 'flex', justifyContent: 'center' }}>
              <CoachingMetaskillsDiagram width={400} height={400} />
            </div>

            {/* Section ornamental divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
              <FieldNotebookOrnaments variant="divider" color="var(--gold)" opacity={0.5} />
              <div style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
            </div>

            <h2>Practical Application</h2>
            <p>
              Coaching Metaskills is developed through coach development programs,
              supervision groups, and individual coaching. It is the foundation
              for the capability-building work that Gardner Expedition Co.
              conducts with organizational clients and internal coaching networks.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Field Work Evidence</h4>
              <div className="fw-expedition-list">
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">Regional Health System</span>
                  <span className="fw-exp-sub">Capability Architecture</span>
                </Link>
                <span className="fw-exp-tag">Healthcare</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">AIA Insurance</span>
                  <span className="fw-exp-sub">Coaching Capability Network</span>
                </Link>
                <span className="fw-exp-tag">Insurance</span>
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
              <Link href="/frameworks/goldline">Goldline™</Link>
              <Link href="/frameworks/the-read">The Read™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/expeditions">Applied Expeditions</Link>
              <Link href="/about">About the Work</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}