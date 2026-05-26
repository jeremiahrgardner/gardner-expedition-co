import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

const methods = [
  {
    name: 'Search Before Scale',
    problem: 'Teams launch programs before validating the search space — building on assumptions instead of evidence.',
    proven: 'Roche Diabetes Care, GE FastWorks, ING PACE',
    application: 'Core to CAVE Growth System\u2122 \u2014 structures exploration before investment.',
  },
  {
    name: 'Customer-Proximate Discovery',
    problem: 'Decision-makers are disconnected from customer reality; strategy is shaped by internal narratives.',
    proven: 'Roche, Genentech PHC, Nike Innovation Lab',
    application: 'Embedded in The Read\u2122 and field-note diagnostic practices.',
  },
  {
    name: 'Rapid Experimentation',
    problem: 'Organizations wait for certainty before acting \u2014 losing speed and learning in the process.',
    proven: 'GE FastWorks, ING PACE, eBay',
    application: 'Structured into sprint architecture and evidence-gathering cycles.',
  },
  {
    name: 'Evidence-Based Decision Systems',
    problem: 'Go/no-go decisions are made on enthusiasm or hierarchy rather than learning.',
    proven: 'Roche, WD-40, American Family Ignite',
    application: 'Formalized in Growth Boards and Progress Metrics\u2122.',
  },
  {
    name: 'Program as a Product',
    problem: 'Transformation programs are treated as fixed rollouts instead of evolving systems.',
    proven: 'American Family Ignite, Siemens, John Deere',
    application: 'A formal framework for adaptive, insight-driven change.',
  },
  {
    name: 'Growth Boards',
    problem: 'Innovation portfolios lack governance discipline \u2014 too loose to be rigorous, too tight to be exploratory.',
    proven: 'Roche, Genentech, Nike Innovation Lab',
    application: 'Portfolio discipline adapted for enterprise growth systems.',
  },
  {
    name: 'Coaching Metaskills',
    problem: 'Internal change sponsors lack the behavioral repertoire to lead through uncertainty.',
    proven: 'Regional Health System, AIA, Roche',
    application: 'A formal capability-building system for coaches and sponsors.',
  },
  {
    name: 'Portfolio Discipline',
    problem: 'Investment decisions are made project-by-project instead of as a coherent portfolio strategy.',
    proven: 'eBay, WD-40, ING, American Family',
    application: 'Core to The Search System\u2122 \u2014 continuous opportunity architecture.',
  },
]

