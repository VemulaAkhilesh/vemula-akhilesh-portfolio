import { motion, useReducedMotion } from 'motion/react'
import { useState, type CSSProperties } from 'react'
import { logos } from '../data/logos.ts'
import { skillGroups, type Skill } from '../data/skills.ts'
import { SectionHeading } from './SectionHeading.tsx'

type ListedSkill = Skill & { group: string }

const listed: ListedSkill[] = skillGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.id })),
)

const marquee = listed.filter((item, index, all) => {
  if (!item.mark) return item.group === 'ai'
  return all.findIndex((other) => other.mark === item.mark) === index
})

const spots = [
  { left: '2%', top: '8%' },
  { left: '12%', top: '52%' },
  { left: '22%', top: '16%' },
  { left: '31%', top: '62%' },
  { left: '40%', top: '10%' },
  { left: '49%', top: '48%' },
  { left: '58%', top: '18%' },
  { left: '67%', top: '58%' },
  { left: '76%', top: '12%' },
  { left: '85%', top: '50%' },
  { left: '93%', top: '20%' },
]

export function Skills() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<string | null>(null)
  const constellation = marquee.slice(0, spots.length)

  return (
    <section className="section" id="skills">
      <div className="shell">
        <SectionHeading
          index="02"
          kicker="Skills"
          title="Only the tools that have shipped."
          lede="Languages, mobile UI, state, payments, maps, and the AI tools I build with: Cursor, Antigravity, Claude, and Windsurf."
        />

        <div className="constellation" aria-hidden="true">
          {constellation.map((item, index) => {
            const src = item.mark ? logos[item.mark] : undefined
            if (!src) return null
            const dim = active !== null && active !== item.group
            return (
              <motion.span
                key={item.mark}
                className={dim ? 'constellation-logo is-dim' : 'constellation-logo'}
                style={{ ...spots[index], animationDelay: `${index * -0.4}s` } as CSSProperties}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <img src={src} alt="" />
              </motion.span>
            )
          })}
        </div>

        <div className="logo-marquee" aria-hidden="true">
          <div className={reduce ? 'logo-track logo-still' : 'logo-track'}>
            {[...marquee, ...marquee].map((item, index) => {
              const src = item.mark ? logos[item.mark] : undefined
              if (!src && item.group !== 'ai') return null
              return (
                <span className="logo-chip" key={`${item.name}-${index}`}>
                  {src ? <img src={src} alt="" /> : null}
                  <span>{item.name}</span>
                </span>
              )
            })}
          </div>
        </div>

        <div className="skill-columns">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className={active && active !== group.id ? 'skill-column is-dim' : 'skill-column'}
              tabIndex={0}
              onMouseEnter={() => setActive(group.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(group.id)}
              onBlur={() => setActive(null)}
            >
              <h3>{group.title}</h3>
              <p>
                {group.items.map((item) => (
                  <span key={item.name}>{item.name}</span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
