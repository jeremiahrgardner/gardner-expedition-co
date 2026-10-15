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

export function createPageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  return {
    title: path === '/' ? { absolute: title } : title,
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

export function articleDescription(article: Article, articles: Article[]): string {
  const uniqueExcerpt = article.excerpt && articles.filter(item => item.excerpt === article.excerpt).length === 1
  return uniqueExcerpt ? article.excerpt : article.paragraphs.join(' ').slice(0, 155)
}
