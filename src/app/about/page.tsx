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
              Jeremiah Gardner is a bestselling author, entrepreneur, keynote speaker,
              innovation strategist, and elite cave explorer who helps leaders and
              organizations navigate uncertainty, build adaptive capability, and turn
              ambiguity into advantage.
            </p>

            <p>
              He has helped companies including Roche, American Family Insurance,
              ING Holding Group, GE, Nike, Unilever, and eBay build innovation systems,
              leadership practices, and growth capabilities. His background blends
              executive strategy, organizational transformation, customer-centered
              innovation, and the high-stakes discipline of underwater cave exploration.
            </p>

            <p>
              Gardner Expedition Co. is the home of his core intellectual ecosystem —
              the frameworks, diagnostics, and operating systems built through that
              field work: Goldline™, The Read™, CAVE Growth System™, The Search System™,
              Coaching Metaskills™, Progress Metrics™, and Program as a Product™.
              The work is designed to be used, not just admired.
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