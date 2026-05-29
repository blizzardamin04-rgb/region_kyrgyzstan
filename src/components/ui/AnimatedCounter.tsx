import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString('ru-RU'))

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, spring, value])

  useEffect(() => {
    return display.on('change', (v) => {
      if (ref.current) ref.current.textContent = v + suffix
    })
  }, [display, suffix])

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  )
}
