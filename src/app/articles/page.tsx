import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ArticleArchive from '@/components/ArticleArchive'
import { fetchAllArticles } from '@/lib/notion'
import { articleTags, formatArticleDate, readingMinutes } from '@/lib/articles'
import { metadataFor } from '@/lib/metadata'

export const metadata = metadataFor('/articles')
export const revalidate = 21600

export default async function ArticlesPage() {
  const articles = await fetchAllArticles()
  const summaries = articles.map(article => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    dateLabel: formatArticleDate(article.date),
    tags: articleTags(article),
    minutes: readingMinutes(article),
  }))

  return (
    <>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="page-wrapper">
        <header className="archive-intro container">
          <span className="eyebrow">Articles &amp; field notes</span>
          <h1>Ideas for the<br /><em>way forward.</em></h1>
          <div className="archive-intro-bottom">
            <p>Essays and field notes on innovation, human connection, and finding your footing in uncertainty. By Jeremiah Gardner.</p>
            <span className="archive-total">{articles.length} articles · An ongoing exploration</span>
          </div>
        </header>
        <section className="container archive-section" aria-label="Browse articles">
          <ArticleArchive articles={summaries} />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
