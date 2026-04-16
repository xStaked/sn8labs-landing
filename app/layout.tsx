import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import NoiseOverlay from './components/NoiseOverlay'
import CustomCursor from './components/CustomCursor'

const siteUrl = 'https://sn8labs.com'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SN8Labs | Agencia de software, automatizaciones y MVPs en Colombia',
    template: '%s | SN8Labs',
  },
  description:
    'SN8Labs es una agencia de software en Colombia que diseña y desarrolla landings, sitios web, MVPs, apps móviles, automatizaciones con WhatsApp e integraciones a medida para empresas y agencias.',
  keywords: [
    'agencia de software',
    'desarrollo web en colombia',
    'desarrollo de mvp',
    'automatizaciones con whatsapp',
    'apps móviles',
    'marca blanca para agencias',
    'desarrollo de software a medida',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'SN8Labs | Software a medida, automatizaciones y MVPs',
    description:
      'Desarrollamos software a medida, landings, apps móviles, automatizaciones con WhatsApp y soluciones white label para agencias.',
    type: 'website',
    url: siteUrl,
    siteName: 'SN8Labs',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN8Labs | Agencia de software en Colombia',
    description:
      'Landings, sitios web, MVPs, apps móviles, automatizaciones y marca blanca para agencias.',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${spaceMono.variable}`}
    >
      <body>
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
