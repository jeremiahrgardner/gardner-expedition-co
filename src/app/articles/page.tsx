import Link from "next/link"
import SiteNav from "@/components/SiteNav"
import SiteFooter from "@/components/SiteFooter"
import { fetchAllArticles } from "@/lib/notion"
import type { Article } from "@/lib/articles"

function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  } catch {
    return dateStr
  }
}

export default async function ArticlesPage() {
  const articles = await fetchAllArticles()

  // Split by Type — Essay articles are "Featured Essays", everything else is "Field Notes"
  const featuredEssays = articles.filter((a: Article) => (a as Article & { type?: string }).type === "Essay")
  const fieldNotes = articles.filter((a: Article) => (a as Article & { type?: string }).type !== "Essay")

  return (
    <>
      <SiteNav />
      <div className="page-wrapper">
        <section className="section" style={{ borderBottom: "1px solid var(--soft-gray)" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <span className="eyebrow">Essays &amp; Reflections</span>
            <h1 style={{ marginTop: "var(--space-xs)", marginBottom: "var(--space-md)" }}>
              Articles
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: "1.75" }}>
              Frameworks, observations, and ideas on innovation, leadership, and navigating uncertainty.
              The complete body of work from Jeremiah Gardner.
            </p>
          </div>
        </section>

        {featuredEssays.length > 0 && (
          <section className="section">
            <div className="container">
              <p className="eyebrow" style={{ marginBottom: "var(--space-md)", color: "var(--gold)" }}>
                Featured Essays
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {featuredEssays.map((essay) => (
                  <Link
                    key={essay.slug}
                    href={`/articles/${essay.slug}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "start",
                      gap: "var(--space-md)",
                      padding: "var(--space-md) 0",
                      borderBottom: "1px solid var(--soft-gray)",
                      textDecoration: "none",
                      color: "var(--ink)",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center", marginBottom: "8px" }}>
                        <span className="eyebrow" style={{ color: "var(--gold)" }}>
                          {(essay as Article & { tag?: string }).tag || "Essay"}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{formatDate(essay.date)}</span>
                      </div>
                      <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{essay.title}</h2>
                      <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: "60ch" }}>{essay.excerpt}</p>
                    </div>
                    <span style={{ fontSize: "1.2rem", color: "var(--gold)", paddingTop: "4px" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {fieldNotes.length > 0 && (
          <section className="section">
            <div className="container">
              <p className="eyebrow" style={{ marginBottom: "var(--space-md)", color: "var(--gold)" }}>
                Field Notes Archive
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {fieldNotes.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/articles/${post.slug}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "start",
                      gap: "var(--space-md)",
                      padding: "var(--space-md) 0",
                      borderBottom: "1px solid var(--soft-gray)",
                      textDecoration: "none",
                      color: "var(--ink)",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center", marginBottom: "8px" }}>
                        <span className="eyebrow" style={{ color: "var(--gold)" }}>
                          {(post as Article & { tag?: string }).tag || "Article"}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{formatDate(post.date)}</span>
                      </div>
                      <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{post.title}</h2>
                      <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: "60ch" }}>{post.excerpt}</p>
                    </div>
                    <span style={{ fontSize: "1.2rem", color: "var(--gold)", paddingTop: "4px" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <SiteFooter />
      </div>
    </>
  )
}