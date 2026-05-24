"use client"

import { useState } from 'react'

/**
 * ProgramAsProduct — iteration spiral diagram.
 * Shows transformation programs as evolving products, not fixed blueprints.
 * Four phases cycle: Insight → Experiment → Evidence → Evolution
 */
interface ProgramAsProductProps {
  className?: string
  width?: number
  height?: number
}

const phases = [
  { label: 'STAKEHOLDER\nINSIGHT',     angle: 0,   color: '#0A0A0A', desc: 'Understand what people actually need from the change' },
  { label: 'EXPERIMENT\nDESIGN',        angle: 90,  color: '#F1C233', desc: 'Rapid prototypes and low-stakes tests before full rollout' },
  { label: 'ADOPTION\nMETRICS',         angle: 180, color: '#0A0A0A', desc: 'Measure genuine use and value, not just delivery' },
  { label: 'EVIDENCE\nREVIEW',          angle: 270, color: '#F1C233', desc: 'What is working? What needs to change?' },
]

export default function ProgramAsProduct({
  className = '',
  width = 440,
  height = 440,
}: ProgramAsProductProps) {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)
  const cx = width / 2
  const cy = height / 2
  const outerR = 180
  const innerR = 70

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="Program as a Product diagram — iterative transformation cycle"
      role="img"
    >
      {/* Outer reference ring */}
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="#0A0A0A"
              strokeWidth="0.5" strokeDasharray="3 5" opacity="0.15" />

      {/* Spiral iteration arrows between phases */}
      {[0, 90, 180, 270].map((angle, i) => {
        const startAngle = (angle - 45) * Math.PI / 180
        const endAngle   = (angle + 45) * Math.PI / 180
        const mx = cx + Math.cos((angle) * Math.PI / 180) * (innerR + 8)
        const my = cy + Math.sin((angle) * Math.PI / 180) * (innerR + 8)
        return (
          <path
            key={i}
            d={`M ${cx + Math.cos(startAngle) * innerR} ${cy + Math.sin(startAngle) * innerR}
                A ${innerR} ${innerR} 0 0 1 ${cx + Math.cos(endAngle) * innerR} ${cy + Math.sin(endAngle) * innerR}`}
            fill="none" stroke="#F1C233" strokeWidth="1.2" opacity="0.5"
            strokeDasharray="4 3"
          />
        )
      })}

      {/* Inner iteration label */}
      <circle cx={cx} cy={cy} r={innerR} fill="#0A0A0A" opacity="0.03"
              stroke="#F1C233" strokeWidth="0.7" strokeDasharray="2 2" />
      <text x={cx} y={cy - 8} fontSize="7" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.12em" fill="#0A0A0A" opacity="0.4" textAnchor="middle" fontWeight="500">
        PROGRAM
      </text>
      <text x={cx} y={cy + 6} fontSize="7" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.12em" fill="#0A0A0A" opacity="0.4" textAnchor="middle" fontWeight="500">
        AS
      </text>
      <text x={cx} y={cy + 20} fontSize="7" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.12em" fill="#F1C233" opacity="0.6" textAnchor="middle" fontWeight="600">
        PRODUCT
      </text>

      {/* Phase nodes */}
      {phases.map((phase, i) => {
        const angle = (phase.angle - 90) * Math.PI / 180
        const nx = cx + Math.cos(angle) * outerR
        const ny = cy + Math.sin(angle) * outerR
        const isHovered = hoveredPhase === i

        return (
          <g key={i}
             onMouseEnter={() => setHoveredPhase(i)}
             onMouseLeave={() => setHoveredPhase(null)}
             style={{ cursor: 'default' }}>
            {/* Phase node */}
            <circle cx={nx} cy={ny} r={isHovered ? 28 : 24}
                    fill={phase.color === '#F1C233' ? '#F1C233' : '#0A0A0A'}
                    opacity={isHovered ? 0.12 : 0.06}
                    style={{ transition: 'r 0.5s ease, opacity 0.5s ease' }} />
            <circle cx={nx} cy={ny} r={isHovered ? 28 : 24}
                    fill="none" stroke={phase.color} strokeWidth={isHovered ? "1" : "0.8"}
                    opacity={isHovered ? 0.65 : 0.4}
                    style={{ transition: 'stroke-width 0.4s ease, opacity 0.5s ease' }} />

            {/* Phase label */}
            {phase.label.split('\n').map((line, li) => (
              <text key={li} x={nx} y={ny - 8 + li * 11}
                    fontSize="6.5" fontFamily="EB Garamond, sans-serif"
                    letterSpacing="0.1em" fill={phase.color}
                    opacity={isHovered ? 0.9 : 0.55}
                    textAnchor="middle"
                    fontWeight={isHovered ? "600" : "400"}
                    style={{ transition: 'opacity 0.5s ease' }}>
                {line}
              </text>
            ))}

            {/* Connector line */}
            <line x1={nx} y1={ny} x2={cx + Math.cos(angle) * innerR} y2={cy + Math.sin(angle) * innerR}
                  stroke={phase.color} strokeWidth="0.5" opacity={isHovered ? 0.4 : 0.2}
                  strokeDasharray="2 3" />

            {/* Hover description */}
            {isHovered && (
              <g>
                <rect x="40" y={height - 60} width={width - 80} height="36" fill="#0A0A0A" opacity="0.04" rx="2" />
                <text x={width / 2} y={height - 42} fontSize="7" fontFamily="EB Garamond, sans-serif"
                      letterSpacing="0.06em" fill={phase.color} opacity="0.75" textAnchor="middle" fontStyle="italic">
                  {phase.desc}
                </text>
              </g>
            )}
          </g>
        )
      })}

      {/* Top label */}
      <text x={width / 2} y="22" fontSize="7.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.2em" fill="#0A0A0A" opacity="0.35" textAnchor="middle" fontWeight="500">
        ITERATION CYCLE
      </text>

      {/* Bottom annotation */}
      <text x={width / 2} y={height - 14} fontSize="6.5" fontFamily="EB Garamond, sans-serif"
            letterSpacing="0.06em" fill="#0A0A0A" opacity="0.25" textAnchor="middle" fontStyle="italic">
        hover phases to explore the cycle
      </text>
    </svg>
  )
}
