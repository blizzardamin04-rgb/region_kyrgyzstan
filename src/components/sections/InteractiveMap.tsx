import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { oblasts } from '../../data/oblasts'
import { districts } from '../../data/districts'
import type { OblastId } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

// Точные SVG-контуры из реальных географических координат
// Проекция: equirectangular, lon 69–80.8, lat 39–43.5, viewBox 0 0 1000 560
const mapRegions: { id: OblastId; d: string; label: { x: number; y: number } }[] = [
  {
    id: 'chuy',
    d: 'M278.7 80.1 L312.9 72 L361.7 66.2 L410.5 63.9 L459.3 68.5 L500 83.6 L524.4 100.9 L491.9 124 L443.1 135.6 L394.2 141.3 L345.4 137.9 L304.7 129.8 L264.1 118.2 L247.8 100.9 Z',
    label: { x: 381, y: 105 },
  },
  {
    id: 'talas',
    d: 'M146.1 95.1 L199 83.6 L247.8 83.6 L278.7 80.1 L247.8 100.9 L264.1 118.2 L247.8 147.1 L223.4 170.2 L199 193.3 L166.4 181.8 L133.9 158.7 L117.6 129.8 L125.8 110.1 Z',
    label: { x: 200, y: 130 },
  },
  {
    id: 'issyk-kul',
    d: 'M500 83.6 L548.8 77.8 L605.8 72 L662.7 77.8 L719.7 89.3 L776.6 100.9 L833.6 112.4 L882.4 129.8 L931.2 158.7 L955.6 193.3 L939.3 222.2 L898.6 233.8 L849.8 228 L801 216.4 L752.2 210.7 L703.4 204.9 L654.6 210.7 L605.8 204.9 L573.2 181.8 L540.7 158.7 L508.1 141.3 L491.9 124 L524.4 100.9 Z',
    label: { x: 720, y: 158 },
  },
  {
    id: 'naryn',
    d: 'M443.1 135.6 L491.9 124 L508.1 141.3 L540.7 158.7 L573.2 181.8 L605.8 204.9 L654.6 210.7 L703.4 204.9 L752.2 210.7 L752.2 251.1 L735.9 285.8 L703.4 308.9 L654.6 320.4 L605.8 326.2 L556.9 320.4 L508.1 308.9 L467.5 297.3 L426.8 285.8 L402.4 262.7 L386.1 233.8 L394.2 204.9 L410.5 181.8 L426.8 158.7 Z',
    label: { x: 572, y: 238 },
  },
  {
    id: 'jalal-abad',
    d: 'M247.8 147.1 L264.1 118.2 L304.7 129.8 L345.4 137.9 L394.2 141.3 L426.8 158.7 L410.5 181.8 L394.2 204.9 L386.1 233.8 L402.4 262.7 L378 291.6 L353.6 314.7 L329.2 332 L296.6 343.6 L264.1 332 L239.7 308.9 L223.4 280 L215.3 245.3 L223.4 216.4 L239.7 193.3 L247.8 170.2 Z',
    label: { x: 316, y: 232 },
  },
  {
    id: 'osh',
    d: 'M329.2 332 L353.6 314.7 L378 291.6 L402.4 262.7 L426.8 285.8 L467.5 297.3 L508.1 308.9 L556.9 320.4 L573.2 343.6 L556.9 372.4 L524.4 395.6 L491.9 412.9 L443.1 430.2 L394.2 441.8 L345.4 436 L304.7 412.9 L280.3 384 L264.1 355.1 L280.3 341.2 Z',
    label: { x: 418, y: 368 },
  },
  {
    id: 'batken',
    d: 'M117.6 366.7 L150.2 389.8 L182.7 412.9 L223.4 430.2 L264.1 441.8 L304.7 412.9 L280.3 384 L264.1 355.1 L280.3 341.2 L264.1 332 L239.7 308.9 L223.4 280 L215.3 245.3 L199 262.7 L174.6 285.8 L150.2 308.9 L125.8 332 L101.4 349.3 Z',
    label: { x: 205, y: 355 },
  },
]

