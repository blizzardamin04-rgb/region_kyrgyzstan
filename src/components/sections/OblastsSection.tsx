import { motion } from 'framer-motion'
import { oblasts } from '../../data/oblasts'
import { SectionTitle } from '../ui/SectionTitle'
import { TiltCard } from '../ui/TiltCard'
import { CinematicReveal } from '../effects/CinematicReveal'
import { easeLuxury } from '../../lib/motion'

export function OblastsSection() {
  return (
    <section id="oblasts" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />

      <SectionTitle
        eyebrow="7 областей"
        title="Регионы страны"
        subtitle="Каждая область — уникальный мир со своей культурой, природой и историей"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {oblasts.map((oblast, i) => (
          <CinematicReveal key={oblast.id} delay={i * 0.06} direction={i % 2 === 0 ? 'up' : 'left'}>
            <TiltCard>
              <article
                data-cursor="hover"
                className="glass-luxury rounded-2xl overflow-hidden group shadow-luxury hover:shadow-luxury-hover transition-shadow duration-700"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <motion.img
                    src={oblast.image}
                    alt={oblast.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 1.2, ease: easeLuxury }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
                  <motion.div
                    className="absolute top-5 left-5 w-2 h-2 rounded-full"
                    style={{
                      background: oblast.color,
                      boxShadow: `0 0 20px ${oblast.color}, 0 0 40px ${oblast.color}40`,
                    }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="absolute bottom-5 right-5 text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    {i + 1}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-display tracking-tight">
                    {oblast.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 tracking-wide">
                    {oblast.nameKy} · {oblast.capital}
                  </p>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-5 leading-relaxed font-light">
                    {oblast.description}
                  </p>
                  <div className="flex gap-6 text-xs mb-5 pb-5 border-b border-white/5">
                    <span className="text-emerald-400 font-medium">{oblast.districtCount} районов</span>
                    <span className="text-cyan-400/90 font-medium">
                      {(oblast.population / 1_000_000).toFixed(2)}M
                    </span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {oblast.facts.slice(0, 2).map((f) => (
                      <li key={f} className="text-xs text-slate-500 flex gap-2 font-light">
                        <span className="text-emerald-500/80">◆</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#districts"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('filter-oblast', { detail: oblast.id }))
                    }}
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span className="line-reveal">Смотреть районы</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </article>
            </TiltCard>
          </CinematicReveal>
        ))}
      </div>
    </section>
  )
}
