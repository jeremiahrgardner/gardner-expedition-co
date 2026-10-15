'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuButton = useRef<HTMLButtonElement>(null)
  const nav = useRef<HTMLElement>(null)

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1100px)')
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  const links = [
    { href: '/frameworks', label: 'Frameworks' },
    { href: '/expeditions', label: 'Expeditions' },
    { href: '/articles', label: 'Articles' },
    { href: 'https://haloclinepress.com/books', label: 'Books' },
    { href: '/diagnostics', label: 'Diagnostics' },
    { href: 'https://jeremiahgardner.com', label: 'Speaking' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav ref={nav} className="site-nav" aria-label="Main navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setMenuOpen(false)
      }}>
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-logo">
          Gardner <span>Expedition Co.</span>
        </Link>

        <ul className="site-nav-links" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href="/start-here" className="nav-cta" aria-current={pathname === '/start-here' ? 'page' : undefined}>
              Start Here
            </Link>
          </li>
        </ul>

        <button
          className="hamburger"
          ref={menuButton}
          type="button"
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          ) : (
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? 'open' : ''}`} hidden={!menuOpen}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/start-here" aria-current={pathname === '/start-here' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
          Start Here
        </Link>
      </div>
    </nav>
  )
}