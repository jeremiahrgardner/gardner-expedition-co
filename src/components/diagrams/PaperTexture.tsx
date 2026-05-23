"use client"

import { useEffect, useState } from 'react'

/**
 * PaperTexture — SVG noise grain overlay for the expedition archive aesthetic.
 * Applies subtle paper surface texture to any container.
 *
 * Usage:
 *   <div className="relative">
 *     <PaperTexture className="absolute inset-0 z-10 pointer-events-none" />
 *     ...content
 *   </div>
 *
 * Opacity: 0.04 (4%) for hero/background — felt but not seen.
 *          0.08 (8%) for focal texture moments.
 */
interface PaperTextureProps {
  className?: string
  opacity?: number
  variant?: 'fine' | 'coarse' | 'letterpress'
}

export default function PaperTexture({
  className = '',
  opacity = 0.04,
  variant = 'fine',
}: PaperTextureProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const config = {
    fine:      { baseFrequency: 0.75, numOctaves: 4 },
    coarse:    { baseFrequency: 0.55, numOctaves: 3 },
    letterpress: { baseFrequency: 0.85, numOctaves: 5 },
  }
  const { baseFrequency, numOctaves } = config[variant]

  return (
    <svg
      className={`paper-texture-svg ${className}`}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity,
        pointerEvents: 'none',
      }}
    >
      <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves={numOctaves}
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          type="saturate"
          values="0"
          in="noise"
          result="desaturatedNoise"
        />
        <feComponentTransfer in="desaturatedNoise">
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feBlend in="SourceGraphic" in2="desaturatedNoise" mode="overlay" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paper-grain)" />
    </svg>
  )
}
