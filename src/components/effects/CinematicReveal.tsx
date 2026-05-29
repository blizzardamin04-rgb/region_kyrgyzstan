import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { easeLuxury } from '../../lib/motion'

interface CinematicRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export function CinematicReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: CinematicRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  const offset = {
    up: { y: 100, x: 0 },
    left: { y: 0, x: -80 },
    right: { y: 0, x: 80 },
  }[direction]

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, ...offset, filter: 'blur(16px)' }}
        animate={
          inView
            ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, ...offset, filter: 'blur(16px)' }
        }
        transition={{ duration: 1.2, delay, ease: easeLuxury }}
      >
        {children}
      </motion.div>
    </div>
  )
}
