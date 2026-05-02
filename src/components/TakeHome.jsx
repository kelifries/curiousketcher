// "take home a piece" — replaces the old Prints + Commissions sections.
// Two clean offering blocks. Title + price only. Form sits immediately below.

const printSizes = [
  { label: 'Digital', price: 'S$18' },
  { label: 'A5', price: 'S$38' },
  { label: 'A4', price: 'S$58' },
  { label: 'A3', price: 'S$85' },
]

export default function TakeHome() {
  return (
    <section className="takehome" id="takehome">
      <header className="section-head section-head--center">
        <h2 className="section-head__title">take home a piece</h2>
      </header>

      <div className="takehome__grid">
        <article className="offering">
          <p className="offering__eyebrow">Original prints</p>
          <p className="offering__lede">Choose from a rotation of existing pieces.</p>
          <ul className="offering__list" role="list">
            {printSizes.map((s) => (
              <li key={s.label} className="offering__row">
                <span className="offering__row-label">{s.label}</span>
                <span className="offering__row-price">{s.price}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="offering">
          <p className="offering__eyebrow">Original sketch</p>
          <p className="offering__lede">Commission, A5.</p>
          <ul className="offering__list" role="list">
            <li className="offering__row">
              <span className="offering__row-label">Sketch</span>
              <span className="offering__row-price">S$95</span>
            </li>
            <li className="offering__row">
              <span className="offering__row-label">+ Frame</span>
              <span className="offering__row-price">S$10</span>
            </li>
          </ul>
        </article>

        <article className="offering">
          <p className="offering__eyebrow">Tattoo template</p>
          <p className="offering__lede">Custom design for your tattoo artist, delivered as PNG.</p>
          <ul className="offering__list" role="list">
            <li className="offering__row">
              <span className="offering__row-label">Template</span>
              <span className="offering__row-price">S$80</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
