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
    <footer className="relative w-full p-4 md:p-6 pb-20 md:pb-16 pt-16 md:pt-28 bg-default footer-root text-black">
      <div className="max-w-[1680px] mx-auto">
        <div className="footer-masked-panel relative w-full rounded-2xl bg-black overflow-hidden min-h-[760px] md:min-h-[820px] flex flex-col justify-between p-8 md:p-14">
          {/* Pitch Contour Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-45">
            <PitchPattern stroke="#2c3024" />
          </div>

          {/* Top Nav Columns + Centerpiece Statement (Lando Norris Footer Layout) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-6">
            {/* Pages Column */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start">
              <h6 className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                Pages
              </h6>
              <ul className="mt-4 flex flex-col items-center md:items-start gap-1.5">
                {menuList.map((item) => {
                  const isActive = activeSection === item.sectionId
                  return (
                    <li key={item.id} className="relative overflow-hidden group">
                      <button
                        type="button"
                        onClick={() => scrollTo(item.target, item.sectionId)}
                        className={clsx(
                          'font-sans text-2xl md:text-3xl xl:text-4xl font-bold tracking-tighter uppercase transition-colors',
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

            {/* Centerpiece Signature + Statement + Trophy Visual */}
            <div className="md:col-span-6 flex flex-col items-center text-center">
              <div className="-rotate-6 mb-2">
                <SonSignature width={230} height={92} color="#d2ff00" />
              </div>
              <h2 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
                Always <span className="font-brier text-default font-normal lowercase text-5xl sm:text-6xl lg:text-8xl">bringing</span>
                <span className="block">
                  the <span className="font-brier text-default font-normal lowercase text-5xl sm:text-6xl lg:text-8xl">smile</span>.
                </span>
              </h2>

              <div className="mt-6 w-64 sm:w-80 md:w-96 aspect-square relative">
                <img
                  src="/images/footer-trophy.jpg"
                  alt="Heung-Min Son Captain Trophy Silhouette"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(210,255,0,0.2)] rounded-full"
                />
              </div>
            </div>

            {/* Follow On Column */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end">
              <h6 className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                Follow On
              </h6>
              <ul className="mt-4 flex flex-col items-center md:items-end gap-1.5">
                {socialMediaList.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-2xl md:text-3xl xl:text-4xl font-bold tracking-tighter uppercase text-white hover:text-default transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Infinite Bottom Marquee */}
          <div className="relative z-10 overflow-hidden w-full pt-8 border-t border-white/10">
            <div ref={marqueeRef} className="flex w-max">
              <div ref={contentRef} className="flex items-center gap-10 pr-10">
                {marqueeBrands.map((brand, i) => (
                  <span
                    key={`a-${i}`}
                    className="font-bungee text-xl md:text-2xl text-default tracking-tight whitespace-nowrap opacity-90"
                  >
                    {brand} <span className="text-white/30 ml-6">✦</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-10 pr-10" aria-hidden="true">
                {marqueeBrands.map((brand, i) => (
                  <span
                    key={`b-${i}`}
                    className="font-bungee text-xl md:text-2xl text-default tracking-tight whitespace-nowrap opacity-90"
                  >
                    {brand} <span className="text-white/30 ml-6">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar on Lime Ground (Exact Lando Detail) */}
      <div className="max-w-[1680px] mx-auto mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-black">
        <p className="font-sans text-xs md:text-sm font-medium">
          <strong>© 2026 Heung-Min Son Fan Tribute</strong> · Built by Harman
        </p>
        <div className="flex items-center gap-5 font-sans text-xs md:text-sm font-extrabold uppercase tracking-tight">
          <a href="#hero" className="hover:underline">Back to Top</a>
          <a href="https://github.com/Harmann60/HeungMinSon" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
