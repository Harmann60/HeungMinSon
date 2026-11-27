import React, { useState } from 'react'
import { careerChapters } from '../../data/sonData'
import { useMenuStore } from '../../store/useAppStore'

export const OffPitchSection: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState(careerChapters[2]) // Default to Spurs legendary era
  const { setActiveSection } = useMenuStore()

  return (
    <section
      id="off-pitch"
      onMouseEnter={() => setActiveSection('off-pitch')}
      className="py-24 px-5 md:px-10 bg-black relative overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography & Values */}
          <div className="lg:col-span-5">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
              Off Pitch · Origins & Mentality
            </span>
            <h2 className="mt-2 font-bungee text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-[0.95]">
              Built In <span className="text-default">Chuncheon</span>
            </h2>
            <p className="mt-6 font-sans text-base md:text-lg text-beige leading-relaxed">
              Before the Premier League spotlights and Sold-Out nights in North London and Los Angeles, Heung-Min Son spent years on dusty school pitches in Chuncheon under the relentless guidance of his father, Son Woong-jung.
            </p>
            <p className="mt-4 font-sans text-base md:text-lg text-beige leading-relaxed">
              Four hours of keepy-uppies before touching a match. Hundreds of shots off both left and right feet every day. No ego, no shortcuts — just an infectious smile paired with ruthless discipline.
            </p>

            <div className="mt-8 p-6 rounded-3xl bg-musgo/60 border border-default/30">
              <p className="font-brier text-3xl md:text-4xl text-default">
                “I never think I’m a superstar. Every day I try to learn and give everything for the badge.”
              </p>
              <span className="mt-3 block font-sans text-xs font-bold uppercase tracking-widest text-white">
                — Heung-Min Son · Chuncheon to the World
              </span>
            </div>
          </div>

          {/* Interactive Career Journey Timeline (Inspired by Lando's Calendar / Career Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                Career Chapters · Select Era
              </span>
              <span className="font-bungee text-sm text-default">2010 — 2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {careerChapters.map((chapter) => {
                const active = selectedChapter.id === chapter.id
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => setSelectedChapter(chapter)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                      active
                        ? 'bg-default text-black border-default scale-[1.02]'
                        : 'bg-main-bg text-white border-white/10 hover:border-default/60'
                    }`}
                  >
                    <span
                      className={`block text-[10px] font-extrabold uppercase tracking-widest ${
                        active ? 'text-black/75' : 'text-default'
                      }`}
                    >
                      {chapter.period}
                    </span>
                    <span className="mt-1 block font-sans text-base font-extrabold tracking-tight">
                      {chapter.club}
                    </span>
                    <span
                      className={`block text-xs mt-0.5 ${
                        active ? 'text-black/80 font-semibold' : 'text-beige'
                      }`}
                    >
                      {chapter.number}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active Chapter Detail Panel */}
            <div className="rounded-3xl bg-main-bg border border-white/15 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-default">
                    {selectedChapter.league} · {selectedChapter.period}
                  </span>
                  <h3 className="mt-1 font-bungee text-2xl md:text-4xl text-white uppercase">
                    {selectedChapter.club}
                  </h3>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-black border border-default/40 font-bungee text-sm text-default">
                  {selectedChapter.number}
                </span>
              </div>

              <p className="mt-5 font-sans text-base md:text-lg text-beige leading-relaxed">
                {selectedChapter.summary}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-beige">
                    Appearances
                  </span>
                  <span className="font-bungee text-2xl md:text-4xl text-white">
                    {selectedChapter.apps}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-beige">
                    Goals
                  </span>
                  <span className="font-bungee text-2xl md:text-4xl text-default">
                    {selectedChapter.goals}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-beige">
                    Assists
                  </span>
                  <span className="font-bungee text-2xl md:text-4xl text-white">
                    {selectedChapter.assists}
                  </span>
                </div>
              </div>

              <div className="mt-5 px-4 py-3 rounded-xl bg-black/70 border border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-beige">
                  Key Milestone
                </span>
                <span className="font-sans text-sm font-bold text-default text-right">
                  {selectedChapter.highlight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
