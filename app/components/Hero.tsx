'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/* ── Canvas particle mesh ─────────────────────────── */
interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number
}

function initCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!
  let w = 0, h = 0
  let particles: Particle[] = []
  let rafId = 0

  function resize() {
    w = canvas.width  = canvas.offsetWidth
    h = canvas.height = canvas.offsetHeight
    particles = []
    const count = Math.min(80, Math.floor((w * h) / 12000))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.2 + 0.4,
      })
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)

    // Glow in centre
    const cx = w / 2, cy = h / 2
    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.45)
    grd.addColorStop(0,   'rgba(0,85,255,0.12)')
    grd.addColorStop(0.5, 'rgba(0,85,255,0.04)')
    grd.addColorStop(1,   'transparent')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, w, h)

    // Update + draw particles
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,85,255,0.7)'
      ctx.fill()
    })

    // Connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i], p2 = particles[j]
        const dx = p1.x - p2.x, dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          ctx.strokeStyle = `rgba(0,85,255,${(1 - dist / 140) * 0.22})`
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    rafId = requestAnimationFrame(draw)
  }

  const ro = new ResizeObserver(resize)
  ro.observe(canvas)
  resize()
  draw()

  return () => {
    cancelAnimationFrame(rafId)
    ro.disconnect()
  }
}

/* ── Component ────────────────────────────────────── */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef   = useRef<HTMLElement>(null)

  // Canvas
  useEffect(() => {
    if (!canvasRef.current) return
    return initCanvas(canvasRef.current)
  }, [])

  // GSAP text entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15, delay: 0.2 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100dvh', background: '#000000' }}
    >
      {/* Canvas mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Floating glow blob */}
      <div
        className="blob absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 600,
          height: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(0,85,255,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="hero-anim inline-flex items-center gap-2 mb-8">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-medium border"
            style={{
              fontFamily: 'var(--font-space-mono)',
              background: 'rgba(0,85,255,0.10)',
              borderColor: 'rgba(0,85,255,0.3)',
              color: '#4D8EFF',
            }}
          >
            {'// Agencia de software. Sin corbata.'}
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-anim leading-none tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          <span
            className="block font-black"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              color: '#F5F5F5',
            }}
          >
            Tu idea de mierda,
          </span>
          <span
            className="block font-black"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              color: '#0055FF',
              textShadow: '0 0 80px rgba(0,85,255,0.4)',
            }}
          >
            hecha software.
          </span>
        </h1>

        {/* Extractable summary */}
        <p
          className="hero-anim mt-6 mx-auto max-w-3xl text-base md:text-lg"
          style={{
            fontFamily: 'var(--font-plus-jakarta)',
            color: 'rgba(245,245,245,0.78)',
            lineHeight: 1.7,
          }}
        >
          SN8Labs es una agencia de software en Colombia que diseña y desarrolla landings,
          sitios web, MVPs, apps móviles, automatizaciones con WhatsApp e integraciones a
          medida para empresas, startups y agencias que necesitan salir rápido a producción.
        </p>

        {/* Subtext */}
        <p
          className="hero-anim mt-4 text-sm md:text-base"
          style={{
            fontFamily: 'var(--font-space-mono)',
            color: 'rgba(245,245,245,0.45)',
            letterSpacing: '0.02em',
          }}
        >
          {'// software a medida. automatizaciones. marca blanca. con deploy.'}
        </p>

        {/* CTAs */}
        <div className="hero-anim mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="btn-slide btn-magnetic px-8 py-4 rounded-full text-base font-bold"
            style={{
              background: '#0055FF',
              color: '#fff',
              fontFamily: 'var(--font-space-grotesk)',
              boxShadow: '0 0 30px rgba(0,85,255,0.35)',
            }}
          >
            Hablemos →
          </a>
          <a
            href="#servicios"
            className="btn-magnetic px-8 py-4 rounded-full text-base font-semibold border transition-all duration-300"
            style={{
              borderColor: 'rgba(245,245,245,0.25)',
              color: '#F5F5F5',
              fontFamily: 'var(--font-space-grotesk)',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0,85,255,0.6)'
              e.currentTarget.style.color = '#4D8EFF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(245,245,245,0.25)'
              e.currentTarget.style.color = '#F5F5F5'
            }}
          >
            Ver servicios ↓
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="hero-anim mt-16 flex flex-col items-center gap-2 opacity-40"
          style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11 }}
        >
          <span style={{ color: '#4D8EFF' }}>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#4D8EFF] to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
      />
    </section>
  )
}
