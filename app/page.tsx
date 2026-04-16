import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import Services     from './components/Services'
import Manifesto    from './components/Manifesto'
import Process      from './components/Process'
import Pricing      from './components/Pricing'
import FAQ          from './components/FAQ'
import Footer       from './components/Footer'

const siteUrl = 'https://sn8labs.com'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué hace SN8Labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SN8Labs diseña y desarrolla software a medida: landing pages, sitios web, MVPs, apps móviles, automatizaciones con WhatsApp e integraciones para empresas, startups y agencias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿SN8Labs trabaja con automatizaciones de WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Creamos automatizaciones con WhatsApp para ventas, soporte, seguimiento de leads, notificaciones y flujos conectados con CRM, formularios, APIs y herramientas internas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿También ofrecen desarrollo white label para agencias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Trabajamos como equipo técnico white label para agencias que necesitan entregar sitios web, automatizaciones o productos digitales bajo su propia marca.',
      },
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SN8Labs',
  url: siteUrl,
  email: 'hola@sn8labs.com',
  sameAs: ['https://www.instagram.com/sn8labs/'],
  areaServed: ['CO', 'LATAM'],
  description:
    'Agencia de software en Colombia especializada en desarrollo web, MVPs, apps móviles, automatizaciones con WhatsApp e integraciones a medida.',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Services />
        <Manifesto />
        <Process />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
