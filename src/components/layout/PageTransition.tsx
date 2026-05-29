import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeCinematic } from '../../lib/motion'

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: easeCinematic }}
        className="fixed inset-0 z-[150] bg-gradient-to-b from-emerald-950 to-[#050b14] origin-top pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -30, filter: 'blur(12px)' }}
        transition={{ duration: 0.8, ease: easeCinematic, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </>
  )
}
