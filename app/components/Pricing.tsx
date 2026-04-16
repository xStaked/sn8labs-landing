'use client'

import { useState } from 'react'

const TIERS = [
  {
    name: 'Starter',
    tagline: 'Para validar una idea o lanzar una landing rápido.',
    price: '$200,000',
    unit: 'COP',
    badge: null,
    featured: false,
    features: [
      'Landing page de 1 página',
      'Diseño responsivo',
      'Formulario de contacto',
      'SEO básico',
      'Deploy incluido',
    ],
    cta: 'Empezar →',
    ctaStyle: 'ghost',
  },
  {
    name: 'Build',
    tagline: 'Para empresas que necesitan un sitio sólido y medible.',
    price: '$700,000',
    unit: 'COP',
    badge: 'Más pedido',
    featured: true,
    features: [
      'Sitio web multi-página (hasta 10 págs.)',
      'Diseño personalizado + responsivo',
      'Link de pago / pasarela básica',
      'SEO avanzado + Analytics',
      'Deploy + dominio configurado',
      'Soporte 30 días',
    ],
    cta: 'Este es el mío →',
    ctaStyle: 'solid-white',
  },
  {
    name: 'Scale',
    tagline: 'Para productos que necesitan app, backend y automatización.',
    price: '$2,500,000',
    unit: 'COP',
    badge: null,
    featured: false,
    features: [
      'App móvil + Dashboard',
      'Automatizaciones a medida',
      'Integraciones API ilimitadas',
      'Base de datos + Backend',
      'CI/CD pipeline',
      'Soporte 90 días',
    ],
    cta: 'Hablemos →',
    ctaStyle: 'blue',
  },
]

export default function Pricing() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)

  return (
    <section
      id="precios"
      className="py-28 px-4"
      style={{ background: '#000000' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs mb-3"
            style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
          >
            {'// sin letra pequeña'}
          </p>
          <h2
            className="font-black leading-none"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#F5F5F5',
            }}
          >
            Precios reales.
          </h2>
          <p
            className="mt-4 text-base max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-plus-jakarta)', color: 'rgba(245,245,245,0.5)' }}
          >
            Precios de referencia para desarrollo web, MVPs y software a medida. Si lo ponemos aquí es porque lo cumplimos.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-[1.75rem] p-7 transition-all duration-300"
              style={{
                background: tier.featured ? '#0055FF' : '#1A1A2E',
                border: tier.featured
                  ? 'none'
                  : hoveredTier === tier.name
                    ? '1px solid rgba(0,85,255,0.5)'
                    : '1px solid rgba(255,255,255,0.06)',
                boxShadow: tier.featured
                  ? '0 0 60px rgba(0,85,255,0.35), 0 0 120px rgba(0,85,255,0.1)'
                  : hoveredTier === tier.name
                    ? '0 0 40px rgba(0,85,255,0.2)'
                    : 'none',
                transform: tier.featured ? 'scale(1.03)' : undefined,
              }}
              onMouseEnter={() => !tier.featured && setHoveredTier(tier.name)}
              onMouseLeave={() => !tier.featured && setHoveredTier(null)}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      background: '#F5F5F5',
                      color: '#0055FF',
                    }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="mb-6">
                <span
                  className="text-xs font-medium"
                  style={{
                    fontFamily: 'var(--font-space-mono)',
                    color: tier.featured ? 'rgba(255,255,255,0.7)' : '#0055FF',
                  }}
                >
                  {tier.name}
                </span>
                <div
                  className="font-black mt-1 leading-none"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    color: tier.featured ? '#fff' : '#F5F5F5',
                  }}
                >
                  {tier.price}
                  <span
                    className="text-base font-normal ml-1"
                    style={{ color: tier.featured ? 'rgba(255,255,255,0.7)' : 'rgba(245,245,245,0.4)' }}
                  >
                    {tier.unit}
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    color: tier.featured ? 'rgba(255,255,255,0.75)' : 'rgba(245,245,245,0.5)',
                  }}
                >
                  {tier.tagline}
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{
                  background: tier.featured
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(255,255,255,0.06)',
                }}
              />

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className="text-xs mt-0.5 shrink-0"
                      style={{ color: tier.featured ? '#fff' : '#0055FF' }}
                    >
                      ✓
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        color: tier.featured ? 'rgba(255,255,255,0.85)' : 'rgba(245,245,245,0.65)',
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className="btn-magnetic text-center py-3.5 rounded-full text-sm font-bold transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  background:
                    tier.ctaStyle === 'solid-white' ? '#fff'
                    : tier.ctaStyle === 'blue'       ? '#0055FF'
                    : 'transparent',
                  color:
                    tier.ctaStyle === 'solid-white' ? '#0055FF'
                    : tier.ctaStyle === 'blue'       ? '#fff'
                    : '#F5F5F5',
                  border:
                    tier.ctaStyle === 'ghost' ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  boxShadow:
                    tier.ctaStyle === 'blue' ? '0 0 20px rgba(0,85,255,0.4)' : 'none',
                }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="mt-12 text-center text-xs"
          style={{ fontFamily: 'var(--font-space-mono)', color: 'rgba(245,245,245,0.3)' }}
        >
          {'// todos los proyectos incluyen código fuente. tuyo para siempre.'}
        </p>
      </div>
    </section>
  )
}
