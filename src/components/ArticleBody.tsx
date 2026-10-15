import { Fragment } from 'react'
import Link from 'next/link'

export function articleHeadings(blocks: string[]) {
  return blocks.flatMap((block, index) => /^##H[23]##/.test(block.trim()) ? [{ id: `section-${index}`, title: block.trim().slice(6).trim() }] : [])
}

// Render text as React nodes, never as HTML. Noncapturing groups keep italic text
// from appearing twice, and formatting works consistently in lists and quotes.
function inline(text: string) {
  return text.split(/(<a\s[^>]*>[^<]*<\/a>|\*\*[^*]+\*\*|_[^_]+_)/g).map((part, index) => {
    const anchor = part.match(/^<a\s[^>]*href=["']([^"']+)["'][^>]*>([^<]*)<\/a>$/i)
    if (anchor) {
      const legacy: Record<string, string> = { '/getclarity': '/diagnostics', '/books': 'https://www.haloclinepress.com/books', '/speaking': 'https://jeremiahgardner.com' }
      const [path, hash] = anchor[1].split('#')
      const href = (legacy[path] ?? path) + (hash ? `#${hash}` : '')
      if (/^(\/(?!\/)|https?:\/\/)/i.test(href)) return <Link key={index} href={href}>{anchor[2]}</Link>
      return <Fragment key={index}>{anchor[2]}</Fragment>
    }
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (part.startsWith('_') && part.endsWith('_')) return <em key={index}>{part.slice(1, -1)}</em>
    return <Fragment key={index}>{part}</Fragment>
  })
}

export default function ArticleBody({ blocks }: { blocks: string[] }) {
  const rendered = []
  const hasH2 = blocks.some(block => block.startsWith('##H2##'))
  for (let index = 0; index < blocks.length; index++) {
    const block = blocks[index].trim()
    if (!block) continue
    if (/^##H[23]##/.test(block)) {
      const Heading = block.startsWith('##H2##') || !hasH2 ? 'h2' : 'h3'
      rendered.push(<Heading key={index} id={`section-${index}`}>{inline(block.slice(6).trim())}</Heading>)
    } else if (block.startsWith('* ') || /^\d+\.\s/.test(block)) {
      const ordered = /^\d+\.\s/.test(block)
      const start = index
      const items = []
      const pattern = ordered ? /^\d+\.\s/ : /^\* /
      while (index < blocks.length && pattern.test(blocks[index].trim())) {
        items.push(<li key={index}>{inline(blocks[index].trim().replace(pattern, ''))}</li>)
        index++
      }
      rendered.push(ordered ? <ol key={start} start={Number.parseInt(block, 10)}>{items}</ol> : <ul key={start}>{items}</ul>)
      index--
    } else if (block.startsWith('> ')) {
      rendered.push(<blockquote key={index}><p>{inline(block.slice(2))}</p></blockquote>)
    } else if (block === '##HR##') {
      rendered.push(<hr key={index} />)
    } else {
      rendered.push(<p key={index}>{inline(block)}</p>)
    }
  }
  return <div className="reading-prose">{rendered}</div>
}
