import articlesData from "./articles.json"
import topicDefaults from "./article-topics.json"

export interface Article {
  slug: string
  title: string
  subtitle?: string
  date: string
  excerpt: string
  paragraphs: string[]
  /** Notion field: Type select (Essay | Field Notes) */
  type?: string
  /** Notion field: Tag select */
  tag?: string
  /** Reader-facing topics; supports multiple topics per article. */
  tags?: string[]
}

const defaults: Record<string, string[]> = topicDefaults

export function articleTags(article: Article): string[] {
  const supplied = article.tags?.length ? article.tags : defaults[article.slug] ?? []
  return Array.from(new Set([...supplied, article.tag ?? ''].map(tag => tag.trim()).filter(Boolean)))
}

export function readingMinutes(article: Article): number {
  return Math.max(1, Math.ceil(article.paragraphs.join(' ').split(/\s+/).filter(Boolean).length / 220))
}

export function formatArticleDate(date: string): string {
  if (!date || Number.isNaN(Date.parse(date))) return ''
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

export function topicHref(tag: string): string {
  return `/articles?${new URLSearchParams({ tag })}`
}

export const articles: Article[] = articlesData as Article[]
