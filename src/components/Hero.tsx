import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Download } from 'lucide-react'
import { type CSSProperties, type PointerEvent, type ReactNode, useRef } from 'react'
import { logos } from '../data/logos.ts'
import { portraits } from '../data/media.ts'
import { profile } from '../data/profile.ts'

const floaters = [
  { mark: 'react', label: 'React Native', style: { top: '14%', left: '4%' } },
  { mark: 'typescript', label: 'TypeScript', style: { top: '46%', left: '0%' } },
  { mark: 'android', label: 'Android', style: { bottom: '14%', left: '8%' } },
]

const particles = Array.from({ length: 14 }, (_, index) => index)

function Letters({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion()

  return (
    <span className={className ? `letters ${className}` : 'letters'} aria-label={text}>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          aria-hidden="true"
          initial={reduce ? false : { y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.55, delay: delay + index * 0.035, ease: [0.22, 1, 0.36, 1] }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    const x = event.clientX - (bounds.left + bounds.width / 2)
    const y = event.clientY - (bounds.top + bounds.height / 2)
    ref.current.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div className="magnetic" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  function onMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--y', `${event.clientY - bounds.top}px`)
  }

  return (
    <section className="hero" id="top" onPointerMove={onMove}>
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="particles" aria-hidden="true">
        {particles.map((index) => (
          <span key={index} style={{ '--i': index } as CSSProperties} />
        ))}
      </div>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="dot" />
            {profile.designation} · {profile.years} · {profile.location}
          </motion.p>
          <h1 className="display">
            <Letters text={profile.firstName} />
            <Letters text={profile.lastName} className="gradient-text" delay={0.18} />
          </h1>
          <motion.p
            className="hero-role"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {profile.title} building <em>mobile products</em> for Android and iOS.
          </motion.p>
          <motion.p
            className="hero-lead"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
          >
            {profile.intro}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Magnetic>
              <a className="btn btn-primary" href={profile.resumeUrl} download>
                <Download size={18} />
                Download resume
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#contact">
                Contact me
                <ArrowUpRight size={18} />
              </a>
            </Magnetic>
          </motion.div>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.phoneHref}>Phone</a>
          </div>
        </div>

        <motion.figure
          className="portrait-stage"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="portrait-glow" aria-hidden="true" />
          {floaters.map((item, index) => (
            <span
              key={item.mark}
              className="hero-float"
              style={{ ...item.style, animationDelay: `${index * -0.8}s` }}
              aria-hidden="true"
            >
              <img src={logos[item.mark]} alt="" />
            </span>
          ))}
          <img
            src={portraits.thoughtful}
            alt="Portrait of Vemula Akhilesh"
            width={1400}
            height={933}
            fetchPriority="high"
          />
        </motion.figure>
      </div>
    </section>
  )
}
