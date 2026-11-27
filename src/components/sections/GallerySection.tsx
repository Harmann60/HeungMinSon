import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Camera, Expand, ChevronLeft, ChevronRight, X, MapPin } from 'lucide-react'
import { galleryCards, GalleryCard, photoGalleryList, PhotoGalleryItem } from '../../data/sonData'
import { useFanWallStore, useMenuStore } from '../../store/useAppStore'

const galleryFilters: Array<'All' | 'Tottenham Hotspur' | 'LAFC' | 'Korea & Awards'> = [
  'All',
  'Tottenham Hotspur',
  'LAFC',
  'Korea & Awards',
]

export const GallerySection: React.FC = () => {
  const { messages, addMessage } = useFanWallStore()
  const { setActiveSection } = useMenuStore()

  const [activeCard, setActiveCard] = useState<GalleryCard>(galleryCards[0])
  const [photoFilter, setPhotoFilter] = useState<'All' | 'Tottenham Hotspur' | 'LAFC' | 'Korea & Awards'>('All')
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoGalleryItem | null>(null)

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [era, setEra] = useState('Spurs #7')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const filteredPhotos =
    photoFilter === 'All'
      ? photoGalleryList
      : photoGalleryList.filter((p) => p.era === photoFilter)

  useEffect(() => {
    if (!lightboxPhoto) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxPhoto(null)
      if (e.key === 'ArrowRight') stepLightbox(1)
      if (e.key === 'ArrowLeft') stepLightbox(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  const stepLightbox = (dir: 1 | -1) => {
    if (!lightboxPhoto) return
    const idx = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id)
    if (idx === -1) return
    const nextIdx = (idx + dir + filteredPhotos.length) % filteredPhotos.length
    setLightboxPhoto(filteredPhotos[nextIdx])
  }

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
        {/* Tilted Photo Deck Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
            Highlights & Photo Reel
          </span>
          <h2 className="mt-2 font-bungee text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none">
            Frame The <span className="text-default">Moment</span>
          </h2>
          <p className="mt-4 font-sans text-base md:text-lg text-beige">
            Click any card in Sonny’s tilted photo reel, browse the full gallery below, or leave a note on the Fan Wall.
          </p>
        </div>

        {/* Tilted Staggered Photo Card Deck (Lando .vd-card style with real Son photos) */}
        <div className="flex items-center justify-start xl:justify-center overflow-x-auto py-12 px-4 gap-2 no-scrollbar">
          {galleryCards.map((card) => {
            const isSelected = activeCard.id === card.id
            return (
              <motion.button
                key={card.id}
                type="button"
                whileHover={{ y: -22, rotate: 0, scale: 1.04, zIndex: 40 }}
                onClick={() => setActiveCard(card)}
                className={`vd-card relative w-64 sm:w-72 h-92 text-left flex flex-col justify-between transition-shadow duration-300 shadow-2xl overflow-hidden bg-black ${
                  card.rotation
                } ${isSelected ? 'ring-4 ring-default z-30' : 'z-10'}`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/25" />

                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-default text-black">
                    {card.tag}
                  </span>
                  <Camera className="w-4 h-4 text-white/80" />
                </div>

                <div className="relative z-10 p-5">
                  <span className="block font-bungee text-2xl leading-none mb-1.5 text-default drop-shadow">
                    {card.stat}
                  </span>
                  <h3 className="font-sans text-xl font-extrabold tracking-tight leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-beige">{card.subtitle}</p>
                  <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-white/80">
                    <span>{card.year}</span>
                    <span>SON #7</span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active Card Spotlight */}
        <div className="max-w-3xl mx-auto mt-4 mb-24 rounded-3xl bg-main-bg border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

        {/* DEDICATED PHOTO GALLERY SECTION */}
        <div id="photo-gallery" className="pt-16 pb-24 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-default">
                Dedicated Photo Gallery · {photoGalleryList.length} Frames
              </span>
              <h3 className="mt-2 font-bungee text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
                Through The <span className="text-default">Lens</span>
              </h3>
              <p className="mt-3 max-w-xl font-sans text-sm md:text-base text-beige">
                Match action, trophy ceremonies, and iconic moments from Leverkusen and North London to South Korea and Los Angeles. Click any photo to expand.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {galleryFilters.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setPhotoFilter(tab)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-extrabold uppercase tracking-wider transition-all ${
                    photoFilter === tab
                      ? 'bg-default text-black'
                      : 'bg-main-bg text-white border border-white/15 hover:border-default'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredPhotos.map((photo) => (
              <motion.button
                key={photo.id}
                layout
                type="button"
                onClick={() => setLightboxPhoto(photo)}
                className="group relative text-left rounded-2xl overflow-hidden bg-main-bg border border-white/10 hover:border-default/80 transition-colors flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm border border-white/15 text-[10px] font-bold uppercase tracking-widest text-default">
                    {photo.year}
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white group-hover:bg-default group-hover:text-black transition-colors">
                    <Expand className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-default">
                      {photo.era}
                    </span>
                    <h4 className="mt-1 font-sans text-base font-extrabold text-white group-hover:text-default transition-colors">
                      {photo.title}
                    </h4>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-beige">
                    <MapPin className="w-3 h-3 text-default shrink-0" />
                    <span>{photo.location}</span>
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Fan Club Wall & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-14 border-t border-white/10">
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

      {/* Full-Screen Photo Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-[350] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl bg-main-bg border border-default/40 overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-default hover:text-black text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => stepLightbox(-1)}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 hover:bg-default hover:text-black text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => stepLightbox(1)}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 hover:bg-default hover:text-black text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
                <img
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.alt}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-default">
                    {lightboxPhoto.era} · {lightboxPhoto.year} · {lightboxPhoto.location}
                  </span>
                  <h4 className="mt-1 font-bungee text-2xl text-white uppercase">
                    {lightboxPhoto.title}
                  </h4>
                  <p className="mt-1 font-sans text-sm text-beige">
                    {lightboxPhoto.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
