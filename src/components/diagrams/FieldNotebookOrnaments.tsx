"use client"

/**
 * FieldNotebookOrnaments — ornamental SVG elements for the Halocline Press
 * ecosystem. These are the visual language of the "expedition archive" aesthetic.
 *
 * Variants:
 *   divider — horizontal section break
 *   diamond — sparse reading pause marker
 *   cross — marginalia annotation marker
 *   bracket — pull-quote framing element
 *   reading-mark — vertical reading progress indicator
 *   asterisk — footnote / aside marker
 */
interface FieldNotebookOrnamentsProps {
  variant?: 'divider' | 'diamond' | 'cross' | 'bracket' | 'reading-mark' | 'asterisk'
  className?: string
  color?: string
  opacity?: number
}

function OrnamentDivider({ className = '', color = '#0A0A0A', opacity = 0.3 }: FieldNotebookOrnamentsProps) {
  return (
    <svg
      viewBox="0 0 120 8"
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      {/* Left rule */}
      <line x1="0" y1="4" x2="48" y2="4" stroke={color} strokeWidth="0.75" opacity={opacity} />
      {/* Center diamond */}
      <rect x="56" y="2.5" width="3" height="3" fill={color} opacity={opacity * 1.2}
            transform="rotate(45 57.5 4)" />
      {/* Right rule */}
      <line x1="63" y1="4" x2="120" y2="4" stroke={color} strokeWidth="0.75" opacity={opacity} />
    </svg>
  )
}

function OrnamentDiamond({ className = '', color = '#0A0A0A', opacity = 0.25 }: FieldNotebookOrnamentsProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <rect x="7" y="7" width="6" height="6" fill={color} opacity={opacity}
            transform="rotate(45 10 10)" />
    </svg>
  )
}

function OrnamentCross({ className = '', color = '#F1C233', opacity = 0.4 }: FieldNotebookOrnamentsProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      style={{ display: 'block', maxWidth: '32px', maxHeight: '32px' }}
    >
      {/* Horizontal */}
      <line x1="2" y1="8" x2="14" y2="8" stroke={color} strokeWidth="0.8" opacity={opacity} />
      {/* Vertical */}
      <line x1="8" y1="2" x2="8" y2="14" stroke={color} strokeWidth="0.8" opacity={opacity} />
    </svg>
  )
}

function OrnamentBracket({ className = '', color = '#0A0A0A', opacity = 0.2 }: FieldNotebookOrnamentsProps) {
  return (
    <svg
      viewBox="0 0 24 40"
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      {/* Left bracket */}
      <path d="M 8 2 L 2 2 Q 0 2 0 4 L 0 36 Q 0 38 2 38 L 8 38"
            fill="none" stroke={color} strokeWidth="0.8" opacity={opacity} />
      {/* Right bracket */}
      <path d="M 16 2 L 22 2 Q 24 2 24 4 L 24 36 Q 24 38 22 38 L 16 38"
            fill="none" stroke={color} strokeWidth="0.8" opacity={opacity} />
    </svg>
  )
}

function OrnamentReadingMark({ className = '', color = '#F1C233', opacity = 0.35 }: FieldNotebookOrnamentsProps) {
  return (
    <svg
      viewBox="0 0 6 60"
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      {/* Thin vertical reading line with subtle tick marks */}
      <line x1="3" y1="4" x2="3" y2="56" stroke={color} strokeWidth="0.6" opacity={opacity}
            strokeDasharray="0" />
      <line x1="1" y1="14" x2="5" y2="14" stroke={color} strokeWidth="0.5" opacity={opacity * 0.8} />
      <line x1="1" y1="28" x2="5" y2="28" stroke={color} strokeWidth="0.5" opacity={opacity * 0.8} />
      <line x1="1" y1="42" x2="5" y2="42" stroke={color} strokeWidth="0.5" opacity={opacity * 0.8} />
    </svg>
  )
}

function OrnamentAsterisk({ className = '', color = '#0A0A0A', opacity = 0.3 }: FieldNotebookOrnamentsProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      aria-hidden="true"
      style={{ display: 'block', maxWidth: '24px', maxHeight: '24px' }}
    >
      <line x1="10" y1="2" x2="10" y2="18" stroke={color} strokeWidth="0.75" opacity={opacity} />
      <line x1="3" y1="6" x2="17" y2="14" stroke={color} strokeWidth="0.75" opacity={opacity} />
      <line x1="17" y1="6" x2="3" y2="14" stroke={color} strokeWidth="0.75" opacity={opacity} />
    </svg>
  )
}

export default function FieldNotebookOrnaments({
  variant = 'divider',
  className = '',
  color = '#0A0A0A',
  opacity,
}: FieldNotebookOrnamentsProps) {
  const defaultOpacity = {
    divider: 0.3,
    diamond: 0.25,
    cross: 0.4,
    bracket: 0.2,
    'reading-mark': 0.35,
    asterisk: 0.3,
  }
  const appliedOpacity = opacity ?? defaultOpacity[variant] ?? 0.3

  switch (variant) {
    case 'divider':    return <OrnamentDivider    className={className} color={color} opacity={appliedOpacity} />
    case 'diamond':     return <OrnamentDiamond    className={className} color={color} opacity={appliedOpacity} />
    case 'cross':      return <OrnamentCross      className={className} color={color} opacity={appliedOpacity} />
    case 'bracket':    return <OrnamentBracket    className={className} color={color} opacity={appliedOpacity} />
    case 'reading-mark': return <OrnamentReadingMark className={className} color={color} opacity={appliedOpacity} />
    case 'asterisk':   return <OrnamentAsterisk   className={className} color={color} opacity={appliedOpacity} />
    default:           return <OrnamentDivider    className={className} color={color} opacity={appliedOpacity} />
  }
}
