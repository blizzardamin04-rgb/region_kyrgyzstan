import { motion } from 'framer-motion'
import type { ReactNode, RefObject } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
  href?: string
  magnetic?: boolean
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  magnetic = false,
}: ButtonProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const mag = useMagnetic(0.2)
  const useMag = magnetic && isDesktop

  const base =
    'relative inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-sm tracking-[0.12em] uppercase transition-[box-shadow] duration-500 btn-shine'
  const variants = {
    primary:
      'bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-white shadow-glow-emerald hover:shadow-luxury-hover',
    ghost:
      'glass-luxury text-white/90 hover:text-white hover:bg-white/10 border-white/15',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      )}
    </>
  )

  const el = href ? (
    <a href={href} className={classes} data-cursor="hover">
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={classes} data-cursor="hover">
      {inner}
    </button>
  )

  if (!useMag) return el

  return (
    <motion.div
      ref={mag.ref as RefObject<HTMLDivElement>}
      style={{ x: mag.springX, y: mag.springY, display: 'inline-block' }}
      onMouseMove={mag.onMove}
      onMouseLeave={mag.onLeave}
      whileTap={{ scale: 0.97 }}
    >
      {el}
    </motion.div>
  )
}
