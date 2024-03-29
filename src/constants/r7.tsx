import { iconsR7 } from '../assets/r7/icons'
import { productImg } from '../assets/r7'
export const productsR7 = [
  {
    title: 'Редакторы документов',
    icon: (
      <img
        className="w-full"
        src={iconsR7.organizer}
        alt="Редакторы документов"
      />
    ),
  },
  {
    title: 'Корпоративный сервер',
    icon: (
      <img className="w-full" src={iconsR7.tables} alt="Корпоративный сервер" />
    ),
  },
  {
    title: 'Сервер документов',
    icon: <img className="w-full" src={iconsR7.doc} alt="Сервер документов" />,
  },
  {
    title: 'Мобильные приложения',
    icon: (
      <img className="w-full" src={iconsR7.pleer} alt="Мобильные приложения" />
    ),
  },
  {
    title: 'Органайзер',
    icon: (
      <img className="w-full" src={iconsR7.presentation} alt="Органайзер" />
    ),
  },
  {
    title: 'Команды',
    icon: <img className="w-full" src={iconsR7.conf} alt="Команды" />,
  },
]

export const edtorR7 = [
  {
    id: 1,
    feature: 'Совместимость со всеми ОС',
    description:
      'Р7-Офис совместим с операционными системами семейств Альт и Rosa Linux, Astra Linux, РЕД ОС и другими. Офисный пакет также работает с Windows (32 и 64 бита), Debian, Ubuntu и производными, дистрибутивами на базе RPM, Mac OS 10.10 или выше.',
  },
  {
    id: 2,
    feature: 'Поддержка форматов Microsoft',
    description:
      'Р7-Офис гарантирует максимальную совместимость с Microsoft и поддерживает другие популярные форматы, включая ODF.',
  },
  {
    id: 3,
    feature: 'Соответствие требованиям законодательства РФ',
    description:
      'Р7-Офис полностью соответствует всем необходимым для использования в госорганах требованиям, включая Постановления Правительства РФ №1236 от 16.11.2015 и №325 от 23.03.2017.',
  },
  {
    id: 4,
    feature: 'Удобный вкладочный интерфейс',
    description:
      'Вам не нужно открывать множество окон одной и той же программы: вы можете работать с текстовыми документами, таблицами и презентациями в одном окне, переключаясь между вкладками.',
  },
  {
    id: 5,
    feature: 'Плагины',
    description:
      'Вы можете добавить в редакторы любые нужные вам функции, написав их самостоятельно или подключив уже существующие сервисы: Главред, Яндекс.Переводчик, редактор изображений от Adobe и другие.',
  },
  {
    id: 6,
    feature: 'Версии для госучреждений и образования',
    description:
      'Р7-Офис - полнофункциональный офисный пакет, рекомендованный для организаций, работающих с конфиденциальной информацией. Приложение развивается с учетом нужд госучреждений и образования и поставляется по доступным ценам.',
  },
]
export const serverR7 = [
  {
    id: 1,
    feature: 'Работайте совместно',
    description: 'Редактируйте документы, таблицы и презентации совместно',
  },
  {
    id: 2,
    feature: 'Общайтесь',
    description:
      'Взаимодействуйте через почту, внутреннюю соцсеть или мессенджер',
  },
  {
    id: 3,
    feature: 'Планируйте',
    description:
      'Организовывайте встречи и собрания, планируйте расписание с помощью календаря',
  },
  {
    id: 3,
    feature: 'Управляйте данными',
    description:
      'Настройте доступ, отслеживайте действия сотрудников, предотвращайте утечки',
  },
]
export const serverDocR7 = [
  {
    id: 1,
    feature: 'Профессиональный онлайн-редактор текстовых документов',
    description:
      'Просматривайте, создавайте и редактируйте текстовые документы профессионального качества любой сложности. Работайте со всеми ключевыми форматами: DOC, DOCX, PDF, TXT, ODT, RTF, HTML, EPUB.',
  },
  {
    id: 2,
    feature: 'Мощный онлайн-редактор электронных таблиц',
    description:
      'Используйте электронные таблицы для автоматизации вычислений, организации и анализа данных. Открывайте и редактируйте таблицы в формате XLS, XLSX, ODS, CSV и сохраняйте их в PDF.',
  },
  {
    id: 3,
    feature: 'Онлайн-редактор для создания эффектных презентаций',
    description:
      'Создавайте яркие демонстрационные материалы. Просматривайте и редактируйте презентации в формате PPT, PPTX, ODP.',
  },
]
export const androidR7 = [
  {
    id: 1,
    feature: 'Управление файлами, хранящимися в корпоративном облаке Р7-Офис',
    description: '',
  },
  {
    id: 2,
    feature:
      'Создание и редактирование текстовых документов, таблиц и презентаций',
    description: '',
  },
  {
    id: 3,
    feature: 'Печать файлов, просмотр PDF и изображений',
    description: '',
  },
  {
    id: 4,
    feature:
      'Открытие доступа к файлу на чтение, редактирование или рецензирование',
    description: '',
  },
  {
    id: 5,
    feature: 'Работа без подключения к интернету (доступно для iOS)',
    description: '',
  },
  {
    id: 6,
    feature: 'Совместное редактирование в реальном времени',
    description: '',
  },
]
export const organizerR7 = [
  {
    id: 1,
    feature: 'Надежный почтовый клиент',
    description:
      'Управляйте электронной почтой, делайте рассылки и забудьте о спаме! Поддерживаются все почтовые протоколы.',
  },
  {
    id: 2,
    feature: 'Удобная адресная книга',
    description:
      'Ваши личные и рабочие контакты синхронизированны с почтой и календарем.',
  },
  {
    id: 3,
    feature: 'Наглядное расписание',
    description:
      'Ваше расписание и список дел - на день, неделю или месяц - всегда под рукой.',
  },
  {
    id: 4,
    feature: 'Быстрая организация встреч и собраний',
    description:
      'Общие календари помогут вам выбрать удобное время для собрания и отправить приглашения коллегам.',
  },
]
export const teamR7 = [
  {
    id: 1,
    feature: '',
    description: '',
  },
]

