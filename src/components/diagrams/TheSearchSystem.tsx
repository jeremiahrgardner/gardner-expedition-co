"use client"

import { useState } from 'react'

/**
 * TheSearchSystem — two-track parallel organization diagram.
 * Shows exploration and exploitation as parallel, permanent functions
 * connected by shared governance and measurement.
 */
interface TheSearchSystemProps {
  className?: string
  width?: number
  height?: number
}

export default function TheSearchSystem({
  className = '',
  width = 520,
  height = 340,
}: TheSearchSystemProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="The Search System diagram — parallel exploration and exploitation tracks"
      role="img"
    >
      {/* Top governance bar */}
      <rect x="40" y="28" width="440" height="44" fill="#0A0A0A" opacity="0.05" rx="1" />
      <rect x="40" y="28" width="440" height="44" fill="none" stroke="#0A0A0A" strokeWidth="0.7" opacity="0.2" rx="1" />
      <text x="260" y="44" fontSize="7.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.2em" fill="#0A0A0A" opacity="0.5" textAnchor="middle" fontWeight="600">
        GOVERNANCE &amp; MEASUREMENT LAYER
      </text>
      {/* Tick marks under governance */}
      {[130, 200, 260, 320, 390].map((x, i) => (
        <line key={i} x1={x} y1="72" x2={x} y2="76" stroke="#F1C233" strokeWidth="0.6" opacity="0.4" />
      ))}

      {/* Two-track labels */}
      <text x="56" y="118" fontSize="7" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.18em" fill="#0A0A0A" opacity="0.45" fontWeight="600">
        EXPLOITATION TRACK
      </text>
      <text x="56" y="236" fontSize="7" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.18em" fill="#F1C233" opacity="0.7" fontWeight="600">
        EXPLORATION TRACK
      </text>

      {/* Exploitation track — solid, flowing */}
      <rect x="40" y="126" width="440" height="56" fill="#0A0A0A" opacity="0.04" rx="1"
            onMouseEnter={() => setHovered('exploit')} onMouseLeave={() => setHovered(null)}
            style={{ transition: 'opacity 0.5s ease' }} />
      <rect x="40" y="126" width="440" height="56" fill="none" stroke="#0A0A0A" strokeWidth={hovered === 'exploit' ? '1' : '0.7'} opacity={hovered === 'exploit' ? '0.4' : '0.2'} rx="1" />
      {/* Exploitation flow arrow */}
      <line x1="60" y1="154" x2="450" y2="154" stroke="#0A0A0A" strokeWidth="0.6" opacity="0.25" strokeDasharray="4 3" />
      <polygon points="450,150 462,154 450,158" fill="#0A0A0A" opacity="0.25" />
      <text x="260" y="154" fontSize="7" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.05em" fill="#0A0A0A" opacity={hovered === 'exploit' ? '0.55' : '0.3'} textAnchor="middle" fontStyle="italic">
        executing known capability
      </text>

      {/* Exploration track — more active, dashed, deliberate */}
      <rect x="40" y="200" width="440" height="80" fill="#F1C233" opacity="0.03" rx="1"
            onMouseEnter={() => setHovered('explore')} onMouseLeave={() => setHovered(null)}
            style={{ transition: 'opacity 0.5s ease' }} />
      <rect x="40" y="200" width="440" height="80" fill="none" stroke="#F1C233" strokeWidth={hovered === 'explore' ? '1' : '0.7'} opacity={hovered === 'explore' ? '0.5' : '0.3'} strokeDasharray="6 3" rx="1" />

      {/* Exploration stages */}
      {[
        { x: 70, label: 'discover', sub: 'signal detection' },
        { x: 158, label: 'validate', sub: 'evidence building' },
        { x: 246, label: 'invest', sub: 'option creation' },
        { x: 334, label: 'scale', sub: 'capability building' },
        { x: 422, label: 'integrate', sub: 'permanent function' },
      ].map((stage, i) => (
        <g key={i}>
          <line x1={stage.x + 18} y1="208" x2={stage.x + 18} y2="272" stroke="#F1C233" strokeWidth="0.5" opacity="0.25" strokeDasharray="2 2" />
          <circle cx={stage.x + 18} cy="240" r={hovered === 'explore' ? '9' : '7'}
                  fill="#F1C233" opacity={hovered === 'explore' ? '0.15' : '0.08'}
                  style={{ transition: 'r 0.5s ease, opacity 0.5s ease' }} />
          <circle cx={stage.x + 18} cy="240" r="3" fill="none" stroke="#F1C233" strokeWidth="0.7" opacity={hovered === 'explore' ? '0.7' : '0.45'} />
          <text x={stage.x + 18} y="256" fontSize="6.5" fontFamily="EB Garamond, sans-serif"
                letterSpacing="0.08em" fill="#F1C233" opacity="0.55" textAnchor="middle">
            {stage.label}
          </text>
          <text x={stage.x + 18} y="267" fontSize="5.5" fontFamily="EB Garamond, sans-serif"
                letterSpacing="0.04em" fill="#0A0A0A" opacity="0.3" textAnchor="middle" fontStyle="italic">
            {stage.sub}
          </text>
        </g>
      ))}

      {/* Connection lines — governance to tracks */}
      <line x1="130" y1="72" x2="130" y2="126" stroke="#F1C233" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
      <line x1="130" y1="200" x2="130" y2="72" stroke="#F1C233" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
      <line x1="390" y1="72" x2="390" y2="200" stroke="#F1C233" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />

      {/* Top label */}
      <text x={width / 2} y="16" fontSize="7.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.22em" fill="#0A0A0A" opacity="0.35" textAnchor="middle" fontWeight="500">
        PERMANENT EXPLORATION FUNCTION
      </text>

      {/* Bottom annotation */}
      <text x="460" y="308" fontSize="6.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.06em" fill="#0A0A0A" opacity="0.28" textAnchor="end" fontStyle="italic">
        hover to explore stages
      </text>
    </svg>
  )
}
