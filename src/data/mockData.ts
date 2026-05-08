export const categories = [
  { id: 'all', label: 'Все работы' },
  { id: 'wedding', label: 'Свадьбы' },
  { id: 'portrait', label: 'Портреты' },
  { id: 'commercial', label: 'Коммерческая' },
  { id: 'family', label: 'Семейная' },
  { id: 'events', label: 'Мероприятия' },
];

export const albums = [
  { id: 'wedding-1', title: 'Свадьба Анны и Михаила', category: 'wedding', coverAspect: 'tall', photos: 24, year: 2024 },
  { id: 'wedding-2', title: 'Летняя свадьба в саду', category: 'wedding', coverAspect: 'tall', photos: 30, year: 2024 },
  { id: 'portrait-1', title: 'Портретная сессия', category: 'portrait', coverAspect: 'wide', photos: 15, year: 2024 },
  { id: 'portrait-2', title: 'Мужской портрет', category: 'portrait', coverAspect: 'tall', photos: 12, year: 2023 },
  { id: 'commercial-1', title: 'Коммерческая съёмка для бренда', category: 'commercial', coverAspect: 'wide', photos: 20, year: 2024 },
  { id: 'family-1', title: 'Семья Петровых', category: 'family', coverAspect: 'wide', photos: 18, year: 2024 },
  { id: 'events-1', title: 'Корпоратив компании', category: 'events', coverAspect: 'wide', photos: 45, year: 2023 },
  { id: 'wedding-3', title: 'Зимняя свадьба', category: 'wedding', coverAspect: 'tall', photos: 28, year: 2023 },
  { id: 'portrait-3', title: 'Детская студийная сессия', category: 'portrait', coverAspect: 'wide', photos: 22, year: 2024 },
  { id: 'commercial-2', title: 'Предметная съёмка', category: 'commercial', coverAspect: 'tall', photos: 16, year: 2023 },
  { id: 'family-2', title: 'Новогодняя семейная съёмка', category: 'family', coverAspect: 'tall', photos: 20, year: 2023 },
  { id: 'events-2', title: 'Конференция IT-компании', category: 'events', coverAspect: 'wide', photos: 35, year: 2024 },
];

export const services = [
  {
    id: 'wedding',
    title: 'Свадебная съёмка',
    category: 'b2c',
    description: 'Ваш особенный день заслуживает профессиональной съёмки. Я создам воспоминания, которые будут радовать вас всю жизнь.',
    plans: [
      {
        name: 'Базовый',
        price: 25000,
        duration: '4 часа',
        features: ['4 часа съёмки', '150+ обработанных фото', 'Онлайн-галерея', 'USB-флешка с фотографиями'],
      },
      {
        name: 'Стандарт',
        price: 45000,
        duration: '8 часов',
        features: ['8 часов съёмки', '300+ обработанных фото', 'Онлайн-галерея', 'USB-флешка', 'Фотокнига 20×20 см', 'Съёмка сборов невесты'],
      },
      {
        name: 'Премиум',
        price: 70000,
        duration: 'Весь день',
        features: ['Съёмка весь день', '500+ обработанных фото', 'Онлайн-галерея', 'USB-флешка', 'Фотокнига 30×30 см', 'Съёмка сборов', 'Love Story съёмка'],
      },
    ],
  },
  {
    id: 'portrait',
    title: 'Портретная съёмка',
    category: 'b2c',
    description: 'Индивидуальные и семейные портреты в студии или на природе. Создадим образ, который вам понравится.',
    plans: [
      {
        name: 'Мини',
        price: 5000,
        duration: '1 час',
        features: ['1 час съёмки', '20+ обработанных фото', 'Онлайн-галерея', '1 образ'],
      },
      {
        name: 'Стандарт',
        price: 9000,
        duration: '2 часа',
        features: ['2 часа съёмки', '40+ обработанных фото', 'Онлайн-галерея', '2–3 образа', 'Помощь со сменой локаций'],
      },
      {
        name: 'Расширенный',
        price: 15000,
        duration: '3 часа',
        features: ['3 часа съёмки', '70+ обработанных фото', 'Онлайн-галерея', '3–4 образа', 'Студия + улица', 'Распечатки 5 фото'],
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Коммерческая съёмка',
    category: 'b2b',
    description: 'Профессиональные фотографии для вашего бизнеса: продуктовая, имиджевая, репортажная съёмка.',
    plans: [
      {
        name: 'Продуктовая',
        price: 15000,
        duration: 'от 3 часов',
        features: ['От 3 часов съёмки', '50+ обработанных фото', 'Белый и серый фоны', 'Быстрая отдача (3–5 дней)', 'Права на коммерческое использование'],
      },
      {
        name: 'Имиджевая',
        price: 30000,
        duration: 'от 5 часов',
        features: ['От 5 часов съёмки', '100+ обработанных фото', 'Разнообразные локации', 'Отдача за 7 дней', 'Полные права использования'],
      },
      {
        name: 'Корпоративная',
        price: 50000,
        duration: 'от 8 часов',
        features: ['От 8 часов съёмки', '200+ обработанных фото', 'Командные и индивидуальные фото', 'Отдача за 10 дней', 'Полные права использования', 'Технический директор на площадке'],
      },
    ],
  },
];

export const reviews = [
  {
    id: 1,
    clientName: 'Анна Смирнова',
    rating: 5,
    content: 'Эльвира — невероятный фотограф! Она поймала все самые важные моменты нашей свадьбы. Фотографии получились просто волшебными, мы до сих пор пересматриваем их с мужем.',
    projectType: 'Свадебная съёмка',
  },
  {
    id: 2,
    clientName: 'Иван Петров',
    rating: 5,
    content: 'Заказывали коммерческую съёмку для нашего бренда. Результат превзошёл все ожидания — фотографии отлично смотрятся в рекламных материалах. Очень профессиональный подход.',
    projectType: 'Коммерческая съёмка',
  },
  {
    id: 3,
    clientName: 'Мария Козлова',
    rating: 5,
    content: 'Делали семейную фотосессию с детьми. Эльвира нашла подход даже к самым непоседливым! Фотографии живые, настоящие, полные любви. Однозначно рекомендую.',
    projectType: 'Семейная съёмка',
  },
  {
    id: 4,
    clientName: 'Дмитрий Волков',
    rating: 5,
    content: 'Портретная сессия прошла очень комфортно. Я никогда не любил фотографироваться, но Эльвира создала такую атмосферу, что я расслабился и фотографии получились естественными.',
    projectType: 'Портретная съёмка',
  },
];

export const photoCounts = [8, 12, 10, 9, 8, 12]; // grid sizes for album page
