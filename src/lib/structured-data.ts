import { frameworks } from './frameworks'
import { SITE_URL, pageInfo } from './metadata'

const organizationId = `${SITE_URL}/#organization`
const personId = 'https://jeremiahgardner.com/#person'
const termSetId = `${SITE_URL}/frameworks#set`

export const organizationAndWebsite = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Gardner Expedition Co.',
      url: SITE_URL,
      logo: `${SITE_URL}/GEC_Primary_Mark.png`,
      description: 'Frameworks, books, diagnostics, and advisory systems that help leaders navigate uncertainty before it becomes drift.',
      founder: {
        '@type': 'Person',
        '@id': personId,
        name: 'Jeremiah Gardner',
        url: 'https://jeremiahgardner.com',
      },
      subOrganization: {
        '@type': 'Organization',
        '@id': 'https://haloclinepress.com/#organization',
        name: 'Halocline Press',
        url: 'https://haloclinepress.com',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Gardner Expedition Co.',
      publisher: { '@id': organizationId },
    },
  ],
}

export const aboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${SITE_URL}/about`,
  mainEntity: { '@id': organizationId },
}

export function frameworkTerm(path: string) {
  const framework = frameworks.find(item => item.href === path)
  if (!framework) throw new Error(`Unknown framework: ${path}`)
  const info = pageInfo[path as keyof typeof pageInfo]
  if (!info) throw new Error(`Missing framework metadata: ${path}`)
  const book = path === '/frameworks/the-read'
    ? { slug: 'the-read', name: 'The Read' }
    : path === '/frameworks/goldline'
      ? { slug: 'the-goldline', name: 'The Goldline' }
      : null

  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${SITE_URL}${path}#term`,
    name: framework.name.replace(/™/g, ''),
    url: `${SITE_URL}${path}`,
    description: info.description.replace(/™/g, ''),
    inDefinedTermSet: { '@id': termSetId },
    ...(book ? {
      subjectOf: {
        '@type': 'Book',
        '@id': `https://haloclinepress.com/books/${book.slug}#book`,
        name: book.name,
        url: `https://haloclinepress.com/books/${book.slug}`,
      },
    } : {}),
  }
}

export function frameworkTermSet() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': termSetId,
    name: 'Gardner Expedition Co. Frameworks',
    url: `${SITE_URL}/frameworks`,
    creator: { '@id': personId },
    publisher: { '@id': organizationId },
    hasDefinedTerm: frameworks.map(framework => frameworkTerm(framework.href)),
  }
}

export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
