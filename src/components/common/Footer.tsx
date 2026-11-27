import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clsx from 'clsx'
import { PitchPattern, SonSignature, MenuLine } from '../vectors/SonVectors'
import { menuList, socialMediaList, marqueeBrands } from '../../data/sonData'
import { useMenuStore } from '../../store/useAppStore'

gsap.registerPlugin(ScrollTrigger)

export const Footer: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { activeSection, setActiveSection } = useMenuStore()

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return

    const marquee = marqueeRef.current
    const content = contentRef.current
    let direction = 1
    const speed = 0.55
    let x = 0

    const getWidth = () => content.offsetWidth || 1200
    gsap.set(marquee, { x: 0 })

    const tick = () => {
      const contentWidth = getWidth()
      x -= speed * direction
      if (x <= -contentWidth) x += contentWidth
      if (x >= 0) x -= contentWidth
      gsap.set(marquee, { x })
    }

    gsap.ticker.add(tick)

    const st = ScrollTrigger.create({
      trigger: marquee,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        direction = self.direction === 1 ? 1 : -1
      },
    })

    return () => {
      gsap.ticker.remove(tick)
      st.kill()
    }
  }, [])

  const scrollTo = (target: string, id: typeof activeSection) => {
    setActiveSection(id)
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Taegeuk Crimson -> Blue -> Gold Top Hairline */}
      <div className="h-1 w-full bg-gradient-to-r from-taegeuk via-crimson to-default" />

      <div className="relative max-w-[1680px] mx-auto px-5 md:px-10 pt-20 pb-12">
        {/* Subtle Pitch Contour Backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <PitchPattern stroke="#1c243b" />
        </div>

        {/* Giant Hangul Watermark */}
        <div className="absolute inset-x-0 top-12 flex justify-center pointer-events-none overflow-hidden">
          <span className="font-kr text-[20vw] font-black text-white/[0.025] leading-none select-none">
            손흥민 07
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Navigation */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h6 className="font-sans text-xs font-bold uppercase tracking-widest text-default">
              Explore
            </h6>
            <ul className="mt-4 flex flex-col items-center md:items-start gap-2">
              {menuList.map((item) => {
                const isActive = activeSection === item.sectionId
                return (
                  <li key={item.id} className="relative overflow-hidden">
                    <button
                      type="button"
                      onClick={() => scrollTo(item.target, item.sectionId)}
                      className={clsx(
                        'font-bungee text-2xl md:text-3xl tracking-tight uppercase transition-colors',
                        isActive ? 'text-white/40' : 'text-white hover:text-default'
                      )}
                    >
                      {item.label}
                    </button>
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none flex items-center">
                        <MenuLine />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Centerpiece Trophy & Signature */}
          <div className="md:col-span-6 flex flex-col items-center text-center">
            <div className="-rotate-3 mb-1">
              <SonSignature width={210} height={86} color="#f5c518" />
            </div>
            <h2 className="font-bungee text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-[0.9] text-white">
              We Keep <span className="font-brier text-default font-normal lowercase text-5xl sm:text-7xl">smiling</span>.
              <span className="block mt-1">
                We Keep <span className="font-brier text-crimson font-normal lowercase text-5xl sm:text-7xl">fighting</span>.
              </span>
            </h2>

            <div className="mt-6 w-60 sm:w-72 aspect-square relative rounded-full overflow-hidden border border-default/25 shadow-[0_0_80px_rgba(245,197,24,0.16)]">
              <img
                src="/images/footer-trophy.jpg"
                alt="Heung-Min Son Captain Trophy Silhouette"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Official Links & Cities */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right">
            <h6 className="font-sans text-xs font-bold uppercase tracking-widest text-default">
              Follow Sonny
            </h6>
            <ul className="mt-4 flex flex-col items-center md:items-end gap-2">
              {socialMediaList.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bungee text-2xl md:text-3xl tracking-tight uppercase text-white hover:text-default transition-colors"
                  >
                    {item.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-2xl bg-main-bg/80 border border-white/10 text-xs text-beige">
              <span className="block font-kr font-bold text-white mb-1">대한민국 주장 · #7</span>
              Chuncheon → Hamburg → Leverkusen → North London → Los Angeles
            </div>
          </div>
        </div>

        {/* Career Honors Marquee */}
        <div className="relative z-10 overflow-hidden w-full mt-14 pt-8 border-t border-white/10">
          <div ref={marqueeRef} className="flex w-max">
            <div ref={contentRef} className="flex items-center gap-10 pr-10">
              {marqueeBrands.map((brand, i) => (
                <span
                  key={`a-${i}`}
                  className="font-bungee text-xl md:text-2xl text-default tracking-wide whitespace-nowrap"
                >
                  {brand} <span className="text-crimson ml-6">★</span>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-10 pr-10" aria-hidden="true">
              {marqueeBrands.map((brand, i) => (
                <span
                  key={`b-${i}`}
                  className="font-bungee text-xl md:text-2xl text-default tracking-wide whitespace-nowrap"
                >
                  {brand} <span className="text-crimson ml-6">★</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-beige">
          <p>
            <strong className="text-white">© 2026 Heung-Min Son Fan Tribute</strong> · Built with ❤️ by Harman
          </p>
          <div className="flex items-center gap-5 font-bold uppercase tracking-wider">
            <a href="#hero" className="hover:text-default transition-colors">
              Back to Top
            </a>
            <a
              href="https://github.com/Harmann60/HeungMinSon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-default transition-colors"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
