import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import { archiveItems, ArchiveItem } from '../../data/sonData'
import { KitOrBootVisual } from '../vectors/KitSVG'
import { useMenuStore } from '../../store/useAppStore'

const categories: Array<'All' | 'Clubs' | 'Korea NT' | 'Signature Boots'> = [
  'All',
  'Clubs',
  'Korea NT',
  'Signature Boots',
]

export const ArchiveSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Clubs' | 'Korea NT' | 'Signature Boots'>('All')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null)
  const { setActiveSection } = useMenuStore()

  const filtered =
    filter === 'All' ? archiveItems : archiveItems.filter((item) => item.category === filter)

  return (
    <section
      id="archive"
      onMouseEnter={() => setActiveSection('archive')}
      className="py-24 px-5 md:px-10 bg-main-bg/60 border-y border-white/10"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
              Kits & Signature Boots Archive
            </span>
            <h2 className="mt-2 font-bungee text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none">
              Shirts Of <span className="text-default">History</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-base md:text-lg text-beige">
              Hover any jersey or boot to flip to Sonny’s iconic #7 back print — click to inspect the story behind each era.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-extrabold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-default text-black'
                    : 'bg-black/60 text-white border border-white/15 hover:border-default'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid inspired by Lando's Helmets Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const isHovered = hoveredId === item.id
            return (
              <motion.button
                key={item.id}
                layout
                type="button"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedItem(item)}
                className="group relative text-left rounded-3xl bg-black border border-white/10 hover:border-default/70 p-6 transition-colors overflow-hidden flex flex-col justify-between min-h-[380px]"
              >
                {/* Top metadata */}
                <div className="flex items-center justify-between w-full z-10">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-beige">
                    {item.season}
                  </span>
                  <span className="font-bungee text-sm text-default">#{item.number}</span>
                </div>

                {/* Centerpiece SVG Kit / Boot (Hover Swaps Front -> Back!) */}
                <div className="relative h-52 w-full my-4 flex items-center justify-center">
                  <KitOrBootVisual item={item} hovered={isHovered} />
                </div>

                {/* Bottom info */}
                <div className="z-10">
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-default">
                    {item.club}
                  </span>
                  <h3 className="mt-1 font-sans text-xl md:text-2xl font-extrabold tracking-tight text-white group-hover:text-default transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs font-medium text-beige">
                    {isHovered ? item.statsLine : item.momentTitle}
                  </p>
                </div>

                {/* Subtle glow */}
                <div
                  className={`absolute -bottom-16 -right-16 w-44 h-44 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-25 bg-default' : 'opacity-0'
                  }`}
                />
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Inspect Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-md flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-main-bg border border-default/40 p-6 md:p-10 text-white"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close archive detail"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/70 hover:bg-default hover:text-black flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="h-60 bg-black rounded-2xl p-4 flex items-center justify-center border border-white/10">
                  <KitOrBootVisual item={selectedItem} hovered />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-default">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedItem.season} · {selectedItem.club}</span>
                  </div>
                  <h3 className="mt-2 font-bungee text-2xl md:text-3xl uppercase leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm md:text-base text-beige leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-beige">
                      Defining Milestone
                    </span>
                    <span className="font-sans text-base font-bold text-default">
                      {selectedItem.momentTitle} · {selectedItem.statsLine}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
