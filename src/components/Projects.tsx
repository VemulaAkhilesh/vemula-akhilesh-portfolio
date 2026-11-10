import { Check } from 'lucide-react'
import type { Project } from '../data/projects.ts'
import { projects } from '../data/projects.ts'
import { SectionHeading } from './SectionHeading.tsx'

function AppIcon({ project }: { project: Project }) {
  if (!project.icon) return null

  return (
    <div className="app-mark">
      <img src={project.icon} alt="" />
    </div>
  )
}

function ProjectType({ project, index }: { project: Project; index: number }) {
  return (
    <article className="type-row">
      <div className={project.icon ? 'type-head' : 'type-head is-plain'}>
        <AppIcon project={project} />
        <div className="type-title">
          <div className="type-meta">
            <span>0{index + 1}</span>
            <span>{project.role}</span>
            <span>{project.client}</span>
          </div>
          <h3 className="type-name" style={{ animationDelay: `${index * 0.08}s` }}>
            {project.name}
          </h3>
        </div>
      </div>
      <div className="type-body">
        <p>{project.summary}</p>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>
              <Check size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="pills">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <SectionHeading
          index="04"
          kicker="Selected work"
          title="Products with a store build behind them."
          lede="Home services, bill pay, jobs, and an LMS. The same products, told in type."
        />
        <div className="type-list">
          {projects.map((project, index) => (
            <ProjectType key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
