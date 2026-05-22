import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function ProgressMetricsPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>Progress Metrics™</h1>
            <p className="lead">
              Measure evidence before certainty arrives.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              Progress Metrics™ is a measurement system for uncertainty, evidence,
              and opportunity development. It helps teams and leaders measure
              learning, confidence, and opportunity progress before conventional
              business metrics are available.
            </p>
            <p>
              Standard KPIs measure what has already happened. In conditions of
              genuine uncertainty — new markets, new products, new capabilities —
              conventional metrics arrive too late. By the time a business case
              shows positive numbers, the decision has already been made. Progress
              Metrics gives you a measurement system for the period before
              conventional metrics apply.
            </p>

            <h2>Core Philosophy</h2>
            <p>
              What gets measured is what gets managed. In uncertain environments,
              if you only measure financial outcomes, you will over-invest in
              certain bets and under-invest in exploration. Progress Metrics
              is built on the conviction that learning behavior — the quality
              of experiments, the honesty of evidence review, the willingness
              to update — is a leading indicator of eventual outcomes.
            </p>

            <h2>What It Tracks</h2>
            <ul>
              <li><strong>Evidence Accumulation</strong> — How much evidence has been gathered, and how credible is it?</li>
              <li><strong>Confidence Calibration</strong> — How confident should you actually be, given what you know now?</li>
              <li><strong>Learning Velocity</strong> — How fast is the team or organization learning relative to the rate of change in the environment?</li>
              <li><strong>Option Value</strong> — How many genuine strategic alternatives have been preserved versus foreclosed?</li>
              <li><strong>Movement Quality</strong> — Are the experiments being run actually testing the critical assumptions, or are they theater?</li>
            </ul>

            <h2>Connection to the Ecosystem</h2>
            <p>
              Progress Metrics™ is the measurement layer of the framework ecosystem.
              It is used alongside the CAVE Growth System™ (which provides the
              methodology for navigating uncertainty) and the Search System™
              (which governs how exploration investments are made and governed).
              Without a measurement system for uncertain work, exploration
              becomes impossible to manage.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/cave-growth">CAVE Growth System™</Link>
              <Link href="/frameworks/the-search">The Search System™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/articles">Articles</Link>
              <Link href="/diagnostics">Diagnostics</Link>
            </div>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}