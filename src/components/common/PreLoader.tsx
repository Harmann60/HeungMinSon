import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SonLogo } from '../vectors/SonVectors'

export const PreLoader: React.FC = () => {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    const duration = 1050

    let frameId = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * 100))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 200)
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
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-between p-6 md:p-10 select-none border-b-2 border-default"
        >
          <div className="flex items-center justify-between">
            <SonLogo width={58} height={28} />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-beige">
              춘천 · London · Los Angeles
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <span className="font-kr text-sm md:text-base font-black tracking-[0.35em] text-crimson uppercase">
              손흥민 · SON HEUNG-MIN
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-bungee text-7xl md:text-[9rem] text-white tracking-tight leading-none">
                {String(count).padStart(2, '0')}
              </span>
              <span className="font-bungee text-3xl md:text-5xl text-default">%</span>
            </div>
            <div className="w-52 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-gradient-to-r from-taegeuk via-crimson to-default transition-all duration-75"
                style={{ width: `${count}%` }}
              />
            </div>
            <p className="font-brier text-2xl md:text-3xl text-default mt-1">
              Effort never betrays you.
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-beige/70">
            <span>Camera Shutter Loaded</span>
            <span>Number 07</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
