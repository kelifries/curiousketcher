import { getHeroPhoto } from '../lib/heroPhoto.js'

export default function Hero() {
  const photo = getHeroPhoto()

  return (
    <section className="hero" id="top">
      <div className={`hero__layout ${photo ? 'hero__layout--with-photo' : ''}`}>
        <div className="hero__inner">
          <p className="hero__eyebrow">@curiousketcher</p>
          <h1 className="hero__title">kelicia ong</h1>
          <p className="hero__lede">
            singapore-based illustrator who loves sketching and capturing moments in ink
          </p>
          <div className="hero__actions">
            <a href="#inquiry" className="btn btn--primary">Get in touch</a>
            <a href="#portfolio" className="btn btn--ghost">View work</a>
          </div>
        </div>

        {photo && (
          <div className="hero__photo">
            <img
              src={photo}
              alt="Kelicia Ong"
              className="hero__photo-img"
              loading="eager"
            />
          </div>
        )}
      </div>
    </section>
  )
}
