import { motion } from 'framer-motion'
import { easeLuxury } from '../../lib/motion'

const socials = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Facebook', icon: '👤', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'Telegram', icon: '✈️', href: '#' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030810] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeLuxury }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl filter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">🏔️</span>
              <span className="font-display text-2xl font-bold gradient-text tracking-tight">
                Районы Кыргызстана
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-[1.8] max-w-xs font-light">
              Интерактивное путешествие по 40 районам семи областей — от Иссык-Куля до Памира.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: easeLuxury }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.45em] text-emerald-500/70 mb-6">
              Навигация
            </h4>
            <ul className="space-y-3 text-slate-500 text-sm font-light">
              {[
                { label: 'Карта', href: '#map' },
                { label: 'Области', href: '#oblasts' },
                { label: 'Районы', href: '#districts' },
                { label: 'Галерея', href: '#gallery' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    data-cursor="hover"
                    className="hover:text-white transition-colors duration-500 line-reveal inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: easeLuxury }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.45em] text-emerald-500/70 mb-6">
              Контакты для заказа подобных сайтов
            </h4>
            <p className="text-slate-500 text-sm mb-8 font-light">+996 221 16 07 08</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  data-cursor="hover"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 glass-luxury rounded-full flex items-center justify-center text-lg shadow-luxury hover:shadow-glow-emerald transition-shadow duration-500"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-slate-700">
          <p>© 2026 Районы Кыргызстана</p>
          <p className="text-slate-600">Crafted with precision</p>
        </div>
      </div>
    </footer>
  )
}
