const items = [
  '// 40,000+ usuarios en producción',
  '// dashboards que nadie más quería cotizar',
  '// del meme al MVP',
  '// marca blanca para agencias serias (y no tan serias)',
  '// deployado a las 2am sin quejarnos',
  '// sin reuniones de 3 horas sobre el logo',
  '// código que funciona en producción, no en staging',
  '// builds que no explotan en viernes',
]

// Duplicate for seamless loop
const doubled = [...items, ...items]

export default function SocialProofBar() {
  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        background: '#0A1628',
        borderColor: 'rgba(0,85,255,0.15)',
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A1628, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A1628, transparent)' }}
      />

      <div className="marquee-track flex items-center gap-0 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-sm"
              style={{ fontFamily: 'var(--font-space-mono)', color: 'rgba(245,245,245,0.7)' }}
            >
              {item}
            </span>
            <span
              className="mx-8 text-xs font-bold"
              style={{ color: '#0055FF' }}
              aria-hidden="true"
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
