import type { Oblast } from '../types'

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`

export const oblasts: Oblast[] = [
  {
    id: 'chuy',
    name: 'Чуйская область',
    nameKy: 'Чүй облусу',
    capital: 'Токмок',
    description:
      'Сердце Северного Кыргызстана — долины, предгорья Тянь-Шаня и ворота к озеру Иссык-Куль. Здесь сосредоточена значительная часть экономики страны.',
    districtCount: 8,
    population: 985_430,
    area: 19_895,
    image: 'https://cdn-1.aki.kg/st_limon/6/1410526078_0.jpg',
    facts: [
      'Включает пригороды столицы Бишкека',
      'Известна сахарной свёклой и зерновым хозяйством',
      'Через область проходит Великий шёлковый путь',
    ],
    color: '#10b981',
  },
  {
    id: 'osh',
    name: 'Ошская область',
    nameKy: 'Ош облусу',
    capital: 'Ош',
    description:
      'Южные горы, плодородные долины Ферганской впадины и богатейшее культурное наследие. Край винограда, орехов и древних караванных дорог.',
    districtCount: 7,
    population: 1_414_670,
    area: 28_934,
    image: 'https://central-asia.live/_next/image?url=https%3A%2F%2Fcentral-asia.live%2Fuploads%2Fosh-city-morning.jpg&w=3840&q=75',
    facts: [
      'Самая населённая область страны',
      'Гора Сулейман-Тоо — объект ЮНЕСКО',
      'Уникальный южный микроклимат',
    ],
    color: '#06b6d4',
  },
  {
    id: 'jalal-abad',
    name: 'Жалал-Абадская область',
    nameKy: 'Жалал-Абад облусу',
    capital: 'Жалал-Абад',
    description:
      'От полузасушливых предгорий до альпийских лугов Чаткала — область контрастов, ореховых лесов и горных курортов Арсланбоб.',
    districtCount: 8,
    population: 1_282_253,
    area: 32_418,
    image: 'https://eltr.kg/wp-content/uploads/2023/06/zhalal-abad.png',
    facts: [
      'Лес Арсланбоб — крупнейший ореховый массив в мире',
      'ГЭС на реке Нарын',
      'Богатые минеральные источники',
    ],
    color: '#8b5cf6',
  },
  {
    id: 'issyk-kul',
    name: 'Иссык-Кульская область',
    nameKy: 'Ысык-Көл облусу',
    capital: 'Каракол',
    description:
      'Жемчужина Тянь-Шаня — сверкающее озеро, заснеженные хребты и кочевые традиции. Туризм, рыболовство и горнолыжный спорт.',
    districtCount: 5,
    population: 505_901,
    area: 43_735,
    image: 'https://avatars.mds.yandex.net/i?id=fde89587136bb4ad047f884ba13050f5c59b31ca-12471273-images-thumbs&n=13',
    facts: [
      'Озеро Иссык-Куль — второе по величине горное озеро в мире',
      'Никогда не замерзает полностью',
      'Центр этнотуризма и яблочных садов',
    ],
    color: '#0ea5e9',
  },
  {
    id: 'naryn',
    name: 'Нарынская область',
    nameKy: 'Нарын облусу',
    capital: 'Нарын',
    description:
      'Высокогорный край кочевников — бескрайние джайлоо, ледники и пастбища на высоте более 2000 метров. Сердце кыргызской идентичности.',
    districtCount: 5,
    population: 294_311,
    area: 44_160,
    image: 'https://sputnik.kg/img/07e4/08/1c/1049450913_0:0:2667:1500_1920x0_80_0_0_7769342c5d2673c3b90f4b8562fcee9a.jpg',
    facts: [
      'Самая высокогорная и малонаселённая область',
      'Исток реки Нарын и Сырдарьи',
      'Традиционное юрточное хозяйство',
    ],
    color: '#f59e0b',
  },
  {
    id: 'talas',
    name: 'Таласская область',
    nameKy: 'Талас облусу',
    capital: 'Талас',
    description:
      'Западные предгорья Тянь-Шаня, долина реки Талас — колыбель кыргызского эпоса «Манас» и зелёных пастбищ.',
    districtCount: 4,
    population: 274_029,
    area: 13_406,
    image: 'https://central-asia.live/_next/image?url=https%3A%2F%2Fcentral-asia.live%2Fuploads%2Fmanas-kumbozu.jpg&w=3840&q=75',
    facts: [
      'Родина эпоса «Манас»',
      'Компактная по площади область',
      'Развитое животноводство',
    ],
    color: '#ec4899',
  },
  {
    id: 'batken',
    name: 'Баткенская область',
    nameKy: 'Баткен облусу',
    capital: 'Баткен',
    description:
      'Экзотический юго-запад с уникальными венецианскими холмами, абрикосовыми садами и пограничной культурой трёх государств.',
    districtCount: 3,
    population: 558_652,
    area: 17_048,
    image: 'https://central-asia.live/_next/image?url=https%3A%2F%2Fcentral-asia.live%2Fuploads%2Faygul-tash.jpg&w=3840&q=75',
    facts: [
      'Самая молодая область (с 1999 года)',
      'Знаменитые баткенские абрикосы',
      'Уникальные «венецианские» холмы',
    ],
    color: '#14b8a6',
  },
]

export const oblastMap: Record<string, Oblast> = Object.fromEntries(
  oblasts.map((o) => [o.id, o]),
)
