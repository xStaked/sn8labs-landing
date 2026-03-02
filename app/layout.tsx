import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import NoiseOverlay from './components/NoiseOverlay'
import CustomCursor from './components/CustomCursor'

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
  title: 'SN8Labs — Tu idea más ridícula, hecha software.',
  description:
    'Agencia de software sin corbata. Construimos landings, apps móviles, automatizaciones y marca blanca. Sin PowerPoints. Con deploy.',
  keywords: ['agencia de software', 'desarrollo web', 'apps móviles', 'automatizaciones', 'Colombia'],
  openGraph: {
    title: 'SN8Labs — Tu idea más ridícula, hecha software.',
    description: 'Sin juicios. Sin corbata. Con deploy.',
    type: 'website',
  },
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
