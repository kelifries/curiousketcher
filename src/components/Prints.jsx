// Pricing + copy from Art Business brief (ventures/outbox/curiousketcher-prints-pricing.md)

const physicalSizes = [
  { size: 'A5', dimensions: '14.8×21cm', price: 'S$38' },
  { size: 'A4', dimensions: '21×29.7cm', price: 'S$58' },
  { size: 'A3', dimensions: '29.7×42cm', price: 'S$85' },
]

export default function Prints() {
  return (
    <section className="prints" id="prints">
      <header className="section-head section-head--center">
        <p className="section-head__eyebrow">Prints</p>
        <h2 className="section-head__title">Take a piece home</h2>
        <p className="section-head__lede">
          A small, rotating selection of pieces I&rsquo;ve made available as prints —
          both as a digital file you can print yourself, and as a signed physical
          print I send by post.
        </p>
      </header>

      <div className="prints__pricing">
        <div className="prints__col">
          <p className="prints__col-eyebrow">Digital</p>
          <p className="prints__col-price">S$18</p>
          <p className="prints__col-detail">
            High-res file emailed within 48 hours. PNG + PDF, 300dpi, sized for
            printing up to A3.
          </p>
        </div>

        <div className="prints__col">
          <p className="prints__col-eyebrow">Physical print</p>
          <ul className="prints__sizes" role="list">
            {physicalSizes.map((s) => (
              <li key={s.size} className="prints__size">
                <span className="prints__size-name">{s.size}</span>
                <span className="prints__size-dim">{s.dimensions}</span>
                <span className="prints__size-price">{s.price}</span>
              </li>
            ))}
          </ul>
          <p className="prints__col-note">
            Archival matte 230gsm, signed and numbered. Limited edition of 50 per piece.
          </p>
        </div>
      </div>

      <div className="info-block">
        <h3 className="info-block__title">What you get</h3>
        <ul className="info-block__list">
          <li><strong>Digital:</strong> 300dpi PNG + PDF, ready to print up to A3. Emailed within 48 hours of payment.</li>
          <li><strong>Physical:</strong> archival matte 230gsm, signed on the front, numbered on the back. Edition of 50 per piece, across all sizes combined.</li>
          <li><strong>Bundle:</strong> add the digital file to any physical print for +S$8.</li>
          <li><strong>Shipping:</strong> Singapore S$6 (tracked, flat-packed with backing board). International quote on request — typically S$18–30.</li>
          <li><strong>Turnaround:</strong> digital within 48 hours of payment. Physical ships within 7–10 days (Singapore Post / international tracked).</li>
          <li><strong>Usage:</strong> personal. No commercial use, no resale, no AI training, no NFTs. Copyright stays with the artist.</li>
        </ul>
      </div>

      <div className="info-block">
        <h3 className="info-block__title">A few questions I get asked</h3>
        <dl className="faq">
          <div className="faq__item">
            <dt className="faq__q">What&rsquo;s the difference between a print and a commission?</dt>
            <dd className="faq__a">A print is an existing piece I&rsquo;ve already made, reproduced for sale. A commission is something new, made for you.</dd>
          </div>
          <div className="faq__item">
            <dt className="faq__q">Can I get a print of a piece I don&rsquo;t see here?</dt>
            <dd className="faq__a">Sometimes — message me with what you have in mind. Not everything works as a print, but most originals do.</dd>
          </div>
          <div className="faq__item">
            <dt className="faq__q">Is the physical print signed?</dt>
            <dd className="faq__a">Yes. Signed on the front, numbered on the back. Edition of 50 per piece.</dd>
          </div>
          <div className="faq__item">
            <dt className="faq__q">How long until I get it?</dt>
            <dd className="faq__a">Digital: within 48 hours. Physical: 7–10 days from payment for Singapore, longer for international.</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
