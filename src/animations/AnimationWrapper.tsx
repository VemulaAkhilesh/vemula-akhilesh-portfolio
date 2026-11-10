import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type AnimationWrapperProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimationWrapper({ children, className, delay = 0 }: AnimationWrapperProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: reduce ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
