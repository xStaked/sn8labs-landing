const FAQS = [
  {
    question: '¿Qué hace SN8Labs?',
    answer:
      'SN8Labs diseña y desarrolla software a medida: landing pages, sitios web, MVPs, apps móviles, automatizaciones con WhatsApp e integraciones para empresas, startups y agencias.',
  },
  {
    question: '¿SN8Labs trabaja con automatizaciones de WhatsApp?',
    answer:
      'Sí. Creamos automatizaciones con WhatsApp para ventas, soporte, seguimiento de leads, notificaciones y flujos conectados con CRM, formularios, APIs y herramientas internas.',
  },
  {
    question: '¿Pueden desarrollar un MVP rápido?',
    answer:
      'Sí. Podemos construir un MVP funcional para validar una idea, lanzar una operación o presentar una primera versión a clientes o inversionistas sin pasar meses en desarrollo.',
  },
  {
    question: '¿También ofrecen desarrollo white label para agencias?',
    answer:
      'Sí. Trabajamos como equipo técnico white label para agencias que necesitan entregar sitios web, automatizaciones o productos digitales bajo su propia marca.',
  },
  {
    question: '¿Cuánto cuesta un proyecto con SN8Labs?',
    answer:
      'Tenemos precios de referencia visibles para proyectos comunes, como landing pages y sitios web. En automatizaciones, apps móviles y desarrollos más complejos cotizamos según alcance, integraciones y tiempos.',
  },
  {
    question: '¿En qué países trabaja SN8Labs?',
    answer:
      'Operamos desde Colombia y podemos trabajar con clientes y agencias en Latinoamérica y otros mercados remotos siempre que el proyecto pueda coordinarse online.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-4" style={{ background: '#0A1628' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs mb-3"
            style={{ fontFamily: 'var(--font-space-mono)', color: '#0055FF' }}
          >
            {'// preguntas frecuentes'}
          </p>
          <h2
            className="font-black leading-none"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#F5F5F5',
            }}
          >
            Respuestas claras.
          </h2>
          <p
            className="mt-4 mx-auto max-w-2xl text-base"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              color: 'rgba(245,245,245,0.6)',
              lineHeight: 1.7,
            }}
          >
            Esta sección resume qué hace SN8Labs, qué tipo de proyectos toma y cómo trabaja.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.5rem] p-6"
              style={{
                background: '#1A1A2E',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-space-grotesk)', color: '#F5F5F5' }}
              >
                {item.question}
              </h3>
              <p
                className="mt-3 text-sm md:text-base"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  color: 'rgba(245,245,245,0.68)',
                  lineHeight: 1.7,
                }}
              >
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