export const editorR7Desc = [
  {
    id: 1,
    title: 'Текстовый редактор:',
    img: productImg.r1,
    description:
      'Просматривайте, создавайте и редактируйте текстовые документы профессионального качествa  любой сложности. Работайте со всеми ключевыми форматами: DOCX, DOC, PDF, TXT, ODT, RTF, HTML, EPUB.',
    advantages: 'Преимущества',
    advantagesList: [
      'Полная совместимость с форматами MS Office (.doc и .docx) и OpenDocument (.odt)',
      'Множество инструментов для совместной работы',
      'Удобное форматирование текстов, страниц и абзацев, нумерация страниц',
      'Максимальное количество шрифтов и стилей',
      'Изменение, добавление, удаление предустановленных стилей',
      'Добавление ссылок, таблиц и диаграмм',
      'Вставка изображений, автофигур, формул и текстовых объектов',
      'Создание нумерованных и маркированных списков',
    ],
  },
  {
    id: 2,
    title: 'Редактор таблиц:',
    img: productImg.r2,
    description:
      'Используйте электронные таблицы для автоматизации вычислений, организации и анализа данных. Открывайте и редактируйте таблицы в формате XLS, XLSX, ODS, CSV и сохраняйте их в PDF.',
    advantages: '',
    advantagesList: [
      'Полная совместимость с форматами MS Office (.xls и .xlsx) и OpenDocument (.ods)',
      'Множество инструментов для совместной работы',
      'Более 300 функций и формул: финансовые, статистические, информационнотехнологические, инженерные, математические, поисковые и многие другие',
      'Вставка изображений, ссылок, автофигур, диаграмм и текстовых объектов',
      'Использование именованных диапазонов',
      'Изменение формата представления чисел',
      'Сортировка и фильтрация данных, шаблоны таблиц',
      'Поиск и автоматическая замена данных',
    ],
  },
  {
    id: 3,
    title: 'Редактор презентаций:',
    img: productImg.r3,
    description:
      'Создавайте яркие демонстрационные материалы. Просматривайте и редактируйте презентации в формате PPTX, PPT, ODP.',
    advantages: '',
    advantagesList: [
      'Полная совместимость с форматами MS Office (.pptx и .ppt) и OpenDocument (.odp)',
      'Множество инструментов для совместной работы',
      'Вставка изображений, автофигур и диаграмм, применение переходов',
      'Добавление и форматирование текста и таблиц',
      'Создание нумерованных и маркированных списков',
    ],
  },
  {
    id: 4,
    title: 'Средства просмотра и воспроизведения файлов:',
    img: productImg.r4,
    description:
      'Просматривайте документы и изображения, открывайте аудио и видеофайлы всех популярных форматов, включая .bmp, .jpg, .jpeg, .png, .gif, .tif, .tiff, .avi, .mpeg, .mp3.',
    advantages: '',
    advantagesList: [],
  },
]
export const serverR7Desc = [
  {
    id: 1,
    title: 'Редакторы Р7',
    img: productImg.r1,
    description: '',
    advantages: '',
    advantagesList: [
      'Полная совместимость с форматами MS Office (.doc и .docx) и OpenDocument (.odt)',
      'Профессиональный онлайн-редактор текстовых документов.',
      'Мощный онлайн-редактор электронных таблиц.',
      'Редактор для создания презентаций онлайн.',
      'Встроенные дополнения: переводчик, редактор изображений.',
      'Совместимость с форматами MS Office и OpenDocument.',
      'Два режима совместного редактирования в реальном времени.',
      'Рецензирование, комментарии, чат.',
      'OCR и другие.',
    ],
  },
  {
    id: 2,
    title: 'Хранилище документов',
    img: productImg.r5,
    description: '',
    advantages: '',
    advantagesList: [
      'Структурированное хранение документации.',
      'Предоставление доступа для отдельных пользователей или целых отделов.',
      'Разграничение прав доступа: чтение, рецензирование, редактирование.',
      'Предоставление доступа по внешней ссылке.',
      'Управление версиями и ревизиями.',
      'Встраивание документов в вебстраницы.',
      'Тесная интеграция с почтой.',
    ],
  },
  {
    id: 3,
    title: 'Почта',
    img: productImg.r6,
    description: '',
    advantages: '',
    advantagesList: [
      'Почтовый сервер.',
      'Создание корпоративных адресов в своем домене.',
      'Агрегатор для сбора почты с разных акаунтов.',
      'Сортировка корреспонденции с помощью тэгов.',
      'Адресная книга и автоответчик.',
      'Интеграция с календарем и системой документооборота.',
      'Быстрый просмотр и сохранение прикрепленных файлов для редактирования.',
    ],
  },
  {
    id: 4,
    title: 'Календарь',
    img: productImg.r7,
    description: '',
    advantages: '',
    advantagesList: [
      'Персональные и групповые календари.',
      'Просмотр по дням, неделям, месяцам, за выбранный период.',
      'Отображение в виде календаря или списка.',
      'Совместный доступ к календарям.',
      'Создание/редактирование событий, рассылка приглашений, напоминания.',
      'Синхронизация со сторонними календарями.',
      'Интеграция с почтой и автодобавление событий.',
    ],
  },
  {
    id: 5,
    title: 'СRМ',
    img: productImg.r8,
    description: '',
    advantages: '',
    advantagesList: [
      'Уровни теплоты контактов.',
      'Управление клиентской базой.',
      'Кастомизация под компанию.',
      'Быстрая регистрация потенциальных клиентов.',
      'Онлайн-инвойсинг.',
      'Звонки клиентам.',
      'Отчеты о продажах.',
    ],
  },
  {
    id: 6,
    title: 'Проекты',
    img: productImg.r9,
    description: '',
    advantages: '',
    advantagesList: [
      'Настройка иерархии проектов',
      'Диаграмма Ганта за пару кликов.',
      'Трекинг выполнения задач.',
      'Разграничение прав доступа к проектам.',
      'Тесная интеграция с другими модулями совместной работы.',
    ],
  },
  {
    id: 7,
    title: 'Сообщество',
    img: productImg.r10,
    description: '',
    advantages: '',
    advantagesList: [
      'Корпоративный мессенджер.',
      'Блоги и форумы.',
      'Публикация объявлений и проведение опросов.',
      'Добавление закладок.',
      'Ведение внутренней Wiki.',
      'Профайлы сотрудников.',
      'Разграничение прав внутри сообщества.',
    ],
  },
  {
    id: 8,
    title: 'Панель управления',
    img: productImg.r11,
    description: '',
    advantages: '',
    advantagesList: [
      'Автоматизированное управление системой Р7-Офис на вашем сервере.',
      'Резервное копирование данных.',
      'Централизация доступа с помощью LDAP.',
      'Настройка параметров входа в систему.',
      'Поддержка двухфакторной аутентификации.',
      'Использование технологии Единого входа (SSO).',
      'Отслеживание входов в систему и других действий пользователей.',
    ],
  },
]
export const serverDocR7Desc = [
  {
    id: 1,
    title: 'Безопасность данных',
    img: productImg.r12,
    description: '',
    advantages: '',
    advantagesList: [
      'Р7-Офис. Сервер документов создан в России и полностью отвечает требованиям Правительства РФ к офисному ПО, включая Постановления №1236 от 16.11.2015 и №325 от 23.03.2017.',
      'Размещение информации в локальной сети обеспечит надёжную работу без передачи персональных данных третьим лицам.',
      'Решение соответствует отраслевым стандартам и включено в единый реестр российского программного обеспечения.',
    ],
  },
  {
    id: 2,
    title: 'Эффективная совместная работа над документами',
    img: productImg.r13,
    description: '',
    advantages: '',
    advantagesList: [
      'Инструменты для плодотворной работы над документами любого типа в команде.',
      'Возможность предлагать правки в текстах, таблицах, презентациях.',
      'Удобный функционал для рецензирования и отслеживания изменений в режиме реального времени.',
    ],
  },
  {
    id: 3,
    title: 'Управление данными',
    img: productImg.r14,
    description: '',
    advantages: '',
    advantagesList: [
      'Разграничение права на просмотр, редактирование, комментирование и пересылку документов, установка запретов на копирование информации и печати документов.',
      'Отслеживание действий сотрудников организации для контроля процесса и предотвращения утечки данных.',
    ],
  },
  {
    id: 4,
    title: 'Совместимость со всеми форматами',
    img: productImg.r15,
    description: '',
    advantages: '',
    advantagesList: [
      'Работайте в привычном формате: все созданные файлы максимально совместимы со всеми популярными форматами Microsoft (doc, docx, xls, xlsx, ppt, pptx).',
      'Открывайте или воспроизводите изображения, аудио и видеофайлы всех популярных форматов, включая .bmp, .jpg, .jpeg, .png, .gif, .tif, .tiff, .avi, .mpeg, .mp3.',
    ],
  },
  {
    id: 5,
    title: 'Встроенные дополнения',
    img: productImg.r16,
    description: '',
    advantages: '',
    advantagesList: [
      'Используйте макросы (JavaScript) и популярные плагины (Редактор изображений, Переводчик, распознавание текста и др.), чтобы автоматизировать стандартные и повторяющиеся задачи при работе с данными.',
      'Интеграции с популярными приложениями и сервисами для удобной офисной работы: Landocs, NextCloud, CompanyMedia и т.д.',
    ],
  },
]
export const androidR7Desc = [
  {
    id: 1,
    title: 'Мобильный редактор документов',
    img:  productImg.r17,
    description: '',
    advantages: '',
    advantagesList: [
      'Форматирование текста, абзацев и целых страниц',
      'Вставка ссылок, списков, таблиц, изображений и автофигур',
      'Редактирование данных диаграмм',
      'Изменение стилей обтекания текстом',
    ],
  },
  {
    id: 2,
    title: 'Мобильный редактор таблиц',
    img: productImg.r17a,
    description: '',
    advantages: '',
    advantagesList: [
      'Создание и удаление листов',
      'Управление столбцами и строками',
      'Форматирование текста в ячейках, изменение свойств ячеек',
      'Вставка ссылок, диаграмм, формул, автофигур и изображений',
    ],
  },
  {
    id: 3,
    title: 'Мобильный редактор презентаций',
    img: productImg.r28,
    description: '',
    advantages: '',
    advantagesList: [
      'Управление слайдами, изменение темы, макета, фона',
      'Эффект перехода',
      'Форматирование текста и применение стилей',
      'Вставка изображений, таблиц и автофигур',
      'Изменение данных диаграмм',
    ],
  },
]
export const organizerR7Desc = [
  {
    id: 1,
    title: 'Почта',
    img: productImg.r18,
    description: '',
    advantages: '',
    advantagesList: [
      'Интуитивный интерфейс',
      'Поддержка всех почтовых протоколов',
      'Подключение нескольких аккаунтов',
      'Фильтры, тэги и папки для сортировки писем',
      'Продвинутый поиск',
      'Спам-фильтры',
      'Проверка орфографии во время написания письма или перед отправкой',
    ],
  },
  {
    id: 2,
    title: 'Адресная книга',
    img: productImg.r19,
    description: '',
    advantages: '',
    advantagesList: [
      'Структурированное хранение контактной информации',
      'Ведение нескольких адресных книг',
      'Подробные карточки контактов',
      'Создание списков для рассылок',
      'Синхронизация с почтой и календарем',
      'Удобный импорт и экспорт контактов',
      'Расширенный поиск по контактам',
    ],
  },
  {
    id: 3,
    title: 'Календарь',
    img: productImg.r20,
    description: '',
    advantages: '',
    advantagesList: [
      'Интеграция с почтой и адресной книгой',
      'Работа с несколькими календарями',
      'Управление задачами',
      'Предоставление доступа к календарям',
      'Создание и редактирование событий',
      'Рассылка и прием приглашений',
      'Напоминания о событиях и задачах',
    ],
  },
]
export const teamR7Desc = [
  {
    id: 1,
    title: 'Чаты',
    img: productImg.r21,
    description: '',
    advantages: '',
    advantagesList: [
      'Отправка текстовых сообщений или вложений',
      'Просмотр профиля собеседника или группы',
      'Отображение в галерее всех вложений чата (фото, видео, аудио, файлы)',
      'Управление сообщениями',
      'Информация о том, кем и когда было просмотрено сообщение в личном или групповом чате',
      'Отключение уведомлений в выбранных чатах: не будут раздражать пуши, звонки и даже цвет такого чата в ленте будет приглушен',
      'Группы и каналы в списке чатов визуально отличаются от личных чатов',
    ],
  },
  {
    id: 2,
    title: 'Контакты и статусы пользователей',
    img: productImg.r22,
    description: '',
    advantages: '',
    advantagesList: [
      'Поиск любого сотрудника по ФИО по всем полям профиля',
      'Просмотр профиля пользователя и его фотографии',
      'Быстрый звонок, переход в чат или профиль найденного контакта',
      'Статусы пользователей',
    ],
  },
  {
    id: 3,
    title: 'Звонки',
    img: productImg.r23,
    description: '',
    advantages: '',
    advantagesList: [
      'Звонки, видеозвонки на всех платформах внутри',
      'Звонки на внутренние номера организации и на внешние телефоны',
      'Подключение новых участников во время личного разговора или в группе',
      'Сворачивание звонка в приложении',
      'Возможность записи и сохранения разговора',
      'Совместимость с телефонными аппаратами и демонстрационным оборудованием в переговорных комнатах, поддерживающих протокол SIP',
    ],
  },
  {
    id: 4,
    title: 'Конференции',
    img: productImg.r24,
    description: '',
    advantages: '',
    advantagesList: [
      'Организация онлайн-конференций',
      'Быстрое подключение новых участников во время совещания',
      'Управление ролями участников конференции (модераторы, докладчики, слушатели)',
      'Возможность записи конференции',
      'Совместимость с аппаратными решениями устройств конференц-связи',
    ],
  },
  {
    id: 5,
    title: 'Демонстрация экрана',
    img: productImg.r25,
    description: 'В звонках любой участник — а в конференциях только докладчики — могут включить демонстрацию экрана:',
    advantages: '',
    advantagesList: [
      'всего экрана компьютера',
      'выбранного приложения',
      'выбранной вкладки браузера',
    ],
  },
  {
    id: 6,
    title: 'Удобное управление',
    img: productImg.r26,
    description: 'Управление настройками своего приложения для каждого пользователя:',
    advantages: '',
    advantagesList: [
      'Возможность включения ПИН-кода и размытия экрана приложения в диспетчере приложений (для мобильных телефонов)',
      'Выбор темы и фона чата',
      'Установка режима «Не беспокоить»',
      'Управление чатами с выключенными уведомлениями',
      'Просмотр информации о приложении',
      'Доступ в службу поддержки',
    ],
  },
  {
    id: 7,
    title: '',
    img: '',
    description: 'Отдельный раздел только для администраторов приложения:',
    advantages: '',
    advantagesList: [
      'Возможность добавления пакетов стикеров',
      'Назначение администраторов',
      'Управление атрибутами пользователей и т. д.',
    ],
  },
]

