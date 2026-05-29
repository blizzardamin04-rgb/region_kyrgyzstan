import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export function CustomCursor() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { x, y } = useMousePosition(isDesktop)
  const [hovering, setHovering] = useState(false)
  const scale = useMotionValue(1)
  const springScale = useSpring(scale, { stiffness: 400, damping: 25 })

  useEffect(() => {
    if (!isDesktop) return
    const onEnter = () => {
      setHovering(true)
      scale.set(2.2)
    }
    const onLeave = () => {
      setHovering(false)
      scale.set(1)
    }
    const selectors = 'a, button, [data-cursor="hover"]'
    document.querySelectorAll(selectors).forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [isDesktop, scale])

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{ x: x - 5, y: y - 5 }}
        transition={{ type: 'spring', stiffness: 600, damping: 35, mass: 0.4 }}
      >
        <motion.div
          style={{ scale: springScale }}
          className={`rounded-full ${hovering ? 'w-3 h-3 bg-white' : 'w-2.5 h-2.5 bg-emerald-400'}`}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{ x: x - 24, y: y - 24 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <motion.div
          style={{ scale: springScale }}
          className="w-12 h-12 rounded-full border border-cyan-400/30"
          animate={{ opacity: hovering ? 0.6 : 0.35 }}
        />
      </motion.div>
    </>
  )
}
