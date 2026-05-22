import type { Article } from "./articles"

// ─── Config ────────────────────────────────────────────────────────────────────
export const NOTION_DATABASE_ID = "368f89a9-d7a7-8199-9daa-f8db0f5f1e17"
const NOTION_TOKEN = process.env.NOTION_TOKEN ?? ""

type NotionClient = InstanceType<typeof import("@notionhq/client").Client>
let _notion: NotionClient | null = null

async function getNotionClient(): Promise<NotionClient> {
  if (!NOTION_TOKEN) throw new Error("NOTION_TOKEN environment variable is not set")
  if (!_notion) {
    const { Client } = await import("@notionhq/client")
    _notion = new Client({ auth: NOTION_TOKEN })
  }
  return _notion
}

// ─── Types ─────────────────────────────────────────────────────────────────────
interface NotionRichText {
  type: "text" | "mention" | "equation"
  text?: { content: string; link: { url: string } | null }
  plain_text: string
  annotations?: {
    bold: boolean; italic: boolean; strikethrough: boolean
    underline: boolean; code: boolean; color: string
  }
}

interface NotionPageProperties {
  Title: { title: NotionRichText[] }
  Slug: { rich_text: NotionRichText[] }
  Date: { date: { start: string } | null }
  Tag: { select: { name: string } | null }
  Excerpt: { rich_text: NotionRichText[] }
  Content: { rich_text: NotionRichText[] }
  Status: { select: { name: string } | null }
  Type: { select: { name: string } | null }
}

interface NotionPage {
  id: string
  properties: NotionPageProperties
}

interface NotionPagesResponse {
  results: NotionPage[]
  has_more: boolean
  next_cursor: string | null
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function extractRichText(segments: NotionRichText[]): string {
  return segments.map(s => s.plain_text).join("")
}

// ─── Core fetch ───────────────────────────────────────────────────────────────
async function fetchArticlesFromNotionInner(): Promise<Article[]> {
  const notion = await getNotionClient()
  const articles: Article[] = []
  let cursor: string | undefined = undefined

  do {
    const response: NotionPagesResponse = await notion.request({
      path: `/v1/databases/${NOTION_DATABASE_ID}/query`,
      method: "post",
      body: {
        filter: {
          property: "Status",
          select: { equals: "Published" },
        },
        sorts: [{ property: "Date", direction: "descending" }],
        page_size: 100,
        ...(cursor ? { start_cursor: cursor } : {}),
      },
    })

    for (const page of response.results) {
      const props = page.properties

      const title = extractRichText(props.Title.title)
      const slug = extractRichText(props.Slug.rich_text)
      const date = props.Date.date?.start ?? ""
      const tag = props.Tag.select?.name ?? ""
      const type = props.Type.select?.name ?? ""
      const excerpt = extractRichText(props.Excerpt.rich_text)
      const rawContent = extractRichText(props.Content.rich_text)

      if (!slug || !title) continue

      const paragraphs = rawContent
        .split(/\n\n+/)
        .map(p => p.trim())
        .filter(Boolean)

      articles.push({
        slug,
        title,
        subtitle: "",
        date,
        excerpt,
        paragraphs,
        tag,
        type,
      })
    }

    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined
  } while (cursor)

  return articles
}

// ─── Public API ───────────────────────────────────────────────────────────────
export async function fetchArticlesFromNotion(): Promise<Article[]> {
  if (!NOTION_TOKEN) return []
  return fetchArticlesFromNotionInner()
}

// ─── Dev-mode fallback ─────────────────────────────────────────────────────────
import articlesData from "./articles.json"

export async function fetchAllArticles(): Promise<Article[]> {
  if (NOTION_TOKEN) {
    try {
      const notionArticles = await fetchArticlesFromNotion()
      if (notionArticles.length > 0) return notionArticles
    } catch (err) {
      console.warn("[notion.ts] Notion fetch failed, falling back to JSON:", err)
    }
  }
  return articlesData as Article[]
}