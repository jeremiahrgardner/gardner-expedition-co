import type { Article } from "./articles"

// ─── Config ────────────────────────────────────────────────────────────────
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

interface NotionBlock {
  id: string
  type: string
  has_children?: boolean
  [key: string]: unknown
}

interface NotionPageProperties {
  Title: { title: NotionRichText[] }
  Slug: { rich_text: NotionRichText[] }
  Date: { date: { start: string } | null }
  Tag?: { select?: { name: string } | null; multi_select?: { name: string }[] }
  Tags?: { multi_select?: { name: string }[] }
  Excerpt: { rich_text: NotionRichText[] }
  Status: { select: { name: string } | null }
  Type: { select: { name: string } | null }
}

interface NotionPage {
  id: string
  properties: NotionPageProperties
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function extractRichText(segments: NotionRichText[]): string {
  return segments.map(s => s.plain_text).join("")
}

// ─── Block → paragraph converter ───────────────────────────────────────────────
// Converts Notion page blocks to the ##H2##, ##H3##, ##HR##, >, *, ** format
// that the site renderer expects.
function blocksToParagraphs(blocks: NotionBlock[]): string[] {
  const lines: string[] = []
  let inBullet = false

  for (const block of blocks) {
    const type = block.type as string
    const blockData = (block as Record<string, unknown>)[type] as Record<string, unknown> | undefined
    if (!blockData) continue

    const richText = (blockData.rich_text as NotionRichText[]) ?? []
    const text = extractRichText(richText)

    if (!text.trim()) {
      if (inBullet) { lines.push(""); inBullet = false }
      continue
    }

    switch (type) {
      case "heading_1":
      case "heading_2":
      case "heading_3": {
        if (inBullet) { lines.push(""); inBullet = false }
        const marker = type === "heading_1" ? "##H2##" : type === "heading_2" ? "##H3##" : "##H3##"
        lines.push(`${marker} ${text}`)
        break
      }
      case "quote": {
        if (inBullet) { lines.push(""); inBullet = false }
        lines.push(`> ${text}`)
        break
      }
      case "bulleted_list_item":
      case "numbered_list_item": {
        if (!inBullet) { inBullet = true }
        lines.push(`* ${text}`)
        break
      }
      case "divider": {
        if (inBullet) { lines.push(""); inBullet = false }
        lines.push("##HR##")
        break
      }
      case "paragraph": {
        // Skip empty paragraphs
        if (!text.trim()) { if (inBullet) { lines.push(""); inBullet = false } continue }
        if (inBullet) { lines.push(""); inBullet = false }
        // Convert bold annotations to **text**
        const converted = richText.map(s => {
          if (s.annotations?.bold) return `**${s.plain_text}**`
          return s.plain_text
        }).join("")
        lines.push(converted)
        break
      }
      default:
        // Skip unknown block types silently
        break
    }
  }

  return lines
}

// ─── Fetch page blocks ─────────────────────────────────────────────────────────
async function fetchPageBlocks(notion: NotionClient, pageId: string): Promise<string[]> {
  const allBlocks: NotionBlock[] = []
  let cursor: string | undefined = undefined

  do {
    const response = await notion.request({
      path: `/v1/blocks/${pageId}/children`,
      method: "post",
      body: {
        page_size: 100,
        ...(cursor ? { start_cursor: cursor } : {}),
      },
    }) as { results: NotionBlock[]; has_more: boolean; next_cursor: string | null }

    allBlocks.push(...response.results)
    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined
  } while (cursor)

  return blocksToParagraphs(allBlocks)
}

// ─── Core fetch ───────────────────────────────────────────────────────────────
async function fetchArticlesFromNotionInner(): Promise<Article[]> {
  const notion = await getNotionClient()
  const articles: Article[] = []
  let cursor: string | undefined = undefined

  do {
    const response = await notion.request({
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
    }) as { results: NotionPage[]; has_more: boolean; next_cursor: string | null }

    for (const page of response.results) {
      const props = page.properties

      const title = extractRichText(props.Title.title)
      const slug = extractRichText(props.Slug.rich_text)
      const date = props.Date.date?.start ?? ""
      const tag = props.Tag?.select?.name ?? ""
      const tags = (props.Tags?.multi_select ?? props.Tag?.multi_select ?? []).map(item => item.name)
      const type = props.Type.select?.name ?? ""
      const excerpt = extractRichText(props.Excerpt.rich_text)

      if (!slug || !title) continue

      // Fetch content from the page body (not a Content property)
      const paragraphs = await fetchPageBlocks(notion, page.id)

      if (paragraphs.length === 0) {
        // No body content — skip this page
        console.warn(`[notion.ts] Skipping "${title}": no body content found`)
        continue
      }

      articles.push({
        slug,
        title,
        subtitle: "",
        date,
        excerpt,
        paragraphs,
        tag,
        tags,
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

// Slugs that were published with a typo. The old URL permanently redirects to
// the corrected one (see next.config.js). Harmless once the Notion slug is fixed.
export const SLUG_CORRECTIONS: Record<string, string> = {
  "Why-High-Performers-Often-Feel-Unstable-During-Growthand-What-to-Do-About-It":
    "Why-High-Performers-Often-Feel-Unstable-During-Growth-and-What-to-Do-About-It",
}

function withCorrectedSlugs(articles: Article[]): Article[] {
  return articles.map(a => (SLUG_CORRECTIONS[a.slug] ? { ...a, slug: SLUG_CORRECTIONS[a.slug] } : a))
}

// Articles edited directly in articles.json. For these slugs the repo copy wins over
// Notion, so remove a slug from this list once its Notion page has been updated to match.
const REPO_PRIORITY_SLUGS = new Set([
  "The-30-Step-Rule-Part-1-A-Lesson-in-Customer-Observation-From-Walt-Disney",
])

function withRepoPriority(articles: Article[]): Article[] {
  const repo = new Map((articlesData as Article[]).map(a => [a.slug, a]))
  return articles.map(a => {
    const local = REPO_PRIORITY_SLUGS.has(a.slug) ? repo.get(a.slug) : undefined
    return local ? { ...a, title: local.title, excerpt: local.excerpt, paragraphs: local.paragraphs } : a
  })
}

export async function fetchAllArticles(): Promise<Article[]> {
  if (NOTION_TOKEN) {
    try {
      const notionArticles = await fetchArticlesFromNotion()
      if (notionArticles.length > 0) return withRepoPriority(withCorrectedSlugs(notionArticles))
    } catch (err) {
      console.warn("[notion.ts] Notion fetch failed, falling back to JSON:", err)
    }
  }
  return withCorrectedSlugs(articlesData as Article[])
}

// Also export the slug fetcher for [slug]/page.tsx
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const all = await fetchAllArticles()
  return all.find(a => a.slug === slug) ?? null
}