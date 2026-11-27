import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Camera } from 'lucide-react'
import { galleryCards, GalleryCard } from '../../data/sonData'
import { useFanWallStore, useMenuStore } from '../../store/useAppStore'

const paletteClasses: Record<GalleryCard['palette'], string> = {
  gold: 'bg-default text-black border-default',
  obsidian: 'bg-black text-white border-white/20',
  navy: 'bg-[#121a35] text-white border-white/20',
  taegeuk: 'bg-[#0b275c] text-white border-taegeuk/50',
  crimson: 'bg-[#450d15] text-white border-crimson/60',
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
      className="py-24 px-5 md:px-10 bg-main-bg/40 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-kr text-xs font-black text-crimson bg-black px-3 py-1 rounded-full border border-crimson/40">
              35mm 필름 · 팬 월
            </span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
              Contact Sheet & Fan Wall
            </span>
          </div>
          <h2 className="font-bungee text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-[0.9]">
            Frame The <span className="text-default">Moment</span>
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-beige">
            Inspired by Sonny’s trademark camera celebration — click any 35mm contact frame below or sign the Fan Wall.
          </p>
        </div>

        {/* 35mm Film Contact-Sheet Card Deck */}
        <div className="flex items-center justify-start xl:justify-center overflow-x-auto py-12 px-4 gap-2">
          {galleryCards.map((card) => {
            const isSelected = activeCard.id === card.id
            return (
              <motion.button
                key={card.id}
                type="button"
                whileHover={{ y: -20, rotate: 0, scale: 1.04, zIndex: 40 }}
                onClick={() => setActiveCard(card)}
                className={`film-card relative w-64 sm:w-72 h-92 p-5 text-left flex flex-col justify-between transition-shadow duration-300 shadow-2xl ${
                  paletteClasses[card.palette]
                } ${card.rotation} ${isSelected ? 'ring-4 ring-default z-30' : 'z-10'}`}
              >
                {/* 35mm Film Sprocket Strip Top */}
                <div className="flex items-center justify-between gap-1.5 opacity-45">
                  {Array.from({ length: 7 }).map((_, idx) => (
                    <span key={idx} className="w-3.5 h-2 rounded-xs bg-current" />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span
                    className={`text-[10px] font-mono font-extrabold uppercase tracking-widest px-2 py-0.5 rounded ${
                      card.palette === 'gold'
                        ? 'bg-black text-default'
                        : 'bg-white/10 text-default'
                    }`}
                  >
                    {card.frameCode}
                  </span>
                  <Camera className="w-4 h-4 opacity-70" />
                </div>

                <div className="my-auto py-3">
                  <span className="block font-bungee text-4xl leading-none mb-2">
                    {card.stat}
                  </span>
                  <h3 className="font-sans text-xl font-extrabold tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs opacity-80">{card.subtitle}</p>
                </div>

                <div className="pt-2 border-t border-current/15 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-widest opacity-80">
                  <span>{card.year}</span>
                  <span>SON #7</span>
                </div>

                {/* 35mm Film Sprocket Strip Bottom */}
                <div className="flex items-center justify-between gap-1.5 opacity-45 mt-2">
                  {Array.from({ length: 7 }).map((_, idx) => (
                    <span key={idx} className="w-3.5 h-2 rounded-xs bg-current" />
                  ))}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active Contact Frame Spotlight */}
        <div className="max-w-3xl mx-auto mt-2 mb-20 rounded-3xl bg-black border border-white/15 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-default">
              {activeCard.frameCode} · {activeCard.year}
            </span>
            <h3 className="mt-1 font-bungee text-2xl md:text-3xl text-white uppercase">
              {activeCard.title}
            </h3>
            <p className="mt-2 font-sans text-sm md:text-base text-beige leading-relaxed">
              {activeCard.caption}
            </p>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-full bg-main-bg border border-default/40 font-bungee text-xl text-default">
            {activeCard.stat}
          </span>
        </div>

        {/* Fan Club Wall & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-white/10">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-default">
              Fan Club Guestbook
            </span>
            <h3 className="mt-2 font-bungee text-4xl md:text-5xl uppercase text-white tracking-tight">
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
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 focus:border-default outline-none text-white text-sm placeholder:text-beige/60"
                />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="City / Country"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 focus:border-default outline-none text-white text-sm placeholder:text-beige/60"
                />
              </div>

              <select
                value={era}
                onChange={(e) => setEra(e.target.value)}
                aria-label="Favorite Son Era"
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 focus:border-default outline-none text-white text-sm"
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
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 focus:border-default outline-none text-white text-sm placeholder:text-beige/60 resize-none"
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
              <span className="font-kr text-sm font-bold text-default">COYS · LAFC · 대한민국</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-black border border-white/10 flex flex-col justify-between gap-4"
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
                    <span className="px-2.5 py-1 rounded-full bg-main-bg text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
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
