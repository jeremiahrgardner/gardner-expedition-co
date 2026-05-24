"use client"

import { useState } from 'react'

/**
 * GoldlineDiagram — annotated field diagram for The Goldline.
 * Visualizes the main guideline concept in cave diving — the goldline that
 * allows orientation when visibility, distance, and certainty fail.
 *
 * The diagram shows a cave passage with the goldline thread, and the diver's
 * perception narrowing as they move deeper into the cave.
 */
interface GoldlineDiagramProps {
  className?: string
  width?: number
  height?: number
}

export default function GoldlineDiagram({
  className = '',
  width = 520,
  height = 280,
}: GoldlineDiagramProps) {
  const [hovered, setHovered] = useState(false)

  // Cave passage walls — irregular, hand-drawn feel
  const topWall = `M 20 80 Q 80 72 140 78 Q 200 84 260 76 Q 320 68 380 74 Q 440 80 500 76 L 500 20 L 20 20 Z`
  const bottomWall = `M 20 200 Q 80 208 140 202 Q 200 196 260 204 Q 320 212 380 206 Q 440 200 500 204 L 500 260 L 20 260 Z`

  // The goldline path — slightly irregular, the main orientation line
  const goldline = `M 20 140 Q 100 138 180 142 Q 260 146 340 140 Q 420 134 500 138`

  // Visibility cone — narrows as it goes deeper
  const visibilityLeft = `M 80 140 L 40 100 L 40 180 Z`
  const visibilityRight = `M 120 140 L 160 110 L 160 170 Z`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="Goldline diagram — cave passage with orientation line"
      role="img"
      style={{ cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cave walls */}
      <path d={topWall} fill="#0A0A0A" opacity="0.06" />
      <path d={bottomWall} fill="#0A0A0A" opacity="0.06" />

      {/* Wall outlines — stroke only */}
      <path d={topWall} fill="none" stroke="#0A0A0A" strokeWidth="0.8" opacity="0.3" />
      <path d={bottomWall} fill="none" stroke="#0A0A0A" strokeWidth="0.8" opacity="0.3" />

      {/* The GOLDLINE — the main guideline */}
      <path
        d={goldline}
        fill="none"
        stroke="#F1C233"
        strokeWidth={hovered ? "1.6" : "1.2"}
        opacity={hovered ? "0.9" : "0.7"}
        style={{ transition: 'stroke-width 0.8s ease, opacity 0.8s ease' }}
      />

      {/* Goldline tick marks — orientation markers along the line */}
      {[160, 220, 280, 340, 400, 460].map((x, i) => (
        <line key={i} x1={x} y1={136} x2={x} y2={144}
              stroke="#F1C233" strokeWidth="0.6" opacity="0.5" />
      ))}

      {/* Visibility cone — what the diver can see */}
      <path d={visibilityLeft} fill="#0A0A0A" opacity={hovered ? "0.08" : "0.04"}
            style={{ transition: 'opacity 0.8s ease' }} />
      <path d={visibilityRight} fill="#0A0A0A" opacity={hovered ? "0.08" : "0.04"}
            style={{ transition: 'opacity 0.8s ease' }} />

      {/* Diver indicator — small dot at starting point */}
      <circle cx="80" cy="140" r="4" fill="none" stroke="#0A0A0A" strokeWidth="0.8" opacity="0.4" />
      <circle cx="80" cy="140" r="1.5" fill="#0A0A0A" opacity="0.4" />

      {/* Annotation: Entry */}
      <text x="76" y="158" fontSize="7" fontFamily="Inter, sans-serif"
            letterSpacing="0.1em" fill="#0A0A0A" opacity="0.4" textAnchor="middle"
            fontStyle="italic">
        entry
      </text>

      {/* Annotation: Deep */}
      <text x="440" y="126" fontSize="7" fontFamily="Inter, sans-serif"
            letterSpacing="0.1em" fill="#F1C233" opacity="0.6" textAnchor="middle"
            fontStyle="italic">
        uncertainty threshold
      </text>

      {/* Label: Goldline */}
      <text x="300" y="132" fontSize="7.5" fontFamily="Inter, sans-serif"
            letterSpacing="0.14em" fill="#F1C233" opacity="0.8" textAnchor="middle"
            fontWeight="500">
        GOLDLINE
      </text>

      {/* Depth markers */}
      {[60, 120, 200, 280, 360, 440].map((x, i) => (
        <text key={i} x={x} y="270" fontSize="6.5" fontFamily="Inter, sans-serif"
              letterSpacing="0.08em" fill="#0A0A0A" opacity="0.3" textAnchor="middle">
          {`${10 + i * 8}m`}
        </text>
      ))}

      {/* Top label */}
      <text x={width / 2} y="18" fontSize="7.5" fontFamily="Inter, sans-serif"
            letterSpacing="0.2em" fill="#0A0A0A" opacity="0.4" textAnchor="middle"
            fontWeight="500">
        CAVE PASSAGE — ORIENTATION LINE
      </text>
    </svg>
  )
}
