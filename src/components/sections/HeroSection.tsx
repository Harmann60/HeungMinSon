import React, { Fragment, useEffect, useId, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Camera, ChevronDown } from 'lucide-react'
import { useMenuStore } from '../../store/useAppStore'

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const filterId = useId().replace(/:/g, '')
  const maskId = useId().replace(/:/g, '')
  const { setActiveSection } = useMenuStore()

  const [isActive, setIsActive] = useState(false)
  const [shutterFlash, setShutterFlash] = useState(false)
  const [clickCount, setClickCount] = useState(173)

  const rawX = useMotionValue(500)
  const rawY = useMotionValue(350)

  const headX = useSpring(rawX, { stiffness: 260, damping: 28 })
  const headY = useSpring(rawY, { stiffness: 260, damping: 28 })
  const body1X = useSpring(rawX, { stiffness: 150, damping: 24 })
  const body1Y = useSpring(rawY, { stiffness: 150, damping: 24 })
  const body2X = useSpring(rawX, { stiffness: 90, damping: 22 })
  const body2Y = useSpring(rawY, { stiffness: 90, damping: 22 })

  // Ambient floating blobs so the liquid mask breathes even on touch/idle screens
  const [t, setT] = useState(0)
  useEffect(() => {
    let frameId = 0
    const start = performance.now()
    const loop = (now: number) => {
      setT((now - start) / 1000)
      frameId = requestAnimationFrame(loop)
    }
    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 1440
    const y = ((e.clientY - rect.top) / rect.height) * 900
    rawX.set(x)
    rawY.set(y)
    if (!isActive) setIsActive(true)
  }

  const triggerCameraShutter = () => {
    setShutterFlash(true)
    setClickCount((prev) => prev + 1)
    setTimeout(() => setShutterFlash(false), 260)
  }

  const autoBlobs = [
    {
      mainX: 720 + Math.sin(t * 0.7) * 210,
      mainY: 420 + Math.cos(t * 0.9) * 120,
      satX: 720 + Math.sin(t * 0.7 + 0.8) * 260,
      satY: 420 + Math.cos(t * 0.9 + 1.1) * 150,
    },
    {
      mainX: 460 + Math.cos(t * 0.55) * 180,
      mainY: 500 + Math.sin(t * 0.8) * 130,
      satX: 520 + Math.cos(t * 0.65) * 220,
      satY: 460 + Math.sin(t * 0.7) * 160,
    },
  ]

  const blobSize = 145

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setActiveSection('home')}
      className="relative w-full min-h-[100dvh] bg-black overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Hidden SVG Gooey Filter & Dynamic Mask (Signature Lando Norris Effect) */}
      <svg width={0} height={0} className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <mask id={maskId} maskContentUnits="userSpaceOnUse">
            <g filter={`url(#${filterId})`}>
              {isActive && (
                <>
                  <motion.circle cx={headX} cy={headY} r={blobSize * 0.92} fill="white" />
                  <motion.circle cx={body1X} cy={body1Y} r={blobSize * 0.72} fill="white" />
                  <motion.circle cx={body2X} cy={body2Y} r={blobSize * 0.52} fill="white" />
                </>
              )}
              {autoBlobs.map((b, i) => (
                <Fragment key={i}>
                  <circle cx={b.satX} cy={b.satY} r={blobSize * 0.52} fill="white" />
                  <circle cx={b.mainX} cy={b.mainY} r={blobSize * 0.78} fill="white" />
                </Fragment>
              ))}
            </g>
          </mask>
        </defs>
      </svg>

      {/* Base Layer: Moody Stadium Silhouette */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-base.jpg"
          alt="Heung-Min Son standing under stadium floodlights"
          className="w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      </div>

      {/* Liquid Gooey Masked Layer: Electric Lime Camera Celebration */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <image
          href="/images/hero-reveal.jpg"
          width="1440"
          height="900"
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
        />
      </svg>

      {/* Shutter Flash Effect */}
      <div
        className={`absolute inset-0 bg-default pointer-events-none transition-opacity duration-200 z-30 ${
          shutterFlash ? 'opacity-50' : 'opacity-0'
        }`}
      />

      {/* Top Spacer */}
      <div className="relative z-20 pt-24 md:pt-28 px-5 md:px-10 max-w-[1680px] w-full mx-auto flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
          <span className="w-2 h-2 rounded-full bg-default" />
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-white">
            Move cursor to reveal #7 shutter layer
          </span>
        </div>

        <button
          type="button"
          onClick={triggerCameraShutter}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 hover:bg-default text-white hover:text-black border border-white/20 hover:border-default backdrop-blur-md transition-all duration-200 text-xs font-extrabold uppercase tracking-wider"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Snap Celebration · {clickCount}</span>
        </button>
      </div>

      {/* Center Kinetic Typography */}
      <div className="relative z-20 px-5 md:px-10 max-w-[1680px] w-full mx-auto my-auto py-8 pointer-events-none">
        <div className="flex flex-col">
          <span className="font-brier text-3xl md:text-5xl text-default -rotate-2 mb-1">
            Effort never betrays you.
          </span>
          <h1 className="font-bungee text-5xl sm:text-7xl md:text-8xl xl:text-[9.5rem] leading-[0.88] tracking-tighter uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Heung-Min
            <span className="block text-default">Son 07</span>
          </h1>
          <p className="mt-5 max-w-xl font-sans text-base md:text-xl text-beige font-medium leading-relaxed bg-black/45 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10">
            Premier League Golden Boot Winner. FIFA Puskás Winner. UEFA Europa League Champion Captain. Korea Republic Icon & LAFC #7.
          </p>
        </div>
      </div>

      {/* Bottom Career Ribbon & Scroll Indicator */}
      <div className="relative z-20 px-5 md:px-10 pb-7 max-w-[1680px] w-full mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Spurs Goals</span>
            <span className="font-bungee text-xl md:text-2xl text-default">173</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Golden Boot</span>
            <span className="font-bungee text-xl md:text-2xl text-white">21/22</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Puskás Sprint</span>
            <span className="font-bungee text-xl md:text-2xl text-white">73M</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Europa Cup</span>
            <span className="font-bungee text-xl md:text-2xl text-default">2025</span>
          </div>
        </div>

        <a
          href="#on-pitch"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white hover:text-default transition-colors group"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-default animate-bounce" />
        </a>
      </div>
    </section>
  )
}
