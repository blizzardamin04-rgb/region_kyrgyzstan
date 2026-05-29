import { motion } from 'framer-motion'
import { easeLuxury, staggerContainer, staggerItem } from '../../lib/motion'

interface SplitTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'p' | 'span'
  delay?: number
}

export function SplitText({ text, className = '', as: Tag = 'span', delay = 0 }: SplitTextProps) {
  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: delay }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
            <motion.span variants={staggerItem} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

export function SplitChars({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + i * 0.03, duration: 0.8, ease: easeLuxury }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
