import Link from 'next/link'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>
            Gardner Expedition Co.
          </div>
          <p>Frameworks, diagnostics, essays, and applied exploration in organizational growth.</p>
        </div>

        <div className="site-footer-nav">
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/frameworks">Frameworks</Link></li>
            <li><Link href="/field-notes">Field Notes</Link></li>
            <li><Link href="/expeditions">Expeditions</Link></li>
            <li><Link href="/diagnostics">Diagnostics</Link></li>
            <li><Link href="/media">Media</Link></li>
          </ul>
        </div>

        <div className="site-footer-nav">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://jeremiahgardner.com" target="_blank" rel="noopener noreferrer">JeremiahGardner.com</a></li>
            <li><a href="https://haloclinepress.com" target="_blank" rel="noopener noreferrer">Halocline Press</a></li>
            <li><a href="https://asknoema.ai" target="_blank" rel="noopener noreferrer">AskNoema.ai</a></li>
            <li><a href="https://www.deadreckon.io" target="_blank" rel="noopener noreferrer">DeadReckon.io</a></li>
          </ul>
        </div>

        <div className="site-footer-nav">
          <h4>The Work</h4>
          <ul>
            <li><Link href="/frameworks/goldline">Goldline™</Link></li>
            <li><Link href="/frameworks/the-read">The Read</Link></li>
            <li><Link href="/frameworks/cave-growth">CAVE Growth System™</Link></li>
            <li><Link href="/frameworks/exploration-imperative">Exploration Imperative™</Link></li>
            <li><Link href="/frameworks/coaching-metaskills">Coaching Metaskills™</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {year} Gardner Expedition Co. All rights reserved.</p>
        <p>Navigating complexity. Building clarity.</p>
      </div>
    </footer>
  )
}