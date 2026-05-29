import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { easeLuxury } from '../../lib/motion'
import { SplitText } from '../effects/SplitText'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <div
      ref={ref}
      className={`mb-16 md:mb-24 lg:mb-28 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: align === 'center' ? 0 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: easeLuxury }}
          className={`flex items-center gap-4 mb-5 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-emerald-500/60" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-emerald-400/80">
            {eyebrow}
          </span>
          <span className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-emerald-500/60" />
        </motion.div>
      )}

      <h2 className="font-display text-section font-extrabold text-white overflow-hidden">
        {inView ? (
          <span className="gradient-text">
            <SplitText text={title} as="span" />
          </span>
        ) : (
          <span className="opacity-0">{title}</span>
        )}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, delay: 0.4, ease: easeLuxury }}
          className={`mt-5 max-w-2xl text-slate-500 text-base md:text-lg font-light leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
