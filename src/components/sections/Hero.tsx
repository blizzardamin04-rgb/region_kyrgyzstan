import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type MouseEvent } from 'react'
import { Button } from '../ui/Button'
import { SplitText, SplitChars } from '../effects/SplitText'
import { easeLuxury } from '../../lib/motion'

const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 5,
}))

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 40, damping: 25 })
  const springY = useSpring(my, { stiffness: 40, damping: 25 })
  const textX = useTransform(springX, [-0.5, 0.5], [-24, 24])
  const textY = useTransform(springY, [-0.5, 0.5], [-16, 16])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.35])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -120])

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden vignette"
    >
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY, scale: bgScale }}>
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/80 via-[#0a1628]/40 to-[#050b14]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-cyan-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            }}
            animate={{ y: [0, -120, 0], opacity: [0, 0.7, 0], scale: [1, 1.5, 1] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY, x: textX }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-24"
      >
        <motion.div style={{ y: textY }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 1, ease: easeLuxury }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass-luxury text-[10px] sm:text-xs uppercase tracking-[0.4em] text-emerald-400/90"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Discover Kyrgyzstan
          </motion.span>

          <h1 className="font-display text-hero font-extrabold mb-4">
            <span className="block gradient-text">
              <SplitText text="Районы" as="span" delay={0.9} />
            </span>
            <span className="block text-white mt-1 md:mt-2">
              <SplitChars text="Кыргызстана" delay={1.2} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.6, duration: 1, ease: easeLuxury }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Путешествие по каждому уголку страны —{' '}
            <span className="text-white/90">40 районов</span>,{' '}
            <span className="text-emerald-400/90">7 областей</span>, бесконечная красота Тянь-Шаня
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.9, ease: easeLuxury }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#map" magnetic>
              Исследовать
            </Button>
            <Button href="#districts" variant="ghost">
              Все районы
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 glass-luxury"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-0.5 h-2.5 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
