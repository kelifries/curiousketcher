export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__eyebrow">@curiousketcher</p>
        <h1 className="hero__title">Sketches of small, careful things.</h1>
        <p className="hero__lede">
          Singapore-based illustrator. Graphite, ink, and the occasional watercolour wash.
          Portraits, pets, and the small things people want to remember.
        </p>
        <div className="hero__actions">
          <a href="#inquiry" className="btn btn--primary">Get in touch</a>
          <a href="#portfolio" className="btn btn--ghost">View work</a>
        </div>
      </div>
    </section>
  )
}
