import articlesData from "./articles.json"

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
}

export const articles: Article[] = articlesData as Article[]