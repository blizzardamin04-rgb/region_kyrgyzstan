import { useMotionValue, useSpring } from 'framer-motion'
import { useRef, type MouseEvent } from 'react'

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 })

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, springX, springY, onMove, onLeave }
}
