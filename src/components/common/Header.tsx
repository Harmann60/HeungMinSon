import React, { useEffect, useState } from 'react'
import { SonLogo } from '../vectors/SonVectors'
import { useMenuStore } from '../../store/useAppStore'

export const Header: React.FC = () => {
  const { open, setOpen } = useMenuStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] px-5 md:px-8 py-4 transition-all duration-300 ${
        scrolled && !open
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1680px] mx-auto flex items-center justify-between">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
          aria-label="Back to top"
        >
          <SonLogo
            width={56}
            height={28}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-sans text-xs font-extrabold uppercase tracking-wider text-white">
              손흥민 · Heung-Min Son
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-default mt-0.5">
              Captain · LAFC #7 · Korea Republic
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#goals"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-main-bg/80 hover:border-default hover:bg-default hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-wider text-white"
          >
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
            Goal Radar
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-default text-black font-sans text-xs font-extrabold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-default/20"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <div className="w-5 h-3.5 flex flex-col justify-between items-end">
              <span
                className={`block h-[2.5px] bg-black rounded-full transition-all duration-300 ${
                  open ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'
                }`}
              />
              <span
                className={`block h-[2.5px] bg-black rounded-full transition-all duration-300 ${
                  open ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-3.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
