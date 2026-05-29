import { Hero } from '../components/sections/Hero'
import { InteractiveMap } from '../components/sections/InteractiveMap'
import { OblastsSection } from '../components/sections/OblastsSection'
import { DistrictsGrid } from '../components/sections/DistrictsGrid'
import { FactsSection } from '../components/sections/FactsSection'
import { Gallery } from '../components/sections/Gallery'
import { Marquee } from '../components/effects/Marquee'
import { SectionDivider } from '../components/effects/SectionDivider'

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SectionDivider label="Карта" />
      <InteractiveMap />
      <SectionDivider label="Области" />
      <OblastsSection />
      <Marquee />
      <SectionDivider label="Районы" />
      <DistrictsGrid />
      <SectionDivider label="Статистика" />
      <FactsSection />
      <SectionDivider label="Галерея" />
      <Gallery />
    </>
  )
}
