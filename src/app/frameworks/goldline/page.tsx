import StructuredData from '@/components/StructuredData'
import { frameworkTerm } from '@/lib/structured-data'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import GoldlineDiagram from '@/components/diagrams/GoldlineDiagram'

import { metadataFor } from '@/lib/metadata'

export const metadata = metadataFor('/frameworks/goldline')

export default function GoldlinePage() {
  return (
    <>
      <StructuredData data={frameworkTerm('/frameworks/goldline')} />
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="page-wrapper">
        <section className="fw-hero">
          <div className="fw-hero-inner">
            <span className="eyebrow">Framework</span>
            <h1>Goldline™</h1>
            <p className="lead">
              Find the center that lets you explore.
            </p>
          </div>
        </section>

        <div className="fw-body">
          <div className="fw-main">
            <h2>What It Is</h2>
            <p>
              <strong>Centered Exploration.</strong> Goldline™ is the framework behind Centered Exploration, the subject of Jeremiah Gardner's forthcoming book <Link href="https://haloclinepress.com/books/the-goldline"><em>The Goldline: Centered Exploration and How You Go Further Without Losing Your Way</em></Link> (Halocline Press, Spring 2032). The steadier your center, the bolder your moves can be. The practice has three parts:
            </p>
            <ul>
              <li><strong>Trace:</strong> the archaeology of your impact. You don't invent a Goldline; you uncover it.</li>
              <li><strong>Anchor:</strong> the unglamorous work of making it real, in your calendar, rituals, relationships, and decision habits.</li>
              <li><strong>Navigate:</strong> expansion without drift. A Goldline is not a vision statement; it's a decision filter.</li>
            </ul>
            <p>
              Goldline™ is Jeremiah's signature personal clarity and alignment framework.
              It helps leaders, high performers, and creators identify their central
              contribution, build the structures that support it, and navigate growth
              without losing their center.
            </p>
            <p>
              The name comes from the navigation principle used in cave diving: when
              visibility drops to zero, the goldline is the anchored thread that helps
              explorers find their way back. In leadership and personal development,
              the goldline is the through-line of deepest contribution — the pattern
              that connects your most effective work across time.
            </p>

            {/* Field diagram — signature intellectual artifact */}
            <div className="fw-diagram-container">
              <GoldlineDiagram width={520} height={280} />
              <p className="fw-diagram-caption">
                The goldline in cave diving — the anchored thread that makes return possible when all other orientation fails.
              </p>
            </div>

            <h2>Core Philosophy</h2>
            <p>
              Most people are operating from inherited logic — patterns that were accurate
              in previous environments but are actively misguiding them now. The Goldline™
              framework surfaces that misalignment and gives you the vocabulary and
              structure to address it systematically.
            </p>
            <p>
              The work is not about finding a new identity. It is about recognizing
              what has been true about your contribution all along — and building the
              conditions that let you operate from that truth more consistently.
            </p>

            <h2>Practical Application</h2>
            <p>
              Goldline™ is applied through coaching engagements and the Goldline
              Clarity Snapshot™ diagnostic. It is particularly powerful for leaders
              and high performers who know something is not working but cannot
              articulate what it is — the classic symptoms of a pattern problem,
              not a competence problem.
            </p>
          </div>

          <aside className="fw-sidebar">
            <div className="fw-sidebar-section">
              <h4>Explore Further</h4>
              <Link href="/frameworks">← All Frameworks</Link>
              <Link href="/frameworks/the-read">The Read™</Link>
              <Link href="/frameworks/the-search">The Search System™</Link>
            </div>
            <div className="fw-sidebar-section">
              <h4>Related</h4>
              <Link href="/articles">Articles</Link>
              <Link href="/diagnostics">Take the Assessment</Link>
            </div>
          </aside>
        </div>

      </main>
      <SiteFooter />
    </>
  )
}