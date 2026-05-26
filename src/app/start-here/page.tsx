import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Start Here | Gardner Expedition Co.',
  description: 'Find the right entry point for where you are and where you need to move.',
}

const routes = [
  {
    href: 'https://jeremiahgardner.com',
    title: 'I need a keynote or event speaker.',
    desc: 'Conferences, leadership offsites, board retreats, and custom speaking engagements.',
    external: true,
  },
  {
    href: '/frameworks',
    title: 'I want to understand the field systems.',
    desc: 'Frameworks for diagnosing situations, making decisions, and building evidence-led growth.',
    external: false,
  },
  {
    href: 'https://haloclinepress.com',
    title: 'I want to read the books.',
    desc: 'Practical, durable guides for leaders who want depth beyond a keynote.',
    external: true,
  },
  {
    href: '/diagnostics',
    title: 'I want a diagnostic or assessment.',
    desc: 'For individuals or teams trying to see their current pattern clearly before acting.',
    external: false,
  },
  {
    href: 'https://www.deadreckon.io',
    title: 'I want help with my organization.',
    desc: 'Organizational systems, advisory work, and structured transformation programs.',
    external: true,
  },
  {
    href: '/articles',
    title: 'I want to follow the thinking.',
    desc: 'Field Notes — essays on reading rooms, navigating uncertainty, and evidence-based movement.',
    external: false,
  },
]

export default function StartHerePage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">

        {/* ─── HERO ─────────────────────────────────────── */}
        <section className="start-here-hero">
          <div className="start-here-hero-inner">
            <h1>Start where the uncertainty is loudest.</h1>
            <p className="start-here-sub">
              Gardner Expedition Co. is an ecosystem of frameworks, diagnostics, books,
              and advisory systems. Every leader who arrives here is somewhere different.
              Choose the door that fits.
            </p>
          </div>
        </section>

        {/* ─── ROUTES ────────────────────────────────────── */}
        <section className="start-here-routes">
          <div className="start-here-routes-inner">
            <h2>What are you trying to do?</h2>
            <div className="start-here-route-list">
              {routes.map(({ href, title, desc, external }) => (
                <a
                  key={title}
                  href={href}
                  className="start-here-route"
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <div>
                    <p className="route-title">{title}</p>
                    <p className="route-desc">{desc}</p>
                  </div>
                  <span className="route-arrow">
                    <svg width="20" height="8" viewBox="0 0 20 8" aria-hidden="true">
                      <line x1="0" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="0.75" />
                      <polyline points="11,1 15,4 11,7" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BACK LINK ─────────────────────────────────── */}
        <section className="section" style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-xl)' }}>
          <div className="container">
            <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--ink-subtle)', textDecoration: 'none', letterSpacing: '0.04em' }}>
              ← Back to gardnerexpedition.co
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}