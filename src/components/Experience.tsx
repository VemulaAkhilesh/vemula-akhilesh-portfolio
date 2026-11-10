import { experience } from '../data/experience.ts'
import { AnimationWrapper } from '../animations/AnimationWrapper.tsx'
import { SectionHeading } from './SectionHeading.tsx'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <SectionHeading
          index="03"
          kicker="Experience"
          title="Two companies. Production apps."
          lede="App development roles in Hyderabad, from Android modules in Java to React Native releases on both stores."
        />
        <div className="timeline">
          {experience.map((job, index) => (
            <AnimationWrapper key={job.company} className="job" delay={index * 0.05}>
              <div className="job-meta">
                <p className="job-period">{job.period}</p>
                <span className="job-dot" />
              </div>
              <article className="job-card">
                <p className="job-place">{job.location}</p>
                <h3>{job.title}</h3>
                <p className="job-company">{job.company}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
