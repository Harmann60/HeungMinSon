import React, { Fragment, useEffect, useId, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { Camera, ChevronDown, Crosshair } from 'lucide-react'
import { useMenuStore } from '../../store/useAppStore'

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const filterId = useId().replace(/:/g, '')
  const maskId = useId().replace(/:/g, '')
  const { setActiveSection } = useMenuStore()

  const [isActive, setIsActive] = useState(false)
  const [shutterFlash, setShutterFlash] = useState(false)
  const [clickCount, setClickCount] = useState(173)
  const [capturedToast, setCapturedToast] = useState(false)
  const [coords, setCoords] = useState({ x: 50, y: 50 })

  const rawX = useMotionValue(720)
  const rawY = useMotionValue(420)

  const lensX = useSpring(rawX, { stiffness: 280, damping: 28 })
  const lensY = useSpring(rawY, { stiffness: 280, damping: 28 })
  const trailX = useSpring(rawX, { stiffness: 140, damping: 24 })
  const trailY = useSpring(rawY, { stiffness: 140, damping: 24 })

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
    const px = ((e.clientX - rect.left) / rect.width) * 100
    const py = ((e.clientY - rect.top) / rect.height) * 100
    setCoords({ x: Math.round(px), y: Math.round(py) })
    rawX.set((px / 100) * 1440)
    rawY.set((py / 100) * 900)
    if (!isActive) setIsActive(true)
  }

  const triggerCameraShutter = () => {
    setShutterFlash(true)
    setClickCount((prev) => prev + 1)
    setCapturedToast(true)
    setTimeout(() => setShutterFlash(false), 240)
    setTimeout(() => setCapturedToast(false), 2600)
  }

  const autoBlobs = [
    {
      mainX: 740 + Math.sin(t * 0.65) * 190,
      mainY: 420 + Math.cos(t * 0.85) * 110,
      satX: 760 + Math.sin(t * 0.65 + 0.9) * 240,
      satY: 410 + Math.cos(t * 0.85 + 1.0) * 140,
    },
  ]

  const apertureRadius = 165

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setActiveSection('home')}
      className="relative w-full min-h-[100dvh] bg-black overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Liquid Camera Aperture SVG Mask */}
      <svg width={0} height={0} className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="12" result="blur" />
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
                  <motion.circle cx={lensX} cy={lensY} r={apertureRadius} fill="white" />
                  <motion.circle cx={trailX} cy={trailY} r={apertureRadius * 0.68} fill="white" />
                </>
              )}
              {autoBlobs.map((b, i) => (
                <Fragment key={i}>
                  <circle cx={b.satX} cy={b.satY} r={apertureRadius * 0.55} fill="white" />
                  <circle cx={b.mainX} cy={b.mainY} r={apertureRadius * 0.85} fill="white" />
                </Fragment>
              ))}
            </g>
          </mask>
        </defs>
      </svg>

      {/* Base Layer: Midnight Floodlight Silhouette */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-base.jpg"
          alt="Midnight stadium floodlights silhouette"
          className="w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/70" />
      </div>

      {/* Revealed Layer: Taegeuk & Championship Gold Camera Celebration */}
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

      {/* Live Camera Viewfinder HUD Overlay */}
      <div className="absolute inset-4 md:inset-8 border border-white/10 pointer-events-none z-10 rounded-2xl">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-default rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-crimson rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-taegeuk rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-default rounded-br-xl" />

        {/* Dynamic cursor reticle */}
        {isActive && (
          <div
            className="hidden md:flex absolute -translate-x-1/2 -translate-y-1/2 items-center justify-center w-24 h-24 rounded-full border border-default/60 transition-opacity duration-200"
            style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
          >
            <Crosshair className="w-5 h-5 text-default/80" />
            <span className="absolute -bottom-6 text-[10px] font-mono font-bold tracking-widest text-default bg-black/80 px-2 py-0.5 rounded">
              AF-C {coords.x}:{coords.y}
            </span>
          </div>
        )}
      </div>

      {/* Giant Hangul Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        <span className="font-kr text-[28vw] font-black text-white/[0.03] leading-none select-none">
          손흥민
        </span>
      </div>

      {/* Camera Shutter Flash */}
      <div
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-200 z-30 ${
          shutterFlash ? 'opacity-65' : 'opacity-0'
        }`}
      />

      {/* Top Viewfinder Status Strip */}
      <div className="relative z-20 pt-24 md:pt-28 px-6 md:px-12 max-w-[1680px] w-full mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white">
            REC · VIEWFINDER 07 · MOVE TO REVEAL
          </span>
        </div>

        <button
          type="button"
          onClick={triggerCameraShutter}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main-bg/90 hover:bg-default text-white hover:text-black border border-default/40 backdrop-blur-md transition-all duration-200 text-xs font-extrabold uppercase tracking-wider shadow-lg"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Frame The Shot · {clickCount}</span>
        </button>
      </div>

      {/* Captured Snapshot Toast */}
      <AnimatePresence>
        {capturedToast && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            className="fixed top-24 right-6 md:right-12 z-40 p-4 rounded-2xl bg-black/90 border border-default shadow-2xl max-w-xs"
          >
            <span className="block font-mono text-[10px] text-default uppercase tracking-widest">
              SHUTTER CLICK #{clickCount}
            </span>
            <p className="mt-1 font-sans text-xs text-white font-semibold">
              Memory framed: 173 Spurs Goals · 2022 Golden Boot · 2025 Europa League Champion.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Kinetic Typography */}
      <div className="relative z-20 px-6 md:px-12 max-w-[1680px] w-full mx-auto my-auto py-8 pointer-events-none">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-kr text-base md:text-xl font-black text-crimson bg-black/70 px-3 py-1 rounded-full border border-crimson/40">
              대한민국 No.7
            </span>
            <span className="font-brier text-2xl md:text-4xl text-default">
              Effort never betrays you.
            </span>
          </div>

          <h1 className="font-bungee text-6xl sm:text-8xl md:text-9xl xl:text-[10.5rem] leading-[0.86] tracking-tight uppercase text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)]">
            Heung-Min
            <span className="block text-default">
              Son <span className="text-white/25">/</span> 07
            </span>
          </h1>

          <p className="mt-5 max-w-xl font-sans text-base md:text-xl text-beige font-medium leading-relaxed bg-black/60 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10">
            Two-footed lethality. Infectious humility. From Chuncheon dirt pitches to lifting the Europa League trophy as Spurs Captain and igniting Los Angeles.
          </p>
        </div>
      </div>

      {/* Bottom Telemetry Strip */}
      <div className="relative z-20 px-6 md:px-12 pb-8 max-w-[1680px] w-full mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 bg-black/80 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3.5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Spurs Goals</span>
            <span className="font-bungee text-2xl md:text-3xl text-default">173</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Golden Boot</span>
            <span className="font-bungee text-2xl md:text-3xl text-white">23 GLS</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Puskás Run</span>
            <span className="font-bungee text-2xl md:text-3xl text-crimson">73M</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-beige">Europa Cup</span>
            <span className="font-bungee text-2xl md:text-3xl text-default">2025</span>
          </div>
        </div>

        <a
          href="#goals"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white hover:text-default transition-colors bg-black/65 px-4 py-2.5 rounded-full border border-white/15"
        >
          <span>Open Goal Radar</span>
          <ChevronDown className="w-4 h-4 text-default animate-bounce" />
        </a>
      </div>
    </section>
  )
}
