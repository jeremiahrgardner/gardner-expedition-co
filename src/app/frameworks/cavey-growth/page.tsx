import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

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
              Counter-Adaptive Growth — a structured approach to organizational change
              when the environment actively resists it. Built for environments where
              the system fights back.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              CAVE stands for Counter-Adaptive Velocity Environment. The acronym is
              intentional — it describes the condition precisely: an environment
              where the natural organizational response to change is resistance, and
              where that resistance is not a bug but a feature of the system.
            </p>
            <p>
              Most change frameworks assume that if you design the right intervention,
              the organization will move. CAVE Growth assumes the opposite: the
              organization will push back, and the work is to design for that pushback
              from the beginning rather than being surprised by it.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              Organizational resistance to change is not irrational. It is the system
              protecting something it values — stability, identity, established
              competence, political equilibrium. The CAVE Growth System does not
              treat resistance as an obstacle to overcome. It treats it as a signal
              to interpret.
            </p>
            <p>
              The framework provides a structured vocabulary for diagnosing what
              the resistance is actually protecting, and a corresponding set of
              intervention strategies that work with the resistance rather
              than against it.
            </p>

            <h2>The Four Phases</h2>
            <ul>
              <li><strong>Cartography</strong> — Mapping the actual terrain of resistance: who resists, why, through what channels, with what resources</li>
              <li><strong>Alignment Architecture</strong> — Designing change trajectories that create genuine win-win conditions rather than forced compliance</li>
              <li><strong>Velocity Calibration</strong> — Determining the actual pace of sustainable change, which is almost always slower than leaders want</li>
              <li><strong>Evolution Cycles</strong> — Building feedback loops that allow the change process to adapt as it runs, rather than following a fixed plan</li>
            </ul>

            <h2>Practical Application</h2>
            <p>
              CAVE Growth is applied in organizational transformation engagements
              where early interventions have failed, where there is a history of
              change initiatives that did not stick, or where the organizational
              culture has strong inertial forces. It is particularly relevant in
              healthcare, manufacturing, and regulated industries where the cost
              of failed change is high.
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