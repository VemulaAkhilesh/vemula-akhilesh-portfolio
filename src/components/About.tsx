import { motion, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { portraits } from '../data/media.ts'
import { profile } from '../data/profile.ts'
import { AnimationWrapper } from '../animations/AnimationWrapper.tsx'
import { SectionHeading } from './SectionHeading.tsx'

const stats = [
  { value: 3, suffix: ' yrs', label: 'Shipping React Native on Android and iOS' },
  { value: 5, suffix: '', label: 'Products, from home services to bill pay' },
  { value: 2, suffix: '', label: 'Stores: Google Play and the App Store' },
]

function Count({ value }: { value: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const [shown, setShown] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900)
      setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value])

  return <span ref={ref}>{shown}</span>
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <SectionHeading
          index="01"
          kicker="About"
          title="The work is the release, not the mock."
          lede="Hyderabad. Currently with Abilio IT Solutions in Madhapur, after two years at Neo-teq."
        />
        <div className="about-grid">
          <AnimationWrapper>
            <div className="about-copy">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimationWrapper>
          <AnimationWrapper delay={0.08}>
            <figure className="about-photo">
              <img
                src={portraits.focused}
                alt="Vemula Akhilesh at a desk in a light blue shirt"
              />
            </figure>
          </AnimationWrapper>
        </div>
        <div className="stat-row">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="stat"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <b>
                <Count value={stat.value} />
                {stat.suffix}
              </b>
              <span>{stat.label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
