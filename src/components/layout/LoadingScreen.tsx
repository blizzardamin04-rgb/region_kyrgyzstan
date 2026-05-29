import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { easeCinematic, easeLuxury } from '../../lib/motion'
import { SplitChars } from '../effects/SplitText'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'load' | 'reveal' | 'done'>('load')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12 + 4
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setPhase('reveal'), 300)
          return 100
        }
        return next
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (phase === 'reveal') {
      const t = setTimeout(() => setPhase('done'), 1200)
      return () => clearTimeout(t)
    }
    if (phase === 'done') {
      const t = setTimeout(onComplete, 100)
      return () => clearTimeout(t)
    }
  }, [phase, onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#050b14] flex flex-col items-center justify-center"
            animate={phase === 'reveal' ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 1.1, ease: easeCinematic }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center px-6"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-7xl mb-8 filter drop-shadow-[0_0_40px_rgba(16,185,129,0.4)]"
              >
                🏔️
              </motion.div>
              <p className="font-display text-2xl md:text-4xl font-bold text-white mb-2">
                <SplitChars text="Районы" delay={0.1} />
              </p>
              <p className="font-display text-lg md:text-2xl gradient-text font-semibold mb-10">
                <SplitChars text="Кыргызстана" delay={0.4} />
              </p>
            </motion.div>

            <div className="w-48 md:w-72 relative">
              <div className="h-[2px] rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-400"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: easeLuxury }}
                />
              </div>
              <motion.span
                className="absolute -right-8 top-1/2 -translate-y-1/2 text-xs text-emerald-400/80 tabular-nums font-mono"
                key={Math.round(progress)}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {Math.min(Math.round(progress), 100).toString().padStart(3, '0')}
              </motion.span>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-slate-600">
              Loading experience
            </p>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-[#050b14] flex items-center justify-center"
            initial={{ y: '100%' }}
            animate={phase === 'reveal' ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 1.1, ease: easeCinematic }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-emerald-500/60">
              Welcome
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
