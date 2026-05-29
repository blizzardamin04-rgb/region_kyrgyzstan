import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { oblasts } from '../../data/oblasts'
import { districts } from '../../data/districts'
import type { OblastId } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

// SVG-контуры, рассчитанные из реальных географических координат областей КР
// ViewBox 0 0 1000 600, lon: 69.2–80.3, lat: 39.2–43.3
const mapRegions: { id: OblastId; d: string; label: { x: number; y: number } }[] = [
  {
    id: 'batken',
    d: 'M 139 465 L 196 513 L 261 501 L 318 477 L 358 440 L 342 391 L 293 379 L 236 391 L 180 416 L 131 428 Z',
    label: { x: 245, y: 445 },
  },
  {
    id: 'osh',
    d: 'M 318 477 L 399 489 L 480 477 L 520 428 L 504 367 L 439 343 L 374 355 L 342 391 L 358 440 Z',
    label: { x: 415, y: 422 },
  },
  {
    id: 'jalal-abad',
    d: 'M 236 391 L 293 379 L 342 391 L 374 355 L 358 306 L 318 270 L 277 233 L 236 270 L 196 318 L 180 367 L 196 404 Z',
    label: { x: 273, y: 338 },
  },
  {
    id: 'naryn',
    d: 'M 374 355 L 439 343 L 504 367 L 561 355 L 642 330 L 682 294 L 666 233 L 601 184 L 520 172 L 439 209 L 399 270 L 358 306 Z',
    label: { x: 510, y: 285 },
  },
  {
    id: 'talas',
    d: 'M 155 172 L 212 209 L 277 233 L 318 270 L 277 209 L 236 148 L 180 111 L 131 148 L 115 209 Z',
    label: { x: 211, y: 193 },
  },
  {
    id: 'chuy',
    d: 'M 277 233 L 318 270 L 358 306 L 399 270 L 439 209 L 480 172 L 520 135 L 480 87 L 423 62 L 358 74 L 293 111 L 236 148 Z',
    label: { x: 374, y: 178 },
  },
  {
    id: 'issyk-kul',
    d: 'M 439 209 L 520 172 L 601 184 L 666 233 L 747 209 L 845 184 L 926 148 L 942 111 L 885 87 L 804 74 L 723 87 L 642 111 L 561 135 L 520 135 L 480 172 Z',
    label: { x: 710, y: 158 },
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

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-luxury rounded-3xl p-6 md:p-10 shadow-luxury"
        >
          <svg viewBox="0 0 1000 570" className="w-full h-auto">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
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
                    fill={isActive ? oblast.color : 'rgba(255,255,255,0.09)'}
                    fillOpacity={isActive ? 0.45 : 1}
                    stroke={isActive ? oblast.color : 'rgba(255,255,255,0.22)'}
                    strokeWidth={isActive ? 2.5 : 1.2}
                    strokeLinejoin="round"
                    filter={isActive ? 'url(#glow)' : 'url(#softShadow)'}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHovered(region.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(selected === region.id ? null : region.id)}
                    animate={{ opacity: isOtherActive ? 0.35 : 1 }}
                    whileHover={{ fillOpacity: 0.25 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />

                  <motion.text
                    x={region.label.x}
                    y={region.label.y}
                    textAnchor="middle"
                    fill={isActive ? oblast.color : 'rgba(255,255,255,0.8)'}
                    style={{
                      fontSize: '11px',
                      fontWeight: isActive ? 700 : 500,
                      pointerEvents: 'none',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.04em',
                    }}
                    animate={{ opacity: isOtherActive ? 0.4 : 1 }}
                  >
                    {oblast.name.replace(' область', '')}
                  </motion.text>

                  <motion.circle
                    cx={region.label.x}
                    cy={region.label.y + 10}
                    r={isActive ? 3.5 : 2}
                    fill={isActive ? oblast.color : 'rgba(255,255,255,0.45)'}
                    animate={{ opacity: isOtherActive ? 0.3 : 1 }}
                  />
                </g>
              )
            })}
          </svg>
        </motion.div>

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
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 mb-3">Районы</h4>
                <ul className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                  {regionDistricts.map((d) => (
                    <li key={d.id}>
                      <a
                        href={`/district/${d.id}`}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors py-1"
                      >
                        <span>{d.icon}</span>
                        {d.name}
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
    </section>
  )
}
