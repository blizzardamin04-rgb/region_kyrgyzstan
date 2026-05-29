import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { galleryItems } from '../../data/gallery'
import { SectionTitle } from '../ui/SectionTitle'

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const active = galleryItems.find((g) => g.id === lightbox)

  const colClass = (aspect: string) => {
    if (aspect === 'tall') return 'row-span-2'
    if (aspect === 'wide') return 'col-span-2'
    return ''
  }

  return (
    <section id="gallery" className="section-padding relative">
      <SectionTitle
        eyebrow="Фотогалерея"
        title="Красота Кыргызстана"
        subtitle="Masonry-сетка с lightbox и плавными анимациями"
      />

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryItems.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ delay: i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            onClick={() => setLightbox(item.id)}
            data-cursor="hover"
            className={`break-inside-avoid w-full mb-4 block relative group overflow-hidden rounded-2xl shadow-luxury hover:shadow-luxury-hover transition-shadow duration-700 ${colClass(item.aspect)}`}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              style={{
                aspectRatio: item.aspect === 'tall' ? '3/4' : item.aspect === 'wide' ? '16/9' : '1',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-left">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.location}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={active.src}
                alt={active.title}
                className="w-full rounded-2xl max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{active.title}</h3>
                <p className="text-slate-400">{active.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white text-2xl w-10 h-10 glass rounded-full"
                aria-label="Закрыть"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
