import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <div className="about-grid">
          {/* Portrait column */}
          <div>
            <div className="about-portrait">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(160deg, #e8e8e8 0%, #c8c8c8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="30" r="16" fill="#999"/>
                  <ellipse cx="40" cy="75" rx="28" ry="22" fill="#999"/>
                </svg>
              </div>
            </div>
            <div style={{ marginTop: 'var(--space-sm)', fontSize: '0.78rem', color: 'var(--muted)' }}>
              Jeremiah Gardner
            </div>
          </div>

          {/* Bio column */}
          <div className="about-bio">
            <h1>Jeremiah Gardner</h1>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>
              Founder, Gardner Expedition Co.
            </span>

            <p>
              The work of Gardner Expedition Co. is built around a single conviction:
              most organizational struggle is not a competence problem. It is a clarity
              problem — a failure to accurately read the system you are operating within,
              to distinguish signal from noise, and to act with conviction in the absence
              of complete information.
            </p>

            <p>
              Jeremiah has spent fifteen years in organizational consulting, coaching,
              and leadership development — working primarily with healthcare, manufacturing,
              and professional services organizations navigating genuine complexity. The
              frameworks that make up Gardner Expedition Co. — Goldline™, The Read,
              CAVE Growth System™, Exploration Imperative™, and Coaching Metaskills™ —
              were built through that field work, not before it.
            </p>

            <p>
              The intellectual ecosystem that this website represents is designed to
              be coherent: the frameworks provide the structure, the diagnostics surface
              where to apply them, the field notes document patterns worth knowing,
              and the expeditions show what happens when it all meets real-world complexity.
              The work is designed to be used, not just admired.
            </p>

            <p>
              Before independent practice, Jeremiah held leadership positions in
              organizational development and learning at several regional and national
              healthcare organizations. He holds a graduate degree in organizational
              psychology and has trained in cognitive behavioral therapy, systems
              thinking methodology, and executive coaching.
            </p>

            <p>
              He is based in the upper Midwest. He writes when something is worth
              saying, speaks when the topic is genuinely aligned with the work,
              and takes on a small number of organizational engagements each year
              to keep the frameworks honest.
            </p>

            <div className="about-links">
              <Link href="/frameworks" className="btn-primary" style={{ fontSize: '0.78rem', padding: '10px 22px' }}>
                Explore the Frameworks
              </Link>
              <Link href="/field-notes" className="btn-ghost" style={{ fontSize: '0.78rem', padding: '10px 22px' }}>
                Read Field Notes
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom quote section */}
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto var(--space-2xl)',
          padding: '0 var(--space-md)',
          borderTop: '1px solid var(--soft-gray)',
          paddingTop: 'var(--space-xl)',
        }}>
          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontStyle: 'italic',
            fontWeight: '300',
            maxWidth: '72ch',
            lineHeight: '1.4',
            color: 'var(--muted)',
          }}>
            "The goal is not to have figured it out. The goal is to maintain
            the discipline of figuring it out — every day, in the face of
            evidence that suggests you are done."
          </blockquote>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}