import type { MetadataRoute } from 'next'
import { stat } from 'node:fs/promises'
import { join } from 'node:path'
import { SITE_URL, pageInfo } from '@/lib/metadata'
import { fetchAllArticles } from '@/lib/notion'

// Source modification times describe the checked-out pages; article dates come
// from the same published-content loader used by the article routes.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await Promise.all(Object.keys(pageInfo).map(async path => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: (await stat(join(process.cwd(), 'src/app', path, 'page.tsx'))).mtime,
  })))
  const articles = await fetchAllArticles()
  const fallback = (await stat(join(process.cwd(), 'src/lib/articles.json'))).mtime

  return [
    ...routes,
    ...articles.map(article => {
      const date = new Date(article.date)
      return {
        url: `${SITE_URL}/articles/${encodeURIComponent(article.slug)}`,
        lastModified: Number.isNaN(date.getTime()) ? fallback : date,
      }
    }),
  ]
}
