import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function TheReadPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>The Read</h1>
            <p className="lead">
              A methodology for developing superior situational awareness — reading rooms,
              systems, dynamics, and signals with accuracy that most people mistake for intuition.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              The Read is a structured methodology for developing the capacity to accurately
              perceive what is actually happening in a given situation — as opposed to what
              you expect to be happening, what you hope is happening, or what the official
              narrative says is happening.
            </p>
            <p>
              It is a skill set that separates exceptional leaders from competent ones.
              Not intelligence. Not experience. The specific ability to calibrate their
              perception against reality and update accordingly.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              Most leaders believe they are reading situations accurately. Most are not.
              They are reading through the filter of their own mental models, emotional
              reactions, and professional identities. The Read is a practice for
              recognizing when that filter is active — and for seeing past it.
            </p>
            <p>
              The methodology draws from clinical observation, intelligence analysis,
              and competitive strategy. The common thread: professionals who have
              learned to suppress their first-order reactions and attend to what
              is actually present.
            </p>

            <h2>The Five Dimensions</h2>
            <p>The Read operates across five interconnected dimensions:</p>
            <ul>
              <li><strong>Environmental Read</strong> — Reading the physical, temporal, and contextual signals that set the stage</li>
              <li><strong>Relational Read</strong> — Mapping the actual power dynamics, alliances, and fault lines in a room</li>
              <li><strong>Emotional Read</strong> — Identifying the unstated emotional currents that drive behavior beneath the rational surface</li>
              <li><strong>Systems Read</strong> — Understanding how the current situation is a node in a larger pattern or system</li>
              <li><strong>Trajectory Read</strong> — Sensing where the situation is heading before the trajectory becomes obvious</li>
            </ul>

            <h2>Practical Application</h2>
            <p>
              The Read is developed through coaching, exercises, and case study analysis.
              It is not a talent — it is a trained capacity. Most people who believe
              they have good intuition actually have well-honed pattern recognition that
              they have never made explicit or interrogated.
            </p>
            <p>
              The Read becomes most valuable in high-stakes situations: board conversations,
              organizational transformations, negotiations, and crisis moments where
              the cost of misreading is highest.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/goldline">Goldline™</Link>
              <Link href="/frameworks/exploration-imperative">Exploration Imperative™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/field-notes">Field Notes</Link>
              <Link href="/media">Speaking & Media</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}