import { motion } from 'framer-motion'

const items = [
  'Тянь-Шань',
  'Иссык-Куль',
  '40 районов',
  '7 областей',
  'Памир',
  'Нарын',
  'Ош',
  'Баткен',
  'Арсланбоб',
  'Сон-Куль',
]

export function Marquee() {
  const track = [...items, ...items, ...items]

  return (
    <div className="relative py-5 md:py-7 overflow-hidden border-y border-white/[0.04] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050b14] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050b14] to-transparent z-10" />
      <motion.div
        className="flex gap-10 md:gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="text-xs md:text-sm font-medium uppercase tracking-[0.35em] md:tracking-[0.45em] text-white/15 flex items-center gap-10 md:gap-16 shrink-0"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
