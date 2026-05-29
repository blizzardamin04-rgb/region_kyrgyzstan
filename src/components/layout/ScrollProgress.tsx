import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 35, restDelta: 0.001 })
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  return (
    <motion.div
      style={{ scaleX, opacity }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
    >
      <div className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
    </motion.div>
  )
}
