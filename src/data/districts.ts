import type { District, SiteFacts } from '../types'

// ============================================================
// ФОТО РАЙОНОВ — вставляй свои ссылки вместо заглушек
// Формат: НОМЕР: 'ТВОЯ_ССЫЛКА', // Район — Область
// ============================================================
const p = (seed: number): string => {
  const photos: Record<number, string> = {

    // ── ЧУЙСКАЯ ОБЛАСТЬ ─────────────────────────────────────
    1:  'https://live.staticflickr.com/65535/50604921391_81f2e1b2df.jpg',
    2:  'https://vesti.kg/media/k2/items/cache/f50c81f5252503cc2675a57665d7ec9a_Generic.jpg',
    3:  'https://upload.wikimedia.org/wikipedia/commons/b/be/Kichi-Kemin_valley.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original',
    4:  'https://upload.wikimedia.org/wikipedia/commons/f/f3/Ak-Suu_at_Jardy-Suu.jpg',
    5:  'https://polarsteps.s3.amazonaws.com/u_361257/17c9656f-5e8e-44f5-87d9-a4ba0dbcfe78_8FB5C619-DCA9-4231-90B1-BCAC5868C6DE.jpg',
    6:  'https://eltr.kg/wp-content/uploads/2024/01/sokuluk.jpg',
    7:  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/74/dc/d0/burana-tower-it-is-a.jpg?w=500&h=500&s=1',
    8:  'https://sxodim.com/uploads/posts/2022/11/07/optimized/2c52ca3df490dd4e3b6cedf34afc02f0_1400x790-q-85.jpg',

    // ── ОШСКАЯ ОБЛАСТЬ ──────────────────────────────────────
    10: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?utm_source=chatgpt.com',
    11: 'https://cdn-1.aki.kg/st_gallery/63/909963.72795c7b0bc6b7c2b831acdb6df56317.jpg',
    12: 'https://chon-alai.gov.kg/wp-content/uploads/2025/07/0_10ee9c_b44ec43c_orig-1024x683-1.jpg',
    13: 'https://eltr.kg/wp-content/uploads/2024/12/kara-kuldzha-850x560.jpg',
    14: 'https://cdn-1.aki.kg/st_gallery/93/1181993.c314e2fc776f0c18c679ec3ba78fc7e4.jpg',
    15: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Nooqat_from_the_north.jpg/330px-Nooqat_from_the_north.jpg',
    16: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSZwJVrY5PoVJ3mIaq3YC0u8LDhdv0ALEQw&s',

    // ── ЖАЛАЛ-АБАДСКАЯ ОБЛАСТЬ ──────────────────────────────
    20: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Road_in_southern_Aksy_district.jpg',
    21: 'https://eltr.kg/wp-content/uploads/2024/10/ala-bukajpeg.jpeg',
    22: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?utm_source=chatgpt.com',
    23: 'https://mykgstan.com/uploads/images/00/00/14/2015/03/04/c26f9b.jpg',
    24: 'https://static.tildacdn.com/tild6462-3137-4137-b066-383964393837/photo.jpg',
    25: 'https://static.tildacdn.com/tild3634-3862-4737-a137-316238353036/photo.jpg',
    26: 'https://cdn-1.aki.kg/127/.storage/limon2/images/september2/bcbf378321656a3ebae1a2e4d024aa50.jpg',
    27: 'https://ru.kabar.kg/media/images/Toktogul-from-above-1024x682.max-1920x1080.format-webp.webp',

    // ── ИССЫК-КУЛЬСКАЯ ОБЛАСТЬ ──────────────────────────────
    30: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?utm_source=chatgpt.com',
    31: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Bringing_the_sheep_home%2C_on_the_southern_shore_of_Issyk-Kul_%283968109583%29.jpg',
    32: 'https://nomadsland.travel/sites/default/files/media/image/_mg_6049.jpg',
    33: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Kirghizistant_2018_-_Borne_marquant_la_limite_du_district_de_Tong.jpg',
    34: 'https://live.staticflickr.com/65535/49469330702_75fef501a8.jpg',

    // ── НАРЫНСКАЯ ОБЛАСТЬ ───────────────────────────────────
    40: 'https://cdn-1.aki.kg/st_runews/0/1393870.1.1499746755.jpg',
    41: 'https://cdn-1.aki.kg/cdn-st-0/qcz/3/1607026.79ac55b86275b92df6dd15b03856334b.jpg',
    42: 'https://zhumgal.gov.kg/wp-content/uploads/2024/03/chaek.jpeg',
    43: 'https://storage.ghost.io/c/c3/a6/c3a66635-73fd-4349-a382-8bf5c41013f8/content/images/2023/12/15-1.png',
    44: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Fhx-f84ZgOaKfvreNaTJO-XsaV0pZ4dShQ&s',

    // ── ТАЛАССКАЯ ОБЛАСТЬ ───────────────────────────────────
    50: 'https://data.kaktus.media/image/big/2025-06-02_11-22-53_398740.jpg',
    51: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?utm_source=chatgpt.com',
    52: 'https://storage.ghost.io/c/c3/a6/c3a66635-73fd-4349-a382-8bf5c41013f8/content/images/2025/05/photo_5271996730512110600_y-2.jpg',
    53: 'https://static.tildacdn.com/tild3336-3264-4831-b639-353837393466/photo.jpg',

    // ── БАТКЕНСКАЯ ОБЛАСТЬ ──────────────────────────────────
    60: 'https://images.unsplash.com/photo-1448375240586-882707db888b?utm_source=chatgpt.com',
    61: 'https://cdn-1.aki.kg/cdn-st-0/qgF/E/3130419.a4db9615d6da096816117ae7229558df.jpg',
    62: 'https://map.kg/uploads/posts/2024-02/leilek-25.webp',
  }

  const url = photos[seed]
  if (!url || url === 'ВСТАВЬ_ССЫЛКУ') {
    return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
  }
  return url
}

