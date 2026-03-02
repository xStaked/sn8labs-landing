'use client'

import { Instagram, Github, MessageCircle } from 'lucide-react'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Precios', href: '#precios' },
  { label: 'Marca Blanca', href: '#marca-blanca' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      className="pt-20 pb-10 px-6"
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(0,85,255,0.1)',
        borderRadius: '3rem 3rem 0 0',
        marginTop: -2,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA block */}
        <div
          className="rounded-[2rem] p-10 md:p-16 mb-16 text-center relative overflow-hidden"
          style={{
            background: '#0A1628',
            border: '1px solid rgba(0,85,255,0.2)',
            boxShadow: '0 0 80px rgba(0,85,255,0.08)',
          }}
        >
          {/* glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,85,255,0.12) 0%, transparent 70%)',
            }}
          />
          <p
            className="text-xs mb-4 relative z-10"
            style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
          >
            {'// hablemos'}
          </p>
          <h2
            className="font-black leading-tight relative z-10 mb-4"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#F5F5F5',
            }}
          >
            ¿Tienes una idea ridícula?
          </h2>
          <p
            className="text-base mb-8 relative z-10"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              color: 'rgba(245,245,245,0.55)',
              maxWidth: 400,
              margin: '0 auto 2rem',
            }}
          >
            Perfecto. Esas son exactamente las que más nos gustan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="https://wa.me/573248034489"
              className="btn-magnetic px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2"
              style={{
                background: '#0055FF',
                color: '#fff',
                fontFamily: 'var(--font-space-grotesk)',
                boxShadow: '0 0 30px rgba(0,85,255,0.4)',
              }}
            >
              <MessageCircle size={18} />
              Escribirnos al WhatsApp
            </a>
            {/* <a
              href="mailto:hola@sn8labs.com"
              className="btn-magnetic px-8 py-4 rounded-full font-semibold text-base border"
              style={{
                color: '#F5F5F5',
                fontFamily: 'var(--font-space-grotesk)',
                borderColor: 'rgba(245,245,245,0.2)',
                background: 'transparent',
              }}
            >
              hola@sn8labs.com
            </a> */}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-lg font-black"
                style={{ fontFamily: 'var(--font-space-grotesk)', color: '#F5F5F5' }}
              >
                SN8<span style={{ color: '#0055FF' }}>Labs</span>
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  background: 'rgba(0,85,255,0.15)',
                  color: '#4D8EFF',
                }}
              >
                v2
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                color: 'rgba(245,245,245,0.45)',
                maxWidth: 260,
              }}
            >
              Tu idea de mierda, hecha software.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-2">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/sn8labs/', label: 'Instagram' },
                { Icon: Github, href: '#', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(245,245,245,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4D8EFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,245,0.4)')}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs mb-4"
              style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
            >
              {'// navegación'}
            </p>
            <ul className="space-y-3">
              {LINKS.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-plus-jakarta)', color: 'rgba(245,245,245,0.55)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4D8EFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,245,0.55)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System status */}
          <div>
            <p
              className="text-xs mb-4"
              style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
            >
              {'// system status'}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-2 h-2 rounded-full pulse-dot"
                style={{ background: '#22C55E' }}
              />
              <span
                className="text-sm"
                style={{ fontFamily: 'var(--font-space-mono)', color: '#22C55E' }}
              >
                All systems operational
              </span>
            </div>
            <div className="space-y-2">
              {['API', 'Deploy Pipeline', 'Support'].map(svc => (
                <div key={svc} className="flex items-center justify-between">
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-space-mono)', color: 'rgba(245,245,245,0.4)' }}
                  >
                    {svc}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      fontFamily: 'var(--font-space-mono)',
                      background: 'rgba(34,197,94,0.1)',
                      color: '#22C55E',
                    }}
                  >
                    ● online
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span
            className="text-xs"
            style={{ fontFamily: 'var(--font-space-mono)', color: 'rgba(245,245,245,0.25)' }}
          >
            {'// built by sn8labs. obviously.'} © {year}
          </span>
          <div className="flex gap-6">
            {['Privacidad', 'Términos'].map(t => (
              <a
                key={t}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ fontFamily: 'var(--font-space-mono)', color: 'rgba(245,245,245,0.25)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4D8EFF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,245,0.25)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
