import { motion } from 'framer-motion'
import { oblasts } from '../../data/oblasts'
import type { DistrictFilters as Filters } from '../../utils/filters'
import type { OblastId } from '../../types'

interface DistrictFiltersProps {
  filters: Filters
  onChange: (filters: Filters) => void
  resultCount: number
}

export function DistrictFiltersBar({ filters, onChange, resultCount }: DistrictFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-luxury rounded-2xl p-6 md:p-8 mb-12 max-w-5xl mx-auto shadow-luxury"
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          <input
            type="search"
            placeholder="Поиск района..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
          />
        </div>
        <select
          value={filters.oblastId}
          onChange={(e) =>
            onChange({ ...filters, oblastId: e.target.value as OblastId | 'all' })
          }
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 min-w-[180px]"
        >
          <option value="all">Все области</option>
          {oblasts.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
        <select
          value={filters.sort}
          onChange={(e) =>
            onChange({ ...filters, sort: e.target.value as Filters['sort'] })
          }
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 min-w-[180px]"
        >
          <option value="alpha">По алфавиту</option>
          <option value="population-desc">Население ↓</option>
          <option value="population-asc">Население ↑</option>
          <option value="area-desc">Площадь ↓</option>
        </select>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Найдено: <span className="text-emerald-400 font-semibold">{resultCount}</span> районов
      </p>
    </motion.div>
  )
}
