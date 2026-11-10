import { useLenis } from 'lenis/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Shot } from '../data/projects.ts'

type LightboxProps = {
  shots: Shot[]
  index: number
  label: string
  onIndex: (index: number) => void
  onClose: () => void
}

export function Lightbox({ shots, index, label, onIndex, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const lenis = useLenis()
  const onCloseRef = useRef(onClose)
  const onIndexRef = useRef(onIndex)
  const shot = shots[index]

  useEffect(() => {
    onCloseRef.current = onClose
    onIndexRef.current = onIndex
  })

  useEffect(() => {
    closeRef.current?.focus()
    lenis?.stop()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
      lenis?.start()
    }
  }, [lenis])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onCloseRef.current()
      if (event.key === 'ArrowRight') onIndexRef.current((index + 1) % shots.length)
      if (event.key === 'ArrowLeft') onIndexRef.current((index - 1 + shots.length) % shots.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, shots.length])

  if (!shot) return null

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <div className="lightbox-bar">
          <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
          {shots.length > 1 ? (
            <>
              <button
                type="button"
                className="icon-btn"
                aria-label="Previous screen"
                onClick={() => onIndex((index - 1 + shots.length) % shots.length)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="icon-btn"
                aria-label="Next screen"
                onClick={() => onIndex((index + 1) % shots.length)}
              >
                <ChevronRight size={18} />
              </button>
            </>
          ) : null}
          <p>
            {index + 1} / {shots.length}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
