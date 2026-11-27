import React, { useState } from 'react'
import { Award } from 'lucide-react'
import { careerChapters } from '../../data/sonData'
import { useMenuStore } from '../../store/useAppStore'

const honors = [
  { label: 'UEFA Europa League', year: '2025 Captain' },
  { label: 'PL Golden Boot', year: '2021–22 (23G)' },
  { label: 'FIFA Puskás Award', year: '2020 Winner' },
  { label: 'Asian Games Gold', year: '2018 Captain' },
  { label: 'Best Footballer in Asia', year: '9× Record Winner' },
]

export const OffPitchSection: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState(careerChapters[2])
  const { setActiveSection } = useMenuStore()

  return (
    <section
      id="off-pitch"
      onMouseEnter={() => setActiveSection('off-pitch')}
      className="py-24 px-5 md:px-10 bg-black relative overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Chuncheon Roots & Honors Cabinet */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-kr text-xs font-black text-crimson bg-main-bg px-3 py-1 rounded-full border border-crimson/40">
                춘천에서 세계로
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
                Off Pitch · Origins & Mentality
              </span>
            </div>
            <h2 className="mt-3 font-bungee text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.9]">
              Built In <span className="text-default">Chuncheon</span>
            </h2>
            <p className="mt-6 font-sans text-base md:text-lg text-beige leading-relaxed">
              Before the sold-out nights in North London and Los Angeles, Heung-Min Son spent years on dusty school pitches in Chuncheon under his father, Son Woong-jung — four hours of ball mastery and 500 two-footed shots every single day.
            </p>

            <div className="mt-7 p-6 rounded-3xl bg-main-bg border border-default/30">
              <p className="font-brier text-3xl md:text-4xl text-default leading-tight">
                “I never think I’m a superstar. Every day I try to learn and give everything for the badge.”
              </p>
              <span className="mt-3 block font-sans text-xs font-bold uppercase tracking-widest text-white">
                — Heung-Min Son · 손흥민
              </span>
            </div>

            {/* Honors Trophy Cabinet */}
            <div className="mt-7">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-beige mb-3">
                <Award className="w-4 h-4 text-default" />
                Major Honors & Individual Records
              </span>
              <div className="flex flex-wrap gap-2">
                {honors.map((h) => (
                  <div
                    key={h.label}
                    className="px-3.5 py-2 rounded-xl bg-main-bg border border-white/10 text-xs"
                  >
                    <span className="font-bold text-white block">{h.label}</span>
                    <span className="text-[11px] font-semibold text-default">{h.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive 5-City Career Passport */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                Career Passport · Select City
              </span>
              <span className="font-bungee text-base text-default">2010 — 2026</span>
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
                        ? 'bg-default text-black border-default scale-[1.02] shadow-lg shadow-default/15'
                        : 'bg-main-bg text-white border-white/10 hover:border-default/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-widest ${
                          active ? 'text-black/75' : 'text-default'
                        }`}
                      >
                        {chapter.period}
                      </span>
                      <span
                        className={`font-kr text-xs font-bold ${
                          active ? 'text-black/80' : 'text-crimson'
                        }`}
                      >
                        {chapter.cityHangul}
                      </span>
                    </div>
                    <span className="mt-1.5 block font-sans text-base font-extrabold tracking-tight">
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

            <div className="rounded-3xl bg-main-bg border border-white/15 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-kr text-xs font-bold text-crimson">
                      {selectedChapter.cityHangul}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-default">
                      · {selectedChapter.league} · {selectedChapter.period}
                    </span>
                  </div>
                  <h3 className="mt-1 font-bungee text-3xl md:text-5xl text-white uppercase">
                    {selectedChapter.club}
                  </h3>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-black border border-default/40 font-bungee text-lg text-default">
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
                  <span className="font-bungee text-3xl md:text-5xl text-white">
                    {selectedChapter.apps}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-beige">
                    Goals
                  </span>
                  <span className="font-bungee text-3xl md:text-5xl text-default">
                    {selectedChapter.goals}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-beige">
                    Assists
                  </span>
                  <span className="font-bungee text-3xl md:text-5xl text-white">
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
