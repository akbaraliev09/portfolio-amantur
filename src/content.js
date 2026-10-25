// ===== ВСЕ ДАННЫЕ ПОРТФОЛИО ЛЕЖАТ ЗДЕСЬ =====

export const profile = {
  github: 'akbaraliev09',
  email: 'akbaralievamantur41@gmail.com',
  telegram: 'vrisma',
  phone: '+996703851493',
  phoneView: '+996 703 851 493',
  showPhone: true, 
  hasResume: false,
}

export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router', 'Redux', 'Responsive design'],
  tools: ['Git', 'GitHub', 'Vite', 'Vercel', 'VS Code'],
  data: ['REST API', 'Firebase Auth', 'Firestore'],
}

export const projects = [
  {
    id: 'autoparts',
    image: '/images/projects/autoparts.jpg',
    tech: ['React', 'Vite', 'React Router', 'Firebase', 'Firestore', 'REST API', 'Recharts', 'Cloudinary', 'EmailJS', 'Vercel'],
    live: 'https://autoparts-project-q935.vercel.app/',
    code: 'https://github.com/akbaraliev09/autoparts-project',
    ru: {
      title: 'AutoParts KG',
      desc: 'Интернет-магазин автозапчастей: каталог с поиском и фильтрами, корзина, оформление заказа, демо-оплата, личный кабинет и админ-панель с графиками.',
      features: [
        'Три языка интерфейса (RU / EN / KG), тёмная и светлая тема',
        'Вход по почте и через Google (Firebase Authentication)',
        'Товары из MockAPI, заказы и отзывы в Firestore в реальном времени',
        'Админ-панель: товары, заказы, пользователи, графики',
        'Письмо о новом заказе на почту (EmailJS)',
      ],
    },
    en: {
      title: 'AutoParts KG',
      desc: 'An online auto parts store: a catalog with search and filters, cart, checkout, demo payment, user account and an admin panel with charts.',
      features: [
        'Three interface languages (RU / EN / KG), dark and light theme',
        'Email and Google sign-in (Firebase Authentication)',
        'Products from MockAPI, orders and reviews in Firestore in real time',
        'Admin panel: products, orders, users, charts',
        'Email notification about a new order (EmailJS)',
      ],
    },
  },
    {
    id: 'weather',
    image: '/images/projects/weather.jpg',
    tech: ['React', 'Vite', 'Open-Meteo API', 'localStorage', 'Vercel'],
    live: 'https://weather-now-six-theta.vercel.app/',
    code: 'https://github.com/akbaraliev09/weather-now',
    ru: {
      title: 'Weather Now',
      desc: 'Приложение погоды: поиск города, текущая погода, прогноз на 24 часа и на 6 дней.',
      features: [
        'Русский и английский интерфейс, тёмная и светлая тема',
        'Температура в °C и °F',
        'Избранные города сохраняются в браузере',
        'Определение местоположения и поиск города с подсказками',
      ],
    },
    en: {
      title: 'Weather Now',
      desc: 'A weather app: city search, current weather, a 24-hour and a 6-day forecast.',
      features: [
        'Russian and English interface, dark and light theme',
        'Temperature in °C and °F',
        'Favorite cities are saved in the browser',
        'Geolocation and city search with suggestions',
      ],
    },
  },
  {
    id: 'money-tracker',
    image: '/images/projects/money-tracker.jpg',
    tech: ['React', 'Vite', 'Redux Toolkit', 'localStorage', 'Vercel'],
    live: 'https://money-tracker-sage-two.vercel.app/',
    code: 'https://github.com/akbaraliev09/money-tracker',
    ru: {
      title: 'Money Tracker',
      desc: 'Учёт доходов и расходов на Redux Toolkit с фильтрами и графиками.',
      features: [
        'Добавление и удаление операций, данные сохраняются в браузере',
        'Фильтры по типу, категории и месяцу',
        'Графики по месяцам и по категориям',
        'Экспорт в CSV, демо-данные одной кнопкой',
      ],
    },
    en: {
      title: 'Money Tracker',
      desc: 'An income and expense tracker built with Redux Toolkit, with filters and charts.',
      features: [
        'Add and delete transactions, data is saved in the browser',
        'Filters by type, category and month',
        'Charts by month and by category',
        'CSV export, demo data with one button',
      ],
    },
  },
  {
    id: 'brick-landing',
    image: '/images/projects/brick.jpg',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    live: 'https://brick-landing-eta.vercel.app/',
    code: 'https://github.com/akbaraliev09/brick-landing',
    ru: {
      title: 'Brick Landing',
      desc: 'Лендинг компании, которая продаёт облицовочный кирпич в Актобе.',
      features: [
        'Каталог разных видов облицовочного кирпича',
        'Адаптивная вёрстка для телефона и компьютера',
        'Блок с контактами для заявки',
      ],
    },
    en: {
      title: 'Brick Landing',
      desc: 'A landing page for a company that sells facing bricks in Aktobe.',
      features: [
        'A catalog of different types of facing bricks',
        'Responsive layout for phone and desktop',
        'A contact block for requests',
      ],
    },
  },
  {
    id: 'air-landing',
    image: '/images/projects/air.jpg',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    live: 'https://air-landing-neon.vercel.app/',
    code: 'https://github.com/akbaraliev09/air-landing',
    ru: {
      title: 'Air Charter Landing',
      desc: 'Лендинг аренды чартерных рейсов: обычные и люксовые чартеры.',
      features: [
        'Варианты чартеров: обычные и люксовые',
        'Адаптивная вёрстка для телефона и компьютера',
        'Блок с контактами для заявки',
      ],
    },
    en: {
      title: 'Air Charter Landing',
      desc: 'A landing page for charter flight rental: standard and luxury charters.',
      features: [
        'Charter options: standard and luxury',
        'Responsive layout for phone and desktop',
        'A contact block for requests',
      ],
    },
  },
]

