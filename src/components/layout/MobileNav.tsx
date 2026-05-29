import { AnimatePresence, motion } from 'framer-motion'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[min(320px,85vw)] glass border-l border-white/10 p-8 flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-display font-bold gradient-text text-xl">Меню</span>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-xl"
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="text-lg text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-auto text-xs text-slate-500">© 2026 Районы Кыргызстана</p>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
