import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Светлая тема' : 'Тёмная тема'}
      className="glass w-10 h-10 rounded-full flex items-center justify-center text-lg"
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  )
}