const featuredExpeditions = [
  {
    name: 'Roche Diabetes Care',
    subtitle: 'Organizational Navigation',
    tag: 'Healthcare',
    year: '2022\u2013Present',
    tagline: 'Navigating the intersection of culture, capability, and large-scale change in a global healthcare organization.',
    narrative: 'A multi-year engagement navigating how a global healthcare organization could build genuine exploration capability alongside execution \u2014 without turning it into innovation theater.',
    extraNarrative: 'The work established a unified innovation practice across three regional organizations, introduced rapid experimentation discipline, and created evidence-based portfolio decision systems that accelerated $50M in new NPV and delivered 10x portfolio growth in new opportunity areas over three years.',
    explored: 'How a large healthcare organization could build genuine exploration capability alongside execution \u2014 without turning it into a special project.',
    changed: 'Unified innovation practice established across three regions. $50M NPV identified and accelerated. 10x portfolio growth in new opportunity areas.',
    learned: 'The most important intervention was not the methodology. It was the language. Organizations cannot build what they cannot name.',
    methodsProven: ['Search Before Scale', 'Customer Discovery', 'Growth Boards', 'Portfolio Discipline'],
  },
  {
    name: 'Genentech PHC',
    subtitle: 'Product & Customer System Design',
    tag: 'Biopharma',
    year: '2018\u20132022',
    tagline: 'Building customer-evidence systems for product development in the pharmaceutical space.',
    narrative: 'A sustained engagement focused on embedding customer-proximate discovery and evidence-based decision systems into product and healthcare commercialization processes.',
    explored: 'Pharma products require deep customer insight, but traditional development cycles are designed for regulatory speed, not customer proximity. The work built new rhythms for evidence gathering.',
    changed: 'Customer discovery embedded in the development cycle. Evidence-based decision frameworks adopted. Internal coaching network established and sustained.',
    learned: '',
    methodsProven: ['Customer-Proximate Discovery', 'Evidence Systems', 'Coaching Metaskills'],
  },
  {
    name: 'ING',
    subtitle: 'PACE Transformation',
    tag: 'Financial Services',
    year: '2014\u20132018',
    tagline: 'Enterprise-wide adoption of agile experimentation and evidence-based portfolio management.',
    narrative: 'ING\'s PACE program was one of the most serious enterprise-scale attempts to embed search and experimentation into the fabric of a global financial institution. The work addressed portfolio discipline, rapid experimentation, and the challenge of making growth work in a highly regulated environment.',
    explored: 'How do you make an entire global bank comfortable with searching, instead of just executing? The visible work was agile adoption \u2014 but the real work was changing the organization\'s relationship with uncertainty.',
    changed: 'PACE became a model for enterprise-wide transformation. Evidence-based portfolio decisions replaced assumption-driven funding. Agile experimentation embedded at scale.',
    learned: '',
    methodsProven: ['Rapid Experimentation', 'Portfolio Discipline', 'Program as a Product'],
  },
  {
    name: 'eBay',
    subtitle: 'Global Growth & Search Systems',
    tag: 'E-Commerce',
    year: '2013\u20132016',
    tagline: 'Building continuous exploration capability in a high-scale marketplace already at global maturity.',
    narrative: 'eBay was a mature global platform. The question wasn\'t about finding product-market fit \u2014 it was about continuous discovery and portfolio management at enterprise scale. The work addressed how a large organization stays exploratory after it has already proven its core model.',
    explored: 'How do you maintain genuine exploration in an organization that already dominates its category? The tension was real: the business needed optimization (execution) and exploration (search) simultaneously.',
    changed: 'Exploration capability embedded alongside optimization discipline. Portfolio-level governance introduced. Evidence-based new opportunity identification at scale.',
    learned: '',
    methodsProven: ['Search Before Scale', 'Portfolio Discipline', 'Growth Boards'],
  },
  {
    name: 'GE',
    subtitle: 'FastWorks Operating System',
    tag: 'Industrial / Manufacturing',
    year: '2011\u20132015',
    tagline: 'Enterprise-scale adoption of lean startup principles in a 120+ year industrial organization.',
    narrative: 'FastWorks was GE\'s boldest attempt to make searching a permanent enterprise function. The work brought rapid experimentation, customer-proximate discovery, and evidence-based investment decisions to one of the world\'s largest industrial conglomerates \u2014 across diverse businesses from aviation to healthcare.',
    explored: 'How do you make a 120-year-old industrial company comfortable with rapid experimentation and customer discovery? GE\'s scale demanded a system, not a pilot.',
    changed: 'FastWorks adopted across multiple business units. Lean startup principles embedded in a traditional industrial culture. A body of work that continues to shape the GEC frameworks.',
    learned: '',
    methodsProven: ['Rapid Experimentation', 'Customer-Proximate Discovery', 'Evidence Systems'],
  },
  {
    name: 'American Family Insurance',
    subtitle: 'Ignite Leadership Academy',
    tag: 'Insurance',
    year: '',
    tagline: 'Building a sustained leadership development and exploration capability in a regional insurance enterprise.',
    narrative: 'Ignite was not a one-time training program. It was a permanent system for building leadership capability and exploration capacity. The work required turning managers into coaches, and programs into products that evolved based on adoption evidence.',
    explored: 'Leadership development in insurance is often a compliance exercise. Ignite was designed to feel like growth, not training \u2014 embedding exploration as a permanent capability rather than a program with an end date.',
    changed: 'Managers became internal coaches. The Ignite Academy became an evolving system shaped by adoption evidence. A model for leadership development at insurance scale.',
    learned: '',
    methodsProven: ['Program as a Product', 'Coaching Metaskills', 'Evidence Systems'],
  },
]

const engagements = [
  { name: 'Nike Innovation Lab', desc: 'Advancing customer-proximate discovery and growth systems within one of the world\'s most recognized innovation labs.' },
  { name: 'John Deere', desc: 'Exploring the intersection of transformation programs and enterprise operating rhythms in an agricultural technology enterprise.' },
  { name: 'Siemens', desc: 'Sustaining transformation programs alongside execution demands in a complex, multi-unit industrial organization.' },
  { name: 'AIA Insurance', desc: 'Building coaching capability and internal sponsorship networks across a large insurance organization navigating uncertainty.' },
  { name: 'Transavia', desc: 'Customer discovery and exploration systems within a regional airline operating under significant competitive pressure.' },
  { name: 'WD-40', desc: 'Innovation strategy and portfolio discipline at a consumer products company navigating category expansion.' },
]