export const text = {
  ru: {
    initials: 'АА',
    shortName: 'Амантур',
    nav: { about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', education: 'Образование', contact: 'Контакты' },
    hero: {
      hello: 'Привет, меня зовут',
      name: 'Амантур Акбаралиев',
      role: 'Frontend Developer',
      lead: 'Создаю адаптивные сайты на React: от вёрстки до работы с данными и публикации в интернете.',
      projects: 'Мои проекты',
      contact: 'Связаться',
      resume: 'Скачать резюме',
      location: 'Бишкек, Кыргызстан',
    },
    about: {
      title: 'Обо мне',
      text: [
        'Я начинающий frontend-разработчик из Бишкека. Изучаю HTML, CSS, JavaScript и React и создаю сайты, которыми удобно пользоваться и на компьютере, и на телефоне.',
        'Мой главный проект: интернет-магазин автозапчастей AutoParts KG с каталогом, корзиной, админ-панелью, заказами и отзывами в реальном времени. Я продолжаю учиться и хочу расти как разработчик.',
      ],
    },
    skills: {
      title: 'Навыки',
      note: 'Уровень: начальный. Постоянно учусь и практикуюсь.',
      groups: { frontend: 'Frontend', tools: 'Инструменты', data: 'Данные и сервисы' },
    },
    projects: {
      title: 'Проекты',
      subtitle: 'Можно открыть сайт и посмотреть код.',
      live: 'Открыть сайт',
      code: 'Код на GitHub',
    },
    education: {
      title: 'Образование и языки',
      studyTitle: 'Образование',
      items: [
        { title: 'Обучение frontend-разработке', sub: 'React, JavaScript, HTML, CSS' },
        { title: 'Школа', sub: 'Бишкек, Кыргызстан' },
      ],
      langTitle: 'Языки',
      languages: [
        { name: 'Кыргызский', level: 'Родной' },
        { name: 'Русский', level: 'Разговорный' },
        { name: 'Английский', level: 'Базовый' },
      ],
    },
    contact: { title: 'Контакты', subtitle: 'Напишите мне, буду рад общению.', phone: 'Телефон' },
  },
  en: {
    initials: 'AA',
    shortName: 'Amantur',
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      hello: "Hi, my name is",
      name: 'Amantur Akbaraliev',
      role: 'Frontend Developer',
      lead: 'I build responsive websites with React: from layout to working with data and publishing online.',
      projects: 'My projects',
      contact: 'Contact me',
      resume: 'Download resume',
      location: 'Bishkek, Kyrgyzstan',
    },
    about: {
      title: 'About me',
      text: [
        "I'm a junior frontend developer from Bishkek. I study HTML, CSS, JavaScript and React, and I build websites that are easy to use on both desktop and mobile.",
        'My main project is AutoParts KG, an online auto parts store with a catalog, cart, admin panel, and real-time orders and reviews. I keep learning and want to grow as a developer.',
      ],
    },
    skills: {
      title: 'Skills',
      note: 'Level: beginner. I keep learning and practicing.',
      groups: { frontend: 'Frontend', tools: 'Tools', data: 'Data & services' },
    },
    projects: {
      title: 'Projects',
      subtitle: 'You can open the live site and read the code.',
      live: 'Live site',
      code: 'Code on GitHub',
    },
    education: {
      title: 'Education & languages',
      studyTitle: 'Education',
      items: [
        { title: 'Frontend development training', sub: 'React, JavaScript, HTML, CSS' },
        { title: 'School', sub: 'Bishkek, Kyrgyzstan' },
      ],
      langTitle: 'Languages',
      languages: [
        { name: 'Kyrgyz', level: 'Native' },
        { name: 'Russian', level: 'Conversational' },
        { name: 'English', level: 'Basic' },
      ],
    },
    contact: { title: 'Contact', subtitle: 'Write to me, I would be glad to talk.', phone: 'Phone' },
  },
}
