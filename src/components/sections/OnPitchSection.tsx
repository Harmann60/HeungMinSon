import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onPitchMoments } from '../../data/sonData'
import { TrophyIcon } from '../vectors/TrophySVGs'
import { useMenuStore } from '../../store/useAppStore'

gsap.registerPlugin(ScrollTrigger)

const momentPhotos: Record<string, { src: string; caption: string; position: string; fit?: 'cover' | 'contain' }> = {
  'bilbao-2025': {
    src: '/images/son/son-mural.jpg',
    caption: 'Tottenham mural honoring the Europa League Captain',
    position: '50% 42%',
  },
  'golden-boot-2022': {
    src: '/images/son/goldenboot.webp',
    caption: 'Heung-Min Son with the 2021/22 Premier League Golden Boot',
    position: '46% 18%',
  },
  'puskas-burnley-2019': {
    src: '/images/son/puskas.jpeg',
    caption: '73-meter Puskás Award solo run past Burnley',
    position: '62% 22%',
  },
  'etihad-ucl-2019': {
    src: '/images/son/son-spurs-away.jpg',
    caption: 'Tottenham #7 away kit under European lights',
    position: '50% 15%',
    fit: 'contain',
  },
  'asian-games-2018': {
    src: '/images/son/son-asiancup-2019.jpg',
    caption: 'South Korea Captain leading the Taegeuk Warriors',
    position: '50% 12%',
    fit: 'contain',
  },
  'lafc-2025': {
    src: '/images/son/son-lafc-celebrate.jpg',
    caption: 'Celebrating in LAFC Black & Gold #7',
    position: '40% 16%',
  },
}

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

              <div className="mt-5 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                <div className="xl:col-span-8 relative pl-1 md:pl-3 flex flex-col gap-4 overflow-hidden">
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

                {momentPhotos[moment.id] && (
                  <div className="xl:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-main-bg group">
                    <div className="aspect-[4/3] overflow-hidden bg-black">
                      <img
                        src={momentPhotos[moment.id].src}
                        alt={moment.title}
                        loading="lazy"
                        style={{ objectPosition: momentPhotos[moment.id].position }}
                        className={`w-full h-full ${
                          momentPhotos[moment.id].fit === 'contain' ? 'object-contain' : 'object-cover'
                        } group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    <p className="px-4 py-2.5 text-xs font-medium text-beige border-t border-white/10">
                      {momentPhotos[moment.id].caption}
                    </p>
                  </div>
                )}
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
