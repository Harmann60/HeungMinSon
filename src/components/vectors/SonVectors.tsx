import React from 'react'

interface VectorProps {
  width?: string | number
  height?: string | number
  stroke?: string
  fill?: string
  className?: string
}

/** Custom SON7 / 손흥민 monogram mark with Taegeuk crimson & Championship gold accents */
export const SonLogo: React.FC<VectorProps> = ({
  width = 56,
  height = 28,
  fill = '#f8fafc',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 132 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="SON 7 Logo"
  >
    {/* Camera Shutter Bracket Left */}
    <path d="M4 16V6H16" stroke="#f5c518" strokeWidth="3" strokeLinecap="square" />
    {/* Stylized S + 7 */}
    <path
      d="M18 12H48L41 24H24L20 31H43L35 44H10L18 31H32L35 24H14L18 12Z"
      fill={fill}
    />
    <path
      d="M56 12H108L88 44H71L86 22H52L56 12Z"
      fill="#f5c518"
    />
    {/* Taegeuk Crimson Dot */}
    <circle cx="116" cy="18" r="5" fill="#cd2e3a" />
    {/* Camera Shutter Bracket Right */}
    <path d="M128 40V50H116" stroke="#2e7bff" strokeWidth="3" strokeLinecap="square" />
  </svg>
)

/** Architectural Football Pitch & Taegeuk Arc Contours */
export const PitchPattern: React.FC<{ width?: string; height?: string; stroke?: string; className?: string }> = ({
  width = '100%',
  height = '100%',
  stroke = '#1e273d',
  className = '',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1728 1000"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid slice"
    className={className}
  >
    <g fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="120" y="80" width="1488" height="840" rx="20" />
      <line x1="864" y1="80" x2="864" y2="920" />
      <circle cx="864" cy="500" r="140" />
      <circle cx="864" cy="500" r="240" strokeDasharray="8 8" opacity="0.6" />
      <path d="M120 250H340V750H120" />
      <path d="M1608 250H1388V750H1608" />
      <path d="M120 370H210V630H120" />
      <path d="M1608 370H1518V630H1608" />
      {/* Camera Viewfinder Corner Marks */}
      <path d="M48 96V48H96M1680 96V48H1632M48 904V952H96M1680 904V952H1632" stroke="#f5c518" opacity="0.3" strokeWidth="2" />
    </g>
  </svg>
)

/** Hand-drawn signature mark for Heung-Min Son ("HM Son #7") */
export const SonSignature: React.FC<{ width?: string | number; height?: string | number; color?: string }> = ({
  width = 240,
  height = 100,
  color = '#f5c518',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 280 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Heung-Min Son Signature"
  >
    <path
      d="M28 74C22 52 46 22 68 20C82 18 72 48 56 58C42 66 78 44 96 36C106 31 102 62 92 70C108 56 126 32 142 30C150 29 144 58 136 66C150 54 170 30 184 34C194 37 174 68 188 66C202 64 222 24 246 18C234 40 218 68 206 90"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M198 44L254 34" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <path d="M44 88C98 76 168 74 238 82" stroke="#cd2e3a" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
  </svg>
)

/** Active Menu Strike Line */
export const MenuLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 412 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M0 13h73.539c5.858 0 11.47 2.35 15.58 6.525l8.565 5.2c4.1 2.4 11.48 2.4 15.58 0l72.678-11.725c6.045 0 11.82-2.503 15.954-6.914l6.485-3.5c4.1-2.2 11.8-2.2 15.955 0l76.752 10.414c6.3 0 12.3 2.9 16.806 7.88l4.362 3.24c4.5 2.5 11.5 2.5 16.807 0H412"
      stroke="#f5c518"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
)
