"use client"

import { useState } from 'react'

/**
 * ProgressMetrics — evidence accumulation diagram.
 * Shows the measurement layers from learning behaviors (leading)
 * to outcome indicators (lagging), with confidence as the axis.
 */
interface ProgressMetricsProps {
  className?: string
  width?: number
  height?: number
}

const layers = [
  {
    label: 'EVIDENCE ACCUMULATION',
    y: 60,
    color: '#111111',
    opacity: 0.2,
    dashed: false,
    desc: 'How much evidence gathered, how credible?',
  },
  {
    label: 'CONFIDENCE CALIBRATION',
    y: 110,
    color: '#B89B5E',
    opacity: 0.3,
    dashed: false,
    desc: 'How confident should you actually be?',
  },
  {
    label: 'LEARNING VELOCITY',
    y: 160,
    color: '#B89B5E',
    opacity: 0.28,
    dashed: true,
    desc: 'Learning rate vs. environmental change rate',
  },
  {
    label: 'OPTION VALUE',
    y: 210,
    color: '#111111',
    opacity: 0.22,
    dashed: true,
    desc: 'Alternatives preserved vs. foreclosed',
  },
  {
    label: 'MOVEMENT QUALITY',
    y: 260,
    color: '#111111',
    opacity: 0.2,
    dashed: false,
    desc: 'Are experiments testing critical assumptions?',
  },
]

export default function ProgressMetrics({
  className = '',
  width = 480,
  height = 320,
}: ProgressMetricsProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="Progress Metrics diagram — measurement layers for uncertain work"
      role="img"
    >
      {/* Left: leading indicators (learning) */}
      <text x="20" y="30" fontSize="6.5" fontFamily="DM Sans, sans-serif"
            letterSpacing="0.12em" fill="#111111" opacity="0.3" fontStyle="italic">
        learning behaviors
      </text>
      <line x1="20" y1="35" x2="20" y2="295" stroke="#111111" strokeWidth="0.4" opacity="0.2" strokeDasharray="2 3" />

      {/* Right: lagging indicators (outcomes) */}
      <text x={width - 20} y="30" fontSize="6.5" fontFamily="DM Sans, sans-serif"
            letterSpacing="0.12em" fill="#111111" opacity="0.3" textAnchor="end" fontStyle="italic">
        outcome metrics
      </text>
      <line x1={width - 20} y1="35" x2={width - 20} y2="295" stroke="#111111" strokeWidth="0.4" opacity="0.2" strokeDasharray="2 3" />

      {/* Gradient arrow between leading and lagging */}
      <defs>
        <linearGradient id="metric-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#111111" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#B89B5E" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="400" height="270" fill="url(#metric-gradient)" opacity="0.4" rx="2" />

      {/* Measurement layers */}
      {layers.map((layer, i) => (
        <g key={i}
           onMouseEnter={() => setHovered(i)}
           onMouseLeave={() => setHovered(null)}
           style={{ cursor: 'default' }}>
          {/* Row band */}
          <rect
            x="40" y={layer.y} width="400" height="40"
            fill={layer.color === '#B89B5E' ? '#B89B5E' : '#111111'}
            fillOpacity={hovered === i ? 0.08 : 0.03}
            stroke={layer.color}
            strokeWidth={hovered === i ? "0.8" : "0.5"}
            strokeOpacity={hovered === i ? 0.5 : 0.2}
            strokeDasharray={layer.dashed ? "4 3" : "none"}
            rx="1"
            style={{ transition: 'opacity 0.5s ease' }}
          />

          {/* Layer label */}
          <text x="56" y={layer.y + 15} fontSize="6.5" fontFamily="DM Sans, sans-serif"
                letterSpacing="0.14em" fill={layer.color}
                opacity={hovered === i ? 0.85 : 0.5}
                fontWeight={hovered === i ? "600" : "400"}
                style={{ transition: 'opacity 0.5s ease' }}>
            {layer.label}
          </text>

          {/* Indicator bar */}
          <rect x="56" y={layer.y + 22} width={100 + i * 20} height="3"
                fill={layer.color} opacity={hovered === i ? 0.4 : 0.2}
                rx="1" style={{ transition: 'opacity 0.5s ease' }} />

          {/* Hover description */}
          {hovered === i && (
            <text x={width - 56} y={layer.y + 22} fontSize="6.5" fontFamily="DM Sans, sans-serif"
                  letterSpacing="0.04em" fill={layer.color} opacity="0.65" textAnchor="end" fontStyle="italic">
              {layer.desc}
            </text>
          )}
        </g>
      ))}

      {/* Time axis */}
      <line x1="40" y1="305" x2="440" y2="305" stroke="#111111" strokeWidth="0.5" opacity="0.2" />
      <text x="40" y="315" fontSize="6" fontFamily="DM Sans, sans-serif"
            letterSpacing="0.08em" fill="#111111" opacity="0.3">early</text>
      <text x={width - 40} y="315" fontSize="6" fontFamily="DM Sans, sans-serif"
            letterSpacing="0.08em" fill="#111111" opacity="0.3" textAnchor="end">mature</text>

      {/* Top label */}
      <text x={width / 2} y="18" fontSize="7.5" fontFamily="DM Sans, sans-serif"
            letterSpacing="0.2em" fill="#111111" opacity="0.35" textAnchor="middle" fontWeight="500">
        MEASUREMENT LAYERS FOR UNCERTAINTY
      </text>

      {/* Bottom annotation */}
      <text x={width / 2} y={height - 8} fontSize="6.5" fontFamily="DM Sans, sans-serif"
            letterSpacing="0.06em" fill="#111111" opacity="0.25" textAnchor="middle" fontStyle="italic">
        hover layers to explore each metric
      </text>
    </svg>
  )
}
