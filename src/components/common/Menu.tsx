import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useMenuStore, PageSection } from '../../store/useAppStore'
import { menuList, socialMediaList } from '../../data/sonData'
import { PitchPattern, MenuLine } from '../vectors/SonVectors'

export const Menu: React.FC = () => {
  const { open, setOpen, activeSection, setActiveSection } = useMenuStore()

  const handleNavigate = (target: string, sectionId: PageSection) => {
    setActiveSection(sectionId)
    setOpen(false)
    const el = document.querySelector(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 94% 5%)' }}
          animate={{ clipPath: 'circle(150% at 94% 5%)' }}
          exit={{ clipPath: 'circle(0% at 94% 5%)' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[150] bg-black flex flex-col justify-between px-6 md:px-14 pt-28 pb-10 overflow-y-auto"
        >
          <div className="fixed inset-0 pointer-events-none opacity-45">
            <PitchPattern stroke="#2b2d24" />
          </div>

          <div className="relative z-10 max-w-[1680px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
            <div className="lg:col-span-8 flex flex-col">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige mb-5">
                Navigation
              </span>
              <ul className="flex flex-col gap-2 md:gap-3">
                {menuList.map((item, idx) => {
                  const isActive = activeSection === item.sectionId
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.06, duration: 0.45 }}
                      className="relative w-fit group overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => handleNavigate(item.target, item.sectionId)}
                        className={clsx(
                          'relative block text-left font-bungee text-4xl sm:text-6xl md:text-7xl xl:text-8xl uppercase tracking-tighter leading-[0.95] transition-colors',
                          isActive ? 'text-white/40' : 'text-white hover:text-default'
                        )}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <span className="absolute left-0 bottom-0 w-full h-full bg-default -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-15" />
                      </button>
                      {isActive && (
                        <div className="absolute inset-0 pointer-events-none flex items-center">
                          <MenuLine />
                        </div>
                      )}
                    </motion.li>
                  )
                })}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end gap-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
                  Motto
                </span>
                <p className="mt-2 font-brier text-3xl md:text-4xl text-default">
                  “Effort never betrays you.”
                </p>
                <p className="mt-2 font-sans text-sm text-beige leading-relaxed">
                  From Chuncheon, South Korea to Hamburg, Leverkusen, North London Captaincy, and Los Angeles.
                </p>
              </div>

              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige block mb-3">
                  Follow & Official Links
                </span>
                <ul className="grid grid-cols-2 gap-3">
                  {socialMediaList.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-lg font-bold uppercase tracking-tight text-white hover:text-default transition-colors"
                      >
                        <span>{item.label}</span>
                        <span className="text-default text-sm">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1680px] w-full mx-auto flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs uppercase tracking-widest text-beige">
            <span>Heung-Min Son Fan Tribute · #7</span>
            <span>Seoul · North London · Los Angeles</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
