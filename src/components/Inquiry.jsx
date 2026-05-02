import { useState } from 'react'

const FORMSPREE_ID = 'mqenzver'
const FORMSPREE_ACTION = `https://formspree.io/f/${FORMSPREE_ID}`

const INQUIRY_TYPES = {
  PRINT: 'Order a print',
  COMMISSION: 'Commission new work',
  TATTOO: 'Tattoo template',
  OTHER: 'Not sure / something else',
}

const SUBJECT_PREFIX = {
  [INQUIRY_TYPES.PRINT]: '[Print order]',
  [INQUIRY_TYPES.COMMISSION]: '[Commission]',
  [INQUIRY_TYPES.TATTOO]: '[Tattoo template]',
  [INQUIRY_TYPES.OTHER]: '[General]',
}

export default function Inquiry() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [inquiryType, setInquiryType] = useState('')
  const [name, setName] = useState('')
  const [printFormat, setPrintFormat] = useState('')

  const needsPhysical =
    printFormat === 'Physical print' || printFormat === 'Bundle (physical + digital)'

  // Hidden _subject value — Formspree uses this to set the email subject line
  // landing in Kelicia's inbox.
  const subjectLine = inquiryType
    ? `${SUBJECT_PREFIX[inquiryType]} from ${name || 'someone'}`
    : `[Inquiry] from ${name || 'someone'}`

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
        setInquiryType('')
        setName('')
        setPrintFormat('')
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
        <h2 className="section-head__title">Send a note and I&rsquo;ll come back within 48 hours.</h2>
      </header>

      <form
        className="inquiry__form"
        action={FORMSPREE_ACTION}
        method="POST"
        onSubmit={onSubmit}
      >
        {/* Always visible: Name, Email */}
        <div className="inquiry__row">
          <label className="field">
            <span className="field__label field__label--required">Name</span>
            <input
              className="field__input"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="field">
            <span className="field__label field__label--required">Email</span>
            <input className="field__input" type="email" name="email" required />
          </label>
        </div>

        {/* Always visible: inquiry-type dropdown */}
        <label className="field">
          <span className="field__label field__label--required">What are you here for?</span>
          <select
            className="field__select"
            name="inquiry_type"
            required
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
          >
            <option value="" disabled>Pick one</option>
            <option value={INQUIRY_TYPES.PRINT}>Order a print</option>
            <option value={INQUIRY_TYPES.COMMISSION}>Commission new work</option>
            <option value={INQUIRY_TYPES.TATTOO}>Tattoo template</option>
            <option value={INQUIRY_TYPES.OTHER}>Not sure / something else</option>
          </select>
        </label>

        {/* ===== Conditional: PRINT ===== */}
        {inquiryType === INQUIRY_TYPES.PRINT && (
          <>
            <p className="inquiry__sub-intro">
              Tell me which piece, which format, and where I&rsquo;m sending it.
            </p>

            <label className="field">
              <span className="field__label field__label--required">Which piece?</span>
              <input
                className="field__input"
                type="text"
                name="print_piece"
                required
                placeholder="Title or description, or just say 'I'll send you a screenshot'"
              />
            </label>

            <div className="inquiry__row">
              <label className="field">
                <span className="field__label field__label--required">Format</span>
                <select
                  className="field__select"
                  name="print_format"
                  required
                  value={printFormat}
                  onChange={(e) => setPrintFormat(e.target.value)}
                >
                  <option value="" disabled>Pick a format</option>
                  <option value="Digital">Digital — S$18</option>
                  <option value="Physical print">Physical print — from S$38</option>
                  <option value="Bundle (physical + digital)">Bundle (physical + digital, +S$8)</option>
                </select>
              </label>
              {needsPhysical && (
                <label className="field">
                  <span className="field__label field__label--required">Size</span>
                  <select
                    className="field__select"
                    name="print_size"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Pick a size</option>
                    <option value="A5">A5 (15×21cm)</option>
                    <option value="A4">A4 (21×30cm)</option>
                    <option value="A3">A3 (30×42cm)</option>
                  </select>
                </label>
              )}
            </div>

            {needsPhysical && (
              <label className="field">
                <span className="field__label field__label--required">Shipping address</span>
                <textarea
                  className="field__textarea"
                  name="shipping_address"
                  rows={3}
                  required
                  placeholder="City + country is enough for now; full address after we confirm."
                />
              </label>
            )}
          </>
        )}

        {/* ===== Conditional: COMMISSION (slimmed for v6 — only A5 sketch) ===== */}
        {inquiryType === INQUIRY_TYPES.COMMISSION && (
          <>
            <p className="inquiry__sub-intro">
              A5 sketch (S$95). Tell me what you have in mind.
            </p>

            <label className="field">
              <span className="field__label">Subject</span>
              <textarea
                className="field__textarea"
                name="commission_subject"
                rows={4}
                placeholder="Who or what is the piece of? Any context that helps. (For reference photos: send via Instagram DM after you submit, or reply to my email when I get back to you.)"
              />
            </label>

            <div className="inquiry__row">
              <label className="field">
                <span className="field__label">Deadline</span>
                <input className="field__input" type="date" name="commission_deadline" />
              </label>
              <label className="field">
                <span className="field__label">Budget range</span>
                <select className="field__select" name="commission_budget" defaultValue="">
                  <option value="" disabled>Optional</option>
                  <option value="Under S$100">Under S$100</option>
                  <option value="S$100–200">S$100–200</option>
                  <option value="S$200–400">S$200–400</option>
                  <option value="S$400+">S$400+</option>
                  <option value="I trust your quote">I trust your quote</option>
                </select>
              </label>
            </div>

            <label className="field field--checkbox">
              <input
                className="field__checkbox"
                type="checkbox"
                name="commission_frame"
                value="Yes"
              />
              <span className="field__checkbox-label">Add a frame (+S$10)</span>
            </label>
          </>
        )}

        {/* ===== Conditional: TATTOO TEMPLATE ===== */}
        {inquiryType === INQUIRY_TYPES.TATTOO && (
          <>
            <p className="inquiry__sub-intro">
              S$80, delivered as a high-res PNG you can hand to your tattoo artist.
            </p>

            <label className="field">
              <span className="field__label field__label--required">Subject / idea</span>
              <textarea
                className="field__textarea"
                name="tattoo_subject"
                rows={5}
                required
                placeholder="Describe what you'd like — subject, style, placement on body, intended size. Reference photos can be sent via Instagram DM after submitting."
              />
            </label>

            <div className="inquiry__row">
              <label className="field">
                <span className="field__label">Deadline</span>
                <input className="field__input" type="date" name="tattoo_deadline" />
              </label>
              <label className="field">
                <span className="field__label">Budget range</span>
                <select className="field__select" name="tattoo_budget" defaultValue="">
                  <option value="" disabled>Optional</option>
                  <option value="Under S$100">Under S$100</option>
                  <option value="S$100–200">S$100–200</option>
                  <option value="S$200–400">S$200–400</option>
                  <option value="S$400+">S$400+</option>
                  <option value="I trust your quote">I trust your quote</option>
                </select>
              </label>
            </div>
          </>
        )}

        {/* ===== Conditional: OTHER ===== */}
        {inquiryType === INQUIRY_TYPES.OTHER && (
          <>
            <p className="inquiry__sub-intro">
              No problem — just say what you&rsquo;re thinking and I&rsquo;ll point you in the right direction.
            </p>
            <label className="field">
              <span className="field__label field__label--required">Tell me a bit more</span>
              <textarea
                className="field__textarea"
                name="other_message"
                rows={5}
                required
                placeholder="What are you thinking about?"
              />
            </label>
          </>
        )}

        {/* Hidden Formspree subject (for Kelicia's inbox organisation) */}
        <input type="hidden" name="_subject" value={subjectLine} />

        {/* Honeypot (anti-spam) */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="inquiry__submit">
          <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Get in touch'}
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
