'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export type ArchiveArticle = {
  slug: string
  title: string
  excerpt: string
  date: string
  dateLabel: string
  tags: string[]
  minutes: number
}

type Filters = { tag: string; q: string; sort: string }
const initialFilters: Filters = { tag: '', q: '', sort: 'newest' }

function filtersFromUrl(): Filters {
  const params = new URLSearchParams(window.location.search)
  const sort = params.get('sort') ?? 'newest'
  return { tag: params.get('tag') ?? '', q: params.get('q') ?? '', sort: ['newest', 'oldest', 'title'].includes(sort) ? sort : 'newest' }
}

export default function ArticleArchive({ articles }: { articles: ArchiveArticle[] }) {
  const [filters, setFilters] = useState<Filters>(initialFilters)
  useEffect(() => {
    const restore = () => setFilters(filtersFromUrl())
    restore()
    window.addEventListener('popstate', restore)
    return () => window.removeEventListener('popstate', restore)
  }, [])

  const topics = Array.from(new Set(articles.flatMap(article => article.tags))).sort((a, b) => a.localeCompare(b))
  const query = filters.q.trim().toLocaleLowerCase()
  const visible = articles.filter(article =>
    (!filters.tag || article.tags.includes(filters.tag)) &&
    (!query || [article.title, article.excerpt, ...article.tags].join(' ').toLocaleLowerCase().includes(query))
  ).sort((a, b) => {
    if (filters.sort === 'title') return a.title.localeCompare(b.title)
    const difference = (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0)
    return filters.sort === 'oldest' ? -difference : difference
  })

  function update(next: Partial<Filters>, replace = false) {
    const value = { ...filters, ...next }
    setFilters(value)
    const url = new URL(window.location.href)
    for (const key of ['tag', 'q', 'sort'] as const) {
      if (value[key] && !(key === 'sort' && value[key] === 'newest')) url.searchParams.set(key, value[key])
      else url.searchParams.delete(key)
    }
    window.history[replace ? 'replaceState' : 'pushState'](null, '', `${url.pathname}${url.search}${url.hash}`)
  }

  return (
    <div className="article-archive">
      <div className="archive-controls">
        <fieldset className="archive-topics">
          <legend>Explore by topic</legend>
          <div className="topic-options">
            <button type="button" className="topic-filter" aria-pressed={!filters.tag} onClick={() => update({ tag: '' })}>
              All articles <span>{articles.length}</span>
            </button>
            {topics.map(topic => (
              <button type="button" key={topic} className="topic-filter" aria-pressed={filters.tag === topic} onClick={() => update({ tag: topic })}>
                {topic} <span>{articles.filter(article => article.tags.includes(topic)).length}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="archive-tools">
          <div className="archive-search">
            <label htmlFor="article-search">Search articles</label>
            <div className="search-input-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
              <input id="article-search" type="search" placeholder="Search titles, ideas, or topics…" value={filters.q} onChange={event => update({ q: event.target.value }, true)} />
            </div>
          </div>
          <div className="archive-sort">
            <label htmlFor="article-sort">Sort by</label>
            <select id="article-sort" value={filters.sort} onChange={event => update({ sort: event.target.value })}>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="archive-results-heading">
        <h2>{filters.tag || 'All articles'}</h2>
        <p role="status" aria-live="polite" aria-atomic="true">{visible.length} {visible.length === 1 ? 'article' : 'articles'}{query ? ` matching “${filters.q.trim()}”` : ''}</p>
        {(filters.tag || filters.q || filters.sort !== 'newest') && <button type="button" className="archive-reset" onClick={() => update(initialFilters)}>Reset filters</button>}
      </div>

      {visible.length ? (
        <div className="archive-list">
          {visible.map((article, index) => (
            <article key={article.slug} className="archive-entry">
              <span className="archive-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="archive-entry-content">
                <div className="archive-entry-meta">
                  {article.dateLabel && <time dateTime={article.date}>{article.dateLabel}</time>}
                  <span>{article.minutes} min read</span>
                </div>
                <h3><Link href={`/articles/${article.slug}`}>{article.title}<span className="archive-entry-arrow" aria-hidden="true"> ↗</span></Link></h3>
                <p className="archive-excerpt">{article.excerpt}</p>
                <div className="article-tags" aria-label="Topics">
                  {article.tags.map(tag => <button type="button" key={tag} className="article-tag" aria-pressed={filters.tag === tag} onClick={() => update({ tag })}>{tag}</button>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="archive-empty">
          <h3>No articles found</h3>
          <p>Try a different search or explore another topic.</p>
          <button type="button" className="archive-reset" onClick={() => update(initialFilters)}>Show all articles →</button>
        </div>
      )}
    </div>
  )
}
