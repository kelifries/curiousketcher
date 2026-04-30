const tiers = [
  {
    name: 'Postcard Sketch',
    price: 'from S$45',
    detail: 'A6 (10×15cm). Graphite or ink. Single subject, headshot or bust crop.',
  },
  {
    name: 'Portrait Sketch',
    price: 'from S$95',
    detail: 'A5 (15×21cm). Graphite or ink. Single subject, half-body or detailed headshot.',
  },
  {
    name: 'Full Portrait',
    price: 'from S$180',
    detail: 'A4 (21×30cm). Graphite or ink. Single subject full body, or two subjects half-body.',
  },
]

export default function Commissions() {
  return (
    <section className="commissions" id="commissions">
      <header className="section-head section-head--center">
        <p className="section-head__eyebrow">Commissions</p>
        <h2 className="section-head__title">Work with me</h2>
        <p className="section-head__lede">
          A small number of commissions open each month. Public pricing — pick the tier
          that fits and tell me what you have in mind.
        </p>
      </header>

      <ul className="tiers" role="list">
        {tiers.map((t) => (
          <li key={t.name} className="tier">
            <h3 className="tier__name">{t.name}</h3>
            <p className="tier__price">{t.price}</p>
            <p className="tier__detail">{t.detail}</p>
          </li>
        ))}
      </ul>

      <div className="info-block">
        <h3 className="info-block__title">Add-ons</h3>
        <ul className="info-block__list">
          <li><strong>Additional subject</strong> — +50% of base</li>
          <li><strong>Simple background</strong> (suggested setting, light shading) — +S$30</li>
          <li><strong>Detailed background</strong> (full scene) — +S$80</li>
          <li><strong>Watercolour wash</strong> on top of linework — +S$40</li>
          <li>
            <strong>Physical original shipped</strong> (SG, tracked) — +S$15{' '}
            <em>(international: quote on request)</em>
          </li>
        </ul>
      </div>

      <div className="info-block">
        <h3 className="info-block__title">What you get</h3>
        <ul className="info-block__list">
          <li><strong>Turnaround:</strong> 2–3 weeks from deposit. I take on 3–4 commissions per month.</li>
          <li><strong>Revisions:</strong> 2 rounds at sketch stage, 1 minor tweak at final. Beyond that, S$20/round.</li>
          <li><strong>Deliverables:</strong> high-res digital scan (300dpi, PNG + PDF) for every commission.</li>
          <li><strong>Physical original:</strong> included for Portrait Sketch and Full Portrait tiers — shipped within Singapore for free (tracked). Postcard Sketch original available as a S$15 add-on.</li>
          <li><strong>International shipping:</strong> quote on request. Packed flat with backing board.</li>
          <li><strong>Usage:</strong> personal. Commercial licensing available — ask me.</li>
        </ul>
      </div>

      <div className="info-block">
        <h3 className="info-block__title">Process</h3>
        <ol className="process">
          <li>
            <strong>Tell me what you have in mind.</strong> Send a message via the form below
            or DM on Instagram. Reference photos help — the more, the better.
          </li>
          <li>
            <strong>I&rsquo;ll come back with a quote.</strong> Usually within 48 hours.
            I&rsquo;ll confirm tier, deadline, and any add-ons.
          </li>
          <li>
            <strong>50% deposit secures your slot.</strong> PayNow for SG, Stripe for international.
            Non-refundable.
          </li>
          <li>
            <strong>WIP, then final.</strong> I&rsquo;ll share a sketch for approval, then send the
            finished piece (and ship the original, if applicable) once the balance is paid.
          </li>
        </ol>
      </div>

      <div className="info-block">
        <h3 className="info-block__title">What I don&rsquo;t do</h3>
        <ul className="info-block__list">
          <li>No NSFW or explicit work</li>
          <li>No fan art of public figures or celebrities</li>
          <li>No anime/manga-style illustration — not my wheelhouse</li>
          <li>No rush jobs under 2 weeks</li>
          <li>No AI-generated reference (please send real photos)</li>
          <li>No usage of the work for AI training or NFTs</li>
        </ul>
      </div>
    </section>
  )
}
