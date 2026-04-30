import { useState } from 'react'

const FORMSPREE_ID = 'mqenzver'
const FORMSPREE_ACTION = `https://formspree.io/f/${FORMSPREE_ID}`

export default function Inquiry() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const onSubmit = async (e) => {
    e.preventDefault()

    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (_err) {
      setStatus('error')
    }
  }

  return (
    <section className="inquiry" id="inquiry">
      <header className="section-head section-head--center">
        <p className="section-head__eyebrow">Inquire</p>
        <h2 className="section-head__title">Tell me what you have in mind.</h2>
        <p className="section-head__lede">
          Fill in the form and I&rsquo;ll come back with a quote, usually within 48 hours.
        </p>
      </header>

      <form
        className="inquiry__form"
        action={FORMSPREE_ACTION}
        method="POST"
        onSubmit={onSubmit}
        noValidate={false}
      >
        <div className="inquiry__row">
          <label className="field">
            <span className="field__label field__label--required">Name</span>
            <input className="field__input" type="text" name="name" required />
          </label>
          <label className="field">
            <span className="field__label field__label--required">Email</span>
            <input className="field__input" type="email" name="email" required />
          </label>
        </div>

        <div className="inquiry__row">
          <label className="field">
            <span className="field__label">Type of piece</span>
            <select className="field__select" name="piece_type" defaultValue="">
              <option value="" disabled>Select a tier</option>
              <option value="Postcard Sketch (S$45)">Postcard Sketch — S$45</option>
              <option value="Portrait Sketch (S$95)">Portrait Sketch — S$95</option>
              <option value="Full Portrait (S$180)">Full Portrait — S$180</option>
              <option value="Not sure">Not sure</option>
            </select>
          </label>
          <label className="field">
            <span className="field__label">Deadline</span>
            <input className="field__input" type="date" name="deadline" />
          </label>
        </div>

        <label className="field">
          <span className="field__label">Subject</span>
          <textarea
            className="field__textarea"
            name="subject"
            rows={4}
            placeholder="Who or what is the piece of? Any context that helps. (For reference photos: send via Instagram DM after you submit, or reply to my email when I get back to you.)"
          />
        </label>

        <label className="field">
          <span className="field__label">Budget range</span>
          <select className="field__select" name="budget" defaultValue="">
            <option value="" disabled>Optional</option>
            <option value="Under S$100">Under S$100</option>
            <option value="S$100–200">S$100–200</option>
            <option value="S$200–400">S$200–400</option>
            <option value="S$400+">S$400+</option>
            <option value="I trust your quote">I trust your quote</option>
          </select>
        </label>

        {/* Honeypot (anti-spam) */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="inquiry__submit">
          <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
          </button>
          <p className="inquiry__or">
            or{' '}
            <a
              href="https://instagram.com/curiousketcher"
              target="_blank"
              rel="noreferrer noopener"
            >
              DM me on Instagram →
            </a>
          </p>
        </div>

        {status === 'success' && (
          <div className="inquiry__success" role="status">
            Thanks — I&rsquo;ll be in touch within 48 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="inquiry__error" role="alert">
            Something went wrong sending the form. Please try again, or DM me on Instagram.
          </div>
        )}
      </form>
    </section>
  )
}
