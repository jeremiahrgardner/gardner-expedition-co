import { fetchAllArticles } from "@/lib/notion"
import SiteNav from "@/components/SiteNav"
import SiteFooter from "@/components/SiteFooter"
import Link from "next/link"
import type { Metadata } from "next"
import { articleDescription, createPageMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"
import { articleStructuredData } from "@/lib/structured-data"
import { articleTags, formatArticleDate, readingMinutes, topicHref, type Article } from "@/lib/articles"
import ArticleBody, { articleHeadings } from "@/components/ArticleBody"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ slug: string }> }

// ─── Static params for build time ─────────────────────────────────────────────
export async function generateStaticParams() {
  const articles = await fetchAllArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

// ─── ISR: revalidate every 6 hours ──────────────────────────────────────────
export const revalidate = 21600 // 6 hours

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const articles = await fetchAllArticles()
  const article = articles.find((p: Article) => p.slug === slug)
  const path = `/articles/${encodeURIComponent(slug)}`
  if (article) {
    const description = articleDescription(article, articles)
    return createPageMetadata(path, article.title, description)
  }
  return {
    ...createPageMetadata(path, 'Article not found', 'The requested article could not be found in the Gardner Expedition Co. article archive.'),
    robots: { index: false, follow: true },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const articles = await fetchAllArticles()
  const article = articles.find((p: Article) => p.slug === slug)

  if (!article) notFound()

  const tags = articleTags(article)
  const headings = articleHeadings(article.paragraphs)
  const dateLabel = formatArticleDate(article.date)
  const related = articles.filter(item => item.slug !== article.slug)
    .map(item => ({ article: item, score: articleTags(item).filter(tag => tags.includes(tag)).length }))
    .sort((a, b) => b.score - a.score || (Date.parse(b.article.date) || 0) - (Date.parse(a.article.date) || 0))
    .slice(0, 3).map(item => item.article)
  const structuredData = articleStructuredData(article, articleDescription(article, articles))
  const contents = headings.map(heading => <li key={heading.id}><a href={`#${heading.id}`}>{heading.title}</a></li>)

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="page-wrapper reading-page">
        <article>
          <header className="reading-header container" id="article-top">
            <Link href="/articles" className="reading-back">← All articles</Link>
            <div className="article-tags" aria-label="Article topics">
              {tags.map(tag => <Link className="article-tag" href={topicHref(tag)} key={tag}>{tag}</Link>)}
            </div>
            <h1>{article.title}</h1>
            {article.subtitle && <p className="reading-subtitle">{article.subtitle}</p>}
            <div className="reading-byline">
              <span className="author-monogram" aria-hidden="true">JG</span>
              <div><Link href="/about" className="reading-author">Jeremiah Gardner</Link><div className="reading-meta">{dateLabel && <><time dateTime={article.date}>{dateLabel}</time><span aria-hidden="true">·</span></>}<span>{readingMinutes(article)} min read</span></div></div>
            </div>
          </header>
          <div className="reading-layout container">
            <aside className="reading-sidebar" aria-label="Reading companion">
              <div className="reading-sidebar-inner">
                <p className="eyebrow">{headings.length ? 'On this page' : 'An ongoing exploration'}</p>
                {headings.length > 0 ? <nav aria-label="Article sections"><ol>{contents}</ol></nav> : <p className="reading-sidebar-note">Ideas for leading, learning, and finding the way forward.</p>}
                <a className="reading-top-link" href="#article-top">Back to top ↑</a>
              </div>
            </aside>
            <div className="reading-column">
              {headings.length > 0 && <details className="reading-mobile-contents"><summary>On this page <span aria-hidden="true">＋</span></summary><nav aria-label="Article sections on mobile"><ol>{contents}</ol></nav></details>}
              <ArticleBody blocks={article.paragraphs} />
              <footer className="reading-end">
                <span className="reading-end-mark" aria-hidden="true">◆</span>
                <p>Written by <Link href="/about">Jeremiah Gardner</Link></p>
                <div className="article-tags" aria-label="Explore these topics">{tags.map(tag => <Link className="article-tag" href={topicHref(tag)} key={tag}>{tag} ↗</Link>)}</div>
                <Link href="/articles" className="reading-back">← Explore all articles</Link>
              </footer>
            </div>
          </div>
        </article>
        {related.length > 0 && <section className="related-reading container" aria-labelledby="related-heading">
          <div className="related-reading-heading"><div><span className="eyebrow">Continue the exploration</span><h2 id="related-heading">Further reading</h2></div><Link href="/articles">All articles →</Link></div>
          <div className="related-grid">{related.map(item => <article className="related-card" key={item.slug}>
            <span className="related-topic">{articleTags(item)[0] || 'Article'}</span>
            <h3><Link href={`/articles/${item.slug}`}>{item.title} <span aria-hidden="true">↗</span></Link></h3>
            <p>{readingMinutes(item)} min read</p>
          </article>)}</div>
        </section>}
      </main>
      <SiteFooter />
    </>
  )
}
