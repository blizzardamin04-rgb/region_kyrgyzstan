import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function SectionDivider({ label }: { label?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="relative h-32 md:h-48 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scaleX, opacity }}
        className="absolute inset-x-8 md:inset-x-24 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent origin-center"
      />
      {label && (
        <motion.span
          style={{ opacity }}
          className="relative z-10 text-[10px] uppercase tracking-[0.5em] text-slate-600 px-6 glass-luxury rounded-full py-2"
        >
          {label}
        </motion.span>
      )}
    </div>
  )
}
