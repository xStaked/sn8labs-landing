import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import Services     from './components/Services'
import Manifesto    from './components/Manifesto'
import Process      from './components/Process'
import Pricing      from './components/Pricing'
import Footer       from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Services />
        <Manifesto />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
