export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">curiousketcher</p>
        <p className="footer__links">
          <a
            href="https://instagram.com/curiousketcher"
            target="_blank"
            rel="noreferrer noopener"
          >
            instagram
          </a>
          <span aria-hidden="true">·</span>
          <a href="#inquiry">inquire</a>
        </p>
        <p className="footer__copy">© {year} Kelicia Ong</p>
      </div>
    </footer>
  )
}
