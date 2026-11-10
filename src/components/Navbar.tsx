import { useLenis } from 'lenis/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portraits } from '../data/media.ts'
import { profile } from '../data/profile.ts'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const lenis = useLenis()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const ids = ['top', ...links.map((link) => link.id)]
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useLenis((instance) => {
    const next = instance.scroll > 12
    setSolid((current) => (current === next ? current : next))
    const limit = instance.limit || 1
    document.documentElement.style.setProperty('--scroll', String(Math.min(1, instance.scroll / limit)))
  })

  function go(id: string) {
    setOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    if (lenis) {
      lenis.scrollTo(target, { offset: -84 })
      return
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={solid || open ? 'nav nav-solid' : 'nav'}>
      <span className="scroll-progress" aria-hidden="true" />
      <a className="skip" href="#about">
        Skip to content
      </a>
      <div className="shell nav-inner">
        <a
          className="brand"
          href="#top"
          aria-label={profile.name}
          onClick={(event) => {
            event.preventDefault()
            go('top')
          }}
        >
          <span className="brand-mark">
            <img src={portraits.thoughtful} alt="" />
          </span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
              onClick={(event) => {
                event.preventDefault()
                go(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary btn-small nav-cta" href="#contact" onClick={(event) => {
          event.preventDefault()
          go('contact')
        }}>
          Contact
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="nav-panel">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
              onClick={(event) => {
                event.preventDefault()
                go(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  )
}
