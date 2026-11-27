import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, Zap } from 'lucide-react'
import { signatureGoals, SignatureGoal } from '../../data/sonData'
import { useMenuStore } from '../../store/useAppStore'

export const SignatureGoalsSection: React.FC = () => {
  const [footFilter, setFootFilter] = useState<'All' | 'Right Foot' | 'Left Foot'>('All')
  const [selectedGoal, setSelectedGoal] = useState<SignatureGoal>(signatureGoals[0])
  const { setActiveSection } = useMenuStore()

  const visibleGoals =
    footFilter === 'All'
      ? signatureGoals
      : signatureGoals.filter((g) => g.foot === footFilter)

  const handleFilterChange = (next: 'All' | 'Right Foot' | 'Left Foot') => {
    setFootFilter(next)
    const matching =
      next === 'All' ? signatureGoals : signatureGoals.filter((g) => g.foot === next)
    if (matching.length > 0 && !matching.some((g) => g.id === selectedGoal.id)) {
      setSelectedGoal(matching[0])
    }
  }

  return (
    <section
      id="goals"
      onMouseEnter={() => setActiveSection('goals')}
      className="py-24 px-5 md:px-10 bg-main-bg/50 border-y border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-kr text-xs font-black text-crimson bg-black/70 px-3 py-1 rounded-full border border-crimson/40">
                양발 슈팅 레이더
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
                Zero Weak Foot · Tactical Pitch Radar
              </span>
            </div>
            <h2 className="mt-3 font-bungee text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-[0.9]">
              Both Feet <span className="text-default">Lethal</span>
            </h2>
          </div>

          {/* Foot Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Right Foot', 'Left Foot'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleFilterChange(tab)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-extrabold uppercase tracking-wider transition-all ${
                  footFilter === tab
                    ? 'bg-default text-black'
                    : 'bg-black/70 text-white border border-white/15 hover:border-default'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Footed Career Split Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-black/80 border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="text-default">Right Foot · 54%</span>
            <span className="text-white">Premier League Two-Footed Balance</span>
            <span className="text-taegeuk">Left Foot · 43% · Headers 3%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex gap-0.5">
            <div className="h-full bg-default" style={{ width: '54%' }} />
            <div className="h-full bg-taegeuk" style={{ width: '43%' }} />
            <div className="h-full bg-crimson" style={{ width: '3%' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Architectural Pitch Radar */}
          <div className="lg:col-span-7 rounded-3xl bg-black border border-white/15 p-4 md:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-beige">
                <Target className="w-4 h-4 text-default" />
                PITCH TELEMETRY · CLICK MARKER TO TRACE
              </span>
              <span className="font-mono text-xs font-bold text-default">
                {selectedGoal.minute} · {selectedGoal.foot.toUpperCase()}
              </span>
            </div>

            <div className="relative w-full aspect-[600/360] rounded-2xl bg-[#0a0f1c] border border-white/10 overflow-hidden">
              <svg viewBox="0 0 600 360" className="w-full h-full">
                {/* Tactical Pitch Markings */}
                <g stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" fill="none">
                  <rect x="20" y="20" width="560" height="320" rx="6" />
                  <line x1="300" y1="20" x2="300" y2="340" />
                  <circle cx="300" cy="180" r="52" />
                  <circle cx="300" cy="180" r="3" fill="rgba(255,255,255,0.3)" />
                  {/* Left Box */}
                  <rect x="20" y="92" width="96" height="176" />
                  <rect x="20" y="135" width="34" height="90" />
                  {/* Right Attacking Box */}
                  <rect x="484" y="92" width="96" height="176" />
                  <rect x="546" y="135" width="34" height="90" />
                  <path d="M 484 136 A 54 54 0 0 0 484 224" />
                  {/* Goal Mouth */}
                  <rect x="580" y="152" width="10" height="56" stroke="#f5c518" strokeWidth="2" />
                </g>

                {/* All Inactive Goal Dots */}
                {visibleGoals.map((goal) => {
                  const isActive = goal.id === selectedGoal.id
                  return (
                    <g
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={goal.startX}
                        cy={goal.startY}
                        r={isActive ? 9 : 6}
                        fill={
                          isActive
                            ? '#f5c518'
                            : goal.foot === 'Left Foot'
                            ? '#2e7bff'
                            : '#cd2e3a'
                        }
                        opacity={isActive ? 1 : 0.65}
                      />
                    </g>
                  )
                })}

                {/* Active Animated Run + Shot Trajectory */}
                <motion.path
                  key={`${selectedGoal.id}-run`}
                  d={selectedGoal.pathD}
                  fill="none"
                  stroke="#f5c518"
                  strokeWidth="3.5"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />

                {/* Shot into Goal Net */}
                <motion.line
                  key={`${selectedGoal.id}-shot`}
                  x1={selectedGoal.shotX}
                  y1={selectedGoal.shotY}
                  x2={580}
                  y2={selectedGoal.goalY}
                  stroke="#cd2e3a"
                  strokeWidth="3.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.35, duration: 0.35 }}
                />

                {/* Ball Impact Ring at Goal */}
                <circle cx={580} cy={selectedGoal.goalY} r="7" fill="#f5c518" />
                <circle
                  cx={selectedGoal.shotX}
                  cy={selectedGoal.shotY}
                  r="7"
                  fill="#07090e"
                  stroke="#f5c518"
                  strokeWidth="3"
                />
              </svg>
            </div>

            {/* Selected Goal Readout */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-4 border-t border-white/10">
              <div className="md:col-span-7">
                <span className="text-[11px] font-bold uppercase tracking-widest text-default">
                  {selectedGoal.competition} · {selectedGoal.date}
                </span>
                <h3 className="font-bungee text-2xl md:text-3xl text-white uppercase mt-0.5">
                  {selectedGoal.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-beige leading-relaxed">
                  {selectedGoal.description}
                </p>
              </div>
              <div className="md:col-span-5 grid grid-cols-2 gap-3 bg-main-bg rounded-2xl p-4 border border-white/10">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">
                    Distance
                  </span>
                  <span className="font-bungee text-xl text-white">{selectedGoal.distance}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">
                    Signature
                  </span>
                  <span className="font-bungee text-xl text-default">{selectedGoal.speedOrCurve}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Goal Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {visibleGoals.map((goal) => {
              const isSelected = goal.id === selectedGoal.id
              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setSelectedGoal(goal)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-default text-black border-default shadow-xl shadow-default/10'
                      : 'bg-black/80 text-white border-white/10 hover:border-default/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                          isSelected
                            ? 'bg-black text-default'
                            : goal.foot === 'Left Foot'
                            ? 'bg-taegeuk/20 text-taegeuk'
                            : 'bg-crimson/20 text-crimson'
                        }`}
                      >
                        {goal.foot}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isSelected ? 'text-black/75' : 'text-beige'
                        }`}
                      >
                        {goal.opponent} · {goal.minute}
                      </span>
                    </div>
                    <h4 className="mt-1.5 font-sans text-lg md:text-xl font-extrabold tracking-tight">
                      {goal.title}
                    </h4>
                  </div>

                  <Zap
                    className={`w-5 h-5 shrink-0 ${
                      isSelected ? 'text-black' : 'text-default'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
