import { useState } from 'react'
import type { Shot } from '../data/projects.ts'
import { Lightbox } from './Lightbox.tsx'
import { Tilt } from './Tilt.tsx'

type PosterFanProps = {
  shots: Shot[]
  label: string
}

export function PosterFan({ shots, label }: PosterFanProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Tilt className="fan" max={6}>
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            className={`fan-card fan-card-${index}`}
            onClick={() => setOpenIndex(index)}
            aria-label={`Open ${shot.alt}`}
          >
            <img src={shot.src} alt={shot.alt} />
          </button>
        ))}
      </Tilt>
      {openIndex !== null ? (
        <Lightbox
          shots={shots}
          index={openIndex}
          label={label}
          onIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </>
  )
}
