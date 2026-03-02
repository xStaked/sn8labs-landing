'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Servicios',    href: '#servicios' },
    { label: 'Proceso',      href: '#proceso' },
    { label: 'Precios',      href: '#precios' },
    { label: 'Marca Blanca', href: '#marca-blanca' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav
        className="flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 w-full"
        style={{
          maxWidth: '920px',
          background:  scrolled ? 'rgba(10, 22, 40, 0.80)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: scrolled ? '1px solid rgba(0, 85, 255, 0.18)' : '1px solid transparent',
          boxShadow: scrolled ? '0 0 40px rgba(0,85,255,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-base font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: '#F5F5F5' }}
          >
            SN8<span style={{ color: '#0055FF' }}>Labs</span>
          </span>
          <span
            className="text-xs px-1.5 py-0.5 rounded"
            style={{ fontFamily: 'var(--font-space-mono)', background: 'rgba(0,85,255,0.15)', color: '#4D8EFF' }}
          >
            v2
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'rgba(245,245,245,0.7)', fontFamily: 'var(--font-plus-jakarta)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4D8EFF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,245,0.7)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="btn-magnetic hidden md:flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full"
          style={{
            background: scrolled ? '#0055FF' : 'rgba(255,255,255,0.95)',
            color:      scrolled ? '#fff'    : '#000',
            fontFamily: 'var(--font-space-grotesk)',
            boxShadow:  scrolled ? '0 0 20px rgba(0,85,255,0.35)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          Hablemos
          <span style={{ color: scrolled ? '#4D8EFF' : '#0055FF' }}>→</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-300"
              style={{ background: '#F5F5F5' }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-20 left-4 right-4 rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          style={{ background: '#0A1628', border: '1px solid rgba(0,85,255,0.2)' }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-base py-1"
              style={{ color: '#F5F5F5', fontFamily: 'var(--font-plus-jakarta)' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-full"
            style={{ background: '#0055FF', color: '#fff', fontFamily: 'var(--font-space-grotesk)' }}
            onClick={() => setMenuOpen(false)}
          >
            Hablemos →
          </a>
        </div>
      )}
    </header>
  )
}
