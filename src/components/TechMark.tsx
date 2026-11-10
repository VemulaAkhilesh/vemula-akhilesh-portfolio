import type { CSSProperties } from 'react'
import { logos } from '../data/logos.ts'

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean)
  if (parts.length < 2) return name.slice(0, 2)
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

type TechMarkProps = {
  name: string
  mark?: string
  color: string
}

export function TechMark({ name, mark, color }: TechMarkProps) {
  const src = mark ? logos[mark] : undefined
  const style = { '--brand': color } as CSSProperties

  return (
    <span className="tech-mark" style={style}>
      {src ? (
        <img src={src} alt="" />
      ) : (
        <span className="tech-word" aria-hidden="true">
          {initials(name)}
        </span>
      )}
    </span>
  )
}
