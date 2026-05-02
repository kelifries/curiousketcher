// faq — bottom of page, before footer. Structured for easy entry addition.

const faqs = [
  {
    q: 'How are the pieces made?',
    a: 'All sketches are drawn with pen and paper. No AI, no digital.',
  },
]

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <header className="section-head section-head--center">
        <h2 className="section-head__title">faq</h2>
      </header>

      <dl className="faq">
        {faqs.map(({ q, a }) => (
          <div key={q} className="faq__item">
            <dt className="faq__q">{q}</dt>
            <dd className="faq__a">{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
