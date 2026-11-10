import { portraits } from '../data/media.ts'
import { profile } from '../data/profile.ts'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <span className="brand-mark">
            <img src={portraits.thoughtful} alt="" />
          </span>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">
            {profile.title} · {profile.location}
          </p>
        </div>
        <div>
          <p className="footer-label">Work</p>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedinLabel}
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href={profile.resumeUrl} download>
          Resume
        </a>
      </div>
    </footer>
  )
}
