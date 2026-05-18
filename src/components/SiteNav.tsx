'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/frameworks', label: 'Frameworks' },
    { href: '/field-notes', label: 'Field Notes' },
    { href: '/expeditions', label: 'Expeditions' },
    { href: '/diagnostics', label: 'Diagnostics' },
    { href: '/media', label: 'Media' },
    { href: '/about', label: 'About' },
    { href: 'https://haloclinepress.com', label: 'Books' },
  ]

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo">
          Gardner <span>Expedition Co.</span>
        </Link>

        <ul className="site-nav-links" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href="/diagnostics" className="nav-cta">
              Begin Assessment
            </Link>
          </li>
        </ul>

        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/diagnostics" onClick={() => setMenuOpen(false)}>
          Begin Assessment
        </Link>
      </div>
    </nav>
  )
}