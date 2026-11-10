import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { useSyncExternalStore, type PointerEvent, type ReactNode } from 'react'

type TiltProps = {
  children: ReactNode
  className?: string
  max?: number
}

function subscribe(onStoreChange: () => void) {
  const query = window.matchMedia('(hover: hover) and (pointer: fine)')
  query.addEventListener('change', onStoreChange)
  return () => query.removeEventListener('change', onStoreChange)
}

function useFinePointer() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    () => false,
  )
}

export function Tilt({ children, className, max = 8 }: TiltProps) {
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), {
    stiffness: 160,
    damping: 18,
    mass: 0.6,
  })
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), {
    stiffness: 160,
    damping: 18,
    mass: 0.6,
  })

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    px.set((event.clientX - bounds.left) / bounds.width - 0.5)
    py.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  function onLeave() {
    px.set(0)
    py.set(0)
  }

  const active = fine && !reduce

  return (
    <motion.div
      className={className}
      onPointerMove={active ? onMove : undefined}
      onPointerLeave={active ? onLeave : undefined}
      style={active ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
    >
      {children}
    </motion.div>
  )
}
