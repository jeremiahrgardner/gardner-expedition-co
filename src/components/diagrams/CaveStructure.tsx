"use client"

import { useState } from 'react'

/**
 * CaveStructure — annotated systems diagram for The Cave.
 * Reveals the hidden structures beneath a situation — the cave beneath the map.
 * Shows multiple layers of hidden structure with annotation markers.
 */
interface CaveStructureProps {
  className?: string
  width?: number
  height?: number
}

export default function CaveStructure({
  className = '',
  width = 480,
  height = 360,
}: CaveStructureProps) {
  const [activeLayer, setActiveLayer] = useState<number | null>(null)

  const layers = [
    { label: 'SURFACE', y: 40, color: '#0A0A0A', opacity: 0.3 },
    { label: 'STRUCTURE 1', y: 110, color: '#0A0A0A', opacity: 0.25 },
    { label: 'STRUCTURE 2', y: 180, color: '#0A0A0A', opacity: 0.2 },
    { label: 'HIDDEN DYNAMICS', y: 250, color: '#F1C233', opacity: 0.45 },
  ]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-label="Cave structure diagram — layers of hidden structure beneath the surface"
      role="img"
      style={{ cursor: 'default' }}
    >
      {/* Layer bands */}
      {layers.map((layer, i) => (
        <g key={i} onMouseEnter={() => setActiveLayer(i)} onMouseLeave={() => setActiveLayer(null)}>
          <rect
            x="24" y={layer.y} width="432" height="62"
            fill="none"
            stroke={layer.color}
            strokeWidth={activeLayer === i ? "0.9" : "0.7"}
            opacity={activeLayer === i ? layer.opacity * 1.6 : layer.opacity}
            strokeDasharray={i === 3 ? "none" : "3 2"}
            style={{ transition: 'opacity 0.6s ease, stroke-width 0.4s ease' }}
          />

          {/* Hidden structure nodes — connected by faint lines */}
          {activeLayer === i && (
            <>
              <line x1="80" y1={layer.y + 31} x2="180" y2={layer.y + 31}
                    stroke={layer.color} strokeWidth="0.4" opacity="0.2" />
              <line x1="240" y1={layer.y + 31} x2="380" y2={layer.y + 31}
                    stroke={layer.color} strokeWidth="0.4" opacity="0.2" />
              <circle cx="80" cy={layer.y + 31} r="3" fill="none"
                      stroke={layer.color} strokeWidth="0.6" opacity="0.4" />
              <circle cx="180" cy={layer.y + 31} r="3" fill="none"
                      stroke={layer.color} strokeWidth="0.6" opacity="0.4" />
              <circle cx="240" cy={layer.y + 31} r="3" fill="none"
                      stroke={layer.color} strokeWidth="0.6" opacity="0.4" />
              <circle cx="380" cy={layer.y + 31} r="3" fill="none"
                      stroke={layer.color} strokeWidth="0.6" opacity="0.4" />
            </>
          )}

          {/* Layer label */}
          <text x="32" y={layer.y + 12} fontSize="7" fontFamily="Inter, sans-serif"
                letterSpacing="0.15em" fill={layer.color}
                opacity={activeLayer === i ? layer.opacity * 2 : layer.opacity}
                fontWeight={i === 3 ? "600" : "400"}
                style={{ transition: 'opacity 0.6s ease' }}>
            {layer.label}
          </text>
        </g>
      ))}

      {/* Descending arrows between layers */}
      {[52, 122, 192, 262].map((y, i) => (
        <g key={i} opacity="0.2">
          <line x1="440" y1={y + 4} x2="440" y2={y + 14} stroke="#0A0A0A" strokeWidth="0.6" />
          <polygon points="436,14 440,20 444,14" fill="#0A0A0A" opacity="0.3" />
        </g>
      ))}

      {/* The CAVE label — pointing to the deepest layer */}
      <text x={width / 2} y="320" fontSize="8" fontFamily="Inter, sans-serif"
            letterSpacing="0.22em" fill="#F1C233" opacity="0.7" textAnchor="middle"
            fontWeight="500">
        THE CAVE BENEATH
      </text>

      {/* Top label */}
      <text x={width / 2} y="20" fontSize="7" fontFamily="Inter, sans-serif"
            letterSpacing="0.18em" fill="#0A0A0A" opacity="0.35" textAnchor="middle">
        HIDDEN STRUCTURE MAP
      </text>

      {/* Legend */}
      <text x="32" y="345" fontSize="6.5" fontFamily="Inter, sans-serif"
            letterSpacing="0.08em" fill="#0A0A0A" opacity="0.3" fontStyle="italic">
        hover to reveal structure nodes
      </text>
    </svg>
  )
}
