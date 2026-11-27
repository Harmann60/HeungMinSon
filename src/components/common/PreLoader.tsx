import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SonLogo } from '../vectors/SonVectors'

export const PreLoader: React.FC = () => {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    const duration = 1150

    let frameId = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * 100))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 240)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-between p-6 md:p-10 select-none"
        >
          <div className="flex items-center justify-between">
            <SonLogo width={54} height={28} />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
              Seoul · London · Los Angeles
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-bungee text-6xl md:text-9xl text-white tracking-tighter leading-none">
                {String(count).padStart(2, '0')}
              </span>
              <span className="font-bungee text-2xl md:text-4xl text-default">%</span>
            </div>
            <div className="w-48 md:w-72 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-default transition-all duration-75"
                style={{ width: `${count}%` }}
              />
            </div>
            <p className="font-brier text-2xl md:text-3xl text-default">
              Effort never betrays you.
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-beige/70">
            <span>Heung-Min Son</span>
            <span>Number 07</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
