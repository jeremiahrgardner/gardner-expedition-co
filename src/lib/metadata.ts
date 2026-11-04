import type { Metadata } from 'next'
import type { Article } from './articles'

export const SITE_URL = 'https://www.gardnerexpedition.co'
const SITE_NAME = 'Gardner Expedition Co.'

export const pageInfo = {
  "/": {
    "title": "Gardner Expedition Co. — Frameworks for Navigating Uncertainty",
    "description": "An intellectual ecosystem for frameworks, diagnostics, essays, and applied exploration in organizational growth and human development."
  },
  "/frameworks": {
    "title": "Frameworks",
    "description": "Field-tested frameworks for leading through uncertainty: Goldline™, The Read™, The Search System™, Coaching Metaskills™, Progress Metrics™, and more."
  },
  "/frameworks/goldline": {
    "title": "Goldline™ — Centered Exploration Framework",
    "description": "Goldline™ is the framework behind Centered Exploration: finding the line that lets you go further without losing your way."
  },
  "/frameworks/the-read": {
    "title": "The Read™ — Diagnostic Leadership Framework",
    "description": "The Read™ is the framework behind Diagnostic Leadership: seeing what is really happening before deciding what to do next."
  },
  "/frameworks/the-search": {
    "title": "The Search System™",
    "description": "An operating model that makes continuous discovery and validation of new opportunities a permanent enterprise function."
  },
  "/frameworks/coaching-metaskills": {
    "title": "Coaching Metaskills™",
    "description": "A capability-building system for leaders and coaches to observe, diagnose, intervene, and learn from evidence."
  },
  "/frameworks/progress-metrics": {
    "title": "Progress Metrics™",
    "description": "A measurement system for tracking learning, confidence, and opportunity progress before traditional business metrics exist."
  },
  "/frameworks/program-as-product": {
    "title": "Program as a Product™",
    "description": "A change philosophy that treats organizational programs as evolving products shaped by stakeholder insight and evidence."
  },
  "/frameworks/exploration-imperative": {
    "title": "Exploration Imperative™",
    "description": "A strategic principle for building organizational cultures that treat uncertainty as a design condition through which durable growth is actually achieved."
  },
  "/about": {
    "title": "About",
    "description": "Gardner Expedition Co., founded by Jeremiah Gardner, builds frameworks, books, diagnostics, and advisory systems for leaders navigating uncertainty."
  },
  "/expeditions": {
    "title": "Expeditions",
    "description": "Frameworks shaped through years of enterprise transformation work with global organizations navigating uncertainty, growth, and strategic reinvention."
  },
  "/diagnostics": {
    "title": "Diagnostics",
    "description": "Diagnostics that help leaders and organizations make uncertainty visible, with tools available in pilot form and others currently under active development."
  },
  "/start-here": {
    "title": "Start Here",
    "description": "An ecosystem of frameworks, diagnostics, books, and advisory systems. Find the entry point that fits where you are and where you need to move as a leader."
  },
  "/articles": {
    "title": "Articles",
    "description": "Frameworks, observations, and ideas on innovation, leadership, and navigating uncertainty. Explore the complete body of written work from Jeremiah Gardner."
  },
  "/media": {
    "title": "Media",
    "description": "Books, podcast conversations, keynote speaking, and organizational facilitation. The work is primarily done in the room, but some of it leaves a record."
  },
  "/field-notes": {
    "title": "Field Notes",
    "description": "Observations, principles, and explorations from the intersection of strategy, psychology, and organizational life. Published when something is worth saying."
  },
  "/field-notes/navigating-uncertainty": {
    "title": "On Navigating Uncertainty Without a Map",
    "description": "The absence of certainty is not the absence of direction. It is the condition under which direction is most honestly discovered."
  }
} as const

export function createPageMetadata(path: string, title: string, description: string, options: { absoluteIfLong?: boolean } = {}): Metadata {
  // Search results cut titles near 60 characters. When the site name would push a
  // long headline past that, the headline alone is used so it isn't truncated.
  const suffixed = `${title} | ${SITE_NAME}`
  const absolute = path === '/' || (options.absoluteIfLong && suffixed.length > 60)
  const fullTitle = absolute ? title : suffixed
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: { title: fullTitle, description, url },
    twitter: { card: 'summary', title: fullTitle, description, creator: '@JeremiahGardner' },
  }
}

export function metadataFor(path: keyof typeof pageInfo): Metadata {
  const { title, description } = pageInfo[path]
  return createPageMetadata(path, title, description)
}

const DESCRIPTION_MAX = 158

/** Removes site markup so descriptions show only the author's words. */
function plain(text: string): string {
  return text.replace(/<a\s[^>]*>([^<]*)<\/a>/gi, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/_([^_]+)_/g, '$1').replace(/\s+/g, ' ').trim()
}

/**
 * Older imports glued a section label onto the first sentence
 * ("The Next HorizonIn contemplating…", "I. Notes From Me 1. …").
 * Drop that label so the description starts with the author's first sentence.
 */
function withoutLeadLabel(text: string): string {
  let t = text
    .replace(/^Here's this week's Field Notes\.\s*/i, '')
    .replace(/^I\.\s*Notes From Me\s*1\.\s*[^"“]{0,110}["“]/i, '')
    .replace(/^Innovation Leadership Series Part I{1,3}(?=[A-Z][a-z'’])/, '')
  const glued = t.slice(0, 110).search(/[a-z?](?=["“”]?[A-Z][a-z'’ ])/)
  // Only a label (no sentence punctuation before the join) is removed, so real
  // words like "PowerPoint" or "LinkedIn" inside a sentence are left alone.
  if (glued > 0 && /^[^.,:;!"“”–—]*\??$/.test(t.slice(0, glued))) t = t.slice(glued + 1)
  t = t.trim()
  if ((t.match(/["“”]/g) ?? []).length % 2 === 1) t = /^["“”]/.test(t) ? t.slice(1).trim() : t.replace(/["”]$/, '')
  return t
}

/** Keeps whole sentences from the start of the text, up to the length search results show. */
function wholeSentences(text: string): string {
  const sentences = text.match(/[^.!?]+[.!?]+["'”’)]*(\s|$)/g) ?? []
  let out = ''
  for (const sentence of sentences) {
    const next = (out + sentence).trim()
    if (next.length > DESCRIPTION_MAX) break
    out = next + ' '
  }
  out = out.trim()
  if (out.length >= 70 || (out && out.length === text.trim().length)) return out
  if (text.length <= DESCRIPTION_MAX) return text.trim()
  // No sentence boundary fits: cut at a word boundary instead of mid-word.
  const cut = text.slice(0, DESCRIPTION_MAX - 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '') + '…'
}

export function articleDescription(article: Article, articles: Article[]): string {
  const excerpt = plain((article.excerpt ?? '').replace(/\.\.\.$|…$/, ''))
  const complete = /[.!?]["”’)]?$/.test(excerpt)
  const uniqueExcerpt = complete && excerpt.length >= 70 && articles.filter(item => item.excerpt === article.excerpt).length === 1
  if (uniqueExcerpt && !/\.\.\.$|…$/.test(article.excerpt) && excerpt.length <= DESCRIPTION_MAX) return excerpt
  const prose = article.paragraphs.map(b => b.trim()).filter(b => b && !/^(##|> |\* |\d+\.\s)/.test(b)).map(plain).join(' ')
  return wholeSentences(withoutLeadLabel(uniqueExcerpt ? excerpt : prose))
}
