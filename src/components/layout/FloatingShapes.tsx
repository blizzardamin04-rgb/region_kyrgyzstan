import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        style={{ y: y1 }}
        animate={{ x: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] -left-[10%] w-[50vw] max-w-xl aspect-square rounded-full bg-emerald-500/[0.07] blur-[100px]"
      />
      <motion.div
        style={{ y: y2, rotate }}
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[10%] -right-[10%] w-[55vw] max-w-2xl aspect-square rounded-full bg-cyan-500/[0.06] blur-[120px]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-4xl aspect-[2/1] rounded-full bg-indigo-950/30 blur-[150px]"
      />
      {/* Floating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[20%] right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/[0.03]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[25%] left-[10%] w-24 h-24 md:w-36 md:h-36 rounded-full border border-emerald-500/[0.06]"
      />
    </div>
  )
}
