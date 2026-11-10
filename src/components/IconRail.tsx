import {
  Bell,
  Code2,
  CreditCard,
  KeyRound,
  Layers,
  MapPin,
  Smartphone,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const marks: { label: string; icon: LucideIcon }[] = [
  { label: 'React Native', icon: Smartphone },
  { label: 'TypeScript', icon: Code2 },
  { label: 'Redux', icon: Workflow },
  { label: 'Firebase', icon: Bell },
  { label: 'Razorpay', icon: CreditCard },
  { label: 'Google Maps', icon: MapPin },
  { label: 'Sign-in', icon: KeyRound },
  { label: 'Styled UI', icon: Layers },
]

export function IconRail() {
  const loop = [...marks, ...marks]

  return (
    <div className="rail" aria-hidden="true">
      <div className="rail-track">
        {loop.map((mark, index) => {
          const Icon = mark.icon
          return (
            <span className="rail-item" key={`${mark.label}-${index}`}>
              <Icon size={16} />
              {mark.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
