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
      gsap.fromTo(
        '.onpitch-title > *',
        { y: 80, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.onpitch-title',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.utils.toArray<HTMLElement>('.onpitch-highlight').forEach((highlight) => {
        gsap.set(highlight, { scaleX: 0, transformOrigin: 'left center' })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: highlight.parentElement,
              start: 'top 88%',
              once: true,
            },
          })
          .to(highlight, {
            scaleX: 1,
            duration: 0.55,
            ease: 'power3.out',
          })
          .to(highlight, {
            scaleX: 0,
            transformOrigin: 'right center',
            duration: 0.55,
            ease: 'power3.in',
            delay: 0.1,
          })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="on-pitch"
      ref={sectionRef}
      onMouseEnter={() => setActiveSection('on-pitch')}
      className="pt-20 md:pt-28 pb-20 px-5 md:px-10 w-full bg-black overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        {/* Stacked Two-Tone Lando-Style Title */}
        <div className="relative h-28 sm:h-40 md:h-56 lg:h-72 xl:h-88 overflow-hidden">
          <h2 className="onpitch-title flex flex-col font-sans text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] xl:text-[18rem] uppercase leading-none text-white relative z-10">
            <strong className="font-bungee text-default">On</strong>
            <span className="absolute top-8 sm:top-12 md:top-16 lg:top-20 xl:top-28 font-bold tracking-tighter">
              Pitch
            </span>
          </h2>
          <span className="onpitch-highlight absolute inset-0 block bg-default z-20 pointer-events-none" />
        </div>

        {/* Intro Lead */}
        <div className="pt-10 lg:px-12">
          <div className="relative w-fit overflow-hidden">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-default">
              Bringing the fight
            </h3>
            <span className="onpitch-highlight absolute inset-0 block bg-default z-10 pointer-events-none" />
          </div>
          <div className="relative overflow-hidden mt-5 max-w-2xl">
            <p className="font-sans text-2xl md:text-3xl text-white leading-snug">
              Since his Bundesliga breakthrough in 2010, Heung-Min Son has been all in —
              chasing glory with both feet, breaking barriers for Asia, and bringing the
              <strong className="ml-2 font-brier font-normal text-default text-3xl md:text-4xl">
                fight to every match
              </strong>
              .
            </p>
            <span className="onpitch-highlight absolute inset-0 block bg-default z-10 pointer-events-none" />
          </div>
        </div>

        {/* Moments Feed */}
        <div className="pt-16 md:pt-24 lg:px-12 flex flex-col gap-20 md:gap-28">
          {onPitchMoments.map((moment) => (
            <article key={moment.id} className="border-t border-white/10 pt-12">
              <div className="relative overflow-hidden">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="shrink-0 scale-85 md:scale-100">
                    <TrophyIcon type={moment.trophyType} stroke="#38bdf8" />
                  </div>
                  <h4 className="font-bungee text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold uppercase tracking-tighter text-white">
                    {moment.title}
                  </h4>
                </div>
                <span className="onpitch-highlight absolute inset-0 block bg-default z-10 pointer-events-none" />
              </div>

              <div className="relative mt-5 pl-1 md:pl-3 flex flex-col gap-4 max-w-4xl overflow-hidden">
                {moment.paragraphs.map((text, idx) => (
                  <p key={idx} className="font-sans text-base md:text-xl text-beige leading-relaxed">
                    {idx === 0 && (
                      <strong className="font-bungee text-default mr-2 text-sm md:text-base">
                        {moment.dateHighlight}
                      </strong>
                    )}
                    {text}
                  </p>
                ))}
                <span className="onpitch-highlight absolute inset-0 block bg-default z-10 pointer-events-none" />
              </div>

              {/* 3-Column Lando Metric Strip */}
              <div className="pt-8 pl-1 md:pl-3 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 text-white">
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                    When
                  </span>
                  <span className="font-sans text-3xl md:text-4xl font-bold uppercase tracking-tighter mt-1">
                    {moment.when}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                    Highlight
                  </span>
                  <span className="flex items-start font-sans text-3xl md:text-4xl font-bold uppercase tracking-tighter mt-1">
                    {moment.result}
                    {moment.resultSup && (
                      <span className="text-xs font-extrabold text-default ml-1 mt-1">
                        {moment.resultSup}
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                    {moment.metricLabel}
                  </span>
                  <span className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tighter mt-1 text-white">
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
