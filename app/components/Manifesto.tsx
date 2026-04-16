'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const COLUMNS = [
  '// sin reuniones de 2 horas',
  '// sin intermediarios caros',
  '// con código real',
]

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifesto-left',
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.manifesto-section', start: 'top 65%', once: true },
        }
      )
      gsap.fromTo(
        '.manifesto-right',
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: '.manifesto-section', start: 'top 65%', once: true },
        }
      )
      gsap.fromTo(
        '.manifesto-col',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.manifesto-section', start: 'top 45%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="por-que"
      ref={sectionRef}
      className="manifesto-section py-32 px-6 dot-grid"
      style={{ background: '#0A1628' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p
          className="text-xs mb-12"
          style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
        >
          {'// por qué existimos'}
        </p>

        {/* Main contrast statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <div className="manifesto-left">
            <p
              className="font-black leading-tight"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                color: 'rgba(245,245,245,0.5)',
              }}
            >
              Las agencias serias te cobran el PowerPoint.
            </p>
          </div>
          <div className="manifesto-right flex items-center">
            <p
              className="font-black leading-tight"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                color: '#F5F5F5',
              }}
            >
              Nosotros te cobramos el{' '}
              <span style={{ color: '#0055FF', textShadow: '0 0 40px rgba(0,85,255,0.4)' }}>
                software.
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-16"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,85,255,0.4), transparent)' }}
        />

        {/* Three column manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLUMNS.map((col, i) => (
            <div key={i} className="manifesto-col">
              <p
                className="text-base"
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  color: 'rgba(245,245,245,0.55)',
                  lineHeight: 1.6,
                }}
              >
                {col}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 'Web', label: 'landings, sitios y e-commerce' },
            { value: 'Apps',  label: 'móviles y dashboards' },
            { value: 'Bots',    label: 'automatizaciones e integraciones' },
            { value: 'WL', label: 'white label para agencias' },
          ].map(({ value, label }) => (
            <div key={label} className="manifesto-col flex flex-col gap-1">
              <span
                className="font-black"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#0055FF',
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                className="text-sm"
                style={{ fontFamily: 'var(--font-plus-jakarta)', color: 'rgba(245,245,245,0.5)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
