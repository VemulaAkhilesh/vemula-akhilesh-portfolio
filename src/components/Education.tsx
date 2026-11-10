import { Award, GraduationCap } from 'lucide-react'
import { achievements, education } from '../data/education.ts'
import { AnimationWrapper } from '../animations/AnimationWrapper.tsx'
import { SectionHeading } from './SectionHeading.tsx'

export function Education() {
  return (
    <section className="section" id="education">
      <div className="shell">
        <SectionHeading
          index="05"
          kicker="Education"
          title="A degree, a medal, and one award that paid."
        />
        <div className="edu-grid">
          <AnimationWrapper className="edu-card">
            <GraduationCap size={22} />
            <p className="job-period">{education.period}</p>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="muted">{education.place}</p>
          </AnimationWrapper>
          <div className="award-list">
            {achievements.map((item, index) => (
              <AnimationWrapper key={item.title} className="edu-card" delay={0.06 * (index + 1)}>
                <Award size={22} />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
