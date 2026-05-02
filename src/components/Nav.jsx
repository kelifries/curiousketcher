import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Primary">
      <a href="#top" className="nav__brand">curiousketcher</a>
      <div className="nav__links">
        <a href="#portfolio">Artwork</a>
        <a href="#takehome">Take home</a>
        <a href="#inquiry">Inquire</a>
      </div>
    </nav>
  )
}
