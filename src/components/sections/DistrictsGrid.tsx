import { AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { districts } from '../../data/districts'
import { DistrictCard } from '../district/DistrictCard'
import { DistrictFiltersBar } from '../district/DistrictFilters'
import { SectionTitle } from '../ui/SectionTitle'
import { filterDistricts, type DistrictFilters } from '../../utils/filters'
import type { OblastId } from '../../types'

const defaultFilters: DistrictFilters = {
  search: '',
  oblastId: 'all',
  sort: 'alpha',
}

export function DistrictsGrid() {
  const [filters, setFilters] = useState<DistrictFilters>(defaultFilters)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<OblastId>).detail
      setFilters((f) => ({ ...f, oblastId: detail }))
      document.getElementById('districts')?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('filter-oblast', handler)
    return () => window.removeEventListener('filter-oblast', handler)
  }, [])

  const filtered = useMemo(() => filterDistricts(districts, filters), [filters])

  return (
    <section id="districts" className="section-padding relative">
      <SectionTitle
        eyebrow="40 районов"
        title="Все районы Кыргызстана"
        subtitle="Полный каталог с поиском, фильтрацией и подробными страницами"
      />

      <DistrictFiltersBar
        filters={filters}
        onChange={setFilters}
        resultCount={filtered.length}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((district, i) => (
            <DistrictCard key={district.id} district={district} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-12">Районы не найдены. Попробуйте другой запрос.</p>
      )}
    </section>
  )
}
