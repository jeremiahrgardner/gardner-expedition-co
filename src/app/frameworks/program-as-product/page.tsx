import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ProgramAsProductDiagram from '@/components/diagrams/ProgramAsProduct'
import FieldNotebookOrnaments from '@/components/diagrams/FieldNotebookOrnaments'

export default function ProgramAsProductPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>Program as a Product™</h1>
            <p className="lead">
              Build transformation systems that evolve.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              Program as a Product™ is a change philosophy and operating approach
              for organizational transformation. It treats transformation programs
              like products — shaped by stakeholder needs, evidence, adoption
              patterns, and iteration — not like fixed rollouts with a
              predetermined destination.
            </p>
            <p>
              Most transformation programs fail not because the strategy was
              wrong, but because the program design was wrong. They were built
              like construction projects: detailed blueprints, fixed timelines,
              defined deliverables. Real organizational change works more like
              product development: continuous iteration based on evidence,
              stakeholder feedback, and learning.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              The question is not "Are we on plan?" The question is "What are
              we learning, and how are we using that learning to build something
              people actually adopt and value?"
            </p>
            <p>
              Program as a Product™ builds transformation around stakeholder
              insight, experimentation, and evidence-based iteration. It uses the
              same disciplines that make great products — user research, rapid
              prototyping, A/B testing, adoption metrics, iterative release —
              and applies them to organizational change.
            </p>

            {/* Framework diagram — iteration spiral for transformation */}
            <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
              <ProgramAsProductDiagram width={400} height={400} />
            </div>

            {/* Section ornamental divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
              <FieldNotebookOrnaments variant="divider" color="var(--gold)" opacity={0.5} />
              <div style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
            </div>

            <h2>Key Principles</h2>
            <ul>
              <li><strong>Stakeholder Insight First</strong> — Understand what people actually need from the change before designing the solution</li>
              <li><strong>Build to Evolve</strong> — Design programs that can absorb learning and change direction, not just execute a fixed plan</li>
              <li><strong>Adoption as the Metric</strong> — The goal is not delivery — it is genuine adoption and use</li>
              <li><strong>Evidence-Based Iteration</strong> — Build feedback loops that surface what's working and what isn't, and respond accordingly</li>
            </ul>

            <h2>Connection to the Ecosystem</h2>
            <p>
              Program as a Product™ is the scaling and adoption layer of the
              framework ecosystem. It governs how the CAVE Growth System™ and
              the Search System™ get built and deployed inside organizations —
              not as big-bang transformations but as evolving systems that
              learn their way into durable capability.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Field Work Evidence</h4>
              <div className="fw-expedition-list">
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">American Family Insurance</span>
                  <span className="fw-exp-sub">Ignite Leadership Academy</span>
                </Link>
                <span className="fw-exp-tag">Insurance</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">Siemens</span>
                  <span className="fw-exp-sub">Transformation Program Architecture</span>
                </Link>
                <span className="fw-exp-tag">Industrial</span>
              </div>
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">John Deere</span>
                  <span className="fw-exp-sub">Enterprise Transformation Rhythm</span>
                </Link>
                <span className="fw-exp-tag">Agriculture</span>
              </div>
              </div>
            </div>
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/cave-growth">CAVE Growth System™</Link>
              <Link href="/frameworks/the-search">The Search System™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/expeditions">Applied Expeditions</Link>
              <Link href="/articles">Articles</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}