import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { districtMap } from '../data/districts'
import { oblastMap } from '../data/oblasts'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { GlassCard } from '../components/ui/GlassCard'
import { Button } from '../components/ui/Button'
import { SplitChars } from '../components/effects/SplitText'
import { CinematicReveal } from '../components/effects/CinematicReveal'
import { easeLuxury } from '../lib/motion'

export function DistrictDetailPage() {
  const { id } = useParams<{ id: string }>()
  const district = id ? districtMap[id] : undefined
  const oblast = district ? oblastMap[district.oblastId] : undefined
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.35])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // ✅ Исправление: всегда прокручиваем наверх при открытии страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  useEffect(() => {
    if (district) {
      document.title = `${district.name} — Районы Кыргызстана`
      return () => {
        document.title = 'Районы Кыргызстана — Путешествие по стране'
      }
    }
  }, [district])

  if (!district) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Район не найден</h1>
          <Link to="/" className="text-emerald-400 hover:underline" data-cursor="hover">
            ← На главную
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden vignette"
      >
        <motion.div className="absolute inset-0 will-change-transform" style={{ scale: imgScale, y: imgY }}>
          <img src={district.image} alt={district.name} className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/50 to-[#050b14]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(16,185,129,0.15),transparent_60%)]" />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-10 section-padding w-full max-w-7xl mx-auto pb-16 md:pb-24"
        >
          <Link
            to="/#districts"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald-400/80 mb-8 hover:text-emerald-400 transition-colors"
            data-cursor="hover"
          >
            ← Все районы
          </Link>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeLuxury }}
            className="text-5xl md:text-7xl mb-6 block filter drop-shadow-2xl"
          >
            {district.icon}
          </motion.span>
          <p className="text-emerald-400/80 text-xs uppercase tracking-[0.4em] mb-3">{oblast?.name}</p>
          <h1 className="font-display text-hero font-extrabold text-white mb-3 tracking-tight">
            <SplitChars text={district.name} delay={0.2} />
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            {district.nameKy} · {district.center}
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28">
          {district.stats.map((stat, i) => (
            <CinematicReveal key={stat.label} delay={i * 0.08}>
              <GlassCard className="text-center shadow-glow-emerald">
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-3">{stat.label}</p>
                {stat.label === 'Население' ? (
                  <p className="text-2xl md:text-3xl font-bold gradient-text font-display">
                    <AnimatedCounter value={district.population} />
                  </p>
                ) : (
                  <p className="text-2xl md:text-3xl font-bold gradient-text font-display">
                    {stat.value}
                    {stat.unit && <span className="text-sm text-slate-500 ml-1 font-sans">{stat.unit}</span>}
                  </p>
                )}
              </GlassCard>
            </CinematicReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">
          <CinematicReveal direction="left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
              <span className="gradient-text-gold">История</span>
            </h2>
            <p className="text-slate-400 leading-[1.9] font-light text-lg">{district.history}</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 mt-12 tracking-tight">
              <span className="gradient-text">География</span>
            </h2>
            <p className="text-slate-400 leading-[1.9] font-light text-lg">{district.geography}</p>
          </CinematicReveal>
          <CinematicReveal direction="right" delay={0.15}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
              Экономика
            </h2>
            <p className="text-slate-400 leading-[1.9] font-light text-lg mb-10">{district.economy}</p>
            <GlassCard luxury className="shadow-luxury">
              <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-400/80 mb-3">Интересный факт</p>
              <p className="text-white text-lg leading-relaxed font-light">{district.fact}</p>
            </GlassCard>
          </CinematicReveal>
        </div>

        <CinematicReveal>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">Достопримечательности</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 md:mb-28">
            {district.attractions.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: easeLuxury }}
                className="glass-luxury rounded-xl p-5 flex items-center gap-4 shadow-luxury hover:shadow-luxury-hover transition-shadow duration-500"
              >
                <span className="text-2xl">📍</span>
                <span className="text-slate-300 font-light">{a}</span>
              </motion.div>
            ))}
          </div>
        </CinematicReveal>

        <CinematicReveal>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-20 md:mb-28">
            {district.gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: easeLuxury }}
                className="relative overflow-hidden rounded-xl aspect-square group"
              >
                <img
                  src={src}
                  alt={`${district.name} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </CinematicReveal>

        <CinematicReveal>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10">Хронология</h2>
          <div className="relative border-l border-emerald-500/20 ml-4 md:ml-6 space-y-10 mb-20 md:mb-28">
            {district.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: easeLuxury }}
                className="relative pl-10 md:pl-12"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
                <span className="text-emerald-400 font-display font-bold text-xl">{item.year}</span>
                <p className="text-slate-400 mt-2 font-light leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </CinematicReveal>

        <div className="text-center pb-12">
          <Button href="/#districts" magnetic>
            Исследовать другие районы
          </Button>
        </div>
      </div>
    </>
  )
}
