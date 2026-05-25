import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import CAVEGrowthDiagram from '@/components/diagrams/CAVEGrowth'

export default function CAVEGrowthPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>CAVE Growth System™</h1>
            <p className="lead">
              Navigate growth when the path is not yet visible.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              CAVE Growth System™ is an organizational growth and uncertainty-navigation
              system developed through field engagement with organizations navigating
              genuine complexity. It helps teams build a durable capability for
              finding, testing, and scaling new opportunities under uncertainty.
            </p>
            <p>
              CAVE stands for the conditions the system is designed for: environments
              where the path forward is not visible, where assumptions are hidden,
              where customer needs are not yet fully formed, and where the cost of
              wrong decisions is real. The system does not eliminate uncertainty —
              it gives organizations the capability to navigate through it.
            </p>

            {/* Field diagram — the five-phase navigation cycle */}
            <div className="fw-diagram-container">
              <CAVEGrowthDiagram width={520} height={400} />
              <p className="fw-diagram-caption">
                CAVE navigation protocol — the five-phase cycle for finding direction when the path is not yet visible.
              </p>
            </div>

            <h2>Core Components</h2>
            <ul>
              <li><strong>Customer Insight as Navigation</strong> — Using deep customer empathy not just to inform decisions but to sense direction when data is insufficient</li>
              <li><strong>Assumption Surfacing</strong> — Making the hidden logic explicit — what you believe about the market, the customer, and the problem before you have evidence</li>
              <li><strong>Rapid Experimentation</strong> — Building learning loops that generate evidence quickly, at low cost, before large commitments are made</li>
              <li><strong>Evidence-Based Decisions</strong> — Building the discipline to wait for sufficient evidence while maintaining the capacity to act before certainty arrives</li>
            </ul>

            <h2>Connection to the Ecosystem</h2>
            <p>
              The CAVE Growth System™ is the organizational layer of the framework
              ecosystem. It connects to The Read™ (diagnosing where the real
              opportunity and risk are), the Search System™ (making exploration a
              permanent function), Progress Metrics™ (measuring learning before
              conventional business metrics are available), and Program as a
              Product™ (building the organizational change capability to scale
              what works).
            </p>

            <h2>Practical Application</h2>
            <p>
              CAVE Growth is applied in organizational transformation engagements,
              innovation system builds, and growth capability development. It is
              particularly relevant in healthcare, manufacturing, and regulated
              industries where the cost of failed change is high and the need
              for genuine adaptive capacity is urgent.
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
              <div className="fw-expedition-item">
                <Link href="/expeditions" className="fw-expedition-link">
                  <span className="fw-exp-name">ING PACE</span>
                  <span className="fw-exp-sub">PACE Transformation</span>
                </Link>
                <span className="fw-exp-tag">Financial Services</span>
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
              <h4>Applied</h4>
              <Link href="/expeditions">Roche Diabetes Care →</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}