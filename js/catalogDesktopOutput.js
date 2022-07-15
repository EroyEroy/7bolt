// левый блок каталога пк версии (сами категории)
const categories = [
  // Авто
  {
    name: "Авто",
    linkId: "link-1",
    img: "img/catalog/car__icon.svg",
    nameImg: "car icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-1",
  },
  // Мотоциклы
  {
    name: "Мотоциклы",
    linkId: "link-2",
    img: "img/catalog/moto__icon.svg",
    nameImg: "moto icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-2",
  },
  // Снегоходы
  {
    name: "Снегоходы",
    linkId: "link-3",
    img: "img/catalog/snowcar__icon.svg",
    nameImg: "snowmobile icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-3",
  },
  // Квадроциклы и мотовездеходы
  {
    name: "Квадроциклы и мотовездеходы",
    linkId: "link-4",
    img: "img/catalog/atv__icon.svg",
    nameImg: "atl icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-4",
  },
  // Скутеры
  {
    name: "Скутеры",
    linkId: "link-5",
    img: "img/catalog/scooter__icon.svg",
    nameImg: "scooter icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-5",
  },
  // Вело
  {
    name: "Вело",
    linkId: "link-6",
    img: "img/catalog/bike__icon.svg",
    nameImg: "bike icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-6",
  },
  // Электротранспорт
  {
    name: "Электротранспорт",
    linkId: "link-7",
    img: "img/catalog/electronic-car__icon.svg",
    nameImg: "electronic-car icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-7",
  },
  // Коммерческий
  {
    name: "Коммерческий",
    linkId: "link-8",
    img: "img/catalog/commercial__icon.svg",
    nameImg: "commercial icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-8",
  },
  // Водный транспорт
  {
    name: "Водный транспорт",
    linkId: "link-9",
    img: "img/catalog/water-car__icon.svg",
    nameImg: "water-car icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-9",
  },
  // Спецтехника
  {
    name: "Спецтехника",
    linkId: "link-10",
    img: "img/catalog/excavator__icon.svg",
    nameImg: "special equipment",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-10",
  },
  // Сельхозтехника
  {
    name: "Сельхозтехника",
    linkId: "link-11",
    img: "img/catalog/mower__icon.svg",
    nameImg: "agricultural machinery icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-11",
  },
  // Электроника
  {
    name: "Электроника",
    linkId: "link-12",
    img: "img/catalog/electronic__icon.svg",
    nameImg: "electronic icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-12",
  },
  // Бытовая техника
  {
    name: "Бытовая техника",
    linkId: "link-13",
    img: "img/catalog/household__icon.svg",
    nameImg: "household icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-13",
  },
  // Электрика
  {
    name: "Электрика",
    linkId: "link-14",
    img: "img/catalog/electrics__icon.svg",
    nameImg: "electrics icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-14",
  },
  // Инструмент
  {
    name: "Инструмент",
    linkId: "link-15",
    img: "img/catalog/instruments__icon.svg",
    nameImg: "instruments icons",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-15",
  },
  // Метизы
  {
    name: "Метизы",
    linkId: "link-16",
    img: "img/catalog/bolt__icon.svg",
    nameImg: "hardware icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-16",
  },
  // РТИ
  {
    name: "РТИ",
    linkId: "link-17",
    img: "img/catalog/RTI__icon.svg",
    nameImg: "rti icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-17",
  },
  // Хобби, спорт и развлечения
  {
    name: "Хобби, спорт и развлечения",
    linkId: "link-18",
    img: "img/catalog/sport__icon.svg",
    nameImg: "sport icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-18",
  },
  // Оборудование
  {
    name: "Оборудование",
    linkId: "link-19",
    img: "img/catalog/equipment__icon.svg",
    nameImg: "equipment icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-19",
  },
  // Робототехника
  {
    name: "Робототехника",
    linkId: "link-20",
    img: "img/catalog/robot__icon.svg",
    nameImg: "robot icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-20",
  },
  // Оптика
  {
    name: "Оптика",
    linkId: "link-21",
    img: "img/catalog/glasses__icon.svg",
    nameImg: "glasses icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-21",
  },
  // Авто мото спорт
  {
    name: "Авто мото спорт",
    linkId: "link-22",
    img: "img/catalog/moto-head__icon.svg",
    nameImg: "motorsport icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-22",
  },
  // Авиация
  {
    name: "Авиация",
    linkId: "link-23",
    img: "img/catalog/helicopter__icon.svg",
    nameImg: "aviation icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-23",
  },
  // Литература и обучение
  {
    name: "Литература и обучение",
    linkId: "link-24",
    img: "img/catalog/books__icon.svg",
    nameImg: "books icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-24",
  },
  // Станки
  {
    name: "Станки",
    linkId: "link-25",
    img: "img/catalog/machine__icon.svg",
    nameImg: "machine icon",
    rightArrowImg: "img/catalog/arrow.svg",
    buttonLink: "mobile-btn-25",
  },
];
// правый блок (внутренности категорий)
const categoriesInner = [
  // Категория авто
  {
    name: "Авто",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-1",
    // подкатегории
    subcategories: [
      // запчасти
      {
        title: "Запчасти",
        subcategory: [
          // Двигатель
          {
            subTitle: "Двигатель",
            href: "#",
            // внутренние ссылки
            // innerLinks: [
            //   {
            //     innerLinkTitle: "Двигатель",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "IGNITION COIL & SPARK PLUG / GLOW PLUG",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "Блок цилиндров",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "Блок цилиндров в сборе",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "Водяная помпа",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "глушитель",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "головка блока цилиндров",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "двигатель в сборе",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "коленвал и цилиндры",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "коллектор",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "комплект прокладок двигателя",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "крепление двигателя",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "крышка грм, задняя пластина",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "масляный насос",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "масляный фильтр",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "патрубки вентиляции",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "радиатор и патрубки",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "распредвал и клапаны, ремень грм",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "трубки вакуумной системы",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "фильтр воздушный",
            //     innerHref: "#",
            //   },
            // ],
          },
          // Трансмиссия
          {
            subTitle: "Трансмиссия",
            href: "#",
            // внутренние ссылки
            // innerLinks: [
            //   {
            //     innerLinkTitle: "Сцепление",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "коробка передач",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "передача карданная",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "мост передний ведущий",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "мост задний",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "блок переключения передач",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "главный тормозной цилиндр",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "задние пружины и аммортизаторы",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle:
            //       "задняя ось, ступица, тормозные диски и барабаны",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "колесные диски, колпаки",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "педаль тормоза",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "передние приводные валы",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle:
            //       "передние пружины и аммортизаторы, стабилизатор",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "передний рычаг, поворотный кулак",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "передняя ось, ступица, тормозные диски",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "рулевая колонка и вал",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "рулевая рейка",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "рулевое колесо",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "стояночный тормоз",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "тормоза задние дисковые - суппорт, колодки",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "тормоза передние дисковые - суппорт, колодки",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "трансмиссия в сборе, гибридный автомобиль",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "трубки тормозной системы, крепление",
            //     innerHref: "#",
            //   },
            // ],
          },
          // Ходовая часть
          {
            subTitle: "Ходовая часть",
            href: "#",
            // внутренние ссылки
            // innerLinks: [
            //   {
            //     innerLinkTitle: "рама",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "подвеска автомобиля",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "колеса и ступицы",
            //     innerHref: "#",
            //   },
            // ],
          },
          // Механизмы управления
          {
            subTitle: "Механизмы управления",
            href: "#",
            // внутренние ссылки
            // innerLinks: [
            //   {
            //     innerLinkTitle: "управление рулевое",
            //     innerHref: "#",
            //   },
            //   {
            //     innerLinkTitle: "тормоза",
            //     innerHref: "#",
            //   },
            // ],
          },
          // Кузов
          {
            subTitle: "Кузов",
            href: "#",
            // innerLinks: [
            // 	{
            // 	  innerLinkTitle: "управление рулевое",
            // 	  innerHref: "#",
            // 	},
            // 	{
            // 	  innerLinkTitle: "тормоза",
            // 	  innerHref: "#",
            // 	},
            //   ],
          },
          // Электрооборудование
          {
            subTitle: "Электрооборудование",
            href: "#",
          },
          // Топливная система
          {
            subTitle: "Топливная система",
            href: "#",
          },
          // Климат контроль
          {
            subTitle: "Климат контроль",
            href: "#",
          },
        ],
      },
      // запчасти б/у
      {
        title: "Запчасти б/у",
        subcategory: [
          {
            subTitle: "Запчасти б/у",
            href: "#",
          },
        ],
      },
      // аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Аккумуляторы, АКБ",
            href: "#",
          },
          {
            subTitle: "Провода для прикуривания",
            href: "#",
          },
          {
            subTitle: "Ареометры электролита",
            href: "#",
          },
          {
            subTitle: "Вилки нагрузочные для АКБ",
            href: "#",
          },
          {
            subTitle: "Клеммы для аккумуляторов",
            href: "#",
          },
          {
            subTitle: "Провода АКБ и перемычки",
            href: "#",
          },
          {
            subTitle: "Смазки для клемм АКБ",
            href: "#",
          },
          {
            subTitle: "Электролит и дистиллированная вода",
            href: "#",
          },
        ],
      },
      // масла и технические жидкости
      {
        title: "Масла и технические жидкости",
        subcategory: [
          {
            subTitle: "Автомобильные моторые масла",
            href: "#",
          },
          {
            subTitle: "Жидкости омывателя",
            href: "#",
          },
          {
            subTitle: "Антифризы",
            href: "#",
          },
          {
            subTitle: "Трансмисионные масла",
            href: "#",
          },
          {
            subTitle: "Промывки и очистители",
            href: "#",
          },
          {
            subTitle: "Тормозные жидкости",
            href: "#",
          },
          {
            subTitle: "Гидравлические жидкости",
            href: "#",
          },
          {
            subTitle: "Жидкость адсорбирующая (adblue)",
            href: "#",
          },
          {
            subTitle: "Электролит, вода дистиллированная",
            href: "#",
          },
          {
            subTitle: "Присадки",
            href: "#",
          },
          {
            subTitle: "Смазки",
            href: "#",
          },
          {
            subTitle: "Герметики",
            href: "#",
          },
        ],
      },
      // расходники и комплектующие
      {
        title: "Расходники и комплектующие",
        subcategory: [
          {
            subTitle: "Фильтры и элементы",
            href: "#",
          },
          {
            subTitle: "Автолампы, свечи, фары, электрика",
            href: "#",
          },
          {
            subTitle: "Щетки стеклоочистителя и ленты",
            href: "#",
          },
          {
            subTitle: "Метизы: крепеж, болты, гайки",
            href: "#",
          },
          {
            subTitle: "Подшипники",
            href: "#",
          },
          {
            subTitle: "Рукава высокого давления (РВД)",
            href: "#",
          },
          {
            subTitle: "Шланги маслобензостойкие (ШМБС)",
            href: "#",
          },
          {
            subTitle: "Пологи, тенты и тросы тентов",
            href: "#",
          },
        ],
      },
      // диски
      {
        title: "Диски",
        subcategory: [
          {
            subTitle: "Диски колесные",
            href: "#",
          },
          {
            subTitle: "Колеса в сборе",
            href: "#",
          },
          {
            subTitle: "Адаптеры колесного диска",
            href: "#",
          },
          {
            subTitle: "Аптечки для ремонта шин, жгуты, заплатки",
            href: "#",
          },
          {
            subTitle: "Вентили, золотники, эмблемы",
            href: "#",
          },
          {
            subTitle: "Гайки, болты колесные",
            href: "#",
          },
          {
            subTitle: "Грузики балансировочные",
            href: "#",
          },
          {
            subTitle: "Колпаки на колеса",
            href: "#",
          },
        ],
      },
      // шины
      {
        title: "Шины",
        subcategory: [
          {
            subTitle: "Автомобильные шины",
            href: "#",
          },
          {
            subTitle: "Аптечки для ремонта шин, жгуты, заплатки",
            href: "#",
          },
          {
            subTitle: "Камеры и ленты ободные",
            href: "#",
          },
          {
            subTitle: "Датчики давления шин",
            href: "#",
          },
          {
            subTitle: "Чернители шин",
            href: "#",
          },
          {
            subTitle: "Пакеты и чехлы для колес",
            href: "#",
          },
        ],
      },
      // аксессуары и тюнинг
      {
        title: "Аксессуары и тюнинг",
        subcategory: [
          {
            subTitle: "Автозвук и навигация",
            href: "#",
          },
          {
            subTitle: "Багажники, органайзеры, крепление багажа",
            href: "#",
          },
          {
            subTitle: "Видеорегистраторы, радар-детекторы и антирадары",
            href: "#",
          },
          {
            subTitle: "Газобаллонное оборудование",
            href: "#",
          },
          {
            subTitle: "Зарядки для телефонов, инверторы, алкотестеры",
            href: "#",
          },
          {
            subTitle: "Коврики салона и чехлы сидений",
            href: "#",
          },
          {
            subTitle: "Колеса рулевые, чехлы и ручки КПП",
            href: "#",
          },
          {
            subTitle: "Кресла, подушки, адаптеры ремней",
            href: "#",
          },
          {
            subTitle: "Литература, каталоги",
            href: "#",
          },
          {
            subTitle: "Сигнализации, блокираторы, сирены",
            href: "#",
          },
          {
            subTitle: "Тюнинг внешний и внутренний",
            href: "#",
          },
          {
            subTitle: "Холодильники автомобильные",
            href: "#",
          },
        ],
      },
      // автокосметика, краски, средства по уходу
      {
        title: "Автокосметика, краски, средства по уходу",
        subcategory: [
          {
            subTitle: "Освежители воздуха",
            href: "#",
          },
          {
            subTitle: "Краски, автоэмали, карандаши",
            href: "#",
          },
          {
            subTitle: "Лак, грунт, растворители",
            href: "#",
          },
          {
            subTitle: "Краски и грунтовки",
            href: "#",
          },
          {
            subTitle: "Очистители и промывки",
            href: "#",
          },
          {
            subTitle: "Средства по уходу",
            href: "#",
          },
        ],
      },
      // автохимия, смазки, присадки
      {
        title: "Автохимия, смазки, присадки",
        subcategory: [
          {
            subTitle: "Масла",
            href: "#",
          },
          {
            subTitle: "Охлаждающие жидкости",
            href: "#",
          },
          {
            subTitle: "Антикор, мастики, мовиль",
            href: "#",
          },
          {
            subTitle: "Клей, герметик, сварка",
            href: "#",
          },
          {
            subTitle: "Омыватели стекла. Незамерзайка",
            href: "#",
          },
          {
            subTitle: "Присадки, антигели",
            href: "#",
          },
          {
            subTitle: "Смазки, жидкие ключи",
            href: "#",
          },
          {
            subTitle: "Прочие средства и ГСМ",
            href: "#",
          },
        ],
      },
      // наборы и принадлежности
      {
        title: "Наборы и принадлежности",
        subcategory: [
          {
            subTitle: "Аптечки, огнетушители, знаки остановки",
            href: "#",
          },
          {
            subTitle: "Компрессоры, насосы, шланги",
            href: "#",
          },
          {
            subTitle: "Домкраты",
            href: "#",
          },
          {
            subTitle: "Тросы буксировочные",
            href: "#",
          },
          {
            subTitle: "Провода для прикуривания",
            href: "#",
          },
          {
            subTitle: "Упоры противооткатные",
            href: "#",
          },
          {
            subTitle: "Стяжки крепления груза",
            href: "#",
          },
          {
            subTitle: "Цепи противоскольжения",
            href: "#",
          },
          {
            subTitle: "Канистры",
            href: "#",
          },
          {
            subTitle: "Щетки для снега и воды, скребки, салфетки",
            href: "#",
          },
          {
            subTitle: "Сцепки жесткие",
            href: "#",
          },
        ],
      },
      // услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Техническое обслуживание",
            href: "#",
          },
          {
            subTitle: "Страховки",
            href: "#",
          },
          {
            subTitle: "Кредиты",
            href: "#",
          },
          {
            subTitle: "Юридические услуги",
            href: "#",
          },
          {
            subTitle: "Обучение",
            href: "#",
          },
          {
            subTitle: "Тюнинг и постпройка",
            href: "#",
          },
        ],
      },
      // мероприятия
      {
        title: "Мероприятия",
        subcategory: [
          {
            subTitle: "Шоу",
            href: "#",
          },
          {
            subTitle: "Выставки",
            href: "#",
          },
          {
            subTitle: "Пробеги",
            href: "#",
          },
          {
            subTitle: "Соревнования",
            href: "#",
          },
        ],
      },
      // WiKi
      {
        title: "WiKi",
        subcategory: [
          {
            subTitle: "Информация о автомобилях",
            href: "#",
          },
          {
            subTitle: "Информация о запчастях",
            href: "#",
          },
          {
            subTitle: "Исследования",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория мотоциклы
  {
    name: "Мотоциклы",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-2",
    subcategories: [
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
          {
            subTitle: "Рама, кузов",
            href: "#",
          },
          {
            subTitle: "Обвес кузова",
            href: "#",
          },
          {
            subTitle: "Электрика",
            href: "#",
          },
          {
            subTitle: "Освещение, сигнализация",
            href: "#",
          },
          {
            subTitle: "Система охлаждения",
            href: "#",
          },
          {
            subTitle: "Тормозная система",
            href: "#",
          },
          {
            subTitle: "Трансмиссия, элементы подвески и управления",
            href: "#",
          },
          {
            subTitle: "Питание и управление двигателем, выхлопная система",
            href: "#",
          },
          {
            subTitle: "Колеса",
            href: "#",
          },
          {
            subTitle: "Двигатель",
            href: "#",
          },
        ],
      },
      // Запчасти б/у
      {
        title: "Запчасти б/у",
        subcategory: [
          {
            subTitle: "Запчасти б/у",
            href: "#",
          },
        ],
      },
      // Аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Bosch",
            href: "#",
          },
          {
            subTitle: "Delta",
            href: "#",
          },
          {
            subTitle: "Varta",
            href: "#",
          },
          {
            subTitle: "Red Energy",
            href: "#",
          },
        ],
      },
      // Тюнинг и аксессуары
      {
        title: "Тюнинг и аксессуары",
        subcategory: [
          {
            subTitle: "Сумки и багаж",
            href: "#",
          },
          {
            subTitle: "Противоугонные устройства",
            href: "#",
          },
          {
            subTitle: "Держатели навигаторов",
            href: "#",
          },
          {
            subTitle: "Чехлы",
            href: "#",
          },
          {
            subTitle: "Боковые зеркала и аксессуары",
            href: "#",
          },
          {
            subTitle: "Мотоэлектроника",
            href: "#",
          },
          {
            subTitle: "Гаражное оборудование",
            href: "#",
          },
          {
            subTitle: "Звезды и цепи",
            href: "#",
          },
          {
            subTitle: "Наклейки и накладки",
            href: "#",
          },
          {
            subTitle: "Ручки и грипсы",
            href: "#",
          },
          {
            subTitle: "Обтекатели и стекла",
            href: "#",
          },
          {
            subTitle: "Фильтры",
            href: "#",
          },
          {
            subTitle: "Выхлоп",
            href: "#",
          },
          {
            subTitle: "Защита",
            href: "#",
          },
          {
            subTitle: "Сигнал",
            href: "#",
          },
          {
            subTitle: "Сани волокуши",
            href: "#",
          },
        ],
      },
      // Масла и мотохимия
      {
        title: "Масла и мотохимия",
        subcategory: [
          {
            subTitle: "Моторные масла",
            href: "#",
          },
          {
            subTitle: "Вилочное масло",
            href: "#",
          },
          {
            subTitle: "Охлаждающие жидкости",
            href: "#",
          },
          {
            subTitle: "Клей, герметик, сварка",
            href: "#",
          },
          {
            subTitle: "Смазки, жидкие ключи",
            href: "#",
          },
        ],
      },
      // Мотоинструмент
      {
        title: "Мотоинструмент",
        subcategory: [
          {
            subTitle: "Съемники",
            href: "#",
          },
          {
            subTitle: "Приборы диагностики",
            href: "#",
          },
          {
            subTitle: "Ключи",
            href: "#",
          },
        ],
      },
      // Шины
      {
        title: "Мотоинструмент",
        subcategory: [
          {
            subTitle: "Классика",
            href: "#",
          },
          {
            subTitle: "Кросс",
            href: "#",
          },
          {
            subTitle: "Спорт",
            href: "#",
          },
          {
            subTitle: "Спорт-турист",
            href: "#",
          },
          {
            subTitle: "Трек",
            href: "#",
          },
          {
            subTitle: "Чепер Круизер",
            href: "#",
          },
          {
            subTitle: "Эндуро",
            href: "#",
          },
        ],
      },
      // Экипировка
      {
        title: "Экипировка",
        subcategory: [
          {
            subTitle: "Шлемы",
            href: "#",
          },
          {
            subTitle: "Комбинезоны",
            href: "#",
          },
          {
            subTitle: "Костюмы",
            href: "#",
          },
          {
            subTitle: "Штаны",
            href: "#",
          },
          {
            subTitle: "Джерси",
            href: "#",
          },
          {
            subTitle: "Защита",
            href: "#",
          },
          {
            subTitle: "Куртки",
            href: "#",
          },
          {
            subTitle: "Термобелье",
            href: "#",
          },
          {
            subTitle: "Маски и балаклавы",
            href: "#",
          },
          {
            subTitle: "Ботинки",
            href: "#",
          },
          {
            subTitle: "Перчатки",
            href: "#",
          },
          {
            subTitle: "Дождевики  и бахилы",
            href: "#",
          },
          {
            subTitle: "Женская экипировка",
            href: "#",
          },
          {
            subTitle: "Детсткая экипировка",
            href: "#",
          },
          {
            subTitle: "Комплекты экипировки",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Страховки",
            href: "#",
          },
          {
            subTitle: "Кредиты",
            href: "#",
          },
          {
            subTitle: "Ремонт",
            href: "#",
          },
          {
            subTitle: "ТО",
            href: "#",
          },
          {
            subTitle: "Обучение",
            href: "#",
          },
          {
            subTitle: "Тюнинг и постпройка",
            href: "#",
          },
          {
            subTitle: "Юридические услуги",
            href: "#",
          },
        ],
      },
      // Мероприятия
      {
        title: "Мероприятия",
        subcategory: [
          {
            subTitle: "Мотопробеги",
            href: "#",
          },
          {
            subTitle: "Фестивали",
            href: "#",
          },
          {
            subTitle: "Открытия/закрытия",
            href: "#",
          },
          {
            subTitle: "Путешествия",
            href: "#",
          },
        ],
      },
      // Литература
      {
        title: "Литература",
        subcategory: [
          {
            subTitle: "Литература",
            href: "#",
          },
        ],
      },
      // WiKi
      {
        title: "WiKi",
        subcategory: [
          {
            subTitle: "WiKi",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория снегоходы
  {
    name: "Снегоходы",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-3",
    subcategories: [
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
          {
            subTitle: "Рама, кузов",
            href: "#",
          },
          {
            subTitle: "Обвес кузова",
            href: "#",
          },
          {
            subTitle: "Электрика",
            href: "#",
          },
          {
            subTitle: "Освещение, сигнализация",
            href: "#",
          },
          {
            subTitle: "Система охлаждения",
            href: "#",
          },
          {
            subTitle: "Тормозная система",
            href: "#",
          },
          {
            subTitle: "Трансмиссия, элементы подвески и управления",
            href: "#",
          },
          {
            subTitle: "Питание и управление двигателем, выхлопная система",
            href: "#",
          },
          {
            subTitle: "Лыжи и Траки",
            href: "#",
          },
          {
            subTitle: "Двигатель",
            href: "#",
          },
        ],
      },
      // Аксессуары
      {
        title: "Аксессуары",
        subcategory: [
          {
            subTitle: "Левый газ",
            href: "#",
          },
          {
            subTitle: "Зеркала",
            href: "#",
          },
          {
            subTitle: "Бампера",
            href: "#",
          },
          {
            subTitle: "Фаркопы",
            href: "#",
          },
          {
            subTitle: "Накладки на лыжи",
            href: "#",
          },
          {
            subTitle: "Защита днища",
            href: "#",
          },
          {
            subTitle: "Сумки",
            href: "#",
          },
          {
            subTitle: "Кофры",
            href: "#",
          },
          {
            subTitle: "Чехлы амортизаторов",
            href: "#",
          },
          {
            subTitle: "Чехлы",
            href: "#",
          },
          {
            subTitle: "Сиденья и спинки",
            href: "#",
          },
          {
            subTitle: "Коньки",
            href: "#",
          },
          {
            subTitle: "Скребки",
            href: "#",
          },
          {
            subTitle: "Подвеска и корпус",
            href: "#",
          },
          {
            subTitle: "Система крепления",
            href: "#",
          },
          {
            subTitle: "Защита рук",
            href: "#",
          },
          {
            subTitle: "Стропы",
            href: "#",
          },
          {
            subTitle: "Подножки",
            href: "#",
          },
          {
            subTitle: "Подкаты",
            href: "#",
          },
          {
            subTitle: "Выхлопная система",
            href: "#",
          },
          {
            subTitle: "Сани волокуши",
            href: "#",
          },
        ],
      },
      // Аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Bosch",
            href: "#",
          },
          {
            subTitle: "Delta",
            href: "#",
          },
          {
            subTitle: "Varta",
            href: "#",
          },
          {
            subTitle: "Red Energy",
            href: "#",
          },
        ],
      },
      // Масла и мотохимия
      {
        title: "Масла и мотохимия",
        subcategory: [
          {
            subTitle: "Моторные масла",
            href: "#",
          },
          {
            subTitle: "Вилочное масло",
            href: "#",
          },
          {
            subTitle: "Охлаждающие жидкости",
            href: "#",
          },
          {
            subTitle: "Клей, герметик, сварка",
            href: "#",
          },
          {
            subTitle: "Смазки, жидкие ключи",
            href: "#",
          },
        ],
      },
      // Экипировка
      {
        title: "Экипировка",
        subcategory: [
          {
            subTitle: "Маски для снегохода",
            href: "#",
          },
          {
            subTitle: "Неопреновые штаны",
            href: "#",
          },
          {
            subTitle: "Очки",
            href: "#",
          },
          {
            subTitle: "Аксессуары для очков",
            href: "#",
          },
          {
            subTitle: "Лавинное снаряжение",
            href: "#",
          },
          {
            subTitle: "Подшлемники",
            href: "#",
          },
          {
            subTitle: "Шлемы",
            href: "#",
          },
          {
            subTitle: "Аксессуары для шлемов",
            href: "#",
          },
          {
            subTitle: "Комбинезоны",
            href: "#",
          },
          {
            subTitle: "Куртки",
            href: "#",
          },
          {
            subTitle: "Штаны",
            href: "#",
          },
          {
            subTitle: "Вейдерсы",
            href: "#",
          },
          {
            subTitle: "Перчатки",
            href: "#",
          },
          {
            subTitle: "Обувь",
            href: "#",
          },
          {
            subTitle: "Термобелье",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Страховки",
            href: "#",
          },
          {
            subTitle: "Кредиты",
            href: "#",
          },
          {
            subTitle: "Ремонт",
            href: "#",
          },
          {
            subTitle: "ТО",
            href: "#",
          },
          {
            subTitle: "Обучение",
            href: "#",
          },
          {
            subTitle: "Тюнинг и постпройка",
            href: "#",
          },
          {
            subTitle: "Юридические услуги",
            href: "#",
          },
        ],
      },
      // Литература
      {
        title: "Литература",
        subcategory: [
          {
            subTitle: "Литература",
            href: "#",
          },
        ],
      },
      // WiKi
      {
        title: "WiKi",
        subcategory: [
          {
            subTitle: "WiKi",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория квадроциклы и мотовездеходы
  {
    name: "Квадроциклы и мотовездеходы",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-4",
    subcategories: [
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
          {
            subTitle: "Рама, кузов",
            href: "#",
          },
          {
            subTitle: "Обвес кузова",
            href: "#",
          },
          {
            subTitle: "Электрика",
            href: "#",
          },
          {
            subTitle: "Освещение, сигнализация",
            href: "#",
          },
          {
            subTitle: "Система охлаждения",
            href: "#",
          },
          {
            subTitle: "Тормозная система",
            href: "#",
          },
          {
            subTitle: "Трансмиссия, элементы подвески и управления",
            href: "#",
          },
          {
            subTitle: "Питание и управление двигателем, выхлопная система",
            href: "#",
          },
          {
            subTitle: "Колеса",
            href: "#",
          },
          {
            subTitle: "Двигатель",
            href: "#",
          },
          {
            subTitle: "Аксессуары",
            href: "#",
          },
        ],
      },
      // Аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Bosch",
            href: "#",
          },
          {
            subTitle: "Delta",
            href: "#",
          },
          {
            subTitle: "Varta",
            href: "#",
          },
          {
            subTitle: "Red Energy",
            href: "#",
          },
        ],
      },
      // Аксессуары и тюнинг
      {
        title: "Аксессуары и тюнинг",
        subcategory: [
          {
            subTitle: "Зеркала",
            href: "#",
          },
          {
            subTitle: "Фаркопы",
            href: "#",
          },
          {
            subTitle: "Кофры",
            href: "#",
          },
          {
            subTitle: "Чехлы амортизаторов",
            href: "#",
          },
          {
            subTitle: "Чехлы",
            href: "#",
          },
          {
            subTitle: "Брызговики",
            href: "#",
          },
          {
            subTitle: "Крыши и козырьки",
            href: "#",
          },
          {
            subTitle: "Двери",
            href: "#",
          },
          {
            subTitle: "Бампера и защита порогов",
            href: "#",
          },
          {
            subTitle: "Шноркели",
            href: "#",
          },
          {
            subTitle: "Защита",
            href: "#",
          },
          {
            subTitle: "Рычаги",
            href: "#",
          },
          {
            subTitle: "Подогрев ручек на квадроцикл",
            href: "#",
          },
        ],
      },
      // Масла и мотохимия
      {
        title: "Масла и мотохимия",
        subcategory: [
          {
            subTitle: "Моторные масла",
            href: "#",
          },
          {
            subTitle: "Вилочное масло",
            href: "#",
          },
          {
            subTitle: "Охлаждающие жидкости",
            href: "#",
          },
          {
            subTitle: "Клей, герметик, сварка",
            href: "#",
          },
          {
            subTitle: "Смазки, жидкие ключи",
            href: "#",
          },
        ],
      },
      // Мотоинструмент
      {
        title: "Мотоинструмент",
        subcategory: [
          {
            subTitle: "Съемники",
            href: "#",
          },
          {
            subTitle: "Приборы диагностики",
            href: "#",
          },
          {
            subTitle: "Ключи",
            href: "#",
          },
        ],
      },
      // Шины
      {
        title: "Шины",
        subcategory: [
          {
            subTitle: "Шины",
            href: "#",
          },
        ],
      },
      // Экипировка
      {
        title: "Экипировка",
        subcategory: [
          {
            subTitle: "Шлемы",
            href: "#",
          },
          {
            subTitle: "Комбинезоны",
            href: "#",
          },
          {
            subTitle: "Костюмы",
            href: "#",
          },
          {
            subTitle: "Штаны",
            href: "#",
          },
          {
            subTitle: "Защита",
            href: "#",
          },
          {
            subTitle: "Куртки",
            href: "#",
          },
          {
            subTitle: "Термобелье",
            href: "#",
          },
          {
            subTitle: "Маски",
            href: "#",
          },
          {
            subTitle: "Ботинки",
            href: "#",
          },
          {
            subTitle: "Перчатки",
            href: "#",
          },
          {
            subTitle: "Дождевики и бахилы",
            href: "#",
          },
          {
            subTitle: "Женская экипировка",
            href: "#",
          },
          {
            subTitle: "Детсткая экипировка",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Страховки",
            href: "#",
          },
          {
            subTitle: "Кредиты",
            href: "#",
          },
          {
            subTitle: "Ремонт",
            href: "#",
          },
          {
            subTitle: "ТО",
            href: "#",
          },
          {
            subTitle: "Обучение",
            href: "#",
          },
          {
            subTitle: "Тюнинг и постпройка",
            href: "#",
          },
          {
            subTitle: "Юридические услуги",
            href: "#",
          },
        ],
      },
      // Мероприятия
      {
        title: "Мероприятия",
        subcategory: [
          {
            subTitle: "Мероприятия",
            href: "#",
          },
        ],
      },
      // Литература
      {
        title: "Литература",
        subcategory: [
          {
            subTitle: "Литература",
            href: "#",
          },
        ],
      },
      // WiKi
      {
        title: "WiKi",
        subcategory: [
          {
            subTitle: "WiKi",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория скутеры
  {
    name: "Скутеры",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-5",
    subcategories: [
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
          {
            subTitle: "Рама, кузов",
            href: "#",
          },
          {
            subTitle: "Обвес кузова",
            href: "#",
          },
          {
            subTitle: "Электрика",
            href: "#",
          },
          {
            subTitle: "Освещение, сигнализация",
            href: "#",
          },
          {
            subTitle: "Система охлаждения",
            href: "#",
          },
          {
            subTitle: "Тормозная система",
            href: "#",
          },
          {
            subTitle: "Трансмиссия, элементы подвески и управления",
            href: "#",
          },
          {
            subTitle: "Питание и управление двигателем, выхлопная система",
            href: "#",
          },
          {
            subTitle: "Колеса",
            href: "#",
          },
          {
            subTitle: "Двигатель",
            href: "#",
          },
        ],
      },
      // Аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Bosch",
            href: "#",
          },
          {
            subTitle: "Delta",
            href: "#",
          },
          {
            subTitle: "Varta",
            href: "#",
          },
          {
            subTitle: "Red Energy",
            href: "#",
          },
        ],
      },
      // Тюнинг и Аксессуары
      {
        title: "Тюнинг и Аксессуары",
        subcategory: [
          {
            subTitle: "Сумки и багаж",
            href: "#",
          },
          {
            subTitle: "Противоугонные устройства",
            href: "#",
          },
          {
            subTitle: "Держатели навигаторов",
            href: "#",
          },
          {
            subTitle: "Чехлы",
            href: "#",
          },
          {
            subTitle: "Боковые зеркала и аксессуары",
            href: "#",
          },
          {
            subTitle: "Мотоэлектроника",
            href: "#",
          },
          {
            subTitle: "Наклейки и накладки",
            href: "#",
          },
          {
            subTitle: "Ручки и грипсы",
            href: "#",
          },
          {
            subTitle: "Обтекатели и стекла",
            href: "#",
          },
          {
            subTitle: "Фильтры",
            href: "#",
          },
        ],
      },
      // Масла и мотохимия
      {
        title: "Масла и мотохимия",
        subcategory: [
          {
            subTitle: "Моторные масла",
            href: "#",
          },
          {
            subTitle: "Вилочное масло",
            href: "#",
          },
          {
            subTitle: "Охлаждающие жидкости",
            href: "#",
          },
          {
            subTitle: "Клей, герметик, сварка",
            href: "#",
          },
          {
            subTitle: "Смазки, жидкие ключи",
            href: "#",
          },
        ],
      },
      // Шины
      {
        title: "Шины",
        subcategory: [
          {
            subTitle: "Шины",
            href: "#",
          },
        ],
      },
      // Экипировка
      {
        title: "Экипировка",
        subcategory: [
          {
            subTitle: "Экипировка",
            href: "#",
          },
        ],
      },
      // Литература
      {
        title: "Литература",
        subcategory: [
          {
            subTitle: "Литература",
            href: "#",
          },
        ],
      },
      // WiKi
      {
        title: "WiKi",
        subcategory: [
          {
            subTitle: "WiKi",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Страховки",
            href: "#",
          },
          {
            subTitle: "Кредиты",
            href: "#",
          },
          {
            subTitle: "Ремонт",
            href: "#",
          },
          {
            subTitle: "ТО",
            href: "#",
          },
          {
            subTitle: "Обучение",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория вело
  {
    name: "Вело",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-6",
    subcategories: [
      // WiKi
      {
        title: "WiKi",
        subcategory: [
          {
            subTitle: "WiKi",
            href: "#",
          },
        ],
      },
      // Аксессуары
      {
        title: "Аксессуары",
        subcategory: [
          {
            subTitle: "Аксессуары",
            href: "#",
          },
        ],
      },
      // Велозапчасти
      {
        title: "Велозапчасти",
        subcategory: [
          {
            subTitle: "Велозапчасти",
            href: "#",
          },
        ],
      },
      // Веломобили
      {
        title: "Веломобили",
        subcategory: [
          {
            subTitle: "Веломобили",
            href: "#",
          },
        ],
      },
      // Горные
      {
        title: "Горные",
        subcategory: [
          {
            subTitle: "Горные",
            href: "#",
          },
        ],
      },
      // Городские
      {
        title: "Городские",
        subcategory: [
          {
            subTitle: "Городские",
            href: "#",
          },
        ],
      },
      // Детские
      {
        title: "Детские",
        subcategory: [
          {
            subTitle: "Беговелы",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти",
            href: "#",
          },
        ],
      },
      // Покрышки
      {
        title: "Покрышки",
        subcategory: [
          {
            subTitle: "Покрышки",
            href: "#",
          },
        ],
      },
      // Трюковые
      {
        title: "Трюковые",
        subcategory: [
          {
            subTitle: "Трюковые",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Шоссейные
      {
        title: "Шоссейные",
        subcategory: [
          {
            subTitle: "Шоссейные",
            href: "#",
          },
        ],
      },
      // Экипировка
      {
        title: "Экипировка",
        subcategory: [
          {
            subTitle: "Экипировка",
            href: "#",
          },
        ],
      },
      // Электровелосипеды
      {
        title: "Электровелосипеды",
        subcategory: [
          {
            subTitle: "Электровелосипеды",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория электротранспорт
  {
    name: "Электротранспорт",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-7",
    subcategories: [
      // Гироскутеры
      {
        title: "Гироскутеры",
        subcategory: [
          {
            subTitle: "Гироскутеры",
            href: "#",
          },
        ],
      },
      // Детский электротранспорт
      {
        title: "Детский электротранспорт",
        subcategory: [
          {
            subTitle: "Детский электротранспорт",
            href: "#",
          },
        ],
      },
      // Моноколеса
      {
        title: "Моноколеса",
        subcategory: [
          {
            subTitle: "Моноколеса",
            href: "#",
          },
        ],
      },
      // Электровелосипеды
      {
        title: "Электровелосипеды",
        subcategory: [
          {
            subTitle: "Электровелосипеды",
            href: "#",
          },
        ],
      },
      // Электромотоциклы
      {
        title: "Электромотоциклы",
        subcategory: [
          {
            subTitle: "Электромотоциклы",
            href: "#",
          },
        ],
      },
      // Электроролики
      {
        title: "Электроролики",
        subcategory: [
          {
            subTitle: "Электроролики",
            href: "#",
          },
        ],
      },
      // Электросамокаты
      {
        title: "Электросамокаты",
        subcategory: [
          {
            subTitle: "Электросамокаты",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория коммерческий
  {
    name: "Коммерческий",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-8",
    subcategories: [
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
      // Автолампы
      {
        title: "Автолампы",
        subcategory: [
          {
            subTitle: "Автолампы",
            href: "#",
          },
        ],
      },
      // Аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Аккумуляторы",
            href: "#",
          },
        ],
      },
      // Аксессуары
      {
        title: "Аксессуары",
        subcategory: [
          {
            subTitle: "Аксессуары",
            href: "#",
          },
        ],
      },
      // Диски
      {
        title: "Диски",
        subcategory: [
          {
            subTitle: "Диски",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти",
            href: "#",
          },
        ],
      },
      // Запчасти для ТО
      {
        title: "Запчасти для ТО",
        subcategory: [
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Шины
      {
        title: "Шины",
        subcategory: [
          {
            subTitle: "Шины",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория водный транспорт
  {
    name: "Водный транспорт",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-9",
    subcategories: [
      // Весельные лодки
      {
        title: "Весельные лодки",
        subcategory: [
          {
            subTitle: "Весельные лодки",
            href: "#",
          },
        ],
      },
      // Гидроциклы
      {
        title: "Гидроциклы",
        subcategory: [
          {
            subTitle: "Гидроциклы",
            href: "#",
          },
        ],
      },
      // Двигатели судовые
      {
        title: "Двигатели судовые",
        subcategory: [
          {
            subTitle: "Двигатели судовые",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          // Запчасти для ТО
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
        ],
      },
      // Катера
      {
        title: "Катера",
        subcategory: [
          {
            subTitle: "Катера",
            href: "#",
          },
        ],
      },
      // Каяки и Каноэ
      {
        title: "Каяки и Каноэ",
        subcategory: [
          {
            subTitle: "Каяки и Каноэ",
            href: "#",
          },
        ],
      },
      // Комплектующие
      {
        title: "Комплектующие",
        subcategory: [
          {
            subTitle: "Комплектующие",
            href: "#",
          },
        ],
      },
      // Лодочные моторы
      {
        title: "Лодочные моторы",
        subcategory: [
          {
            subTitle: "Лодочные моторы",
            href: "#",
          },
        ],
      },
      // Моторные яхты
      {
        title: "Моторные яхты",
        subcategory: [
          {
            subTitle: "Моторные яхты",
            href: "#",
          },
        ],
      },
      // Навигационное оборудование
      {
        title: "Навигационное оборудование",
        subcategory: [
          {
            subTitle: "Навигационное оборудование",
            href: "#",
          },
        ],
      },
      // Надувные лодки
      {
        title: "Надувные лодки",
        subcategory: [
          {
            subTitle: "Надувные лодки",
            href: "#",
          },
        ],
      },
      // Прицепы
      {
        title: "Прицепы",
        subcategory: [
          {
            subTitle: "Прицепы",
            href: "#",
          },
        ],
      },
      // Суда
      {
        title: "Суда",
        subcategory: [
          {
            subTitle: "Суда",
            href: "#",
          },
        ],
      },
      // Суда на воздушной подушке
      {
        title: "Суда на воздушной подушке",
        subcategory: [
          {
            subTitle: "Суда на воздушной подушке",
            href: "#",
          },
        ],
      },
      // Такелаж
      {
        title: "Такелаж",
        subcategory: [
          {
            subTitle: "Такелаж",
            href: "#",
          },
        ],
      },
      // Яхты
      {
        title: "Яхты",
        subcategory: [
          {
            subTitle: "Яхты",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория спецтехника
  {
    name: "Спецтехника",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-10",
    subcategories: [
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
      // Аккумуляторы
      {
        title: "Аккумуляторы",
        subcategory: [
          {
            subTitle: "Аккумуляторы",
            href: "#",
          },
        ],
      },
      // Антифризы
      {
        title: "Антифризы",
        subcategory: [
          {
            subTitle: "Антифризы",
            href: "#",
          },
        ],
      },
      // Гидравлические жидкости
      {
        title: "Гидравлические жидкости",
        subcategory: [
          {
            subTitle: "Гидравлические жидкости",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          // Коммунальная
          {
            subTitle: "Коммунальная",
            href: "#",
          },
          // Автобусы
          {
            subTitle: "Автобусы",
            href: "#",
          },
          // Автодома
          {
            subTitle: "Автодома",
            href: "#",
          },
          // Автокраны
          {
            subTitle: "Автокраны",
            href: "#",
          },
          // Бульдозеры
          {
            subTitle: "Бульдозеры",
            href: "#",
          },
          // Грузовики
          {
            subTitle: "Грузовики",
            href: "#",
          },
          // Коммунальная техника
          {
            subTitle: "Коммунальная техника",
            href: "#",
          },
          // Лёгкий коммерческий транспорт
          {
            subTitle: "Лёгкий коммерческий транспорт",
            href: "#",
          },
          // Навесное оборудование
          {
            subTitle: "Навесное оборудование",
            href: "#",
          },
          // Погрузчики
          {
            subTitle: "Погрузчики",
            href: "#",
          },
          // Прицепы и полуприцепы
          {
            subTitle: "Прицепы и полуприцепы",
            href: "#",
          },
          // Сельхозтехника
          {
            subTitle: "Сельхозтехника",
            href: "#",
          },
          // Строительная и дорожная
          {
            subTitle: "Строительная и дорожная",
            href: "#",
          },
          // Техника для лесозаготовки
          {
            subTitle: "Техника для лесозаготовки",
            href: "#",
          },
          // Седальные тягочи
          {
            subTitle: "Седальные тягочи",
            href: "#",
          },
          // Экскаваторы
          {
            subTitle: "Экскаваторы",
            href: "#",
          },
        ],
      },
      // Запчасти для ТО
      {
        title: "Запчасти для ТО",
        subcategory: [
          {
            subTitle: "Запчасти для ТО",
            href: "#",
          },
        ],
      },
      // Моторные масла
      {
        title: "Моторные масла",
        subcategory: [
          {
            subTitle: "Моторные масла",
            href: "#",
          },
        ],
      },
      // Навесное оборудование
      {
        title: "Навесное оборудование",
        subcategory: [
          {
            subTitle: "Навесное оборудование",
            href: "#",
          },
        ],
      },
      // Резинотехнические изделия (РТИ)
      {
        title: "Резинотехнические изделия (РТИ)",
        subcategory: [
          {
            subTitle: "Резинотехнические изделия (РТИ)",
            href: "#",
          },
        ],
      },
      // Смазки
      {
        title: "Смазки",
        subcategory: [
          {
            subTitle: "Смазки",
            href: "#",
          },
        ],
      },
      // Трансмиссионные масла
      {
        title: "Трансмиссионные масла",
        subcategory: [
          {
            subTitle: "Трансмиссионные масла",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Шины
      {
        title: "Шины",
        subcategory: [
          {
            subTitle: "Шины",
            href: "#",
          },
        ],
      },
      // Целые
      {
        title: "Целые",
        subcategory: [
          {
            subTitle: "Целые",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория сельхозтехника
  {
    name: "Сельхозтехника",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-11",
    subcategories: [
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Целые
      {
        title: "Целые",
        subcategory: [
          {
            subTitle: "Целые",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория электроника
  {
    name: "Электроника",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-12",
    subcategories: [
      // Bluetooth гарнитуры
      {
        title: "Bluetooth гарнитуры",
        subcategory: [
          {
            subTitle: "Bluetooth гарнитуры",
            href: "#",
          },
        ],
      },
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
      // Внешние аккумуляторы (Power Bank)
      {
        title: "Внешние аккумуляторы (Power Bank)",
        subcategory: [
          {
            subTitle: "Внешние аккумуляторы (Power Bank)",
            href: "#",
          },
        ],
      },
      // Гаджеты
      {
        title: "Гаджеты",
        subcategory: [
          // Аксессуары для гаджетов
          {
            subTitle: "Аксессуары для гаджетов",
            href: "#",
          },
        ],
      },
      // Держатели, подставки
      {
        title: "Держатели, подставки",
        subcategory: [
          {
            subTitle: "Держатели, подставки",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти",
            href: "#",
          },
        ],
      },
      // Кабели для смартфонов и планшетов
      {
        title: "Кабели для смартфонов и планшетов",
        subcategory: [
          {
            subTitle: "Кабели для смартфонов и планшетов",
            href: "#",
          },
        ],
      },
      // Кабели и зарядки
      {
        title: "Кабели и зарядки",
        subcategory: [
          {
            subTitle: "Кабели и зарядки",
            href: "#",
          },
        ],
      },
      // Карты памяти
      {
        title: "Карты памяти",
        subcategory: [
          {
            subTitle: "Карты памяти",
            href: "#",
          },
        ],
      },
      // Красота и здорвье
      {
        title: "Красота и здорвье",
        subcategory: [
          {
            subTitle: "Красота и здорвье",
            href: "#",
          },
        ],
      },
      // Ноутбуки и компьютеры
      {
        title: "Ноутбуки и компьютеры",
        subcategory: [
          {
            subTitle: "Ноутбуки и компьютеры",
            href: "#",
          },
        ],
      },
      // Планшеты
      {
        title: "Планшеты",
        subcategory: [
          // Аксессуары для планшетов
          {
            subTitle: "Аксессуары для планшетов",
            href: "#",
          },
          // Зарядные устройства для планшета
          {
            subTitle: "Зарядные устройства для планшета",
            href: "#",
          },
          // Защитные пленки для планшетов
          {
            subTitle: "Защитные пленки для планшетов",
            href: "#",
          },
          // Чехлы для планшетов
          {
            subTitle: "Чехлы для планшетов",
            href: "#",
          },
        ],
      },
      // Рации
      {
        title: "Рации",
        subcategory: [
          {
            subTitle: "Рации",
            href: "#",
          },
        ],
      },
      // Смартфоны и гаджеты
      {
        title: "Смартфоны и гаджеты",
        subcategory: [
          // Аксессуары для смартфонов
          {
            subTitle: "Аксессуары для смартфонов",
            href: "#",
          },
          // Внешние моды для смартфонов
          {
            subTitle: "Внешние моды для смартфонов",
            href: "#",
          },
          // Держатели для смартфонов
          {
            subTitle: "Держатели для смартфонов",
            href: "#",
          },
          // Защитные пленки и стекла
          {
            subTitle: "Защитные пленки и стекла",
            href: "#",
          },
          // Чехлы для смартфонов
          {
            subTitle: "Чехлы для смартфонов",
            href: "#",
          },
        ],
      },
      // Смарт-часы
      {
        title: "Смарт-часы",
        subcategory: [
          {
            subTitle: "Смарт-часы",
            href: "#",
          },
        ],
      },
      // Сотовые телефоны
      {
        title: "Сотовые телефоны",
        subcategory: [
          // SIM карты (тарифные планы)
          {
            subTitle: "SIM карты (тарифные планы)",
            href: "#",
          },
          // Зарядные устройства для телефонов
          {
            subTitle: "Зарядные устройства для телефонов",
            href: "#",
          },
        ],
      },
      // Спорт и отдых
      {
        title: "Спорт и отдых",
        subcategory: [
          // Смарт-трекеры
          {
            subTitle: "Смарт-трекеры",
            href: "#",
          },
          // Фитнес-браслеты
          {
            subTitle: "Фитнес-браслеты",
            href: "#",
          },
        ],
      },
      // Телевизоры, аудио-видео, фото
      {
        title: "Телевизоры, аудио-видео, фото",
        subcategory: [
          // Виртуальные очки
          {
            subTitle: "Виртуальные очки",
            href: "#",
          },
          // Наушники
          {
            subTitle: "Наушники",
            href: "#",
          },
          // Селфи-палки
          {
            subTitle: "Селфи-палки",
            href: "#",
          },
          // Телевизоры
          {
            subTitle: "Телевизоры",
            href: "#",
          },
          // Цифровые фоторамки
          {
            subTitle: "Цифровые фоторамки",
            href: "#",
          },
        ],
      },
      // Товары для геймеров
      {
        title: "Товары для геймеров",
        subcategory: [
          {
            subTitle: "Товары для геймеров",
            href: "#",
          },
        ],
      },
      // Умный дом и системы безопасности
      {
        title: "Умный дом и системы безопасности",
        subcategory: [
          {
            subTitle: "Умный дом и системы безопасности",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Электронные книги
      {
        title: "Электронные книги",
        subcategory: [
          {
            subTitle: "Электронные книги",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория бытовая техника
  {
    name: "Бытовая техника",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-13",
    subcategories: [
      // Крупная бытовая техника
      {
        title: "Крупная бытовая техника",
        subcategory: [
          // Холодильники
          {
            subTitle: "Холодильники",
            href: "#",
          },
          // Морозильные камеры
          {
            subTitle: "Морозильные камеры",
            href: "#",
          },
          // Стиральные машины
          {
            subTitle: "Стиральные машины",
            href: "#",
          },
          // Сушильные машины для белья
          {
            subTitle: "Сушильные машины для белья",
            href: "#",
          },
          // Варочные панели
          {
            subTitle: "Варочные панели",
            href: "#",
          },
          // Посудомоечные машины
          {
            subTitle: "Посудомоечные машины",
            href: "#",
          },
          // Духовые шкафы
          {
            subTitle: "Духовые шкафы",
            href: "#",
          },
          // Плиты
          {
            subTitle: "Плиты",
            href: "#",
          },
          // Кулеры для воды и аксессуары
          {
            subTitle: "Кулеры для воды и аксессуары",
            href: "#",
          },
          // Аксессуары и запчасти
          {
            subTitle: "Аксессуары и запчасти",
            href: "#",
          },
          // Винные шкафы
          {
            subTitle: "Винные шкафы",
            href: "#",
          },
          // Сигарные шкафы
          {
            subTitle: "Сигарные шкафы",
            href: "#",
          },
          // Термошкафы для хранения продуктов
          {
            subTitle: "Термошкафы для хранения продуктов",
            href: "#",
          },
        ],
      },
      // Встраиваемая бытовая техника
      {
        title: "Встраиваемая бытовая техника",
        subcategory: [
          // Холодильники и морозильники
          {
            subTitle: "Холодильники и морозильники",
            href: "#",
          },
          // Стиральные машины
          {
            subTitle: "Стиральные машины",
            href: "#",
          },
          // Посудомойки
          {
            subTitle: "Посудомойки",
            href: "#",
          },
          // Варочные панели
          {
            subTitle: "Варочные панели",
            href: "#",
          },
          // Духовые шкафы
          {
            subTitle: "Духовые шкафы",
            href: "#",
          },
          // Комплекты встраиваемой техники
          {
            subTitle: "Комплекты встраиваемой техники",
            href: "#",
          },
          // Кухонные вытяжки и аксессуары
          {
            subTitle: "Кухонные вытяжки и аксессуары",
            href: "#",
          },
          // Встраиваемые микроволновые печи
          {
            subTitle: "Встраиваемые микроволновые печи",
            href: "#",
          },
          // Кофемашины
          {
            subTitle: "Кофемашины",
            href: "#",
          },
          // Винные шкафы
          {
            subTitle: "Винные шкафы",
            href: "#",
          },
          // Пароварки
          {
            subTitle: "Пароварки",
            href: "#",
          },
          // Измельчители отходов
          {
            subTitle: "Измельчители отходов",
            href: "#",
          },
          // Подогреватели посуды
          {
            subTitle: "Подогреватели посуды",
            href: "#",
          },
        ],
      },
      // Техника для кухни
      {
        title: "Техника для кухни",
        subcategory: [
          // Кофеварки и кофемашины
          {
            subTitle: "Кофеварки и кофемашины",
            href: "#",
          },
          // Электрические чайники и термопоты
          {
            subTitle: "Электрические чайники и термопоты",
            href: "#",
          },
          // Миксеры, блендеры и измельчители
          {
            subTitle: "Миксеры, блендеры и измельчители",
            href: "#",
          },
          // Печи и грили
          {
            subTitle: "Печи и грили",
            href: "#",
          },
          // Вытяжки
          {
            subTitle: "Вытяжки",
            href: "#",
          },
          // Мультиварки и техника для варки
          {
            subTitle: "Мультиварки и техника для варки",
            href: "#",
          },
          // Соковыжималки
          {
            subTitle: "Соковыжималки",
            href: "#",
          },
          // Мясорубки и насадки
          {
            subTitle: "Мясорубки и насадки",
            href: "#",
          },
          // Кухонные машины и комбайны
          {
            subTitle: "Кухонные машины и комбайны",
            href: "#",
          },
          // Настольные плиты
          {
            subTitle: "Настольные плиты",
            href: "#",
          },
          // Техника для приготовления десертов
          {
            subTitle: "Техника для приготовления десертов",
            href: "#",
          },
          // Техника для приготовления блюд
          {
            subTitle: "Техника для приготовления блюд",
            href: "#",
          },
          // Прочая кухонная техника
          {
            subTitle: "Прочая кухонная техника",
            href: "#",
          },
          // Аксессуары для кухонной техники
          {
            subTitle: "Аксессуары для кухонной техники",
            href: "#",
          },
        ],
      },
      // Техника для дома
      {
        title: "Техника для дома",
        subcategory: [
          // Пылесосы и аксессуары
          {
            subTitle: "Пылесосы и аксессуары",
            href: "#",
          },
          // Утюги и отпариватели
          {
            subTitle: "Утюги и отпариватели",
            href: "#",
          },
          // Швейные машины и аксессуары
          {
            subTitle: "Швейные машины и аксессуары",
            href: "#",
          },
          // Пароочистители и насадки
          {
            subTitle: "Пароочистители и насадки",
            href: "#",
          },
          // Паровые швабры
          {
            subTitle: "Паровые швабры",
            href: "#",
          },
          // Роботы для мойки окон и стеклоочистители
          {
            subTitle: "Роботы для мойки окон и стеклоочистители",
            href: "#",
          },
          // Сушилки для рук и тела
          {
            subTitle: "Сушилки для рук и тела",
            href: "#",
          },
          // Стерилизаторы
          {
            subTitle: "Стерилизаторы",
            href: "#",
          },
          // Аппараты для влажной уборки пола
          {
            subTitle: "Аппараты для влажной уборки пола",
            href: "#",
          },
        ],
      },
      // Климатическая техника
      {
        title: "Климатическая техника",
        subcategory: [
          // Кондиционеры и сплит-системы
          {
            subTitle: "Кондиционеры и сплит-системы",
            href: "#",
          },
          // Вентиляторы
          {
            subTitle: "Вентиляторы",
            href: "#",
          },
          // Увлажнители воздуха и аромадиффузоры
          {
            subTitle: "Увлажнители воздуха и аромадиффузоры",
            href: "#",
          },
          // Аромамашины
          {
            subTitle: "Аромамашины",
            href: "#",
          },
          // Обогреватели и тепловентиляторы
          {
            subTitle: "Обогреватели и тепловентиляторы",
            href: "#",
          },
          // Водонагреватели
          {
            subTitle: "Водонагреватели",
            href: "#",
          },
          // Охладители воздуха
          {
            subTitle: "Охладители воздуха",
            href: "#",
          },
          // Очистители воздуха
          {
            subTitle: "Очистители воздуха",
            href: "#",
          },
          // Мойки воздуха
          {
            subTitle: "Мойки воздуха",
            href: "#",
          },
          // Осушители воздуха
          {
            subTitle: "Осушители воздуха",
            href: "#",
          },
          // Сушилки для рук и тела
          {
            subTitle: "Сушилки для рук и тела",
            href: "#",
          },
          // Погодные станции и датчики
          {
            subTitle: "Погодные станции и датчики",
            href: "#",
          },
          // Аксессуары и запчасти
          {
            subTitle: "Аксессуары и запчасти",
            href: "#",
          },
        ],
      },
      // Техника для красоты и здоровья
      {
        title: "Техника для красоты и здоровья",
        subcategory: [
          // Электрические зубные щетки и аксессуары
          {
            subTitle: "Электрические зубные щетки и аксессуары",
            href: "#",
          },
          // Ирригаторы и аксессуары
          {
            subTitle: "Ирригаторы и аксессуары",
            href: "#",
          },
          // Массажное оборудование и аксессуары
          {
            subTitle: "Массажное оборудование и аксессуары",
            href: "#",
          },
          // Машинки для стрижки волос и аксессуары
          {
            subTitle: "Машинки для стрижки волос и аксессуары",
            href: "#",
          },
          // Напольные весы
          {
            subTitle: "Напольные весы",
            href: "#",
          },
          // Солярии и мини-солярии
          {
            subTitle: "Солярии и мини-солярии",
            href: "#",
          },
          // Триммеры для волос
          {
            subTitle: "Триммеры для волос",
            href: "#",
          },
          // Выпрямители для волос
          {
            subTitle: "Выпрямители для волос",
            href: "#",
          },
          // Фены и термощетки
          {
            subTitle: "Фены и термощетки",
            href: "#",
          },
          // Щипцы для завивки и аксессуары
          {
            subTitle: "Щипцы для завивки и аксессуары",
            href: "#",
          },
          // Эпиляторы и аксессуары
          {
            subTitle: "Эпиляторы и аксессуары",
            href: "#",
          },
          // Электробритвы и аксессуары
          {
            subTitle: "Электробритвы и аксессуары",
            href: "#",
          },
          // Электробигуди
          {
            subTitle: "Электробигуди",
            href: "#",
          },
          // Беговые дорожки
          {
            subTitle: "Беговые дорожки",
            href: "#",
          },
          // Эллиптические тренажеры
          {
            subTitle: "Эллиптические тренажеры",
            href: "#",
          },
          // Велотренажеры
          {
            subTitle: "Велотренажеры",
            href: "#",
          },
          // Гаджеты для здоровья и сна
          {
            subTitle: "Гаджеты для здоровья и сна",
            href: "#",
          },
        ],
      },
      // Техника для общепита
      {
        title: "Техника для общепита",
        subcategory: [
          // Холодильное оборудование
          {
            subTitle: "Холодильное оборудование",
            href: "#",
          },
          // Витрины и подогреватели
          {
            subTitle: "Витрины и подогреватели",
            href: "#",
          },
          // Шкафы и печи пекарские
          {
            subTitle: "Шкафы и печи пекарские",
            href: "#",
          },
          // Нагреватели для полотенец
          {
            subTitle: "Нагреватели для полотенец",
            href: "#",
          },
          // Вендинговые аппараты
          {
            subTitle: "Вендинговые аппараты",
            href: "#",
          },
          // Для оборудования общепита
          {
            subTitle: "Для оборудования общепита",
            href: "#",
          },
          // Стерилизаторы
          {
            subTitle: "Стерилизаторы",
            href: "#",
          },
          // Конвейерное оборудование
          {
            subTitle: "Конвейерное оборудование",
            href: "#",
          },
          // Электромеханическое оборудование
          {
            subTitle: "Электромеханическое оборудование",
            href: "#",
          },
          // Макароноварки
          {
            subTitle: "Макароноварки",
            href: "#",
          },
          // Кондитерское оборудование
          {
            subTitle: "Кондитерское оборудование",
            href: "#",
          },
          // Промышленные плиты
          {
            subTitle: "Промышленные плиты",
            href: "#",
          },
          // Профессиональные фритюрницы
          {
            subTitle: "Профессиональные фритюрницы",
            href: "#",
          },
          // Пекарское оборудование
          {
            subTitle: "Пекарское оборудование",
            href: "#",
          },
          // Кипятильники
          {
            subTitle: "Кипятильники",
            href: "#",
          },
          // Оборудование для приготовления напитков
          {
            subTitle: "Оборудование для приготовления напитков",
            href: "#",
          },
        ],
      },
      // Аксессуары
      {
        title: "Аксессуары",
        subcategory: [
          {
            subTitle: "Аксессуары",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория электрика
  {
    name: "Электрика",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-14",
    subcategories: [
      //
      {
        title: "Электрика",
        subcategory: [
          {
            subTitle: "Электрика",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория инструмент
  {
    name: "Инструмент",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-15",
    subcategories: [
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
      // Аккумуляторный инструмент
      {
        title: "Аккумуляторный инструмент",
        subcategory: [
          {
            subTitle: "Аккумуляторный инструмент",
            href: "#",
          },
        ],
      },
      // Бензоинструмент
      {
        title: "Бензоинструмент",
        subcategory: [
			// Бензоинструмент
          {
            subTitle: "Бензоинструмент",
            href: "#",
          },
        ],
      },
      // Все для сада
      {
        title: "Все для сада",
        subcategory: [
          {
            subTitle: "Мотоблоки",
            href: "#",
          },
        ],
      },
      // Генераторы
      {
        title: "Генераторы",
        subcategory: [
          {
            subTitle: "Генераторы",
            href: "#",
          },
        ],
      },
      // Запчасти
      {
        title: "Запчасти",
        subcategory: [
          {
            subTitle: "Запчасти",
            href: "#",
          },
        ],
      },
      // Инструмент для автосервиса и гаража
      {
        title: "Инструмент для автосервиса и гаража",
        subcategory: [
          {
            subTitle: "Инструмент для автосервиса и гаража",
            href: "#",
          },
        ],
      },
      // Пневмоинструмент
      {
        title: "Пневмоинструмент",
        subcategory: [
          {
            subTitle: "Пневмоинструмент",
            href: "#",
          },
        ],
      },
      // Ручной инструмент
      {
        title: "Ручной инструмент",
        subcategory: [
          {
            subTitle: "Ручной инструмент",
            href: "#",
          },
        ],
      },
      // Строительство и ремонт
      {
        title: "Строительство и ремонт",
        subcategory: [
          // Бетономешалки
          {
            subTitle: "Бетономешалки",
            href: "#",
          },
          // Вибромашинки
          {
            subTitle: "Вибромашинки",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Электроинструмент
      {
        title: "Электроинструмент",
        subcategory: [
          // Перфораторы
          {
            subTitle: "Перфораторы",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория метизы
  {
    name: "Метизы",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-16",
    subcategories: [
      // Анкерный крепеж
      {
        title: "Анкерный крепеж",
        subcategory: [
			// Анкер болт
          {
            subTitle: "Анкер болт",
            href: "#",
          },
		  	// Анкер регулируемый по высоте
          {
            subTitle: "Анкер регулируемый по высоте",
            href: "#",
          },
		  	// Анкер с гайкой
          {
            subTitle: "Анкер с гайкой",
            href: "#",
          },
		  	// Анкер с крюком и кольцом
		  {
            subTitle: "Анкер с крюком и кольцом",
            href: "#",
          },
		  	// Анкер клин
		  {
            subTitle: "Анкер клин",
            href: "#",
          },
		  	// Забивной анкер
		  {
            subTitle: "Забивной анкер",
            href: "#",
          },
		  	// По бетону
		  {
            subTitle: "По бетону",
            href: "#",
          },
		  	// Рамный анкер
		  {
            subTitle: "Рамный анкер",
            href: "#",
          },
		  	// Складные и пружинные анкеры
		  {
            subTitle: "Складные и пружинные анкеры",
            href: "#",
          },
		  	// Фасадные
		  {
            subTitle: "Фасадные",
            href: "#",
          },
		  	// Шурупы
		  {
            subTitle: "Шурупы",
            href: "#",
          },
		  	// Химические анкера
		  {
            subTitle: "Химические анкера",
            href: "#",
          },
		  	// Очистка засверленных отверстий
		  {
            subTitle: "Очистка засверленных отверстий",
            href: "#",
          },
		  	// Установочный инструмент
		  {
            subTitle: "Установочный инструмент",
            href: "#",
          },
        ],
      },
	  // Болты, винты, гайки
	  {
        title: "Болты, винты, гайки",
        subcategory: [
			// Болты
          {
            subTitle: "Болты",
            href: "#",
          },
		  	// Гайки
          {
            subTitle: "Гайки",
            href: "#",
          },
		  	// Винты
          {
            subTitle: "Винты",
            href: "#",
          },
		  	// Резьбовые шпильки
		  {
            subTitle: "Резьбовые шпильки",
            href: "#",
          },
        ],
      }, 
	  // Саморезы
	  {
        title: "Саморезы",
        subcategory: [
			// Саморезы кровельные
          {
            subTitle: "Саморезы кровельные",
            href: "#",
          },
		  	// Саморезы по дереву
          {
            subTitle: "Саморезы по дереву",
            href: "#",
          },
		  	// Саморезы оконные
          {
            subTitle: "Саморезы оконные",
            href: "#",
          },
		  	// Саморезы по металлу
		  {
            subTitle: "Саморезы по металлу",
            href: "#",
          },
        ],
      }, 
	  // Хомуты
	  {
        title: "Хомуты",
        subcategory: [
			// Хомут пластиковый
          {
            subTitle: "Хомут пластиковый",
            href: "#",
          },
		  	// u-образные
          {
            subTitle: "u-образные",
            href: "#",
          },
		  	// Для спринклерных систем
          {
            subTitle: "Для спринклерных систем",
            href: "#",
          },
		  	// Крепежные хомуты для котельного оборудования
		  {
            subTitle: "Крепежные хомуты для котельного оборудования",
            href: "#",
          },
		   	// Стальные стяжки
		  {
            subTitle: "Стальные стяжки",
            href: "#",
          },
		    // Хомуты заземления
		  {
            subTitle: "Хомуты заземления",
            href: "#",
          },
		    // Хомуты сантехнические
		  {
            subTitle: "Хомуты сантехнические",
            href: "#",
          },
		    // Хомуты червячные
		  {
            subTitle: "Хомуты червячные",
            href: "#",
          },
		    // Хомуты шарнирные
		  {
            subTitle: "Хомуты шарнирные",
            href: "#",
          },
        ],
      }, 
	  // Такелаж
	  {
        title: "Такелаж",
        subcategory: [
			// Стропы
          {
            subTitle: "Стропы",
            href: "#",
          },
		  	// Рым болты
          {
            subTitle: "Рым болты",
            href: "#",
          },
		  	// Рым гайки
          {
            subTitle: "Рым гайки",
            href: "#",
          },
		  	// Талрепы
		  {
            subTitle: "Талрепы",
            href: "#",
          },
		   	// Зажимы для троса
		  {
            subTitle: "Зажимы для троса",
            href: "#",
          },
		    // Коуши
		  {
            subTitle: "Коуши",
            href: "#",
          },
		    // Блоки
		  {
            subTitle: "Блоки",
            href: "#",
          },
		    // Карабины
		  {
            subTitle: "Карабины",
            href: "#",
          },
		    // Соединители цепи
		  {
            subTitle: "Соединители цепи",
            href: "#",
          },
		  	// Стальные тросы
		  {
            subTitle: "Стальные тросы",
            href: "#",
          },
		  	// Стальные цепи
		  {
            subTitle: "Стальные цепи",
            href: "#",
          },
		  	// Захват для груза 
		  {
            subTitle: "Захват для груза ",
            href: "#",
          },
		  	// Вертлюги
		  {
            subTitle: "Вертлюги",
            href: "#",
          },
		  	// Такелажные рейки
		  {
            subTitle: "Такелажные рейки",
            href: "#",
          },
		  	// Кольца
		  {
            subTitle: "Кольца",
            href: "#",
          },
		  	// Скобы соединительные 
		  {
            subTitle: "Скобы соединительные ",
            href: "#",
          },
		  	// Петли грузовые приварные
		  {
            subTitle: "Петли грузовые приварные",
            href: "#",
          },
		  	// Пальца
		  {
            subTitle: "Пальца",
            href: "#",
          },
		  	// Грузовые крюки
		  {
            subTitle: "Грузовые крюки",
            href: "#",
          },
		  	// Шпагаты
		  {
            subTitle: "Шпагаты",
            href: "#",
          },
		  	// Веревки
		  {
            subTitle: "Веревки",
            href: "#",
          },
		  	// Скобы такелажные
		  {
            subTitle: "Скобы такелажные",
            href: "#",
          },
		  	// S-образные крюки
		  {
            subTitle: "S-образные крюки",
            href: "#",
          },
		  	// Петли грузовые
		  {
            subTitle: "Петли грузовые",
            href: "#",
          },
		  	// Фалы
		  {
            subTitle: "Фалы",
            href: "#",
          },
		  	// Разное
		  {
            subTitle: "Разное",
            href: "#",
          },
		  	// Грузоподъемное оборудование
		  {
            subTitle: "Грузоподъемное оборудование",
            href: "#",
          },
        ],
      }, 
	  // Дюбели
	  {
        title: "Дюбели",
        subcategory: [
			// Дюбель-гвозди
          {
            subTitle: "Дюбель-гвозди",
            href: "#",
          },
		  	// Распорные
          {
            subTitle: "Распорные",
            href: "#",
          },
		  	// Штукатурные маяки
          {
            subTitle: "Штукатурные маяки",
            href: "#",
          },
		  	// Монтажные
		  {
            subTitle: "Монтажные",
            href: "#",
          },
		   	// Для газобетона и пенобетона
		  {
            subTitle: "Для газобетона и пенобетона",
            href: "#",
          },
		    // Для гипсокартона и ГВЛ
		  {
            subTitle: "Для гипсокартона и ГВЛ",
            href: "#",
          },
		    // Дюбель бабочка
		  {
            subTitle: "Дюбель бабочка",
            href: "#",
          },
		    // Для теплоизоляции (гриб)
		  {
            subTitle: "Для теплоизоляции (гриб)",
            href: "#",
          },
		    // Фасадные
		  {
            subTitle: "Фасадные",
            href: "#",
          },
		  	// Дюбель хомут
		  {
            subTitle: "Дюбель хомут",
            href: "#",
          },
		  	// Монтажные патроны
		  {
            subTitle: "Монтажные патроны",
            href: "#",
          },
		  	// Мебельные
		  {
            subTitle: "Мебельные",
            href: "#",
          },
		  	// Крюковые дюбели
		  {
            subTitle: "Крюковые дюбели",
            href: "#",
          },
		  	// Кровельные
		  {
            subTitle: "Кровельные",
            href: "#",
          },
		  	// Шканты мебельные
		  {
            subTitle: "Шканты мебельные",
            href: "#",
          },
		  	// Рамный анкер
		  {
            subTitle: "Рамный анкер",
            href: "#",
          },
        ],
      }, 
	  // Метрический крепеж
	  {
        title: "Метрический крепеж",
        subcategory: [
			// Болты
          {
            subTitle: "Болты",
            href: "#",
          },
		  	// Винты
          {
            subTitle: "Винты",
            href: "#",
          },
		  	// Гайки
          {
            subTitle: "Гайки",
            href: "#",
          },
		  	// Крюки и кольца с резьбой
		  {
            subTitle: "Крюки и кольца с резьбой",
            href: "#",
          },
		   	// Пробки резьбовые
		  {
            subTitle: "Пробки резьбовые",
            href: "#",
          },
		    // Резьбовые втулки
		  {
            subTitle: "Резьбовые втулки",
            href: "#",
          },
		    // Резьбовые переходники
		  {
            subTitle: "Резьбовые переходники",
            href: "#",
          },
		    // Складские ящики и лотки
		  {
            subTitle: "Складские ящики и лотки",
            href: "#",
          },
		    // Шайбы
		  {
            subTitle: "Шайбы",
            href: "#",
          },
		  	// Шпильки
		  {
            subTitle: "Шпильки",
            href: "#",
          },
		  	// Шпильки сантехнические
		  {
            subTitle: "Шпильки сантехнические",
            href: "#",
          },
		  	// Шплинты
		  {
            subTitle: "Шплинты",
            href: "#",
          },
		  	// Шпонки
		  {
            subTitle: "Шпонки",
            href: "#",
          },
		  	// Штифты
		  {
            subTitle: "Штифты",
            href: "#",
          },
		  	// Штифты под шплинт
		  {
            subTitle: "Штифты под шплинт",
            href: "#",
          },
		  	// Ящики-органайзеры
		  {
            subTitle: "Ящики-органайзеры",
            href: "#",
          },
        ],
      }, 
	  // Дюймовый крепеж
	  {
        title: "Дюймовый крепеж",
        subcategory: [
			// Болты
          {
            subTitle: "Болты",
            href: "#",
          },
		  	// Винты
          {
            subTitle: "Винты",
            href: "#",
          },
		  	// Гайки
          {
            subTitle: "Гайки",
            href: "#",
          },
		  	// Шайбы
		  {
            subTitle: "Шайбы",
            href: "#",
		  }
        ],
      }, 
	  // Заклепки для заклепочника
	  {
        title: "Заклепки для заклепочника",
        subcategory: [
			// Втулки ограничительные
          {
            subTitle: "Втулки ограничительные",
            href: "#",
          },
		  	// Вытяжные
          {
            subTitle: "Вытяжные",
            href: "#",
          },
		  	// Под молоток
          {
            subTitle: "Под молоток",
            href: "#",
          },
		  	// Резьбовые
		  {
            subTitle: "Резьбовые",
            href: "#",
		  }
        ],
      },
	  // Наборы крепежа
	  {
        title: "Наборы крепежа",
        subcategory: [
			// Наборы крепежа
          {
            subTitle: "Наборы крепежа",
            href: "#",
          },
        ],
      }, 
	  // Перфорированный крепеж
	  {
        title: "Перфорированный крепеж",
        subcategory: [
			// DIN рейки
          {
            subTitle: "DIN рейки",
            href: "#",
          },
		  	// Кронштейны
          {
            subTitle: "Кронштейны",
            href: "#",
          },
		  	// Опоры
          {
            subTitle: "Опоры",
            href: "#",
          },
		  	// Пластины
		  {
            subTitle: "Пластины",
            href: "#",
		  },
		  	// Подвесы для профиля
		  {
            subTitle: "Подвесы для профиля",
            href: "#",
		  },
		  	// Профиль
		  {
            subTitle: "Профиль",
            href: "#",
		  },
		  	// Прочая перфорация
		  {
            subTitle: "Прочая перфорация",
            href: "#",
		  },
		  	// Уголки
		  {
            subTitle: "Уголки",
            href: "#",
		  },
        ],
      },
	  // Проволока
	  {
        title: "Проволока",
        subcategory: [
			// Латунная проволока
          {
            subTitle: "Латунная проволока",
            href: "#",
          },
		  	// Медная проволока
          {
            subTitle: "Медная проволока",
            href: "#",
          },
		  	// Пломбировочная
          {
            subTitle: "Пломбировочная",
            href: "#",
          },
		  	// Проволока вязальная
		  {
            subTitle: "Проволока вязальная",
            href: "#",
		  },
		  	// Стальная проволока
		  {
            subTitle: "Стальная проволока",
            href: "#",
		  },
        ],
      },
	  // Гвозди
	  {
        title: "Гвозди",
        subcategory: [
			// Финишные гвозди
          {
            subTitle: "Финишные гвозди",
            href: "#",
          },
		  	// Гвозди с потайной головкой
          {
            subTitle: "Гвозди с потайной головкой",
            href: "#",
          },
		  	// Винтовые гвозди
          {
            subTitle: "Винтовые гвозди",
            href: "#",
          },
		  	// Строительные гвозди
		  {
            subTitle: "Строительные гвозди",
            href: "#",
		  },
		  	// Кровельные
		  {
            subTitle: "Кровельные",
            href: "#",
		  },
		    // Ершеные гвозди
		  {
            subTitle: "Ершеные гвозди",
            href: "#",
		  },
		    // Гвозди, штифты
		  {
            subTitle: "Гвозди, штифты",
            href: "#",
		  },
		    // Декоративные обивочные
		  {
            subTitle: "Декоративные обивочные",
            href: "#",
		  },
		    // Быстрофиксирующие гвозди
		  {
            subTitle: "Быстрофиксирующие гвозди",
            href: "#",
		  },
		    // Скобы строительные
		  {
            subTitle: "Скобы строительные",
            href: "#",
		  },
		    // Для фиксации правила
		  {
            subTitle: "Для фиксации правила",
            href: "#",
		  },
		    // Монтажные
		  {
            subTitle: "Монтажные",
            href: "#",
		  },
        ],
      },
    ],
  },
  // Категория РТИ
  {
    name: "РТИ",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-17",
    subcategories: [
      // Wiki
      {
        title: "Wiki",
        subcategory: [
          {
            subTitle: "Wiki",
            href: "#",
          },
        ],
      },
      // Асбестотехнические изделия
      {
        title: "Асбестотехнические изделия",
        subcategory: [
          // Изделия из асбеста
          {
            subTitle: "Изделия из асбеста",
            href: "#",
          },
          // Набивки
          {
            subTitle: "Набивки",
            href: "#",
          },
          // Паронит
          {
            subTitle: "Паронит",
            href: "#",
          },
        ],
      },
      // Кольца стопорные
      {
        title: "Кольца стопорные",
        subcategory: [
			// Кольца стопорные
          {
            subTitle: "Кольца стопорные",
            href: "#",
          },
        ],
      },
      // Пневматика
      {
        title: "Пневматика",
        subcategory: [
			// Пневматика
          {
            subTitle: "Пневматика",
            href: "#",
          },
        ],
      },
      // Подшипники
      {
        title: "Подшипники",
        subcategory: [
          // Подшипники SKF
          {
            subTitle: "Подшипники SKF",
            href: "#",
          },
          // Подшипники корпусные
          {
            subTitle: "Подшипники корпусные",
            href: "#",
          },
          // Подшипники миниатюрные
          {
            subTitle: "Подшипники миниатюрные",
            href: "#",
          },
          // Подшипники роликовые игольчатые
          {
            subTitle: "Подшипники роликовые игольчатые",
            href: "#",
          },
          // Подшипники роликовые конические
          {
            subTitle: "Подшипники роликовые конические",
            href: "#",
          },
          // Подшипники роликовые сферические
          {
            subTitle: "Подшипники роликовые сферические",
            href: "#",
          },
          // Подшипники роликовые цилиндрические
          {
            subTitle: "Подшипники роликовые цилиндрические",
            href: "#",
          },
          // Подшипники упорные шариковые
          {
            subTitle: "Подшипники упорные шариковые",
            href: "#",
          },
          // Подшипники шариковые радиально-упорные
          {
            subTitle: "Подшипники шариковые радиально-упорные",
            href: "#",
          },
          // Подшипники шариковые радиальные однорядные
          {
            subTitle: "Подшипники шариковые радиальные однорядные",
            href: "#",
          },
          // Подшипники шариковые сферические
          {
            subTitle: "Подшипники шариковые сферические",
            href: "#",
          },
          // Подшипники шарнирные
          {
            subTitle: "Подшипники шарнирные",
            href: "#",
          },
          // Ремкомплекты для стиральных машин
          {
            subTitle: "Ремкомплекты для стиральных машин",
            href: "#",
          },
          // Съемники для подшипников
          {
            subTitle: "Съемники для подшипников",
            href: "#",
          },
        ],
      },
      // Полимеры и пластики
      {
        title: "Полимеры и пластики",
        subcategory: [
          // Винипласт
          {
            subTitle: "Винипласт",
            href: "#",
          },
          // Капролон Полиамид Полиацеталь
          {
            subTitle: "Капролон Полиамид Полиацеталь",
            href: "#",
          },
          // Оргстекло
          {
            subTitle: "Оргстекло",
            href: "#",
          },
          // Пневмотрубка полиуретановая Фитинги
          {
            subTitle: "Пневмотрубка полиуретановая Фитинги",
            href: "#",
          },
          // Полиуретан
          {
            subTitle: "Полиуретан",
            href: "#",
          },
          // Фторопласт, Лента ФУМ
          {
            subTitle: "Фторопласт, Лента ФУМ",
            href: "#",
          },
        ],
      },
      // Промышленный текстиль
      {
        title: "Промышленный текстиль",
        subcategory: [
          // Брезент
          {
            subTitle: "Брезент",
            href: "#",
          },
          // Войлок
          {
            subTitle: "Войлок",
            href: "#",
          },
          // Полотно вафельное, нетканое
          {
            subTitle: "Полотно вафельное, нетканое",
            href: "#",
          },
          // Рукавицы Перчатки
          {
            subTitle: "Рукавицы Перчатки",
            href: "#",
          },
        ],
      },
      // Резинотехнические изделия
      {
        title: "Резинотехнические изделия",
        subcategory: [
          // Кольца Манжеты Сальники
          {
            subTitle: "Кольца Манжеты Сальники",
            href: "#",
          },
          // Ленты конвейерные, крепления для лент
          {
            subTitle: "Ленты конвейерные, крепления для лент",
            href: "#",
          },
          // Нестандартные РТИ
          {
            subTitle: "Нестандартные РТИ",
            href: "#",
          },
          // Покрытия резиновые (ковры)
          {
            subTitle: "Покрытия резиновые (ковры)",
            href: "#",
          },
          // Полоса Лайон
          {
            subTitle: "Полоса Лайон",
            href: "#",
          },
          // Профили, уплотнители, прокладки резиновые
          {
            subTitle: "Профили, уплотнители, прокладки резиновые",
            href: "#",
          },
          // РВД в сборе с фитингами Штуцеры БРС
          {
            subTitle: "РВД в сборе с фитингами Штуцеры БРС",
            href: "#",
          },
          // Ремни приводные
          {
            subTitle: "Ремни приводные",
            href: "#",
          },
          // Рукава гидравлические РВД с фитингами Штуцеры
          {
            subTitle: "Рукава гидравлические РВД с фитингами Штуцеры",
            href: "#",
          },
          // Рукава и шланги промышленные
          {
            subTitle: "Рукава и шланги промышленные",
            href: "#",
          },
          // Сырая резиновая смесь
          {
            subTitle: "Сырая резиновая смесь",
            href: "#",
          },
          // Техпластины
          {
            subTitle: "Техпластины",
            href: "#",
          },
          // Трубка резиновая
          {
            subTitle: "Трубка резиновая",
            href: "#",
          },
          // Трубы вентиляционные гибкие шахтные
          {
            subTitle: "Трубы вентиляционные гибкие шахтные",
            href: "#",
          },
          // Уплотнители самоклеящиеся
          {
            subTitle: "Уплотнители самоклеящиеся",
            href: "#",
          },
          // Шнуры резиновые ГОСТ 6467-79
          {
            subTitle: "Шнуры резиновые ГОСТ 6467-79",
            href: "#",
          },
        ],
      },
      // РТИ для подвижного состава РЖД
      {
        title: "РТИ для подвижного состава РЖД",
        subcategory: [
			// РТИ для подвижного состава РЖД
          {
            subTitle: "РТИ для подвижного состава РЖД",
            href: "#",
          },
        ],
      },
      // Соединения для промышленных рукавов
      {
        title: "Соединения для промышленных рукавов",
        subcategory: [
          // Камлоки (переходники) Ремонтные соединения
          {
            subTitle: "Камлоки (переходники) Ремонтные соединения",
            href: "#",
          },
          // Хомуты
          {
            subTitle: "Хомуты",
            href: "#",
          },
        ],
      },
      // Сопутствующие товары
      {
        title: "Сопутствующие товары",
        subcategory: [
          // Каболка
          {
            subTitle: "Каболка",
            href: "#",
          },
          // Круги абразивные по металлу
          {
            subTitle: "Круги абразивные по металлу",
            href: "#",
          },
          // Сантехнический лён
          {
            subTitle: "Сантехнический лён",
            href: "#",
          },
          // Смазки, клеи, герметики
          {
            subTitle: "Смазки, клеи, герметики",
            href: "#",
          },
          // Стрейч-плёнка
          {
            subTitle: "Стрейч-плёнка",
            href: "#",
          },
          // Шпагат Мешки
          {
            subTitle: "Шпагат Мешки",
            href: "#",
          },
          // Электроды
          {
            subTitle: "Электроды",
            href: "#",
          },
        ],
      },
      // Теплоизоляционные материалы
      {
        title: "Теплоизоляционные материалы",
        subcategory: [
          // Базальтовые шнуры
          {
            subTitle: "Базальтовые шнуры",
            href: "#",
          },
          // Стеклоткань Стеклопластик
          {
            subTitle: "Стеклоткань Стеклопластик",
            href: "#",
          },
        ],
      },
      // Услуги
      {
        title: "Услуги",
        subcategory: [
			// Услуги
          {
            subTitle: "Услуги",
            href: "#",
          },
        ],
      },
      // Хомуты
      {
        title: "Хомуты",
        subcategory: [
          // Кабельные стяжки
          {
            subTitle: "Кабельные стяжки",
            href: "#",
          },
          // Хомуты МИНИ
          {
            subTitle: "Хомуты МИНИ",
            href: "#",
          },
          // Хомуты проволочные
          {
            subTitle: "Хомуты проволочные",
            href: "#",
          },
          // Хомуты пружинные
          {
            subTitle: "Хомуты пружинные",
            href: "#",
          },
          // Хомуты Руббер
          {
            subTitle: "Хомуты Руббер",
            href: "#",
          },
          // Хомуты силовые двухболтовые
          {
            subTitle: "Хомуты силовые двухболтовые",
            href: "#",
          },
          // Хомуты силовые одноболтовые
          {
            subTitle: "Хомуты силовые одноболтовые",
            href: "#",
          },
          // Хомуты трубные
          {
            subTitle: "Хомуты трубные",
            href: "#",
          },
          // Хомуты червячные
          {
            subTitle: "Хомуты червячные",
            href: "#",
          },
        ],
      },
      // Цепи роликовые
      {
        title: "Цепи роликовые",
        subcategory: [
          {
            subTitle: "Цепи роликовые",
            href: "#",
          },
        ],
      },
      // Электротехнические изделия
      {
        title: "Электротехнические изделия",
        subcategory: [
          // Изолента ПВХ и ХБ
          {
            subTitle: "Изолента ПВХ и ХБ",
            href: "#",
          },
          // Картон прокладочный, электроизоляционный
          {
            subTitle: "Картон прокладочный, электроизоляционный",
            href: "#",
          },
          // Текстолит Стеклотекстолит
          {
            subTitle: "Текстолит Стеклотекстолит",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория хобби, спорт и развлечения
  {
    name: "Хобби, спорт и развлечения",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-18",
    subcategories: [
      // Детский
      {
        title: "Детский",
        subcategory: [
          // Самокаты
          {
            subTitle: "Самокаты",
            href: "#",
          },
        ],
      },
      // Моделизм
      {
        title: "Моделизм",
        subcategory: [
          // Авиа
          {
            subTitle: "Авиа",
            href: "#",
          },
          // Авто
          {
            subTitle: "Авто",
            href: "#",
          },
          // Водный
          {
            subTitle: "Водный",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория оборудование
  {
    name: "Оборудование",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-19",
    subcategories: [
      // Агропромышленное
      {
        title: "Агропромышленное",
        subcategory: [
			// Агропромышленное
          {
            subTitle: "Агропромышленное",
            href: "#",
          },
        ],
      },
      // Видеооборудование
      {
        title: "Видеооборудование",
        subcategory: [
			// Видеооборудование
          {
            subTitle: "Видеооборудование",
            href: "#",
          },
        ],
      },
      // Для СТО
      {
        title: "Для СТО",
        subcategory: [
			// Для СТО
          {
            subTitle: "Для СТО",
            href: "#",
          },
        ],
      },
      // Измерительное
      {
        title: "Измерительное",
        subcategory: [
			// Измерительное
          {
            subTitle: "Измерительное",
            href: "#",
          },
        ],
      },
      // Кинооборудование
      {
        title: "Кинооборудование",
        subcategory: [
			// Кинооборудование
          {
            subTitle: "Кинооборудование",
            href: "#",
          },
        ],
      },
      // Медицинское
      {
        title: "Медицинское",
        subcategory: [
			// Медицинское
          {
            subTitle: "Медицинское",
            href: "#",
          },
        ],
      },
      // Научное
      {
        title: "Научное",
        subcategory: [
			// Научное
          {
            subTitle: "Научное",
            href: "#",
          },
        ],
      },
      // Отопительное
      {
        title: "Отопительное",
        subcategory: [
			// Отопительное
          {
            subTitle: "Отопительное",
            href: "#",
          },
        ],
      },
      // Производственное
      {
        title: "Производственное",
        subcategory: [
			// Производственное
          {
            subTitle: "Производственное",
            href: "#",
          },
        ],
      },
      // Промышленное
      {
        title: "Промышленное",
        subcategory: [
			// Промышленное
          {
            subTitle: "Промышленное",
            href: "#",
          },
        ],
      },
      // Фотооборудование
      {
        title: "Фотооборудование",
        subcategory: [
			// Фотооборудование
          {
            subTitle: "Фотооборудование",
            href: "#",
          },
        ],
      },
      // Швейное
      {
        title: "Швейное",
        subcategory: [
			// Швейное
          {
            subTitle: "Швейное",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория робототехника
  {
    name: "Робототехника",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-20",
    subcategories: [
      // Бытовые роботы
      {
        title: "Бытовые роботы",
        subcategory: [
			// Бытовые роботы
          {
            subTitle: "Бытовые роботы",
            href: "#",
          },
        ],
      },
      // Промышленные роботы
      {
        title: "Промышленные роботы",
        subcategory: [
			// Промышленные роботы
          {
            subTitle: "Промышленные роботы",
            href: "#",
          },
        ],
      },
      // Робототехника
      {
        title: "Робототехника",
        subcategory: [
			// Робототехника
          {
            subTitle: "Робототехника",
            href: "#",
          },
        ],
      },
      // Спортивная робототехника
      {
        title: "Спортивная робототехника",
        subcategory: [
			// Спортивная робототехника
          {
            subTitle: "Спортивная робототехника",
            href: "#",
          },
        ],
      },
      // Учебная робототехника
      {
        title: "Учебная робототехника",
        subcategory: [
			// Учебная робототехника
          {
            subTitle: "Учебная робототехника",
            href: "#",
          },
        ],
      },
      // Экзоскелеты
      {
        title: "Экзоскелеты",
        subcategory: [
			// Экзоскелеты
          {
            subTitle: "Экзоскелеты",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория оптика
  {
    name: "Оптика",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-21",
    subcategories: [
      // Зрительные трубы
      {
        title: "Зрительные трубы",
        subcategory: [
			// Зрительные трубы
          {
            subTitle: "Зрительные трубы",
            href: "#",
          },
        ],
      },
      // Лазеры
      {
        title: "Лазеры",
        subcategory: [
			// Лазеры
          {
            subTitle: "Лазеры",
            href: "#",
          },
        ],
      },
      // Микроскопы
      {
        title: "Микроскопы",
        subcategory: [
			// Микроскопы
          {
            subTitle: "Микроскопы",
            href: "#",
          },
        ],
      },
      // Оптический прицелы
      {
        title: "Оптический прицелы",
        subcategory: [
			// Оптический прицелы
          {
            subTitle: "Оптический прицелы",
            href: "#",
          },
        ],
      },
      // Приборы ночного видения
      {
        title: "Приборы ночного видения",
        subcategory: [
			// Приборы ночного видения
          {
            subTitle: "Приборы ночного видения",
            href: "#",
          },
        ],
      },
      // Телескопы
      {
        title: "Телескопы",
        subcategory: [
			// Телескопы
          {
            subTitle: "Телескопы",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория Авто мото спорт
  {
    name: "Авто мото спорт",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-22",
    subcategories: [
      // Картинг
      {
        title: "Картинг",
        subcategory: [
			// Картинг
          {
            subTitle: "Картинг",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория авиция
  {
    name: "Авиация",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-23",
    subcategories: [
      //
      {
        title: "",
        subcategory: [
          {
            subTitle: "",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория Литература и обучение
  {
    name: "Литература и обучение",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-24",
    subcategories: [
      //
      {
        title: "",
        subcategory: [
          {
            subTitle: "",
            href: "#",
          },
        ],
      },
    ],
  },
  // Категория Станки
  {
    name: "Станки",
    nameArrow: "img/catalog/arrow__title.svg",
    linkId: "categories-link-25",
    subcategories: [
      //
      {
        title: "",
        subcategory: [
          {
            subTitle: "",
            href: "#",
          },
        ],
      },
    ],
  },
];
// блоки, в которые будет вставляться разметка
const rootWrapper = document.getElementById("catalog-list"),
  modalWrapper = document.querySelector(".output"),
  mobileWrapperCategories = document.querySelector("#main-box"),
  accordionWrapper = document.querySelector("#accordion");
// вставка объектов в разметку
class Output {
  render() {
    // левый блок
    let htmlCatalog = "";
    categories.forEach(({ name, linkId, img, nameImg, rightArrowImg }) => {
      htmlCatalog += `
			<li class="catalog__item">
				<a class="catalog__item-link ${linkId} ${
        linkId === "link-1" ? "active" : ""
      } item-link-dropdown" href="#">
					<div class="catalog__item-left">
						<img src="${img}" alt="${nameImg}">
					</div>
					<span class="catalog__title">
						${name}
					</span>
					<div class="catalog__item-right">
						<img src="${rightArrowImg}" alt="arrow right">
					</div>
				</a>
			</li>
			`;
    });
    rootWrapper.innerHTML = htmlCatalog;
    // **********
    // правый блок
    function getChild(subcategories) {
      let htmlCatalogChild = "";
      subcategories.forEach(({ title, subcategory }) => {
        let htmlCatalogSubTitleChild = "";
        subcategory?.forEach(({ subTitle, href }) => {
          htmlCatalogSubTitleChild += `
			<div class="child-item__text">
				<a class="child-item__text-link item-link-dropdown" href="${href}">
					${subTitle}
				</a>
			</div>
			`;
          return htmlCatalogSubTitleChild;
        });
        htmlCatalogChild += `
			<div class="child-item">
				<a class="child-item__link item-link-dropdown" href="#">
					${title}
				</a>
				<div class="child-item__container">
					${htmlCatalogSubTitleChild}
					<button class="child-item-show">
						Показать еще
					</button>
				</div>
			</div>`;
      });
      return htmlCatalogChild;
    }
    let htmlCatalogRight = "";
    categoriesInner.forEach(({ name, nameArrow, linkId, subcategories }) => {
      htmlCatalogRight += `
		<div class="main-categories ${linkId} ${
        linkId === "categories-link-1" ? "active" : ""
      }">
			<a class="main-categorise__title item-link-dropdown" href="#">
				${name}
				<img class="main-categories__img" src="${nameArrow}" alt="">
			</a>
			<div class="child__categories">
				${getChild(subcategories)}
			</div>
		</div>
		`;
    });
    modalWrapper.innerHTML = htmlCatalogRight;
    // **********
    // **********
    // **********
    // **********
    // **********
    // мобильная версия каталога
    // блок с выбором категории
    function getInnerLinks(innerLinks, subTitle, subcategory) {
      if (innerLinks) {
        let htmlCatalogInnerOutput = "";
        innerLinks.forEach(({ innerLinkTitle, innerHref }) => {
          htmlCatalogInnerOutput += `
				  <div class="accordion__content">
					  <a class="accordion__content-link" href="${innerHref}">${innerLinkTitle}</a>
				  </div>
				  `;
        });
        return `
			<div class="accordion__item accordion__item-fix">
				<div class="accordion__header">
					${subTitle}
				</div>
				<div class="accordion__body">
					${htmlCatalogInnerOutput}
				</div>
			  </div> 
			`;
      } else {
        return `<a class="accordion__content-link" href="${subcategory.href}">${subcategory.subTitle}</a>`;
      }
    }
    function test(subcategory) {
      let htmlTest = "";
      subcategory.forEach((item) => {
        htmlTest += getInnerLinks(item?.innerLinks, item?.subTitle, item);
      });
      return htmlTest;
    }
    function getMobileChild(subcategories) {
      let htmlCatalogChild = "";
      subcategories.forEach(({ title, subcategory }) => {
        htmlCatalogChild += `
				<div class="accordion__item">
					<div class="accordion__header">
						${title}
					</div>
					<div class="accordion__body">
						<div class="accordion__content">
							${test(subcategory)}
						</div>
					</div>
				</div>
			  `;
      });
      return htmlCatalogChild;
    }
    let htmlCatalogInner = "";
    categoriesInner.forEach(({ subcategories }) => {
      htmlCatalogInner += `
		<div class="content">
			${getMobileChild(subcategories)}
		</div>
		`;
    });
    accordionWrapper.innerHTML = htmlCatalogInner;
  }
}
// сам вывод информации в каталог
const outputPage = new Output();
outputPage.render();