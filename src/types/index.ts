export type OblastId =
  | 'chuy'
  | 'osh'
  | 'jalal-abad'
  | 'issyk-kul'
  | 'naryn'
  | 'talas'
  | 'batken'

export interface Oblast {
  id: OblastId
  name: string
  nameKy: string
  capital: string
  description: string
  districtCount: number
  population: number
  area: number
  image: string
  facts: string[]
  color: string
}

export interface District {
  id: string
  name: string
  nameKy: string
  oblastId: OblastId
  population: number
  area: number
  image: string
  fact: string
  icon: string
  center: string
  history: string
  geography: string
  economy: string
  attractions: string[]
  gallery: string[]
  timeline: { year: string; event: string }[]
  stats: { label: string; value: string; unit?: string }[]
}

export interface GalleryItem {
  id: string
  src: string
  title: string
  location: string
  aspect: 'tall' | 'wide' | 'square'
}

export interface SiteFacts {
  totalDistricts: number
  totalPopulation: number
  largestDistrict: { name: string; population: number }
  smallestDistrict: { name: string; population: number }
  mostPopulated: { name: string; population: number }
  highestAltitude: { name: string; altitude: number }
}
