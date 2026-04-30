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
        <a href="#about">About</a>
        <a href="#portfolio">Work</a>
        <a href="#prints">Prints</a>
        <a href="#commissions">Commissions</a>
        <a href="#inquiry">Inquire</a>
      </div>
    </nav>
  )
}
