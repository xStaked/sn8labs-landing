'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Chat artifact (Card 01) ──────────────────────── */
function ChatArtifact() {
  const msgs = [
    { user: true,  text: 'quiero una app para medir quién es más gay entre dos políticos con Python' },
    { user: false, text: 'dale, ¿necesitas que grafique los resultados también?' },
    { user: true,  text: 'exactamente eso' },
    { user: false, text: 'cotizando... dame 2 minutos 🧑‍💻' },
  ]
  return (
    <div
      className="w-full max-w-md mx-auto rounded-2xl overflow-hidden"
      style={{ background: '#0D0D1A', border: '1px solid rgba(0,85,255,0.15)' }}
    >
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: '#0A1628', borderBottom: '1px solid rgba(0,85,255,0.1)' }}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
        <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, color: '#4D8EFF' }}>
          sn8labs — chat
        </span>
      </div>
      <div className="p-4 space-y-3">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.user ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                background: m.user ? '#0055FF' : 'rgba(255,255,255,0.06)',
                color: m.user ? '#fff' : 'rgba(245,245,245,0.8)',
                borderRadius: m.user ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Proposal artifact (Card 02) ─────────────────── */
function ProposalArtifact() {
  const items = [
    { label: 'Diseño UI/UX',         price: '$150,000 COP' },
    { label: 'Desarrollo Frontend',  price: '$300,000 COP' },
    { label: 'Backend + API',        price: '$250,000 COP' },
    { label: 'Deploy + Dominio',     price: '$50,000 COP'  },
    { label: 'TOTAL',                price: '$750,000 COP', highlight: true },
  ]
  return (
    <div
      className="w-full max-w-md mx-auto rounded-2xl overflow-hidden"
      style={{ background: '#0D0D1A', border: '1px solid rgba(0,85,255,0.15)' }}
    >
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: '#0A1628', borderBottom: '1px solid rgba(0,85,255,0.1)' }}
      >
        <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, color: '#4D8EFF' }}>
          propuesta-001.txt
        </span>
        <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 9, color: '#22C55E' }}>
          sin letra pequeña
        </span>
      </div>
      <div className="p-5 space-y-2">
        {items.map(({ label, price, highlight }) => (
          <div
            key={label}
            className="flex justify-between items-center py-1.5"
            style={{
              borderTop: highlight ? '1px solid rgba(0,85,255,0.3)' : undefined,
              marginTop: highlight ? 8 : 0,
              paddingTop: highlight ? 12 : undefined,
            }}
          >
            <span
              style={{
                fontFamily: highlight ? 'var(--font-space-grotesk)' : 'var(--font-space-mono)',
                fontSize: highlight ? 14 : 11,
                fontWeight: highlight ? 700 : 400,
                color: highlight ? '#F5F5F5' : 'rgba(245,245,245,0.6)',
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: highlight ? 14 : 11,
                fontWeight: highlight ? 700 : 400,
                color: highlight ? '#0055FF' : 'rgba(245,245,245,0.6)',
              }}
            >
              {price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── CI/CD Terminal artifact (Card 03) ───────────── */
function CICDArtifact() {
  const steps = [
    { text: 'git push origin main', type: 'cmd' },
    { text: '→ Trigger: GitHub Actions', type: 'info' },
    { text: '✓ Lint passed',                type: 'ok' },
    { text: '✓ Tests passed (47/47)',        type: 'ok' },
    { text: '✓ Build successful (12.3s)',    type: 'ok' },
    { text: '✓ Production deploy complete', type: 'ok' },
    { text: '→ Que lo disfrutes.',           type: 'final' },
  ]
  return (
    <div
      className="w-full max-w-md mx-auto rounded-2xl overflow-hidden"
      style={{ background: '#0D0D1A', border: '1px solid rgba(0,85,255,0.15)' }}
    >
      <div
        className="px-4 py-3 flex items-center gap-1.5"
        style={{ background: '#0A1628', borderBottom: '1px solid rgba(0,85,255,0.1)' }}
      >
        {['#FF5F57', '#FFBD2E', '#27C93F'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span style={{ fontFamily: 'var(--font-space-mono)', fontSize: 10, color: 'rgba(245,245,245,0.3)', marginLeft: 6 }}>
          deploy.sh
        </span>
      </div>
      <div className="p-4 space-y-1.5">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-2">
            <span
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: 11,
                color: s.type === 'cmd'   ? '#F5F5F5'
                     : s.type === 'ok'    ? '#22C55E'
                     : s.type === 'final' ? '#4D8EFF'
                     : 'rgba(245,245,245,0.4)',
              }}
            >
              {s.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Process Section ──────────────────────────────── */
const CARDS = [
  {
    step: '01',
    title: 'Cuéntanos tu idea',
    sub: '(por ridícula que sea)',
    desc: 'Sin filtros. Sin formularios de 3 páginas. Nos cuentas, nosotros escuchamos.',
    Artifact: ChatArtifact,
    bg: '#0A1628',
  },
  {
    step: '02',
    title: 'Te cotizamos sin rodeos',
    sub: 'precio justo, sin sorpresas',
    desc: 'Una propuesta clara con líneas reales. Sin "depende" ni costos ocultos.',
    Artifact: ProposalArtifact,
    bg: '#0D1020',
  },
  {
    step: '03',
    title: 'Deployamos.',
    sub: 'Tú te llevas el crédito.',
    desc: 'Código en producción. Tú presumes con tus clientes. Nosotros, a dormir.',
    Artifact: CICDArtifact,
    bg: '#060B14',
  },
]

export default function Process() {
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const stickyRef    = useRef<HTMLDivElement>(null)
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
      if (cards.length < 2) return

      // Cards 1 and 2 start off-screen below
      gsap.set(cards.slice(1), { yPercent: 100 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      // Step 1 → 2
      tl.to(cards[0], { scale: 0.92, opacity: 0.55, filter: 'blur(10px)' }, 0)
        .to(cards[1], { yPercent: 0 }, 0)

      // Step 2 → 3
      tl.to(cards[1], { scale: 0.92, opacity: 0.55, filter: 'blur(10px)' }, 0.5)
        .to(cards[2], { yPercent: 0 }, 0.5)
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="proceso" style={{ background: '#000000' }}>
      <div
        ref={wrapperRef}
        style={{ height: '400vh' }}
      >
        <div
          ref={stickyRef}
          style={{
            position: 'sticky',
            top: 0,
            height: '100dvh',
            overflow: 'hidden',
          }}
        >
          {/* Section label */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
            <p
              className="text-xs text-center"
              style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
            >
              {'// cómo funciona'}
            </p>
          </div>

          {/* Stacking cards */}
          {CARDS.map((card, i) => (
            <div
              key={card.step}
              ref={el => { cardRefs.current[i] = el }}
              className="process-card"
              style={{ background: card.bg }}
            >
              <div className="h-full flex flex-col items-center justify-center px-6 pt-20 pb-12">
                <div className="w-full max-w-2xl mx-auto flex flex-col gap-10">
                  {/* Step header */}
                  <div>
                    <span
                      className="text-xs font-medium"
                      style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
                    >
                      {card.step} /
                    </span>
                    <h2
                      className="font-black leading-tight mt-1"
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        color: '#F5F5F5',
                      }}
                    >
                      {card.title}{' '}
                      <span style={{ color: 'rgba(245,245,245,0.4)', fontWeight: 400 }}>
                        {card.sub}
                      </span>
                    </h2>
                    <p
                      className="mt-3 text-base"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        color: 'rgba(245,245,245,0.5)',
                        maxWidth: 480,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Artifact */}
                  <card.Artifact />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