export const BodyProductsConst = [
  {
    id: 1,
    title: 'Редактор документов',
    description:
      '7-Офис - профессиональные редакторы документов, таблиц и презентаций для госучреждений и образования, готовые полностью заменить решения от Microsoft уже сегодня.',
    advantages: 'Основные преимущества:',
    features: edtorR7,
    list: editorR7Desc,
  },
  {
    id: 2,
    title: 'Р7-Офис. Корпоративный сервер',
    description: (
      <>
        <p>Облачный офис в вашей локальной сети</p>
        <p>
          Управление документами, редакторы, почта, календарь и корпоративная
          соцсеть для бизнеса, госорганов и учреждений образования
        </p>
      </>
    ),
    advantages: 'Основные преимущества:',
    features: serverR7,
    list: serverR7Desc,
  },
  {
    id: 3,
    title: 'Р7-Офис. Сервер документов',
    description:
      'Набор удобных офисных онлайн-редакторов для установки в локальную сеть компаний',
    advantages: 'Все необходимые инструменты в одном месте:',
    features: serverDocR7,
    list: serverDocR7Desc,
  },
  {
    id: 4,
    title: 'Мобильные офисные приложения Р7-Офис для IOS / Android / Аврора',
    description: 'Работайте с документами, где бы вы ни находились',
    advantages: 'Возможности мобильного приложения "Р7-Офис. Документы"',
    features: androidR7,
    list: androidR7Desc,
  },
  {
    id: 5,
    title: 'Р7-Офис. Органайзер',
    description:
      'Приложение для управления почтой, контактами и деловым расписанием на основе Thunderbird',
    advantages: '',
    features: organizerR7,
    list: organizerR7Desc,
  },
  {
    id: 6,
    title: 'Р7-Команда',
    description: (
      <>
        <p>Корпоративный мессенджер для работы в локальной сети или облаке</p>
        <p>
          Универсальная версия для web-браузеров, приложения для iOS, Android
        </p>
      </>
    ),
    advantages: '',
    features: [],
    list: teamR7Desc,
  },
]
