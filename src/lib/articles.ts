import articlesData from "./articles.json"

export interface Article {
  slug: string
  title: string
  subtitle?: string
  date: string
  excerpt: string
  paragraphs: string[]
}

export const articles: Article[] = articlesData as Article[]