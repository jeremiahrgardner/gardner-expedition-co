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
              The underlying capabilities that make coaching conversations transformational —
              not just competent. The meta-level skills that determine whether a coach
              creates genuine movement or just a productive feeling.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              Most coaching training focuses on techniques: which questions to ask,
              which frameworks to apply, how to structure a session. Coaching
              Metaskills operates one level above technique. It is about the
              underlying capabilities that determine how effective any technique
              will be in a given moment.
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
              of the coach's presence, attention, and capacity to meet what is actually
              happening in the room — in real time, without预先准备的答案.
            </p>
            <p>
              The metaskills framework was developed through extensive observation
              of what separates coaches who produce durable change from those who
              produce temporary relief. The answer is almost never the technique.
              It is the quality of the coach's capacity to be fully present with
              the client as they move through difficult terrain.
            </p>

            <h2>The Five Metaskills</h2>
            <ul>
              <li><strong>Presence</strong> — The capacity to be fully where you are, attending to what is actually present rather than what you expect or hope to find</li>
              <li><strong>Curiosity</strong> — Genuine, non-directive inquiry that does not have a destination — the ability to follow the conversation where it needs to go</li>
              <li><strong>Epicenter Awareness</strong> — The ability to sense where the real energy and gravity are in a conversation, as opposed to where the apparent topic is</li>
              <li><strong>Calibrated Challenge</strong> — The timing and framing of challenge that creates movement without triggering defensiveness</li>
              <li><strong>Integration Capacity</strong> — The ability to help a client connect new insight to their actual operating context, not just their intellectual understanding</li>
            </ul>

            <h2>Applications</h2>
            <p>
              Coaching Metaskills is developed through coach development programs,
              supervision groups, and individual coaching. It is the foundation
              for the Noema coaching platform and informs all of the coaching
              development work that Gardner Expedition Co. conducts with
              organizational clients.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/goldline">Goldline™</Link>
              <Link href="/frameworks/the-read">The Read</Link>
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