export function InteractiveMap() {
  const [hovered, setHovered] = useState<OblastId | null>(null)
  const [selected, setSelected] = useState<OblastId | null>(null)
  const active = selected ?? hovered
  const activeOblast = active ? oblasts.find((o) => o.id === active) : null
  const regionDistricts = active ? districts.filter((d) => d.oblastId === active) : []

  return (
    <section id="map" className="section-padding relative">
      <SectionTitle
        eyebrow="Интерактивная карта"
        title="Исследуйте области"
        subtitle="Наведите на область или нажмите, чтобы увидеть все районы"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 items-start">

        {/* Карта — занимает 3/5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-luxury rounded-3xl p-4 md:p-8 shadow-luxury"
        >
          <svg viewBox="80 55 900 410" className="w-full h-auto">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
              </filter>
            </defs>

            {mapRegions.map((region) => {
              const oblast = oblasts.find((o) => o.id === region.id)!
              const isActive = active === region.id
              const isOtherActive = !!active && !isActive

              return (
                <g key={region.id}>
                  <motion.path
                    d={region.d}
                    fill={isActive ? oblast.color : 'rgba(255,255,255,0.08)'}
                    fillOpacity={isActive ? 0.5 : 1}
                    stroke={isActive ? oblast.color : 'rgba(255,255,255,0.25)'}
                    strokeWidth={isActive ? 2.5 : 1}
                    strokeLinejoin="round"
                    filter={isActive ? 'url(#glow)' : 'url(#softShadow)'}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHovered(region.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(selected === region.id ? null : region.id)}
                    animate={{ opacity: isOtherActive ? 0.3 : 1 }}
                    whileHover={{ fillOpacity: 0.2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                  <motion.text
                    x={region.label.x}
                    y={region.label.y}
                    textAnchor="middle"
                    fill={isActive ? oblast.color : 'rgba(255,255,255,0.85)'}
                    style={{
                      fontSize: '10px',
                      fontWeight: isActive ? 700 : 500,
                      pointerEvents: 'none',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.03em',
                    }}
                    animate={{ opacity: isOtherActive ? 0.35 : 1 }}
                  >
                    {oblast.name.replace(' область', '')}
                  </motion.text>
                  <motion.circle
                    cx={region.label.x}
                    cy={region.label.y + 12}
                    r={isActive ? 3 : 1.8}
                    fill={isActive ? oblast.color : 'rgba(255,255,255,0.4)'}
                    animate={{ opacity: isOtherActive ? 0.25 : 1 }}
                  />
                </g>
              )
            })}
          </svg>
        </motion.div>

        {/* Инфо-панель — занимает 2/5 */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {activeOblast ? (
              <motion.div
                key={activeOblast.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="neon-glow">
                  <div
                    className="w-2 h-12 rounded-full mb-4"
                    style={{ background: activeOblast.color }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-1">{activeOblast.name}</h3>
                  <p className="text-slate-400 text-sm mb-1">{activeOblast.nameKy}</p>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">{activeOblast.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="glass rounded-xl p-3">
                      <span className="text-slate-500 block text-xs">Районов</span>
                      <span className="text-emerald-400 font-bold text-lg">{activeOblast.districtCount}</span>
                    </div>
                    <div className="glass rounded-xl p-3">
                      <span className="text-slate-500 block text-xs">Население</span>
                      <span className="text-cyan-400 font-bold text-lg">
                        {(activeOblast.population / 1_000_000).toFixed(2)}M
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-emerald-400 mb-3">
                    Районы ({regionDistricts.length})
                  </h4>
                  <ul className="space-y-1">
                    {regionDistricts.map((d) => (
                      <li key={d.id}>
                        <a
                          href={`/district/${d.id}`}
                          className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-white/5 transition-all py-1.5 px-2 rounded-lg"
                        >
                          <span className="text-base">{d.icon}</span>
                          <span>{d.name}</span>
                          <span className="ml-auto text-slate-600 text-xs">→</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full min-h-[300px]"
              >
                <p className="text-slate-500 text-center">
                  👆 Выберите область на карте
                  <br />
                  <span className="text-sm">для просмотра районов</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}