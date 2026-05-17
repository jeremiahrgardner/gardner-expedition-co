import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

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