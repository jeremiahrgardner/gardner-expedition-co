import { articles } from "@/lib/articles"
import SiteNav from "@/components/SiteNav"
import SiteFooter from "@/components/SiteFooter"
import Link from "next/link"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = articles.find(p => p.slug === slug)
  if (!post) return { title: "Article | Gardner Expedition Co." }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

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
    const lines = block.slice(2).split("\n  — ")
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
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>{lines[0]}</p>
        {lines[1] && (
          <cite style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "normal", display: "block", marginTop: "0.5rem" }}>
            — {lines[1]}
          </cite>
        )}
      </blockquote>
    )
  }
  return (
    <p key={block} style={{
      color: "var(--ink)",
      lineHeight: 1.8,
      marginBottom: "1.5rem",
      maxWidth: "68ch",
    }}>
      {block}
    </p>
  )
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = articles.find(p => p.slug === slug)

  if (!post) {
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

  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <article className="essay-page">
          <header>
            <p className="essay-meta">Articles</p>
            <h1>{post.title}</h1>
            {post.date && (
              <p style={{ color: "var(--muted)", marginTop: "0.5rem", fontSize: "0.9rem" }}>
                {formatDate(post.date)}
              </p>
            )}
            {post.excerpt && (
              <p className="essay-subtitle" style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.7, marginTop: "1rem" }}>
                {post.excerpt}
              </p>
            )}
          </header>
          <div style={{ marginTop: "2rem" }}>
            {post.paragraphs.map(block => renderBlock(block))}
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