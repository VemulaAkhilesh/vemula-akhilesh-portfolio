import { motion, useReducedMotion } from 'motion/react'
import { portraits, shots } from '../data/media.ts'

const orbit = [
  { label: 'Sevaki', image: shots.sevakiIcon },
  { label: 'PAYZIGO', image: shots.payzioIcon },
  { label: 'Rono Jobs', image: shots.ronoIcon },
  { label: 'SkillTech', image: shots.skilltechIcon },
]

const orbitAngles = [-90, 0, 90, 180]

export function ProfileStage() {
  const reduce = useReducedMotion()

  return (
    <div className="stage">
      <span className="pulse-ring" />
      <span className="pulse-ring delay" />
      <svg className="stage-ring" viewBox="0 0 520 520" aria-hidden="true">
        <defs>
          <linearGradient id="ring-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CCD0CF" />
            <stop offset="55%" stopColor="#9BA8AB" />
            <stop offset="100%" stopColor="#4A5C6A" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="260" r="214" fill="none" stroke="url(#ring-stroke)" strokeWidth="1.2" />
        <circle
          className="stage-dash"
          cx="260"
          cy="260"
          r="248"
          fill="none"
          stroke="url(#ring-stroke)"
          strokeWidth="1.4"
          strokeDasharray="8 14"
        />
      </svg>

      <div className={reduce ? 'orbit orbit-still' : 'orbit'}>
        {orbit.map((item, index) => {
          const angle = (orbitAngles[index] * Math.PI) / 180
          const radius = 42
          const x = 50 + Math.cos(angle) * radius
          const y = 50 + Math.sin(angle) * radius
          return (
            <span
              key={item.label}
              className="orbit-slot"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span className="orbit-face" title={item.label}>
                <img src={item.image} alt="" />
              </span>
            </span>
          )
        })}
      </div>

      <motion.div
        className="profile-disc"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={portraits.thoughtful}
          alt="Portrait of Vemula Akhilesh"
          fetchPriority="high"
        />
        <span className="profile-badge">React Native</span>
      </motion.div>
    </div>
  )
}
