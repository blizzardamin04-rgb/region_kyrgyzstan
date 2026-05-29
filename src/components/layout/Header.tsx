import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { MobileNav } from './MobileNav'

const links = [
  { href: '#hero', label: 'Главная' },
  { href: '#map', label: 'Карта' },
  { href: '#oblasts', label: 'Области' },
  { href: '#districts', label: 'Районы' },
  { href: '#facts', label: 'Факты' },
  { href: '#gallery', label: 'Галерея' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 60)
    if (v > lastY.current && v > 400) setHidden(true)
    else setHidden(false)
    lastY.current = v
  })

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'glass-luxury py-3 shadow-luxury border-b border-white/5'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group" data-cursor="hover">
            <motion.span
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="text-2xl md:text-3xl filter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              🏔️
            </motion.span>
            <span className="font-display font-bold text-base md:text-lg gradient-text hidden sm:block tracking-tight">
              KG Regions
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 line-reveal group"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              data-cursor="hover"
              className="lg:hidden glass-luxury w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5"
              aria-label="Меню"
            >
              <span className="w-5 h-px bg-white/80 rounded transition-all" />
              <span className="w-5 h-px bg-white/80 rounded" />
              <span className="w-3 h-px bg-emerald-400 rounded self-end mr-3" />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={links} />
    </>
  )
}
