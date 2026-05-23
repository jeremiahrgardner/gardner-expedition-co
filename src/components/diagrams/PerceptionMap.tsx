"use client"

import { useState } from 'react'

/**
 * PerceptionMap — annotated diagnostic field diagram for The Read.
 * Shows the gap between what is observed and what is interpreted — the core
 * perceptual failure at the heart of the book's argument.
 *
 * Style: stroke-only, monochrome ink on paper. Hand-drawn energy — imperfect
 * lines, slightly uneven tick marks. Annotation text in small uppercase sans.
 */
interface PerceptionMapProps {
  className?: string
  width?: number
  height?: number
}

export default function PerceptionMap({
  className = '',
  width = 480,
  height = 320,
}: PerceptionMapProps) {
  const [highlighted, setHighlighted] = useState<number | null>(null)

  // Field annotation labels
  const annotations = [
    { x: 28, y: 28, text: 'THE OBSERVED', size: 8 },
    { x: 300, y: 28, text: 'THE INTERPRETED', size: 8 },
    { x: 28, y: 295, text: '— field note 001', size: 7, italic: true },
  ]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="Perception map diagram — showing the gap between observation and interpretation"
      role="img"
      style={{ cursor: 'default' }}
    >
      {/* === LEFT ZONE: The Observed === */}
      {/* Zone border */}
      <rect x="20" y="44" width="190" height="220"
            fill="none" stroke="#111111" strokeWidth="0.7" opacity="0.25"
            strokeDasharray="4 3" />

      {/* Observed signal — scattered data points */}
      {[ 55, 90, 72, 108, 63, 95, 82, 118, 70, 100, 88, 76, 110, 65, 98, 84, 112, 74, 102, 92 ].map((y, i) => (
        <circle key={i} cx={35 + (i % 5) * 22} cy={68 + Math.floor(i / 5) * 32}
                r="2.5" fill="#111111" opacity="0.35" />
      ))}

      {/* Label */}
      <text x="28" y="28" fontSize="8" fontFamily="Inter, sans-serif"
            letterSpacing="0.18em" fill="#111111" opacity="0.5" fontWeight="500">
        THE OBSERVED
      </text>

      {/* === GAP ZONE: Distortion === */}
      {/* Wavy distortion lines through the gap */}
      {[0, 1, 2, 3, 4].map(i => (
        <path
          key={i}
          d={`M ${218} ${70 + i * 36} Q ${240} ${85 + i * 36} ${218} ${100 + i * 36} Q ${240} ${115 + i * 36} ${218} ${130 + i * 36}`}
          fill="none" stroke="#B89B5E" strokeWidth="0.6" opacity="0.5"
          style={{ transition: 'opacity 0.8s ease' }}
        />
      ))}

      {/* Gap label */}
      <text x="218" y={height / 2 + 4} fontSize="7" fontFamily="Inter, sans-serif"
            letterSpacing="0.12em" fill="#B89B5E" opacity="0.6" textAnchor="middle"
            fontStyle="italic">
        distortion
      </text>

      {/* === RIGHT ZONE: The Interpreted === */}
      {/* Zone border */}
      <rect x="266" y="44" width="190" height="220"
            fill="none" stroke="#111111" strokeWidth="0.7" opacity="0.25"
            strokeDasharray="4 3" />

      {/* Clean organized grid — the interpreted structure */}
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => (
          <rect key={`${row}-${col}`}
                x={272 + col * 22} y={72 + row * 30}
                width="14" height="8" fill="none"
                stroke="#111111" strokeWidth="0.6"
                opacity={highlighted === row * 8 + col ? "0.6" : "0.2"}
                onMouseEnter={() => setHighlighted(row * 8 + col)}
                onMouseLeave={() => setHighlighted(null)}
                style={{ cursor: 'default', transition: 'opacity 0.4s ease' }}
          />
        ))
      )}

      {/* Label */}
      <text x="274" y="28" fontSize="8" fontFamily="Inter, sans-serif"
            letterSpacing="0.18em" fill="#111111" opacity="0.5" fontWeight="500">
        THE INTERPRETED
      </text>

      {/* Arrow from Observed → Interpreted */}
      <path d="M 210 158 L 264 158" stroke="#111111" strokeWidth="0.8" opacity="0.4"
            markerEnd="url(#arrowhead)" />
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#111111" opacity="0.4" />
        </marker>
      </defs>

      {/* Bottom annotation */}
      <text x={width / 2} y="288" fontSize="7" fontFamily="Inter, sans-serif"
            letterSpacing="0.1em" fill="#111111" opacity="0.35" textAnchor="middle"
            fontStyle="italic">
        — perception constructs the grid —
      </text>

      {/* Corner tick marks */}
      <path d="M 20 44 L 20 54 M 20 44 L 30 44" stroke="#111111" strokeWidth="0.6" opacity="0.3" fill="none" />
      <path d={`M ${width - 20} 44 L ${width - 20} 54 M ${width - 20} 44 L ${width - 30} 44`}
            stroke="#111111" strokeWidth="0.6" opacity="0.3" fill="none" />
      <path d={`M 20 ${height - 44} L 20 ${height - 54} M 20 ${height - 44} L 30 ${height - 44}`}
            stroke="#111111" strokeWidth="0.6" opacity="0.3" fill="none" />
    </svg>
  )
}
