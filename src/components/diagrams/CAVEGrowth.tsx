"use client"

import { useState } from 'react'

/**
 * CAVEGrowthDiagram — annotated systems diagram for the CAVE Growth System.
 * Shows the four-phase navigation cycle for organizational growth under
 * uncertainty: Customer Insight → Assumption Surfacing → Rapid Experiment → Evidence Review.
 *
 * Visual: A passage-through-darkness concept where each phase is a
 * wayfinding marker in an underground navigation system. The path is
 * not visible ahead — each marker illuminates the next segment.
 */
interface CAVEGrowthDiagramProps {
  className?: string
  width?: number
  height?: number
}

const phases = [
  {
    label: 'CUSTOMER\nINSIGHT',
    short: 'C',
    angle: 0,
    desc: 'Deep customer empathy as navigation — sensing direction when data is insufficient',
    color: '#F1C233',
  },
  {
    label: 'ASSUMPTION\nSURFACING',
    short: 'A',
    angle: 72,
    desc: 'Making hidden logic explicit — what you believe before you have evidence',
    color: '#0A0A0A',
  },
  {
    label: 'RAPID\nEXPERIMENT',
    short: 'R',
    angle: 144,
    desc: 'Learning loops that generate evidence quickly, at low cost, before large commitments',
    color: '#0A0A0A',
  },
  {
    label: 'EVIDENCE\nREVIEW',
    short: 'E',
    angle: 216,
    desc: 'The discipline to wait for evidence while maintaining the capacity to act before certainty arrives',
    color: '#F1C233',
  },
  {
    label: 'DECISION\nARCHITECTURE',
    short: 'D',
    angle: 288,
    desc: 'Choosing the move that addresses the root, not just the expression',
    color: '#0A0A0A',
  },
]

export default function CAVEGrowthDiagram({
  className = '',
  width = 520,
  height = 400,
}: CAVEGrowthDiagramProps) {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)
  const cx = width / 2
  const cy = height / 2
  const outerR = 155
  const innerR = 60

  // Pentagon vertices for the outer ring
  const getPoint = (angle: number, r: number) => {
    const rad = ((angle - 90) * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  // Build pentagon path
  const pentagonPoints = phases
    .map((p, i) => {
      const pt = getPoint(p.angle, outerR)
      return `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`
    })
    .join(' ') + ' Z'

  // Inner connecting path (shows the cycle)
  const innerPoints = phases
    .map((p, i) => {
      const pt = getPoint(p.angle, innerR)
      return `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`
    })
    .join(' ') + ' Z'

  // Phase marker positions
  const phasePositions = phases.map((p) => {
    const outer = getPoint(p.angle, outerR)
    const inner = getPoint(p.angle, innerR)
    const mid = getPoint(p.angle, (outerR + innerR) / 2)
    return { ...p, outer, inner, mid }
  })

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="CAVE Growth System diagram — five-phase organizational navigation cycle"
      role="img"
      style={{ cursor: 'default' }}
    >
      {/* Background paper texture — subtle field notebook feel */}
      <defs>
        <pattern id="cave-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0A0A0A" strokeWidth="0.15" opacity="0.08" />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#cave-grid)" />

      {/* Outer pentagon — the boundary of the system */}
      <path
        d={pentagonPoints}
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="0.8"
        opacity="0.15"
      />

      {/* Inner pentagon — the core cycle */}
      <path
        d={innerPoints}
        fill="#0A0A0A"
        opacity="0.03"
        stroke="#0A0A0A"
        strokeWidth="0.6"
        opacity="0.2"
      />

      {/* Connecting lines from center to each phase marker */}
      {phasePositions.map((phase, i) => (
        <line
          key={i}
          x1={cx} y1={cy}
          x2={phase.outer.x} y2={phase.outer.y}
          stroke="#0A0A0A"
          strokeWidth="0.4"
          opacity="0.12"
        />
      ))}

      {/* The cycle path — dashed, shows continuous navigation */}
      <path
        d={pentagonPoints}
        fill="none"
        stroke="#F1C233"
        strokeWidth="0.8"
        strokeDasharray="3 4"
        opacity="0.35"
      />

      {/* Phase markers */}
      {phasePositions.map((phase, i) => {
        const isHovered = hoveredPhase === i
        const isActive = hoveredPhase !== null
        const opacity = isActive && !isHovered ? 0.25 : 0.85

        return (
          <g
            key={i}
            onMouseEnter={() => setHoveredPhase(i)}
            onMouseLeave={() => setHoveredPhase(null)}
            style={{ cursor: 'default' }}
          >
            {/* Outer ring */}
            <circle
              cx={phase.outer.x}
              cy={phase.outer.y}
              r={isHovered ? 28 : 24}
              fill={phase.color}
              opacity={isHovered ? 0.12 : 0.06}
              style={{ transition: 'r 0.3s ease, opacity 0.3s ease' }}
            />
            <circle
              cx={phase.outer.x}
              cy={phase.outer.y}
              r={isHovered ? 28 : 24}
              fill="none"
              stroke={phase.color}
              strokeWidth="0.8"
              opacity={isHovered ? 0.7 : 0.45}
              style={{ transition: 'r 0.3s ease, opacity 0.3s ease' }}
            />

            {/* Phase label */}
            <text
              x={phase.outer.x}
              y={phase.outer.y - 4}
              fontSize="7"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.08em"
              fill="#0A0A0A"
              opacity={opacity}
              textAnchor="middle"
              fontWeight="500"
            >
              {phase.short}
            </text>

            {/* Phase name below marker */}
            <text
              x={phase.outer.x}
              y={phase.outer.y + 12}
              fontSize="5.5"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.05em"
              fill="#0A0A0A"
              opacity={isHovered ? 0.7 : 0.35}
              textAnchor="middle"
              style={{ transition: 'opacity 0.3s ease' }}
            >
              {phase.label.split('\n')[0]}
            </text>

            {/* Hover tooltip — phase description */}
            {isHovered && (
              <g>
                <rect
                  x={cx - 110}
                  y={cy + 80}
                  width={220}
                  height={36}
                  fill="#0A0A0A"
                  opacity="0.04"
                />
                <text
                  x={cx}
                  y={cy + 96}
                  fontSize="6.5"
                  fontFamily="Inter, sans-serif"
                  fill="#0A0A0A"
                  opacity="0.6"
                  textAnchor="middle"
                  fontStyle="italic"
                >
                  {phase.desc}
                </text>
              </g>
            )}
          </g>
        )
      })}

      {/* Center label */}
      <text
        x={cx}
        y={cy + 3}
        fontSize="6"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.12em"
        fill="#0A0A0A"
        opacity="0.35"
        textAnchor="middle"
        fontStyle="italic"
      >
        CAVE SYSTEM
      </text>

      {/* Field note annotation */}
      <text
        x={width - 12}
        y={height - 10}
        fontSize="6"
        fontFamily="Inter, sans-serif"
        fill="#0A0A0A"
        opacity="0.25"
        textAnchor="end"
        fontStyle="italic"
      >
        — field navigation protocol
      </text>
    </svg>
  )
}