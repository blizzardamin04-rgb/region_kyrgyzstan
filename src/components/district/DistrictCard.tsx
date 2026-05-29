import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { District } from '../../types'
import { oblastMap } from '../../data/oblasts'
import { easeLuxury } from '../../lib/motion'

interface DistrictCardProps {
  district: District
  index: number
}

export function DistrictCard({ district, index }: DistrictCardProps) {
  const oblast = oblastMap[district.oblastId]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      transition={{ delay: (index % 12) * 0.04, duration: 0.7, ease: easeLuxury }}
      className="group"
    >
      <Link to={`/district/${district.id}`} data-cursor="hover">
        <div className="glass-luxury rounded-2xl overflow-hidden h-full shadow-luxury hover:shadow-luxury-hover transition-all duration-700 hover:-translate-y-2">
          <div className="relative h-48 md:h-52 overflow-hidden">
            <motion.img
              src={district.image}
              alt={district.name}
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 1, ease: easeLuxury }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/40 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
            <span className="absolute top-4 right-4 text-2xl md:text-3xl drop-shadow-lg filter">
              {district.icon}
            </span>
            <span
              className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full glass-luxury font-medium"
              style={{ color: oblast?.color, borderColor: `${oblast?.color}40` }}
            >
              {oblast?.name.replace(' область', '')}
            </span>
          </div>
          <div className="p-5 md:p-6">
            <h3 className="font-display font-bold text-white text-lg md:text-xl mb-1 group-hover:text-emerald-400 transition-colors duration-500 tracking-tight">
              {district.name}
            </h3>
            <p className="text-xs text-slate-600 mb-3 tracking-wide">{district.nameKy}</p>
            <p className="text-sm text-slate-400 line-clamp-2 mb-5 font-light leading-relaxed">
              {district.fact}
            </p>
            <div className="flex justify-between text-xs text-slate-500 mb-5 font-mono">
              <span>👥 {district.population.toLocaleString('ru-RU')}</span>
              <span>📐 {district.area.toLocaleString('ru-RU')}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400/90 font-semibold">
              Подробнее
              <motion.span
                className="inline-block w-6 h-px bg-emerald-500/50 group-hover:w-10 transition-all duration-500"
              />
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                →
              </motion.span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
