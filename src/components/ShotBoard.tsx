import { useState } from 'react'
import type { Shot } from '../data/projects.ts'
import { Lightbox } from './Lightbox.tsx'

type ShotBoardProps = {
  shots: Shot[]
  label: string
}

export function ShotBoard({ shots, label }: ShotBoardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (shots.length === 0) return null

  return (
    <>
      <div className="screen-row">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            className="screen-frame"
            aria-label={`Open ${shot.alt}`}
            onClick={() => setOpenIndex(index)}
          >
            <img src={shot.src} alt={shot.alt} />
          </button>
        ))}
      </div>
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
