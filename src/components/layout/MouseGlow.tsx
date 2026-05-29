import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export function MouseGlow() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { x, y } = useMousePosition(isDesktop)

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[1] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.06) 35%, transparent 65%)',
        }}
        animate={{ x: x - 300, y: y - 300 }}
        transition={{ type: 'spring', stiffness: 40, damping: 22 }}
      />
      <motion.div
        className="fixed pointer-events-none z-[1] w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
        animate={{ x: x - 100, y: y - 100 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
      />
    </>
  )
}
