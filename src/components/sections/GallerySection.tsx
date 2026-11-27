import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Camera } from 'lucide-react'
import { galleryCards, GalleryCard } from '../../data/sonData'
import { useFanWallStore, useMenuStore } from '../../store/useAppStore'

const paletteClasses: Record<GalleryCard['palette'], string> = {
  lime: 'bg-default text-black border-default',
  obsidian: 'bg-black text-white border-white/15',
  gold: 'bg-gradient-to-br from-[#111936] to-[#162244] text-white border-default/40',
  navy: 'bg-[#101c3d] text-white border-white/20',
  crimson: 'bg-[#18294d] text-white border-default/30',
}

export const GallerySection: React.FC = () => {
  const { messages, addMessage } = useFanWallStore()
  const { setActiveSection } = useMenuStore()

  const [activeCard, setActiveCard] = useState<GalleryCard>(galleryCards[0])
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [era, setEra] = useState('Spurs #7')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    addMessage({
      name: name.trim(),
      country: country.trim() || 'Global Fan',
      era,
      message: message.trim(),
    })

    setName('')
    setCountry('')
    setMessage('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="gallery"
      onMouseEnter={() => setActiveSection('gallery')}
      className="py-24 px-5 md:px-10 bg-black relative overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
            Highlights & Fan Community
          </span>
          <h2 className="mt-2 font-bungee text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none">
            Frame The <span className="text-default">Moment</span>
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-beige">
            Click any card in Sonny’s tilted reel below, or drop your own note in the Fan Club Wall.
          </p>
        </div>

        {/* Tilted Staggered Card Deck (Lando .vd-card style) */}
        <div className="flex items-center justify-start xl:justify-center overflow-x-auto py-12 px-4 gap-2 no-scrollbar">
          {galleryCards.map((card) => {
            const isSelected = activeCard.id === card.id
            return (
              <motion.button
                key={card.id}
                type="button"
                whileHover={{ y: -22, rotate: 0, scale: 1.04, zIndex: 40 }}
                onClick={() => setActiveCard(card)}
                className={`vd-card relative w-64 sm:w-72 h-88 p-6 text-left flex flex-col justify-between transition-shadow duration-300 shadow-2xl ${
                  paletteClasses[card.palette]
                } ${card.rotation} ${isSelected ? 'ring-4 ring-default z-30' : 'z-10'}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      card.palette === 'lime'
                        ? 'bg-black text-default'
                        : 'bg-white/10 text-default'
                    }`}
                  >
                    {card.tag}
                  </span>
                  <Camera className="w-4 h-4 opacity-70" />
                </div>

                <div>
                  <span className="block font-bungee text-3xl leading-none mb-2">
                    {card.stat}
                  </span>
                  <h3 className="font-sans text-xl font-extrabold tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs opacity-80">{card.subtitle}</p>
                </div>

                <div className="pt-3 border-t border-current/15 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest opacity-80">
                  <span>{card.year}</span>
                  <span>SON #7</span>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active Card Spotlight */}
        <div className="max-w-3xl mx-auto mt-4 mb-20 rounded-3xl bg-main-bg border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-default">
              {activeCard.tag} · {activeCard.year}
            </span>
            <h3 className="mt-1 font-bungee text-2xl text-white uppercase">
              {activeCard.title}
            </h3>
            <p className="mt-2 font-sans text-sm md:text-base text-beige leading-relaxed">
              {activeCard.caption}
            </p>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-full bg-black border border-default/40 font-bungee text-lg text-default">
            {activeCard.stat}
          </span>
        </div>

        {/* Fan Club Wall & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-white/10">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-default">
              Fan Club Guestbook
            </span>
            <h3 className="mt-2 font-bungee text-3xl md:text-5xl uppercase text-white tracking-tighter">
              Leave A Note For <span className="text-default">Sonny</span>
            </h3>
            <p className="mt-3 font-sans text-sm md:text-base text-beige">
              Share your favorite Heung-Min Son goal, match memory, or message of support.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-main-bg border border-white/15 focus:border-default outline-none text-white text-sm placeholder:text-beige/60"
                />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="City / Country"
                  className="w-full px-4 py-3 rounded-xl bg-main-bg border border-white/15 focus:border-default outline-none text-white text-sm placeholder:text-beige/60"
                />
              </div>

              <select
                value={era}
                onChange={(e) => setEra(e.target.value)}
                aria-label="Favorite Son Era"
                className="w-full px-4 py-3 rounded-xl bg-main-bg border border-white/15 focus:border-default outline-none text-white text-sm"
              >
                <option value="Spurs #7">Favorite Era: Tottenham Hotspur Captain</option>
                <option value="LAFC #7">Favorite Era: LAFC Black & Gold</option>
                <option value="Korea Captain">Favorite Era: South Korea National Team</option>
                <option value="Bundesliga">Favorite Era: HSV & Bayer Leverkusen</option>
              </select>

              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your tribute or favorite Sonny memory..."
                className="w-full px-4 py-3 rounded-xl bg-main-bg border border-white/15 focus:border-default outline-none text-white text-sm placeholder:text-beige/60 resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-default text-black font-sans text-xs font-extrabold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <Send className="w-4 h-4" />
                <span>Post To Fan Wall</span>
              </button>

              {submitted && (
                <div className="inline-flex items-center gap-2 text-xs font-bold text-default">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Note added to the Sonny #7 Fan Wall!</span>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-beige">
                Recent Fan Tributes ({messages.length})
              </span>
              <span className="font-brier text-2xl text-default">COYS · LAFC · 대한민국</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-main-bg border border-white/10 flex flex-col justify-between gap-4"
                >
                  <p className="font-sans text-sm md:text-base text-white leading-relaxed">
                    “{item.message}”
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div>
                      <span className="block font-sans text-sm font-extrabold text-default">
                        {item.name}
                      </span>
                      <span className="block text-[11px] uppercase tracking-wider text-beige">
                        {item.country}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                      {item.era}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
