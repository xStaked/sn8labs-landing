'use client'

import { useEffect, useRef, useState } from 'react'

/* ── Card 1: Live code builder ────────────────────── */
const CODE_LINES = [
  '<div class="hero">',
  '  <h1>Tu idea,</h1>',
  '  <h2>hecha realidad.</h2>',
  '  <button>Deploy →</button>',
  '</div>',
]

function CodeBuilderCard() {
  const [lines, setLines] = useState<string[]>([])
  const [curLine, setCurLine] = useState(0)
  const [curChar, setCurChar] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    if (curLine >= CODE_LINES.length) {
      timerRef.current = setTimeout(() => {
        setLines([]); setCurLine(0); setCurChar(0)
      }, 2800)
      return
    }
    const target = CODE_LINES[curLine]
    if (curChar < target.length) {
      timerRef.current = setTimeout(() => {
        setLines(prev => {
          const copy = [...prev]
          copy[curLine] = (copy[curLine] ?? '') + target[curChar]
          return copy
        })
        setCurChar(c => c + 1)
      }, 45)
    } else {
      timerRef.current = setTimeout(() => {
        setCurLine(l => l + 1); setCurChar(0)
      }, 120)
    }
    return () => clearTimeout(timerRef.current)
  }, [curLine, curChar])

  // Build preview from lines
  const hasH1   = lines.some(l => l.includes('<h1>'))
  const hasH2   = lines.some(l => l.includes('<h2>'))
  const hasBtn  = lines.some(l => l.includes('<button>'))

  return (
    <div className="flex gap-2 h-48 w-full text-xs">
      {/* Editor pane */}
      <div
        className="flex-1 rounded-xl p-3 overflow-hidden"
        style={{ background: '#0D0D1A', border: '1px solid rgba(0,85,255,0.15)' }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          {['#FF5F57','#FFBD2E','#27C93F'].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-space-mono)', color: '#4D8EFF', lineHeight: 1.7 }}>
          {lines.map((l, i) => (
            <div key={i}>
              <span style={{ color: 'rgba(77,142,255,0.4)', marginRight: 8 }}>{i + 1}</span>
              <span style={{ color: i === curLine ? '#F5F5F5' : 'rgba(245,245,245,0.6)' }}>
                {l}
                {i === curLine && <span className="cursor-blink" />}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Preview pane */}
      <div
        className="flex-1 rounded-xl p-3 flex flex-col justify-center items-center gap-1"
        style={{ background: '#0A0A14', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {hasH1 && (
          <div className="font-bold text-base" style={{ color: '#F5F5F5', fontFamily: 'var(--font-space-grotesk)', fontSize: 13 }}>
            Tu idea,
          </div>
        )}
        {hasH2 && (
          <div className="font-semibold" style={{ color: '#4D8EFF', fontFamily: 'var(--font-space-grotesk)', fontSize: 11 }}>
            hecha realidad.
          </div>
        )}
        {hasBtn && (
          <div
            className="mt-1 px-3 py-1 rounded-full text-xs"
            style={{ background: '#0055FF', color: '#fff', fontFamily: 'var(--font-space-grotesk)' }}
          >
            Deploy →
          </div>
        )}
        {!hasH1 && (
          <div style={{ color: 'rgba(245,245,245,0.2)', fontFamily: 'var(--font-space-mono)', fontSize: 10 }}>
            preview...
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Card 2: Phone frame ──────────────────────────── */
function PhoneCard() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => setPhase(0), 5500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [phase === 0 ? 0 : -1])

  return (
    <div className="flex justify-center items-center h-48">
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: 110,
          height: 180,
          background: '#0D0D1A',
          border: '2px solid rgba(77,142,255,0.3)',
          borderRadius: 16,
          boxShadow: '0 0 30px rgba(0,85,255,0.15)',
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-8 h-1 rounded-full" style={{ background: 'rgba(77,142,255,0.3)' }} />
        </div>

        {/* Screen area */}
        <div className="flex-1 mx-1 mb-1 rounded-lg overflow-hidden relative" style={{ background: '#060610' }}>
          {/* Screen 1 */}
          {phase >= 1 && (
            <div
              className="absolute inset-0 flex flex-col justify-center items-center gap-1 screen-slide"
              style={{ background: '#0A1628' }}
            >
              <div style={{ color: '#4D8EFF', fontSize: 9, fontFamily: 'var(--font-space-mono)' }}>Dashboard</div>
              <div className="w-12 h-1 rounded" style={{ background: 'rgba(0,85,255,0.4)' }} />
              <div className="w-8 h-1 rounded mt-1" style={{ background: 'rgba(77,142,255,0.3)' }} />

              {/* Loading bar */}
              {phase >= 2 && (
                <div className="mt-2 w-full px-2">
                  <div className="h-0.5 rounded w-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div className="load-bar h-full rounded" style={{ background: '#0055FF' }} />
                  </div>
                </div>
              )}
            </div>
          )}

          {phase === 0 && (
            <div className="flex h-full items-center justify-center">
              <div style={{ color: 'rgba(77,142,255,0.3)', fontSize: 8, fontFamily: 'var(--font-space-mono)' }}>
                loading...
              </div>
            </div>
          )}
        </div>

        {/* Notification */}
        {phase >= 3 && (
          <div
            className="absolute top-12 left-1 right-1 notif-pop rounded-lg p-1.5"
            style={{ background: '#0055FF', boxShadow: '0 4px 20px rgba(0,85,255,0.5)' }}
          >
            <div style={{ color: '#fff', fontSize: 7, fontFamily: 'var(--font-space-grotesk)', fontWeight: 700 }}>
              🚀 App deployed successfully
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Card 3: Terminal typewriter ──────────────────── */
const TERMINAL_LINES = [
  { text: '$ conectando a whatsapp...', suffix: ' ✓', delay: 0 },
  { text: '$ procesando orden #4521...', suffix: ' ✓', delay: 1200 },
  { text: '$ notificando al cliente...', suffix: ' ✓', delay: 2400 },
  { text: '$ todo listo, parce.', suffix: '', delay: 3600 },
]

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const timers = TERMINAL_LINES.map((l, i) =>
      setTimeout(() => setVisibleLines(prev => [...prev, i]), l.delay)
    )
    const reset = setTimeout(() => setVisibleLines([]), TERMINAL_LINES[TERMINAL_LINES.length - 1].delay + 2000)
    return () => { timers.forEach(clearTimeout); clearTimeout(reset) }
  }, [visibleLines.length === 0 ? 0 : -1])

  return (
    <div
      className="h-48 rounded-xl p-4 overflow-hidden"
      style={{ background: '#0D0D1A', border: '1px solid rgba(0,85,255,0.15)' }}
    >
      <div className="flex items-center gap-1.5 mb-3">
        {['#FF5F57','#FFBD2E','#27C93F'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span style={{ color: 'rgba(245,245,245,0.3)', fontSize: 10, fontFamily: 'var(--font-space-mono)', marginLeft: 4 }}>
          sn8bot — bash
        </span>
      </div>
      <div className="space-y-1.5">
        {TERMINAL_LINES.map((line, i) => (
          visibleLines.includes(i) && (
            <div key={i} className="flex items-center gap-1">
              <span style={{ color: '#4D8EFF', fontFamily: 'var(--font-space-mono)', fontSize: 11 }}>
                {line.text}
              </span>
              {line.suffix && (
                <span style={{ color: '#22C55E', fontFamily: 'var(--font-space-mono)', fontSize: 11 }}>
                  {line.suffix}
                </span>
              )}
            </div>
          )
        ))}
        {visibleLines.length < TERMINAL_LINES.length && (
          <span className="cursor-blink" style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11 }} />
        )}
      </div>
    </div>
  )
}

/* ── Card 4: Classified document ─────────────────── */
function ClassifiedCard() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="h-48 rounded-xl p-4 relative overflow-hidden cursor-pointer"
      style={{
        background: '#0D0D1A',
        border: '1px solid rgba(0,85,255,0.15)',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Classified stamp */}
      <div
        className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 border-2 rotate-[-8deg]"
        style={{
          fontFamily: 'var(--font-space-mono)',
          color: '#FF3B30',
          borderColor: '#FF3B30',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        CLASSIFIED
      </div>

      <div style={{ fontFamily: 'var(--font-space-mono)', fontSize: 11, lineHeight: 2.2 }}>
        <div style={{ color: 'rgba(245,245,245,0.4)', fontSize: 9, marginBottom: 4 }}>
          FILE: SN8-WHITLABEL-CONFIDENTIAL
        </div>

        {/* Redacted rows */}
        {[
          { label: 'Cliente:', value: '████████████' },
          { label: 'Proyecto:', value: '████████ App' },
          { label: 'Tecnología:', value: '████ + ████' },
          { label: 'Estado:', value: 'ENTREGADO ✓' },
        ].map(({ label, value }, i) => (
          <div key={i} className="flex gap-2">
            <span style={{ color: 'rgba(245,245,245,0.4)', minWidth: 80 }}>{label}</span>
            <span style={{ color: i === 3 ? '#22C55E' : (hovered && i < 2 ? '#F5F5F5' : 'rgba(245,245,245,0.2)'), transition: 'color 0.4s' }}>
              {hovered && i === 0 ? 'Tu marca.'   :
               hovered && i === 1 ? 'Nuestro código.' :
               value}
            </span>
          </div>
        ))}
      </div>

      {/* Hover reveal overlay */}
      <div
        className="absolute inset-0 flex items-end p-4 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: '#4D8EFF', fontFamily: 'var(--font-space-grotesk)' }}
        >
          Tu marca. Nuestro código. →
        </span>
      </div>
    </div>
  )
}

/* ── Services section ─────────────────────────────── */
const CARDS = [
  {
    number: '01',
    title: 'Landings & Web',
    desc: 'Desde una landing de conversión hasta un e-commerce completo. Diseño, código y deploy.',
    price: 'Landings desde $200K · E-commerce desde $1.3M COP',
    Artifact: CodeBuilderCard,
  },
  {
    number: '02',
    title: 'Apps Móviles',
    desc: 'iOS y Android. Apps que funcionan, escalan y no te hacen quedar mal con tus clientes.',
    price: 'Desde $2.5M COP',
    Artifact: PhoneCard,
  },
  {
    number: '03',
    title: 'Automatizaciones & Bots',
    desc: 'WhatsApp, Telegram, CRMs, APIs. Dejamos que los robots trabajen mientras tú duermes.',
    price: 'A la medida',
    Artifact: TerminalCard,
  },
  {
    number: '04',
    title: 'Marca Blanca',
    desc: 'Usas nuestro código, tu cliente ve tu marca. Discreción total. Código real.',
    price: 'Hablemos',
    Artifact: ClassifiedCard,
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 px-4"
      style={{ background: '#000000' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-xs mb-3"
              style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
            >
              {'// lo que hacemos'}
            </p>
            <h2
              className="font-black leading-none"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#F5F5F5',
              }}
            >
              Sin PowerPoints.
            </h2>
          </div>
          <p style={{ color: 'rgba(245,245,245,0.5)', maxWidth: 360, fontFamily: 'var(--font-plus-jakarta)', fontSize: 15, lineHeight: 1.7 }}>
            Construimos software real para ideas reales — y también para las que parecen ridículas hasta que están en producción.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CARDS.map(({ number, title, desc, price, Artifact }) => (
            <div
              key={number}
              id={number === '04' ? 'marca-blanca' : undefined}
              className="card-glow rounded-[1.5rem] p-6 flex flex-col gap-4"
              style={{
                background: '#1A1A2E',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="text-xs font-medium"
                    style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
                  >
                    {number}
                  </span>
                  <h3
                    className="text-xl font-bold mt-0.5"
                    style={{ fontFamily: 'var(--font-space-grotesk)', color: '#F5F5F5' }}
                  >
                    {title}
                  </h3>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full shrink-0"
                  style={{
                    fontFamily: 'var(--font-space-mono)',
                    background: 'rgba(0,85,255,0.12)',
                    color: '#4D8EFF',
                    border: '1px solid rgba(0,85,255,0.2)',
                  }}
                >
                  {price}
                </span>
              </div>

              {/* Artifact */}
              <Artifact />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(245,245,245,0.55)', fontFamily: 'var(--font-plus-jakarta)' }}
              >
                {desc}
              </p>

              {/* CTA */}
              <a
                href="#contacto"
                className="mt-auto text-sm font-semibold group flex items-center gap-2 transition-colors duration-200"
                style={{ color: '#4D8EFF', fontFamily: 'var(--font-space-grotesk)' }}
              >
                Cotizar este servicio
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
