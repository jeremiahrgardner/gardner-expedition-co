import { fetchAllArticles } from "@/lib/notion"
import SiteNav from "@/components/SiteNav"
import SiteFooter from "@/components/SiteFooter"
import Link from "next/link"
import type { Metadata } from "next"
import type { Article } from "@/lib/articles"

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
  if (article) return { title: article.title, description: article.excerpt }
  return { title: "Article | Gardner Expedition Co." }
}

// ─── Date formatter ───────────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

// ─── Block renderer (same logic as before, but clean) ─────────────────────────
function renderBlock(block: string) {
  if (block.startsWith("##H2##")) {
    return (
      <h2 key={block} style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
        fontWeight: 400,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        lineHeight: 1.25,
        color: "var(--ink)",
      }}>
        {block.slice(6)}
      </h2>
    )
  }
  if (block.startsWith("##H3##")) {
    return (
      <h3 key={block} style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
        fontWeight: 400,
        marginTop: "2rem",
        marginBottom: "0.75rem",
        lineHeight: 1.25,
        color: "var(--ink)",
      }}>
        {block.slice(6)}
      </h3>
    )
  }
  if (block.startsWith("* ")) {
    return (
      <li key={block} style={{
        marginLeft: "1.5rem",
        marginBottom: "0.5rem",
        color: "var(--ink)",
        lineHeight: 1.7,
      }}>
        {block.slice(2)}
      </li>
    )
  }
  if (block.startsWith("> ")) {
    return (
      <blockquote key={block} style={{
        borderLeft: "3px solid var(--gold)",
        paddingLeft: "1.5rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        fontStyle: "italic",
        color: "var(--ink)",
      }}>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>{block.slice(2)}</p>
      </blockquote>
    )
  }
  if (block === "##HR##") {
    return <hr key={"hr"} style={{ border: "none", borderTop: "1px solid var(--soft-gray)", margin: "3rem 0" }} />
  }

  const hasBold = block.includes("**")
  const hasBlockquote = block.startsWith("> ")
  const hasItalic = block.includes("_")

  const content = hasBlockquote ? block.slice(2) : block

  if (hasBold || hasItalic) {
    const segments = content.split(/(\*\*[^*]+\*\*|_([^_]+)_)/g)
    return (
      <p key={block} style={{
        color: "var(--ink)",
        lineHeight: 1.8,
        marginBottom: "1.5rem",
        maxWidth: "68ch",
      }}>
        {segments.map((seg, i) => {
          if (!seg) return null
          if (seg.startsWith("**") && seg.endsWith("**")) {
            return <strong key={i} style={{ fontWeight: 600 }}>{seg.slice(2, -2)}</strong>
          }
          if (seg.startsWith("_") && seg.endsWith("_")) {
            return <em key={i}>{seg.slice(1, -1)}</em>
          }
          return seg
        })}
      </p>
    )
  }

  return (
    <p key={block} style={{
      color: "var(--ink)",
      lineHeight: 1.8,
      marginBottom: "1.5rem",
      maxWidth: "68ch",
    }}>
      {content}
    </p>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const articles = await fetchAllArticles()
  const article = articles.find((p: Article) => p.slug === slug)

  if (!article) {
    return (
      <>
        <SiteNav />
        <div className="page-wrapper" style={{ textAlign: "center", padding: "4rem 0" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", marginBottom: "1rem" }}>Article not found</h1>
          <Link href="/articles" style={{ color: "var(--gold)" }}>← Back to Articles</Link>
        </div>
        <SiteFooter />
      </>
    )
  }

  const typedArticle = article as Article & { tag?: string; type?: string }
  const tag = typedArticle.tag || typedArticle.type || "Article"

  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <article className="essay-page">
          <header>
            <p className="essay-meta">
              <Link href="/articles" style={{ color: "var(--gold)" }}>Articles</Link>
              {tag !== "Article" && ` · ${tag}`}
            </p>
            <h1>{article.title}</h1>
            {article.date && (
              <p style={{ color: "var(--muted)", marginTop: "0.5rem", fontSize: "0.9rem" }}>
                {formatDate(article.date)}
              </p>
            )}
            {article.excerpt && (
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.7, marginTop: "1rem" }}>
                {article.excerpt}
              </p>
            )}
          </header>
          <div style={{ marginTop: "2rem" }}>
            {article.paragraphs.map((block) => renderBlock(block))}
          </div>
        </article>
        <div style={{
          maxWidth: "var(--content-width)",
          margin: "0 auto var(--space-xl)",
          padding: "0 var(--space-md)",
          borderTop: "1px solid var(--soft-gray)",
          paddingTop: "var(--space-md)",
        }}>
          <Link href="/articles" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
            ← Back to Articles
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}