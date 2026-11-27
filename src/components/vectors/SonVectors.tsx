import React from 'react'

interface VectorProps {
  width?: string | number
  height?: string | number
  stroke?: string
  fill?: string
  className?: string
}

/** Custom SON7 / HM7 kinetic monogram logo inspired by Lando Norris's geometric emblem */
export const SonLogo: React.FC<VectorProps> = ({
  width = 48,
  height = 28,
  fill = '#ffffff',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 120 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="SON 7 Logo"
  >
    {/* Stylized S + 7 interlocking kinetic mark */}
    <path
      d="M12 10H46L38 24H20L16 32H40L32 46H4L12 32H28L32 24H8L12 10Z"
      fill={fill}
    />
    <path
      d="M54 10H78L72 22L84 10H116L96 46H78L94 22H72L58 46H44L54 10Z"
      fill="#d2ff00"
    />
  </svg>
)

/** Topographic / football pitch contour lines backdrop (matches Lando's Pattern SVG) */
export const PitchPattern: React.FC<{ width?: string; height?: string; stroke?: string; className?: string }> = ({
  width = '100%',
  height = '100%',
  stroke = '#282828',
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
      {/* Pitch perimeter & center circle contours */}
      <rect x="120" y="80" width="1488" height="840" rx="24" />
      <line x1="864" y1="80" x2="864" y2="920" />
      <circle cx="864" cy="500" r="140" />
      <circle cx="864" cy="500" r="220" strokeDasharray="8 8" />
      <circle cx="864" cy="500" r="320" opacity="0.45" />
      <path d="M120 260H330V740H120" />
      <path d="M1608 260H1398V740H1608" />
      <path d="M120 380H210V620H120" />
      <path d="M1608 380H1518V620H1608" />
      {/* Flowing topographic wave contours */}
      <path d="M0 190C280 120 420 340 720 270C1020 200 1260 60 1728 210" opacity="0.5" />
      <path d="M0 810C340 900 580 680 890 760C1200 840 1420 690 1728 790" opacity="0.5" />
      <path d="M180 0C310 240 190 480 390 660C590 840 460 950 540 1000" opacity="0.35" />
      <path d="M1540 0C1380 260 1510 470 1310 680C1110 890 1290 960 1190 1000" opacity="0.35" />
    </g>
  </svg>
)

/** Hand-drawn signature mark for Heung-Min Son ("HM Son #7") */
export const SonSignature: React.FC<{ width?: string | number; height?: string | number; color?: string }> = ({
  width = 240,
  height = 100,
  color = '#d2ff00',
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
    <path
      d="M198 44L254 34"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M44 88C98 76 168 74 238 82"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
)

/** Wavy lime underline / strike-through for active menu items (matches Lando's MenuLine) */
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
      stroke="#d2ff00"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
)
