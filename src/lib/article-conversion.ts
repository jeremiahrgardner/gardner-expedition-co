import { articleTags, type Article } from './articles'

// Reader capture and next steps for articles.
// Order of priority: Field Notes signup first, then one commercial next step
// chosen by the article's topics. Copy here is factual only (no new claims).

export type NextStep = {
  id: 'deadreckon' | 'speaking'
  eyebrow: string
  heading: string
  text: string
  href: string
  linkLabel: string
}

const DEADRECKON: NextStep = {
  id: 'deadreckon',
  eyebrow: 'For leaders and teams',
  heading: 'Working through this with your team?',
  text: 'DeadReckon helps leaders and teams put Diagnostic Leadership into practice.',
  href: 'https://deadreckon.io/programs?utm_source=gardnerexpedition.co&utm_medium=article&utm_campaign=next_step',
  linkLabel: 'See DeadReckon programs',
}

const SPEAKING: NextStep = {
  id: 'speaking',
  eyebrow: 'For event planners',
  heading: 'Planning an offsite or conference?',
  text: 'Jeremiah speaks to leadership teams and association conferences. The Read is his keynote on Diagnostic Leadership.',
  href: 'https://jeremiahgardner.com/speaking/theread?utm_source=gardnerexpedition.co&utm_medium=article&utm_campaign=next_step',
  linkLabel: 'See the keynote',
}

const TEAM_TOPICS = new Set(['Leadership', 'Teams & Culture'])

export function nextStepFor(article: Article): NextStep {
  const tags = articleTags(article)
  return tags.some(tag => TEAM_TOPICS.has(tag)) ? DEADRECKON : SPEAKING
}

function isPlainParagraph(block: string | undefined): boolean {
  const b = (block ?? '').trim()
  if (!b) return false
  return !/^(##|> |\* |\d+\.\s)/.test(b)
}

/**
 * Adds a mid-article Field Notes signup for articles long enough to carry one,
 * unless the article already places its own. Lands between two ordinary
 * paragraphs past the midpoint, never inside a list, quote or next to a heading.
 */
export function withMidArticleSignup(blocks: string[]): string[] {
  if (blocks.some(b => b.trim().startsWith('##SIGNUP##'))) return blocks
  const words = blocks.join(' ').split(/\s+/).filter(Boolean).length
  if (words < 450) return blocks
  const start = Math.floor(blocks.length * 0.5)
  const end = Math.floor(blocks.length * 0.8)
  for (let i = Math.max(start, 2); i <= end; i++) {
    if (isPlainParagraph(blocks[i - 1]) && isPlainParagraph(blocks[i])) {
      return [...blocks.slice(0, i), '##SIGNUP## mid', ...blocks.slice(i)]
    }
  }
  return blocks
}

// ─── Index hygiene ─────────────────────────────────────────────────────────────
// Weekly Field Notes digests are short roundups of other articles. They stay
// readable on the site but are kept out of search so the full articles rank.
export function isIndexable(article: Article): boolean {
  return !article.slug.startsWith('Field-Notes-')
}

// Older articles that cover the same ground as a newer, fuller version.
// Search engines are pointed at the newer one so the two don't compete.
const CANONICAL_TO: Record<string, string> = {
  'The-Anchors-of-Innovation-Strategy': 'The-4-Anchors-of-Innovation-Strategy-And-Why-Most-Companies-Get-Them-Wrong',
}

export function canonicalSlugFor(article: Article): string {
  return CANONICAL_TO[article.slug] ?? article.slug
}
