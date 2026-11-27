import React from 'react'
import { ArchiveItem } from '../../data/sonData'

interface KitVisualProps {
  item: ArchiveItem
  hovered?: boolean
}

export const KitOrBootVisual: React.FC<KitVisualProps> = ({ item, hovered = false }) => {
  if (item.pattern === 'boot') {
    return (
      <svg viewBox="0 0 260 190" className="w-full h-full drop-shadow-2xl transition-transform duration-500" style={{ transform: hovered ? 'scale(1.06) rotate(-4deg)' : 'scale(1)' }}>
        <defs>
          <linearGradient id={`boot-grad-${item.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={hovered ? item.secondaryColor : '#1a1a1a'} />
            <stop offset="100%" stopColor={hovered ? '#151515' : '#090909'} />
          </linearGradient>
        </defs>
        {/* Dynamic speed lines */}
        <path d="M18 135H90M8 118H65M24 150H110" stroke={item.secondaryColor} strokeWidth="2.5" strokeLinecap="round" opacity={hovered ? 0.9 : 0.45} />
        {/* Boot silhouette */}
        <path
          d="M52 72L88 46L116 74C138 92 178 96 218 104C234 108 238 122 232 132C225 142 204 144 182 144H56C44 144 38 136 41 124L52 72Z"
          fill={`url(#boot-grad-${item.id})`}
          stroke={item.secondaryColor}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Signature neon streaks */}
        <path d="M98 86L134 114M116 82L152 110M134 79L170 106" stroke={hovered ? '#0c0c0c' : item.secondaryColor} strokeWidth="5" strokeLinecap="round" />
        {/* Studs */}
        <path d="M62 144V156M86 144V156M114 144V156M176 144V156M208 144V156" stroke={item.accentColor} strokeWidth="4.5" strokeLinecap="round" />
        <text x="64" y="128" fill={hovered ? '#0c0c0c' : '#ffffff'} fontSize="18" fontWeight="900" fontFamily="Bungee, sans-serif">
          SON 07
        </text>
      </svg>
    )
  }

  const gradId = `kit-grad-${item.id}`
  const isLight = item.primaryColor.toLowerCase() === '#ffffff' || item.primaryColor.toLowerCase() === '#f3f5f7'

  return (
    <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-2xl transition-transform duration-500" style={{ transform: hovered ? 'scale(1.06) translateY(-4px)' : 'scale(1)' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={item.primaryColor} />
          <stop offset="100%" stopColor={item.pattern === 'gradient' ? item.secondaryColor : item.primaryColor} />
        </linearGradient>
      </defs>

      {/* Jersey silhouette */}
      <path
        d="M78 28C88 42 104 46 120 46C136 46 152 42 162 28L212 52L196 98L174 88V208C174 213 170 216 165 216H75C70 216 66 213 66 208V88L44 98L28 52L78 28Z"
        fill={`url(#${gradId})`}
        stroke={hovered ? item.accentColor : 'rgba(255,255,255,0.2)'}
        strokeWidth={hovered ? '3.5' : '2'}
        strokeLinejoin="round"
      />

      {/* Pattern accents */}
      {item.pattern === 'sash' && (
        <path d="M74 52L174 176V208H154L66 98V62L74 52Z" fill={item.secondaryColor} opacity="0.88" />
      )}
      {item.pattern === 'stripes' && (
        <g opacity="0.22" fill={item.secondaryColor}>
          <rect x="86" y="46" width="12" height="170" />
          <rect x="114" y="46" width="12" height="170" />
          <rect x="142" y="46" width="12" height="170" />
        </g>
      )}

      {/* Collar & sleeve trim */}
      <path d="M78 28C88 42 104 46 120 46C136 46 152 42 162 28" fill="none" stroke={item.secondaryColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M29 56L45 96M211 56L195 96" stroke={item.secondaryColor} strokeWidth="5" strokeLinecap="round" />

      {/* Back / front view swap on hover (matches Lando helmet hover swap!) */}
      {hovered ? (
        <g>
          <text
            x="120"
            y="95"
            textAnchor="middle"
            fill={isLight ? '#0c0c0c' : '#ffffff'}
            fontSize="17"
            fontWeight="900"
            letterSpacing="3"
            fontFamily="Bungee, sans-serif"
          >
            SON
          </text>
          <text
            x="120"
            y="168"
            textAnchor="middle"
            fill={item.accentColor === '#d2ff00' && isLight ? item.secondaryColor : item.accentColor}
            fontSize="68"
            fontWeight="900"
            fontFamily="Bungee, sans-serif"
          >
            {item.number}
          </text>
        </g>
      ) : (
        <g>
          {/* Crest */}
          <circle cx="148" cy="86" r="10" fill={item.secondaryColor} stroke={item.accentColor} strokeWidth="1.5" />
          {/* Captain armband hint */}
          <rect x="33" y="66" width="18" height="8" rx="2" transform="rotate(22 33 66)" fill={item.accentColor} />
          {/* Subtle front number */}
          <text
            x="120"
            y="148"
            textAnchor="middle"
            fill={isLight ? item.secondaryColor : '#ffffff'}
            fontSize="42"
            fontWeight="900"
            opacity="0.9"
            fontFamily="Bungee, sans-serif"
          >
            {item.number}
          </text>
        </g>
      )}
    </svg>
  )
}
