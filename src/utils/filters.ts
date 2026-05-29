import type { District, OblastId } from '../types'

export type SortOption = 'alpha' | 'population-desc' | 'population-asc' | 'area-desc'

export interface DistrictFilters {
  search: string
  oblastId: OblastId | 'all'
  sort: SortOption
}

export function filterDistricts(districts: District[], filters: DistrictFilters): District[] {
  let result = [...districts]

  if (filters.oblastId !== 'all') {
    result = result.filter((d) => d.oblastId === filters.oblastId)
  }

  const q = filters.search.trim().toLowerCase()
  if (q) {
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.nameKy.toLowerCase().includes(q) ||
        d.center.toLowerCase().includes(q) ||
        d.fact.toLowerCase().includes(q),
    )
  }

  switch (filters.sort) {
    case 'alpha':
      result.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
      break
    case 'population-desc':
      result.sort((a, b) => b.population - a.population)
      break
    case 'population-asc':
      result.sort((a, b) => a.population - b.population)
      break
    case 'area-desc':
      result.sort((a, b) => b.area - a.area)
      break
  }

  return result
}
