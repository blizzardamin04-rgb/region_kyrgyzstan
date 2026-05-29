import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  luxury?: boolean
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  luxury = true,
}: GlassCardProps) {
  const glassClass = luxury ? 'glass-luxury' : 'glass'

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.015,
              boxShadow:
                '0 4px 8px rgba(0,0,0,0.15), 0 24px 64px rgba(0,0,0,0.45), 0 0 40px rgba(16,185,129,0.1)',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`${glassClass} rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}
