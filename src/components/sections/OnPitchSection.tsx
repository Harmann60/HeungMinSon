import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onPitchMoments } from '../../data/sonData'
import { TrophyIcon } from '../vectors/TrophySVGs'
import { useMenuStore } from '../../store/useAppStore'

gsap.registerPlugin(ScrollTrigger)

export const OnPitchSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { setActiveSection } = useMenuStore()

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.legacy-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="on-pitch"
      ref={sectionRef}
      onMouseEnter={() => setActiveSection('on-pitch')}
      className="py-24 px-5 md:px-10 w-full bg-black overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-kr text-xs font-black text-crimson bg-main-bg px-3 py-1 rounded-full border border-crimson/40">
                전설적인 밤들
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
                Legacy Nights · Defining Matches
              </span>
            </div>
            <h2 className="mt-3 font-bungee text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-[0.9]">
              Six Nights That <span className="text-default">Made History</span>
            </h2>
          </div>

          <p className="font-sans text-base md:text-lg text-beige max-w-md leading-relaxed">
            Every chapter of Heung-Min Son’s rise — from overcoming skepticism in Germany to lifting European silverware as Tottenham captain.
          </p>
        </div>

        {/* Editorial 2-Column Matchday Grid (distinct from Lando's linear wall) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {onPitchMoments.map((moment, idx) => (
            <article
              key={moment.id}
              className="legacy-card rounded-3xl bg-main-bg/70 border border-white/10 hover:border-default/60 transition-colors p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-black border border-white/10 shrink-0">
                      <TrophyIcon type={moment.trophyType} stroke="#f5c518" />
                    </div>
                    <div>
                      <span className="font-kr text-xs font-bold text-crimson block">
                        0{idx + 1} · {moment.hangul}
                      </span>
                      <h3 className="font-bungee text-3xl md:text-4xl uppercase tracking-tight text-white mt-0.5">
                        {moment.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {moment.paragraphs.map((text, pIdx) => (
                    <p key={pIdx} className="font-sans text-sm md:text-base text-beige leading-relaxed">
                      {pIdx === 0 && (
                        <strong className="text-default font-bold mr-1.5">
                          {moment.dateHighlight}
                        </strong>
                      )}
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* 3-Column Match Telemetry */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-white">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">
                    When
                  </span>
                  <span className="font-bungee text-xl md:text-2xl mt-0.5 block">
                    {moment.when}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">
                    Mark
                  </span>
                  <span className="flex items-start font-bungee text-xl md:text-2xl mt-0.5 text-default">
                    {moment.result}
                    {moment.resultSup && (
                      <span className="text-[10px] font-sans font-extrabold ml-1 mt-1">
                        {moment.resultSup}
                      </span>
                    )}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">
                    {moment.metricLabel}
                  </span>
                  <span className="font-sans text-sm md:text-base font-extrabold mt-1 block">
                    {moment.metricValue}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
