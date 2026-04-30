import { useEffect } from 'react'

export default function Lightbox({ item, onClose, onNext, onPrev, hasMultiple }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasMultiple) onNext()
      if (e.key === 'ArrowLeft' && hasMultiple) onPrev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev, hasMultiple])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        ×
      </button>

      {hasMultiple && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
        >
          ‹
        </button>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} className="lightbox__img" />
        {item.title && <figcaption className="lightbox__caption">{item.title}</figcaption>}
      </figure>

      {hasMultiple && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
        >
          ›
        </button>
      )}
    </div>
  )
}
