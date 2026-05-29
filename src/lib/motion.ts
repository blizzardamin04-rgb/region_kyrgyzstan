/** Shared luxury motion tokens — Awwwards-grade easing */
export const easeLuxury = [0.16, 1, 0.3, 1] as const
export const easeCinematic = [0.77, 0, 0.175, 1] as const
export const easeOutExpo = [0.19, 1, 0.22, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 80, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: easeLuxury },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeLuxury } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: easeLuxury },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeLuxury },
  },
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easeLuxury } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}
