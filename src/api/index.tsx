export type TypeHistoricalDate = {
  title: string;
  date: { start: number; end: number };
  event: { date: number; text: string }[];
}[];

export const historicalDate = [
  {
    title: "Музыка",
    date: { start: 1980, end: 1986 },
    event: [
      {
        date: 1980,
        text: "Мадонна выпускает свой дебютный альбом “The Madonna Album”",
      },
      {
        date: 1981,
        text: "Майкл Джексон выпускает свой первый сольный альбом “плохо”",
      },
      {
        date: 1982,
        text: "Группа Квин выпускает альбом “номер один”, который становится самым продаваемым альбомом в Великобритании",
      },
      {
        date: 1983,
        text: "Принс выпускает альбом “1999”, который становится одним из самых продаваемых альбомов в истории",
      },
      {
        date: 1984,
        text: "Брюс Спрингстин выпускает альбом “Бродвейский идиот”, который получает пять Грэмми",
      },
      {
        date: 1985,
        text: "AC/DC выпускают альбом “Фьюз”, который становится их самым продаваемым альбомом",
      },
      {
        date: 1986,
        text: "Дэвида Боуи выпускает альбом “неизбежность”, который становится его самым продаваемым альбомом за последние десять лет",
      },
    ],
  },
  {
    title: "Кино",
    date: { start: 1987, end: 1991 },
    event: [
      {
        date: 1987,
        text: "Премьера фильма «Робокоп» — американского фантастического боевика режиссёра Де Пальмы",
      },
      {
        date: 1988,
        text: "Выход фильма “Человек дождя” с Томом Крузом и Дакастоном в главных ролях",
      },
      {
        date: 1989,
        text: "Премьера фильма “Бэтмен” с Майклом Китоном в роли Бэтмена",
      },
      {
        date: 1990,
        text: "Выход на экраны фильма “Один дома” с Маколеем Калкиным в главной роли",
      },
      {
        date: 1991,
        text: "Премьера блокбастера “Терминатор 2: Судный день” с Арнольдом Шварценеггером в роли Терминатора",
      },
    ],
  },
  {
    title: "Литература",
    date: { start: 1992, end: 1997 },
    event: [
      {
        date: 1992,
        text: "Была опубликована книга “Меч Предназначения” Сапковский Анджей",
      },
      {
        date: 1993,
        text: "Была опубликована книга “Код Да Винчи” Дэна Брауна",
      },
      {
        date: 1994,
        text: "Увидел свет “Роковая музыка” Пратчетт Терри",
      },
      {
        date: 1995,
        text: "Вышел в свет роман “Бесконечная история” Михаэля Энде",
      },
      {
        date: 1996,
        text: "Была опубликована “Алхимик” Пауло Коэльо",
      },
      {
        date: 1997,
        text: "Увидел свет “Гарри Поттер и философский камень” Дж.К. Роулинг",
      },
    ],
  },

  {
    title: "Технологии",
    date: { start: 1999, end: 2004 },
    event: [
      {
        date: 1999,
        text: "Первый прототип iPhone представлен на конференции MacWorld Expo в Сан-Франциско",
      },
      {
        date: 2000,
        text: "Microsoft выпускает Windows XP, первую версию операционной системы для домашнего использования",
      },
      {
        date: 2001,
        text: "Первое публичное бета-тестирование Skype",
      },
      {
        date: 2002,
        text: "Запуск Amazon Kindle, первой электронной книги, продаваемой через интернет",
      },
      {
        date: 2003,
        text: "Sony выпускает PlayStation 3",
      },
      {
        date: 2004,
        text: "Google выпускает Gmail, сервис электронной почты с большим объемом памяти и отсутствием рекламы",
      },
    ],
  },
  {
    title: "Программирование",
    date: { start: 2007, end: 2012 },
    event: [
      {
        date: 2007,
        text: "Основание компании Google",
      },
      {
        date: 2008,
        text: "Компания Google представила язык программирования Go, разработанный Робертом Гризмером и Кеном Томпсоном",
      },
      {
        date: 2009,
        text: "Корпорация Microsoft выпустила среду разработки Visual Studio 2010, которая стала одной из самых популярных сред разработки",
      },
      {
        date: 2010,
        text: "Релиз операционной системы Android 4",
      },
      {
        date: 2011,
        text: "Компания Adobe Systems выпустила первую версию среды разработки Adobe Dreamweaver CC, предназначенную для создания веб-сайтов и мобильных приложений",
      },
      {
        date: 2012,
        text: "Представлен язык программирования Julia, разработанный Джеффри Бэкином и выпущенный под лицензией MIT",
      },
    ],
  },
  {
    title: "Наука",
    date: { start: 2015, end: 2020 },
    event: [
      {
        date: 2015,
        text: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        date: 2016,
        text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        date: 2017,
        text: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        date: 2018,
        text: "Были обнаружены две критические уязвимости в микропроцессорах: Meltdown и Spectre",
      },
      {
        date: 2019,
        text: "Ученые из Гарвардского университета сообщили о создании квантового компьютера на 53 кубита",
      },
      {
        date: 2020,
        text: "Ученые из Массачусетского технологического института (MIT) и Стэнфордского университета объявили о создании первого в мире полностью функционального квантового симулятора",
      },
    ],
  },
];