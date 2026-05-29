# Районы Кыргызстана

Премиальный интерактивный веб-сайт о всех 40 районах 7 областей Кыргызстана.

## Технологии

- **React 19** + **Vite 8**
- **Tailwind CSS 4**
- **Framer Motion** — анимации и переходы
- **React Router** — маршрутизация
- SEO-friendly разметка (`index.html`, динамические `title`)

## Возможности

- Fullscreen Hero с parallax и частицами
- Интерактивная SVG-карта областей
- Карточки 7 областей с 3D tilt-эффектом
- Сетка всех 40 районов с поиском и фильтрацией
- Детальные страницы районов (история, география, галерея, timeline)
- Секция статистики с анимированными счётчиками
- Masonry-галерея с lightbox
- Dark / Light mode
- **Lenis** smooth scroll, film grain, cinematic page transitions
- Split-text hero animations, magnetic buttons, 3D tilt cards
- Custom cursor with hover states, dual-layer mouse glow
- Luxury glass shadows, Ken Burns hero, scroll-linked parallax
- Auto-hiding header, marquee dividers, Awwwards-grade motion
- Полная адаптивность (mobile / tablet / desktop)

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173)

## Сборка

```bash
npm run build
npm run preview
```

## Структура проекта

```
src/
├── components/
│   ├── layout/      # Header, Footer, Cursor, Loading...
│   ├── sections/    # Hero, Map, Gallery, Facts...
│   ├── district/    # Cards, Filters
│   └── ui/          # Button, GlassCard, TiltCard...
├── context/         # Theme (dark/light)
├── data/            # oblasts.ts, districts.ts, gallery.ts
├── hooks/
├── pages/           # HomePage, DistrictDetailPage
├── types/
└── utils/           # filterDistricts
public/
└── data/            # mock-api.json
```

## Данные

Mock-данные основаны на официальной административной структуре Кыргызстана (40 сельских районов в 7 областях). Население и площади — приближённые значения по переписи и открытым источникам.

## Лицензия

MIT — учебный / демонстрационный проект.
