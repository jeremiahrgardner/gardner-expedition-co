import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { fetchAllArticles } from '@/lib/notion'

import { metadataFor } from '@/lib/metadata'

export const metadata = metadataFor('/field-notes')

export default async function FieldNotesPage() {
  const articles = await fetchAllArticles()
  const essays = articles.filter(article => article.type === 'Field Notes' || article.title.startsWith('Field Notes:'))

  return (
    <>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="page-wrapper">
        <section className="section" style={{ borderBottom: '1px solid var(--soft-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="eyebrow">Essays & Reflections</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              Field Notes
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.75' }}>
              Observations, principles, and explorations written from the intersection
              of strategy, psychology, and organizational life. Published when something
              is worth saying — not on a schedule.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {essays.map(({ slug, title, date, tag, excerpt }) => (
                <Link
                  className="article-row"
                  key={slug}
                  href={`/articles/${slug}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'start',
                    gap: 'var(--space-md)',
                    padding: 'var(--space-md) 0',
                    borderBottom: '1px solid var(--soft-gray)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="eyebrow" style={{ color: 'var(--gold)' }}>{tag || 'Field Notes'}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{title}</h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '60ch' }}>{excerpt}</p>
                  </div>
                  <span style={{ fontSize: '1.2rem', color: 'var(--gold)', paddingTop: '4px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}