const mk = (
  partial: Omit<District, 'gallery' | 'timeline' | 'stats'> & {
    gallery?: string[]
    timeline?: District['timeline']
    stats?: District['stats']
  },
  seed: number,
): District => ({
  ...partial,
  gallery: partial.gallery ?? [p(seed), p(seed + 1), p(seed + 2), p(seed + 3)],
  timeline: partial.timeline ?? [
    { year: '1926', event: 'Район образован в составе Киргизской АССР' },
    { year: '1991', event: 'Входит в состав независимого Кыргызстана' },
    { year: '2010', event: 'Административная реформа айыл окмоту' },
    { year: '2022', event: 'Обновление данных переписи населения' },
  ],
  stats: partial.stats ?? [
    { label: 'Население', value: partial.population.toLocaleString('ru-RU'), unit: 'чел.' },
    { label: 'Площадь', value: partial.area.toLocaleString('ru-RU'), unit: 'км²' },
    { label: 'Центр', value: partial.center },
    { label: 'Плотность', value: Math.round(partial.population / partial.area).toString(), unit: 'чел/км²' },
  ],
})

export const districts: District[] = [
  // Чуйская область (8)
  mk({ id: 'alamudun', name: 'Аламудунский', nameKy: 'Аламүдүн', oblastId: 'chuy', population: 165_043, area: 1_950, image: p(1), fact: 'Административный центр — город Кара-Балта, крупный промышленный узел.', icon: '🏭', center: 'Кара-Балта', history: 'Район сформирован вокруг промышленных и сельскохозяйственных центров Чуйской долины.', geography: 'Расположен на севере Чуйской долины, включает предгорья Киргизского хребта.', economy: 'Сахарный завод, переработка сельхозпродукции, животноводство.', attractions: ['Кара-Балта', 'Горные источники', 'Исторические памятники'] }, 1),
  mk({ id: 'jayyl', name: 'Жайылский', nameKy: 'Жайыл', oblastId: 'chuy', population: 90_348, area: 3_435, image: p(2), fact: 'Один из крупнейших по площади районов Чуйской области.', icon: '🌾', center: 'Кара-Балта (район)', history: 'Назван в честь реки Жайыл (Чу). Традиционные земледельческие угодья.', geography: 'Западная часть Чуйской долины, степные и полупустынные ландшафты.', economy: 'Зерновое хозяйство, скотоводство, солодовенное производство.', attractions: ['Долина реки Чу', 'Степные пейзажи'] }, 2),
  mk({ id: 'kemin', name: 'Кеминский', nameKy: 'Кемин', oblastId: 'chuy', population: 50_839, area: 2_050, image: p(3), fact: 'В районе находится живописное ущелье Кекемерен.', icon: '⛰️', center: 'Кемин', history: 'Ворота в Нарынскую область через перевалы Тянь-Шаня.', geography: 'Восточная Чуйская долина, переход к горным районам.', economy: 'Животноводство, горное земледелие.', attractions: ['Кекемерен', 'Горные перевалы'] }, 3),
  mk({ id: 'moskovsky', name: 'Московский', nameKy: 'Москва', oblastId: 'chuy', population: 35_241, area: 1_054, image: p(4), fact: 'Самый компактный район области с развитым садоводством.', icon: '🍎', center: 'Беловодское', history: 'Образован в советский период, назван в честь столицы СССР.', geography: 'Северо-запад Чуйской долины.', economy: 'Сады, тепличное хозяйство, переработка фруктов.', attractions: ['Фруктовые сады', 'Беловодское'] }, 4),
  mk({ id: 'panfilov', name: 'Панфиловский', nameKy: 'Панфилов', oblastId: 'chuy', population: 38_016, area: 2_050, image: p(5), fact: 'Назван в честь героя Великой Отечественной войны генерала Панфилова.', icon: '🎖️', center: 'Каинды', history: 'Память о 316-й стрелковой дивизии.', geography: 'Северные склоны Киргизского хребта.', economy: 'Животноводство, лесные ресурсы.', attractions: ['Каинды', 'Горные луга'] }, 5),
  mk({ id: 'sokuluk', name: 'Сокулукский', nameKy: 'Сокулук', oblastId: 'chuy', population: 156_437, area: 1_843, image: p(6), fact: 'Один из самых населённых районов страны — близость к Бишкеку.', icon: '🏘️', center: 'Сокулук', history: 'Быстрый рост населения с развитием столичного региона.', geography: 'Западный пригород Бишкека.', economy: 'Строительство, торговля, сельское хозяйство.', attractions: ['Сокулук', 'Пригородные зоны отдыха'] }, 6),
  mk({ id: 'chuy', name: 'Чуйский', nameKy: 'Чүй', oblastId: 'chuy', population: 47_046, area: 2_031, image: p(7), fact: 'Исторический центр Чуйской долины — Токмок.', icon: '🏛️', center: 'Токмок', history: 'Древний город Баласагун (Бурана) находился на территории района.', geography: 'Центральная Чуйская долина.', economy: 'Агропромышленность, туризм к Буране.', attractions: ['Минарет Бурана', 'Токмок', 'Руины Баласагуна'] }, 7),
  mk({ id: 'ysyk-ata', name: 'Ысык-Атинский', nameKy: 'Ысык-Ата', oblastId: 'chuy', population: 72_866, area: 2_415, image: p(8), fact: 'Термальные источники Ак-Суу — популярное место отдыха.', icon: '♨️', center: 'Кант', history: 'Кант — крупный сахарный и промышленный центр.', geography: 'Восточная часть долины, предгорья к Иссык-Кулю.', economy: 'Сахарная промышленность, термальный туризм.', attractions: ['Кант', 'Ак-Суу термальные источники'] }, 8),

  // Ошская область (7)
  mk({ id: 'alay', name: 'Алайский', nameKy: 'Алай', oblastId: 'osh', population: 72_170, area: 6_821, image: p(10), fact: 'Высокогорный район с перевалом Алай — воротами в Памир.', icon: '🦅', center: 'Гульча', history: 'Кочевые традиции алайских кыргызов.', geography: 'Алайский хребет, высоты до 4500 м.', economy: 'Якотоводство, горное животноводство.', attractions: ['Гульча', 'Алайская долина', 'Перевал Алай'] }, 10),
  mk({ id: 'aravan', name: 'Араванский', nameKy: 'Араван', oblastId: 'osh', population: 106_134, area: 1_340, image: p(11), fact: 'Плотность населения среди самых высоких в стране.', icon: '🌿', center: 'Араван', history: 'Плодородная зона Ферганской долины.', geography: 'Северо-запад Ошской области, орошаемые земли.', economy: 'Хлопок, фрукты, овощеводство.', attractions: ['Араван', 'Базары юга'] }, 11),
  mk({ id: 'chong-alay', name: 'Чон-Алайский', nameKy: 'Чоң Алай', oblastId: 'osh', population: 25_039, area: 4_857, image: p(12), fact: 'Самый высокогорный район Ошской области — «крыша» Памира.', icon: '🏔️', center: 'Дароот-Коргон', history: 'Уникальная памирская культура и язык.', geography: 'Памиро-Алай, высоты свыше 3500 м.', economy: 'Кочевое скотоводство, туризм.', attractions: ['Пик Ленина', 'Дароот-Коргон'], stats: [{ label: 'Высота', value: '3500+', unit: 'м' }, { label: 'Население', value: '25 039', unit: 'чел.' }, { label: 'Площадь', value: '4 857', unit: 'км²' }, { label: 'Центр', value: 'Дароот-Коргон' }] }, 12),
  mk({ id: 'kara-kulja', name: 'Кара-Кульжинский', nameKy: 'Кара-Кулжа', oblastId: 'osh', population: 87_691, area: 5_813, image: p(13), fact: 'Горный район на границе с Таджикистаном.', icon: '🌄', center: 'Кара-Кульжа', history: 'Перекрёсток культур южного Кыргызстана.', geography: 'Алайско-Туркестанский хребет.', economy: 'Животноводство, лесопромысел.', attractions: ['Кара-Кульжа', 'Горные ущелья'] }, 13),
  mk({ id: 'kara-suu', name: 'Кара-Сууйский', nameKy: 'Кара-Суу', oblastId: 'osh', population: 348_645, area: 3_616, image: p(14), fact: 'Самый населённый район Кыргызстана!', icon: '👥', center: 'Кара-Суу', history: 'Динамичный рост благодаря близости к Ошу.', geography: 'Центральная Ферганская долина.', economy: 'Торговля, текстиль, сельское хозяйство.', attractions: ['Кара-Суу базар', 'Мечети и медресе'] }, 14),
  mk({ id: 'nookat', name: 'Ноокатский', nameKy: 'Ноокат', oblastId: 'osh', population: 236_455, area: 3_179, image: p(15), fact: 'Второй по населению район страны.', icon: '🕌', center: 'Ноокат', history: 'Древний оазис Ферганской долины.', geography: 'Юго-запад Ошской области.', economy: 'Рис, хлопок, садоводство.', attractions: ['Ноокат', 'Исторические мазары'] }, 15),
  mk({ id: 'uzgen', name: 'Өзгөнский', nameKy: 'Өзгөн', oblastId: 'osh', population: 228_114, area: 3_308, image: p(16), fact: 'Минарет Узгена — памятник XI века, объект ЮНЕСКО.', icon: '🏺', center: 'Өзгөн', history: 'Бывшая столица Караханидского государства.', geography: 'Долина реки Кара-Дарья.', economy: 'Рисоводство, ремёсла, туризм.', attractions: ['Минарет Узгена', 'Караван-сарай', 'Базар'] }, 16),

  // Жалал-Абадская (8)
  mk({ id: 'aksy', name: 'Аксыйский', nameKy: 'Аксы', oblastId: 'jalal-abad', population: 106_040, area: 4_578, image: p(20), fact: 'Родина народного акына Токтогула Сатылганова.', icon: '🎵', center: 'Кербен', history: 'Культурный центр южного Кыргызстана.', geography: 'Предгорья Ат-Башинского хребта.', economy: 'Табак, фрукты, животноводство.', attractions: ['Кербен', 'Музей Токтогула'] }, 20),
  mk({ id: 'ala-buka', name: 'Ала-Букинский', nameKy: 'Ала-Бука', oblastId: 'jalal-abad', population: 81_488, area: 2_976, image: p(21), fact: 'Граничит с Таласской и Ошской областями.', icon: '🗺️', center: 'Ала-Бука', history: 'Перекрёсток торговых путей.', geography: 'Горная долина на западе области.', economy: 'Скотоводство, ореховые леса.', attractions: ['Ала-Бука', 'Горные пейзажи'] }, 21),
  mk({ id: 'bazar-korgon', name: 'Базар-Коргонский', nameKy: 'Базар-Коргон', oblastId: 'jalal-abad', population: 132_051, area: 1_965, image: p(22), fact: 'Один из густонаселённых районов Ферганской долины.', icon: '🏪', center: 'Базар-Коргон', history: 'Крупный торговый центр с древних времён.', geography: 'Северная Жалал-Абадская область.', economy: 'Хлопок, рис, переработка.', attractions: ['Базар-Коргон', 'Восточные базары'] }, 22),
  mk({ id: 'chatkal', name: 'Чаткальский', nameKy: 'Чаткал', oblastId: 'jalal-abad', population: 21_154, area: 4_608, image: p(23), fact: 'Один из самых малонаселённых районов — дикая природа Чаткала.', icon: '🌲', center: 'Каныш-Кыя', history: 'Заповедная зона и горнолыжный курорт.', geography: 'Хребет Чаткал, высотные луга.', economy: 'Туризм, охота, животноводство.', attractions: ['Чаткал', 'Горнолыжные трассы', 'Заповедник'] }, 23),
  mk({ id: 'nooken', name: 'Ноокенский', nameKy: 'Ноокен', oblastId: 'jalal-abad', population: 109_019, area: 2_336, image: p(24), fact: 'Высокая плотность населения в оазисной зоне.', icon: '💧', center: 'Массы', history: 'Орошение из горных рек.', geography: 'Центральная часть области.', economy: 'Рис, кукуруза, сады.', attractions: ['Массы', 'Оазисные пейзажи'] }, 24),
  mk({ id: 'suzak', name: 'Сузакский', nameKy: 'Сузак', oblastId: 'jalal-abad', population: 73_019, area: 1_540, image: p(25), fact: 'Граничит с городом Жалал-Абад.', icon: '🌻', center: 'Сузак', history: 'Сельскохозяйственный пояс областного центра.', geography: 'Равнинная зона на востоке.', economy: 'Хлопок, подсолнечник.', attractions: ['Сузак', 'Степные просторы'] }, 25),
  mk({ id: 'toguz-toro', name: 'Тогуз-Тороузский', nameKy: 'Тогуз-Торо', oblastId: 'jalal-abad', population: 21_417, area: 3_816, image: p(26), fact: 'Горный район с труднодоступными сёлами.', icon: '🛤️', center: 'Казарман', history: 'Традиционные кочевые маршруты.', geography: 'Внутренний Тянь-Шань.', economy: 'Животноводство, дикоросы.', attractions: ['Казарман', 'Горные дороги'] }, 26),
  mk({ id: 'toktogul', name: 'Токтогульский', nameKy: 'Токтогул', oblastId: 'jalal-abad', population: 83_479, area: 7_815, image: p(27), fact: 'Токтогульское водохранилище — крупнейшее в Центральной Азии.', icon: '💡', center: 'Токтогул', history: 'Строительство ГЭС в советский период.', geography: 'Долина реки Нарын.', economy: 'Гидроэнергетика, рыболовство, туризм.', attractions: ['Токтогульское море', 'Плотина ГЭС', 'Могила Токтогула'] }, 27),

  // Иссык-Кульская (5)
  mk({ id: 'ak-suu', name: 'Ак-Сууский', nameKy: 'Ак-Суу', oblastId: 'issyk-kul', population: 74_382, area: 8_655, image: p(30), fact: 'В районе находится курортный город Ак-Суу и Теплоключенка.', icon: '🏖️', center: 'Теплоключенка', history: 'Развитие туризма на восточном берегу озера.', geography: 'Восточный берег Иссык-Куля.', economy: 'Туризм, яблочные сады, рыболовство.', attractions: ['Теплоключенка', 'Восточный берег'] }, 30),
  mk({ id: 'issyk-kul', name: 'Иссык-Кульский', nameKy: 'Ысык-Көл', oblastId: 'issyk-kul', population: 85_002, area: 3_415, image: p(31), fact: 'Северный берег озера — главная туристическая зона.', icon: '🌊', center: 'Чолпон-Ата', history: 'Древние петроглифы Чолпон-Аты.', geography: 'Северный берег Иссык-Куля.', economy: 'Туризм, конные курорты, рыба.', attractions: ['Чолпон-Ата', 'Петроглифы', 'Григорьевское ущелье'] }, 31),
  mk({ id: 'jeti-oguz', name: 'Джеты-Огузский', nameKy: 'Жети-Өгүз', oblastId: 'issyk-kul', population: 52_628, area: 14_042, image: p(32), fact: 'Скала «Семь быков» — символ Иссык-Куля.', icon: '🐂', center: 'Джеты-Огуз', history: 'Легендарные красные скалы.', geography: 'Юго-восточный берег озера.', economy: 'Туризм, курорты, пчеловодство.', attractions: ['Скала Жети-Огуз', 'Водопад Девичьи косы', 'Курорты'] }, 32),
  mk({ id: 'tong', name: 'Тонский', nameKy: 'Тон', oblastId: 'issyk-kul', population: 50_104, area: 8_200, image: p(33), fact: 'Южный берег — менее освоенный, но невероятно красивый.', icon: '🏕️', center: 'Боконбаево', history: 'Кочевые традиции бортиков.', geography: 'Южный берег Иссык-Куля.', economy: 'Животноводство, экотуризм.', attractions: ['Боконбаево', 'Южный берег', 'Горячие источники'] }, 33),
  mk({ id: 'tyup', name: 'Тюпский', nameKy: 'Түп', oblastId: 'issyk-kul', population: 58_341, area: 3_178, image: p(34), fact: 'Известен яблочными садами и виноградниками.', icon: '🍇', center: 'Тюп', history: 'Центр садоводства на востоке.', geography: 'Восточная часть северного берега.', economy: 'Сады, виноделие, туризм.', attractions: ['Тюп', 'Яблочные сады'] }, 34),

  // Нарынская (5)
  mk({ id: 'ak-talaa', name: 'Ак-Талинский', nameKy: 'Ак-Талаа', oblastId: 'naryn', population: 28_942, area: 7_976, image: p(40), fact: 'Высокогорный район с суровым климатом.', icon: '❄️', center: 'Баетово', history: 'Кочевые зимовки и джайлоо.', geography: 'Внутренний Тянь-Шань, высоты 2500+ м.', economy: 'Як и овцеводство.', attractions: ['Баетово', 'Альпийские луга'] }, 40),
  mk({ id: 'at-bashy', name: 'Ат-Башинский', nameKy: 'Ат-Башы', oblastId: 'naryn', population: 52_300, area: 15_120, image: p(41), fact: 'Один из крупнейших по площади районов страны.', icon: '🐎', center: 'Ат-Башы', history: 'Коневодческие традиции в названии.', geography: 'Плоскогорье и высокогорье.', economy: 'Лошадиное разведение, кочевье.', attractions: ['Ат-Башы', 'Бескрайние джайлоо'] }, 41),
  mk({ id: 'jumgal', name: 'Джумгальский', nameKy: 'Жумгал', oblastId: 'naryn', population: 32_418, area: 8_500, image: p(42), fact: 'Долина реки Джумгал — летние пастбища.', icon: '🌿', center: 'Джумгал', history: 'Традиционный кочевой район.', geography: 'Высокогорная долина.', economy: 'Скотоводство.', attractions: ['Джумгал', 'Кочевые юрты'] }, 42),
  mk({ id: 'kochkor', name: 'Кочкорский', nameKy: 'Кочкор', oblastId: 'naryn', population: 58_000, area: 6_200, image: p(43), fact: 'Ворота к озеру Сон-Куль.', icon: '🛶', center: 'Кочкор', history: 'Туристический хаб Нарынской области.', geography: 'Переход от долины к Сон-Кулю.', economy: 'Туризм, войлок и ремёсла.', attractions: ['Кочкор', 'Сон-Куль', 'Войлочные изделия'] }, 43),
  mk({ id: 'naryn', name: 'Нарынский', nameKy: 'Нарын', oblastId: 'naryn', population: 95_000, area: 10_500, image: p(44), fact: 'Административный центр самой высокогорной области.', icon: '🏔️', center: 'Нарын', history: 'Важный пункт на Тянь-Шаньской трассе.', geography: 'Высокогорная долина реки Нарын.', economy: 'Транзит, животноводство, туризм.', attractions: ['Нарын', 'Таш-Рабат', 'Сон-Куль'] }, 44),

  // Таласская (4)
  mk({ id: 'bakay-ata', name: 'Бакай-Атинский', nameKy: 'Бакай-Ата', oblastId: 'talas', population: 42_000, area: 2_800, image: p(50), fact: 'Западная часть Таласской долины.', icon: '🌾', center: 'Бакай-Ата', history: 'Сельскохозяйственный район.', geography: 'Таласская долина.', economy: 'Зерно, скот.', attractions: ['Бакай-Ата'] }, 50),
  mk({ id: 'kara-buura', name: 'Кара-Бууринский', nameKy: 'Кара-Буура', oblastId: 'talas', population: 38_000, area: 3_200, image: p(51), fact: 'Назван в честь реки Кара-Буура.', icon: '💧', center: 'Кара-Буура', history: 'Орошаемое земледелие.', geography: 'Северная Таласская долина.', economy: 'Рис, кукуруза.', attractions: ['Кара-Буура'] }, 51),
  mk({ id: 'manas', name: 'Манасский', nameKy: 'Манас', oblastId: 'talas', population: 32_000, area: 2_500, image: p(52), fact: 'Родина эпоса «Манас» — комплекс Манас-Ордо.', icon: '📜', center: 'Манас', history: 'Культурное сердце кыргызского эпоса.', geography: 'Таласская долина.', economy: 'Туризм, животноводство.', attractions: ['Манас-Ордо', 'Музей Манаса'] }, 52),
  mk({ id: 'talas', name: 'Таласский', nameKy: 'Талас', oblastId: 'talas', population: 62_000, area: 4_200, image: p(53), fact: 'Областной центр — город Талас.', icon: '🏙️', center: 'Талас', history: 'Древний город на Великом шёлковом пути.', geography: 'Центральная Таласская долина.', economy: 'Агропром, торговля.', attractions: ['Талас', 'Памятник Манаса'] }, 53),

  // Баткенская (3)
  mk({ id: 'batken', name: 'Баткенский', nameKy: 'Баткен', oblastId: 'batken', population: 125_000, area: 4_800, image: p(60), fact: 'Столица молодой Баткенской области.', icon: '🍑', center: 'Баткен', history: 'Область выделена в 1999 году.', geography: 'Баткенская долина.', economy: 'Абрикосы, табак, торговля.', attractions: ['Баткен', 'Абрикосовые сады'] }, 60),
  mk({ id: 'kadamjay', name: 'Кадамжайский', nameKy: 'Кадамжай', oblastId: 'batken', population: 95_000, area: 6_200, image: p(61), fact: 'Ртутное месторождение Хайдаркен — уникальный объект.', icon: '⛏️', center: 'Кадамжай', history: 'Промышленное освоение с XIX века.', geography: 'Юго-запад области.', economy: 'Добыча ртути, сельское хозяйство.', attractions: ['Кадамжай', 'Хайдаркен'] }, 61),
  mk({ id: 'leylek', name: 'Лейлекский', nameKy: 'Лейлек', oblastId: 'batken', population: 88_000, area: 4_100, image: p(62), fact: 'Эксклавы и анклавы — уникальная пограничная география.', icon: '🔀', center: 'Исфана', history: 'Сложная граница с Таджикистаном и Узбекистаном.', geography: 'Южная оконечность Кыргызстана.', economy: 'Торговля, садоводство.', attractions: ['Исфана', 'Пограничные аулы'] }, 62),
]

export const districtMap: Record<string, District> = Object.fromEntries(
  districts.map((d) => [d.id, d]),
)

export const siteFacts: SiteFacts = {
  totalDistricts: districts.length,
  totalPopulation: districts.reduce((s, d) => s + d.population, 0),
  largestDistrict: (() => {
    const d = [...districts].sort((a, b) => b.area - a.area)[0]
    return { name: d.name, population: d.area }
  })(),
  smallestDistrict: (() => {
    const d = [...districts].sort((a, b) => a.area - b.area)[0]
    return { name: d.name, population: d.area }
  })(),
  mostPopulated: (() => {
    const d = [...districts].sort((a, b) => b.population - a.population)[0]
    return { name: d.name, population: d.population }
  })(),
  highestAltitude: { name: 'Чон-Алайский', altitude: 4500 },
}