const recurringChallenges = [
  { t: 'Assumption-Driven Decisions', d: 'Teams moving too far on assumptions instead of evidence \u2014 building programs on certainty they did not yet earn.' },
  { t: 'Execution Questions for Search Work', d: 'Leadership asking execution questions of search-stage work \u2014 demanding timelines, deliverables, and ROI before the search is real.' },
  { t: 'Customer Insight Gap', d: 'Customer insight was not consistently shaping decisions \u2014 voice-of-customer was a department, not a discipline.' },
  { t: 'Portfolio Without Evidence', d: 'Innovation portfolios lacked evidence discipline \u2014 investment decisions based on belief, learning, or hierarchy.' },
  { t: 'Coaching Capability Gap', d: 'Internal coaches and sponsors needed new behaviors \u2014 old management practices could not lead through uncertainty.' },
  { t: 'Fixed vs. Evolving Programs', d: 'Transformation programs treated as fixed rollouts instead of evolving systems \u2014 designed for deployment, not adaptation.' },
]

const responses = [
  'Search before scale.',
  'Get closer to customers.',
  'Test what must be true.',
  'Measure evidence, not enthusiasm.',
  'Build internal capability.',
  'Govern uncertainty differently.',
  'Transform into systems people can actually use.',
]

export default function ExpeditionsPage() {
  return (
    <>
      <SiteNav />
      <div className="page-wrapper">

        {/* \u2500\u2500\u2500 HERO \u2500\u2500\u2500 */}
        <section className="exp-hero">
          {/* Topographic texture */}
          <div className="exp-hero-texture">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <ellipse cx="200" cy="150" rx="180" ry="120" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="140" ry="95" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="100" ry="70" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="60" ry="45" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="25" ry="20" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <path d="M 30 100 Q 100 80 200 100 T 370 100" fill="none" stroke="#F1C233" strokeWidth="0.3" />
              <path d="M 50 180 Q 120 200 200 180 T 350 180" fill="none" stroke="#F1C233" strokeWidth="0.3" />
              <path d="M 80 250 Q 150 230 200 250 T 320 250" fill="none" stroke="#F1C233" strokeWidth="0.3" />
            </svg>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <span className="exp-section-label">Expeditions</span>

            <h1 className="exp-headline">
              Built in the Field,<br />
              <span style={{ color: 'var(--goldline)' }}>Not the Lab</span>
            </h1>

            <p className="exp-subhead">
              Gardner Expedition Co.'s frameworks were shaped through years of enterprise transformation work with global organizations navigating uncertainty, growth, customer change, and strategic reinvention.
            </p>

            <div className="exp-hero-body">
              <p>The work has taken different forms across different organizations.</p>
              <p>GE called it <em>FastWorks</em>.</p>
              <p>American Family Insurance called it <em>Ignite</em>.</p>
              <p>ING called it <em>PACE</em>.</p>
              <p>Nike advanced the work through <em>Nike Innovation Lab</em>.</p>
              <p>Roche and Genentech built systems around customer evidence, concept development, Growth Boards, and innovation portfolios.</p>
              <p>The names changed. The pattern stayed the same.</p>
              <p>Organizations were trying to answer a difficult question:</p>
              <p>"How do we build the internal capacity to search, learn, decide, and grow when the path is not yet clear?"</p>
              <p>Gardner Expedition Co. exists to carry that body of work forward.</p>
            </div>
          </div>
        </section>

        {/* ─── TRUST STRIP ─── */}
        <section className="trust-strip">
          <div className="trust-strip-inner">
            <p className="trust-strip-label">Selected organizations connected to this body of work</p>
            <div className="trust-grid">
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/General_Electric" target="_blank" rel="noopener noreferrer" aria-label="General Electric">
                <img src="/images/logos/ge.svg" alt="GE" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/ING_Group" target="_blank" rel="noopener noreferrer" aria-label="ING">
                <img src="/images/logos/ing.svg" alt="ING" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/Roche" target="_blank" rel="noopener noreferrer" aria-label="Roche">
                <img src="/images/logos/roche.svg" alt="Roche" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/Genentech" target="_blank" rel="noopener noreferrer" aria-label="Genentech">
                <img src="/images/logos/genentech.svg" alt="Genentech" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/EBay" target="_blank" rel="noopener noreferrer" aria-label="eBay">
                <img src="/images/logos/ebay.svg" alt="eBay" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/Nike,_Inc." target="_blank" rel="noopener noreferrer" aria-label="Nike">
                <img src="/images/logos/nike.svg" alt="Nike" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/American_Family_Insurance" target="_blank" rel="noopener noreferrer" aria-label="American Family Insurance">
                <img src="/images/logos/american-family.svg" alt="American Family Insurance" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/WD-40_Company" target="_blank" rel="noopener noreferrer" aria-label="WD-40">
                <img src="/images/logos/wd40.svg" alt="WD-40" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/John_Deere" target="_blank" rel="noopener noreferrer" aria-label="John Deere">
                <img src="/images/logos/john-deere.svg" alt="John Deere" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/Siemens" target="_blank" rel="noopener noreferrer" aria-label="Siemens">
                <img src="/images/logos/siemens.svg" alt="Siemens" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/AIA_Group" target="_blank" rel="noopener noreferrer" aria-label="AIA">
                <img src="/images/logos/aia.svg" alt="AIA" loading="lazy" />
              </a>
              <a className="trust-logo-img" href="https://en.wikipedia.org/wiki/Transavia" target="_blank" rel="noopener noreferrer" aria-label="Transavia">
                <img src="/images/logos/transavia.svg" alt="Transavia" loading="lazy" />
              </a>
            </div>
          </div>
        </section>

        {/* \u2500\u2500\u2500 POSITIONING \u2500\u2500\u2500 */}
        <section className="exp-positioning">
          <div className="exp-positioning-inner">
            <h2>
              This Is Not a Portfolio.<br />
              <span className="gold-text">It Is a Pattern.</span>
            </h2>

            <div className="exp-positioning-body">
              <p>These expeditions are not presented as isolated client wins. They are evidence of a repeated transformation pattern across industries.</p>
              <p>In each organization, the visible work was different:</p>
              <ul>
                <li>a leadership academy,</li>
                <li>an innovation lab,</li>
                <li>a sprint system,</li>
                <li>a portfolio strategy,</li>
                <li>a coach development model,</li>
                <li>a Growth Board,</li>
                <li>a customer discovery program,</li>
                <li>or an enterprise operating rhythm.</li>
              </ul>
              <p>But beneath the surface, the work kept returning to the same core challenge:</p>

              <blockquote className="exp-pull-quote">
                "Most organizations are built to execute what they already know. Growth requires them to search through what they do not yet understand."
              </blockquote>

              <p>The frameworks behind Gardner Expedition Co. emerged from that tension.</p>
            </div>
          </div>
        </section>

        {/* \u2500\u2500\u2500 METHODS \u2500\u2500\u2500 */}
        <section className="exp-methods" style={{ background: 'var(--paper-alt)' }}>
          <div className="exp-methods-inner">
            <p className="exp-section-label">Methods Proven in Practice</p>
            <h2 className="exp-section-title">Operational doctrine, not theory.</h2>
            <p className="exp-section-lead">Each method below was developed to solve a specific, recurring challenge in enterprise transformation work.</p>

            {methods.map((m, i) => (
              <details key={i} className="method-card">
                <summary className="method-header">
                  <span className="method-name">{m.name}</span>
                  <span className="method-chevron">+</span>
                </summary>
                <div className="method-details">
                  <div>
                    <p className="method-detail-label">The Problem</p>
                    <p className="method-detail-text">{m.problem}</p>
                    <p className="method-detail-label" style={{ marginTop: '16px' }}>Proven In</p>
                    <p className="method-detail-text">{m.proven}</p>
                  </div>
                  <div>
                    <p className="method-detail-label">Current GEC Application</p>
                    <p className="method-detail-text">{m.application}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* \u2500\u2500\u2500 FEATURED EXPEDITIONS \u2500\u2500\u2500 */}
        <section className="exp-featured">
          <div className="exp-featured-inner">
            <p className="exp-section-label">Featured Transformation Expeditions</p>
            <h2 className="exp-section-title">Sustained engagements that shaped the frameworks.</h2>

            {featuredExpeditions.map((exp, i) => (
              <div key={i} className="featured-expedition">
                <div className="featured-exp-ed">
                  <div>
                    <div className="featured-exp-meta">
                      <span className="tag">{exp.tag}</span>
                      {exp.year && <span className="exp-year">{exp.year}</span>}
                    </div>
                    <h3 className="featured-exp-title">{exp.name} — {exp.subtitle}</h3>
                    <p className="featured-exp-subtitle">{exp.tagline}</p>
                    <p className="featured-exp-narrative">{exp.narrative}</p>
                    {exp.extraNarrative && <p className="featured-exp-narrative">{exp.extraNarrative}</p>}
                    <div className="featured-methods-proven">
                      <span className="method-label-tag">Methods Proven</span>
                      <div className="method-pills">
                        {exp.methodsProven.map(mp => (
                          <span key={mp} className="method-pill">{mp}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="featured-exp-sidebar">
                    <div className="sidebar-section">
                      <p className="sidebar-label">What We Explored</p>
                      <div className="sidebar-text"><p>{exp.explored}</p></div>
                    </div>
                    <div className="sidebar-section">
                      <p className="sidebar-label">What Changed</p>
                      <div className="sidebar-text"><p>{exp.changed}</p></div>
                    </div>
                    {exp.learned && (
                      <div className="sidebar-section">
                        <p className="sidebar-label">What We Learned</p>
                        <div className="sidebar-text"><p><em>{exp.learned}</em></p></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* \u2500\u2500\u2500 SELECTED ENGAGEMENTS \u2500\u2500\u2500 */}
        <section className="exp-engagements" style={{ background: 'var(--paper-alt)' }}>
          <div className="exp-engagements-inner">
            <p className="exp-section-label">Selected Engagements</p>
            <h2 className="exp-section-title">Additional field work.</h2>

            <div className="engagement-grid">
              {engagements.map(item => (
                <div key={item.name} className="engagement-item">
                  <h3 className="engagement-name">{item.name}</h3>
                  <p className="engagement-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* \u2500\u2500\u2500 CREDIBILITY / PATTERN \u2500\u2500\u2500 */}
        <section className="exp-proof-section">
          <div className="exp-proof-texture">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <ellipse cx="200" cy="150" rx="180" ry="120" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="140" ry="95" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="100" ry="70" fill="none" stroke="#F1C233" strokeWidth="0.5" />
              <ellipse cx="200" cy="150" rx="60" ry="45" fill="none" stroke="#F1C233" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="exp-proof-inner">
            <h2 className="exp-section-title">
              The Credibility Is Not the Logo.<br />
              <span style={{ color: 'var(--goldline)' }}>It Is the Pattern.</span>
            </h2>
            <p className="exp-section-lead">
              Logos can impress. Patterns prove. The deeper credibility in this body of work is not that global organizations were involved. It is that the same transformation challenge appeared again and again across different industries.
            </p>

            <div className="exp-proof-list">
              {recurringChallenges.map(item => (
                <div key={item.t} className="exp-proof-item">
                  <h4>{item.t}</h4>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>

            <div className="exp-response">
              <h3>The Response Became<br />the Foundation.</h3>
              <div className="response-items">
                {responses.map(item => (
                  <div key={item} className="response-item">
                    <span className="response-mark" />
                    <span className="response-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* \u2500\u2500\u2500 FINAL CTA \u2500\u2500\u2500 */}
        <section className="exp-cta">
          <div className="exp-cta-inner">
            <h2>Build the Capability to Move Through Uncertainty</h2>
            <div className="exp-cta-body">
              <p>Gardner Expedition Co. helps organizations build the internal systems, rhythms, and leadership behaviors required to grow when the path is unclear.</p>
              <p>Whether the work begins with a capability sprint, a leadership team, a portfolio challenge, or a customer discovery effort, the aim is the same:</p>
              <p><em>&ldquo;Help your organization learn faster, decide better, and move with discipline through uncertainty.&rdquo;</em></p>
            </div>
            <Link href="/about" className="exp-cta-btn">
              Start a Conversation \u2192
            </Link>
          </div>
        </section>

      </div>
      <SiteFooter />
    </>
  )
}
