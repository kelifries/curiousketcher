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
      <a href="#top" className="nav__brand">curious ketcher</a>
      <div className="nav__links">
        <a href="#portfolio">Portfolio</a>
        <a href="#commissions">Commissions</a>
        <a href="https://instagram.com/curiousketcher" target="_blank" rel="noreferrer noopener" className="nav__ig">Instagram <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  )
}
