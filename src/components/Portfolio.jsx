export default function Portfolio({ artwork, onOpen }) {
  return (
    <section className="portfolio" id="portfolio">
      <header className="section-head">
        <p className="section-head__eyebrow">Portfolio</p>
        <h2 className="section-head__title">Selected work</h2>
      </header>

      {artwork.length === 0 ? (
        <div className="portfolio__empty">
          <p>Drop artwork into <code>public/artwork/</code> to populate the gallery.</p>
          <p className="portfolio__empty-hint">Files named with a numeric prefix (e.g. <code>01-portrait.jpg</code>) will sort first.</p>
        </div>
      ) : (
        <ul className="gallery" role="list">
          {artwork.map((item, idx) => (
            <li key={item.filename} className="gallery__item">
              <button
                type="button"
                className="gallery__btn"
                onClick={() => onOpen(idx)}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="gallery__img"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
