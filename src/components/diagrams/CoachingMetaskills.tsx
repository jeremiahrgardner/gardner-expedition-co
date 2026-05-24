"use client"

import { useState } from 'react'

/**
 * CoachingMetaskills — layered human capability diagram.
 * Shows the five metaskills as concentric rings around the
 * coach-client relationship — the primary instrument.
 */
interface CoachingMetaskillsProps {
  className?: string
  width?: number
  height?: number
}

const metaskills = [
  { name: 'SELF-AWARENESS',    ring: 5, color: '#0A0A0A', desc: 'Notice your own patterns in real time' },
  { name: 'OBSERVATION',       ring: 4, color: '#0A0A0A', desc: 'Attend to what is actually present' },
  { name: 'DIAGNOSIS',         ring: 3, color: '#F1C233', desc: 'Distinguish what is from what appears' },
  { name: 'INTERVENTION',      ring: 2, color: '#F1C233', desc: 'Time and frame challenge deliberately' },
  { name: 'EXPERIMENTATION',   ring: 1, color: '#F1C233', desc: 'Build capacity to test and learn' },
]

export default function CoachingMetaskills({
  className = '',
  width = 480,
  height = 480,
}: CoachingMetaskillsProps) {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null)
  const cx = width / 2
  const cy = height / 2

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="Coaching Metaskills diagram — five layered human capabilities"
      role="img"
    >
      {/* Outer context ring */}
      <circle cx={cx} cy={cy} r="220" fill="none"
              stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />

      {metaskills.map((skill, i) => {
        const r = 40 + skill.ring * 34
        const isHovered = hoveredRing === skill.ring
        return (
          <g key={i}
             onMouseEnter={() => setHoveredRing(skill.ring)}
             onMouseLeave={() => setHoveredRing(null)}
             style={{ cursor: 'default' }}>
            {/* Ring fill */}
            <circle
              cx={cx} cy={cy} r={r}
              fill={skill.color === '#F1C233' ? '#F1C233' : '#0A0A0A'}
              opacity={isHovered ? 0.09 : 0.04}
              style={{ transition: 'opacity 0.5s ease' }}
            />
            {/* Ring stroke */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={skill.color}
              strokeWidth={isHovered ? "1" : "0.7"}
              opacity={isHovered ? 0.6 : 0.35}
              strokeDasharray={skill.ring % 2 === 0 ? "none" : "3 3"}
              style={{ transition: 'opacity 0.5s ease, stroke-width 0.4s ease' }}
            />
            {/* Skill label on ring */}
            <text
              x={cx + 8} y={cy - r + 14}
              fontSize="6.5" fontFamily="EB Garamond, sans-serif"
              letterSpacing="0.16em" fill={skill.color}
              opacity={isHovered ? 0.85 : 0.5}
              fontWeight={isHovered ? "600" : "400"}
              style={{ transition: 'opacity 0.5s ease' }}
            >
              {skill.name}
            </text>
            {/* Hover description */}
            {isHovered && (
              <text x={cx} y={cy + r + 18} fontSize="6.5" fontFamily="EB Garamond, sans-serif"
                    letterSpacing="0.04em" fill={skill.color} opacity="0.65" textAnchor="middle" fontStyle="italic">
                {skill.desc}
              </text>
            )}
          </g>
        )
      })}

      {/* Center — the primary instrument */}
      <circle cx={cx} cy={cy} r="22" fill="#0A0A0A" opacity="0.12" />
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#F1C233" strokeWidth="1.2" opacity="0.6" />
      <text x={cx} y={cy - 4} fontSize="6.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.1em" fill="#0A0A0A" opacity="0.6" textAnchor="middle" fontWeight="600">
        THE
      </text>
      <text x={cx} y={cy + 7} fontSize="6.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.1em" fill="#0A0A0A" opacity="0.6" textAnchor="middle" fontWeight="600">
        RELATIONSHIP
      </text>

      {/* Top label */}
      <text x={width / 2} y="18" fontSize="7.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.2em" fill="#0A0A0A" opacity="0.35" textAnchor="middle" fontWeight="500">
        HUMAN CAPABILITY ARCHITECTURE
      </text>

      {/* Bottom annotation */}
      <text x={width / 2} y={height - 14} fontSize="6.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.06em" fill="#0A0A0A" opacity="0.25" textAnchor="middle" fontStyle="italic">
        hover the rings to explore each metaskill
      </text>
    </svg>
  )
}
