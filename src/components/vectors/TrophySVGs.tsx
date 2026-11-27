import React from 'react'

interface TrophyProps {
  type: 'europa' | 'goldenboot' | 'puskas' | 'ucl' | 'asiangames' | 'lafc'
  stroke?: string
}

export const TrophyIcon: React.FC<TrophyProps> = ({ type, stroke = '#38bdf8' }) => {
  switch (type) {
    case 'europa':
      return (
        <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 14H54L49 46C47 56 42 62 36 62C30 62 25 56 23 46L18 14Z" stroke={stroke} strokeWidth="2.5" />
          <path d="M18 22H10C8 22 7 24 8 28L12 40C13 44 17 46 22 46" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 22H62C64 22 65 24 64 28L60 40C59 44 55 46 50 46" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 62V72M22 76H50M26 72H46" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 28H48M25 36H47" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
        </svg>
      )
    case 'goldenboot':
      return (
        <svg width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26L26 16L36 28C43 34 55 36 66 38C70 39 72 44 70 49C68 53 62 54 56 54H16C12 54 10 51 11 46L14 26Z" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M16 54V60M28 54V60M44 54V60M58 54V60" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 22L22 32M38 28L31 36" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M8 62H72" stroke={stroke} strokeWidth="2" opacity="0.5" />
        </svg>
      )
    case 'puskas':
      return (
        <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="24" r="14" stroke={stroke} strokeWidth="2.5" />
          <path d="M24 20L36 14L48 20M26 30L36 34L46 30" stroke={stroke} strokeWidth="1.6" />
          <path d="M28 40L24 68H48L44 40" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M18 74H54" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 18L18 22M62 18L54 22M12 30L19 28M60 30L53 28" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'ucl':
      return (
        <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 12L42 26L57 28L46 38L49 53L36 46L23 53L26 38L15 28L30 26L36 12Z" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="36" cy="36" r="24" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />
          <path d="M24 68H48M28 74H44" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'asiangames':
      return (
        <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 10L32 30M50 10L40 30" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="36" cy="48" r="19" stroke={stroke} strokeWidth="2.5" />
          <circle cx="36" cy="48" r="13" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          <path d="M36 39V57M29 48H43" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'lafc':
      return (
        <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 10L58 20V44C58 58 48 68 36 74C24 68 14 58 14 44V20L36 10Z" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M27 28H45L33 56" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}
