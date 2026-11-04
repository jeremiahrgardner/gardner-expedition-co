import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fetchAllArticles } from '@/lib/notion'
import { SITE_URL, articleDescription } from '@/lib/metadata'
import { articleTags } from '@/lib/articles'
import { canonicalSlugFor, isIndexable } from '@/lib/article-conversion'

// llms.txt: the hand-written site summary, followed by every indexable article
// so AI search tools can find and cite the full library. Rebuilt with the articles.
export const revalidate = 21600

export async function GET() {
  const header = await readFile(join(process.cwd(), 'src/lib/content/llms-header.md'), 'utf8')
  const articles = (await fetchAllArticles()).filter(a => isIndexable(a) && canonicalSlugFor(a) === a.slug)
  const byTopic = new Map<string, string[]>()
  for (const article of articles) {
    const topic = articleTags(article)[0] || 'Other'
    const line = `- [${article.title}](${SITE_URL}/articles/${encodeURIComponent(article.slug)}): ${articleDescription(article, articles)}`
    byTopic.set(topic, [...(byTopic.get(topic) ?? []), line])
  }
  const sections = Array.from(byTopic.entries())
    .sort((a, b) => b[1].length - a[1].length)
    .map(([topic, lines]) => `### ${topic}\n\n${lines.join('\n')}`)
    .join('\n\n')
  const body = `${header.trimEnd()}\n\n## Articles by Jeremiah Gardner\n\n${sections}\n`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
