import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import type { Shot } from '../data/projects.ts'
import { Lightbox } from './Lightbox.tsx'

type PhoneFrameProps = {
  shots: Shot[]
  label: string
  size?: 'md' | 'lg'
  fit?: 'cover' | 'contain'
}

export function PhoneFrame({ shots, label, size = 'lg', fit = 'cover' }: PhoneFrameProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const shot = shots[index] ?? shots[0]

  useEffect(() => {
    if (reduce || paused || open || shots.length < 2) return
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % shots.length)
    }, 2800)
    return () => window.clearTimeout(timer)
  }, [index, open, paused, reduce, shots.length])

  if (!shot) return null

  return (
    <div
      className={`phone phone-${size} phone-fit-${fit}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="phone-bezel">
        <button
          type="button"
          className="phone-screen"
          aria-label={`Open ${label} screenshots`}
          onClick={() => setOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <span className="phone-island" />
          <span className="phone-glare" />
        </button>
      </div>
      {shots.length > 1 ? (
        <div className="phone-dots" role="tablist" aria-label={`${label} screens`}>
          {shots.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              className={itemIndex === index ? 'is-active' : undefined}
              aria-selected={itemIndex === index}
              aria-label={`Show screen ${itemIndex + 1}`}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
      ) : null}
      {open ? (
        <Lightbox
          shots={shots}
          index={index}
          label={label}
          onIndex={setIndex}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </div>
  )
}
