import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className = '', intensity = 12 }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 260,
    damping: 28,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 260,
    damping: 28,
  })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  )
}
