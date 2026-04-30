export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__eyebrow">@curiousketcher</p>
        <h1 className="hero__title">
          <span className="hero__title-line">A quiet line,</span>
          <span className="hero__title-line hero__title-line--italic">a curious eye.</span>
        </h1>
        <p className="hero__lede">
          {/* TODO: pull tagline + artist statement from Art Business brief */}
          Sketches, portraits, and small studies by Kelicia. Soft graphite, slow ink, and the occasional splash of colour.
        </p>
        <div className="hero__actions">
          <a href="#portfolio" className="btn btn--primary">View work</a>
          <a href="#commissions" className="btn btn--ghost">Commission a piece</a>
        </div>
      </div>
    </section>
  )
}
