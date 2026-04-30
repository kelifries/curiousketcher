import { useState, useEffect, useCallback } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Prints from './components/Prints.jsx'
import Commissions from './components/Commissions.jsx'
import Inquiry from './components/Inquiry.jsx'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Lightbox from './components/Lightbox.jsx'
import { loadArtwork } from './lib/artwork.js'

export default function App() {
  const [artwork, setArtwork] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    setArtwork(loadArtwork())
  }, [])

  const openLightbox = useCallback((idx) => setActiveIndex(idx), [])
  const closeLightbox = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % artwork.length))
  }, [artwork.length])
  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + artwork.length) % artwork.length))
  }, [artwork.length])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio artwork={artwork} onOpen={openLightbox} />
        <Prints />
        <Commissions />
        <Inquiry />
      </main>
      <Footer />
      {activeIndex !== null && artwork[activeIndex] && (
        <Lightbox
          item={artwork[activeIndex]}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
          hasMultiple={artwork.length > 1}
        />
      )}
    </>
  )
}
