// TODO: pull commission tier structure, pricing, and CTA copy from Art Business brief
// (ventures/outbox/curiousketcher-site-positioning.md). Placeholder content below.

const tiers = [
  {
    name: 'Mini Sketch',
    blurb: 'A quick character study or single-subject sketch in graphite or ink.',
    detail: 'A4 · 1 subject · ~1 week turnaround',
    price: 'from S$45',
  },
  {
    name: 'Standard Portrait',
    blurb: 'A finished portrait with shading and light detail. Pencil or ink wash.',
    detail: 'A4 · 1–2 subjects · 1–2 weeks',
    price: 'from S$120',
  },
  {
    name: 'Full Piece',
    blurb: 'A more involved illustration — multiple subjects, light colour, custom background.',
    detail: 'A3 · multiple subjects · 2–3 weeks',
    price: 'from S$250',
  },
]

export default function Commissions() {
  const subject = encodeURIComponent('Commission inquiry — @curiousketcher')
  const body = encodeURIComponent(
    'Hi Kelicia,\n\nI\'d love to commission a piece. Here\'s a bit about what I have in mind:\n\n• Tier: \n• Subject(s): \n• Reference photos: (attach when replying)\n• Deadline (if any): \n\nThanks!\n',
  )
  const mailto = `mailto:hello@curiousketcher.com?subject=${subject}&body=${body}`

  return (
    <section className="commissions" id="commissions">
      <header className="section-head">
        <p className="section-head__eyebrow">Commissions</p>
        <h2 className="section-head__title">Work with me</h2>
        <p className="section-head__lede">
          {/* TODO: pull voice/positioning from Art Business brief */}
          A small number of commissions open each month. Drop a note with your idea — I'll reply within a few days with a quote and timeline.
        </p>
      </header>

      <ul className="tiers" role="list">
        {tiers.map((t) => (
          <li key={t.name} className="tier">
            <div className="tier__head">
              <h3 className="tier__name">{t.name}</h3>
              <span className="tier__price">{t.price}</span>
            </div>
            <p className="tier__blurb">{t.blurb}</p>
            <p className="tier__detail">{t.detail}</p>
          </li>
        ))}
      </ul>

      <div className="commissions__cta">
        <a className="btn btn--primary" href={mailto}>Email an inquiry</a>
        <a
          className="btn btn--ghost"
          href="https://instagram.com/curiousketcher"
          target="_blank"
          rel="noreferrer noopener"
        >
          DM on Instagram
        </a>
      </div>
      <p className="commissions__note">
        Pricing is indicative — final quotes depend on size, subject count, and detail.
      </p>
    </section>
  )
}
