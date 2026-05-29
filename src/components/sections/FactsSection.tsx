import { motion } from 'framer-motion'
import { districts } from '../../data/districts'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

const largestByArea = [...districts].sort((a, b) => b.area - a.area)[0]
const smallestByArea = [...districts].sort((a, b) => a.area - b.area)[0]
const mostPopulated = [...districts].sort((a, b) => b.population - a.population)[0]
const leastPopulated = [...districts].sort((a, b) => a.population - b.population)[0]

const factCards = [
  {
    icon: '📏',
    title: 'Самый большой',
    name: largestByArea.name,
    value: largestByArea.area,
    unit: 'км²',
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: '📌',
    title: 'Самый компактный',
    name: smallestByArea.name,
    value: smallestByArea.area,
    unit: 'км²',
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    icon: '👥',
    title: 'Самый населённый',
    name: mostPopulated.name,
    value: mostPopulated.population,
    unit: 'чел.',
    color: 'from-violet-500/20 to-violet-500/5',
  },
  {
    icon: '🏔️',
    title: 'Самый высокогорный',
    name: 'Чон-Алайский',
    value: 4500,
    unit: 'м',
    color: 'from-amber-500/20 to-amber-500/5',
  },
]

export function FactsSection() {
  return (
    <section id="facts" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />
      <SectionTitle
        eyebrow="Статистика"
        title="Интересные факты"
        subtitle="Цифры и рекорды среди 40 районов Кыргызстана"
      />

      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Районов', value: districts.length, suffix: '' },
          { label: 'Население', value: 7, suffix: ' млн' },
          { label: 'Площадь', value: 199951, suffix: ' км²' },
          { label: 'Областей', value: 7, suffix: '' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="text-center shadow-glow-emerald">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {factCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={`glass-luxury rounded-2xl p-6 md:p-8 h-full bg-gradient-to-br shadow-luxury hover:shadow-luxury-hover transition-shadow duration-700 ${card.color}`}>
              <span className="text-3xl mb-3 block">{card.icon}</span>
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">{card.title}</p>
              <h3 className="font-bold text-white text-lg mb-2">{card.name}</h3>
              <p className="text-2xl font-bold text-emerald-400">
                {card.value.toLocaleString('ru-RU')} <span className="text-sm text-slate-500">{card.unit}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto glass-luxury rounded-2xl p-8 md:p-10 shadow-luxury">
        <h3 className="text-center text-sm uppercase tracking-wider text-slate-500 mb-6">
          Распределение населения (топ-5 районов)
        </h3>
        {[...districts]
          .sort((a, b) => b.population - a.population)
          .slice(0, 5)
          .map((d, i) => {
            const pct = (d.population / mostPopulated.population) * 100
            return (
              <div key={d.id} className="mb-4 last:mb-0">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{d.name}</span>
                  <span className="text-emerald-400">{d.population.toLocaleString('ru-RU')}</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  />
                </div>
              </div>
            )
          })}
        <p className="text-center text-xs text-slate-600 mt-6">
          Наименее населённый: {leastPopulated.name} ({leastPopulated.population.toLocaleString('ru-RU')} чел.)
        </p>
      </div>
    </section>
  )
}