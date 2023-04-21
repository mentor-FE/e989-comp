import R7logo from '../../assets/r7/r7-office_logo_black.png'

const R7 = () => {
  return (
    <div className="bg-R7-main-grey px-6">
      <div className="title pt-4">
        <h1 className="text-4xl font-bold text-R7-main-blue text-end">
          О компании Р7-Офис
        </h1>
      </div>
      <div className="flex justify-start">
        <img src={R7logo} alt="R7-logo" className="w-full max-w-xs h-auto" />
      </div>
      <div className="flex justify-start">
        <a
          href="https://r7-office.ru/"
          target="_blank"
          rel="noreferrer"
          className="text-R7-main-blue text-xl"
        >
          r7-office.ru
        </a>
      </div>
      <div className="bg-gray-200 px-6 py-8">
        <h2 className="text-3xl font-bold text-blue-600">АО «Р7»</h2>
        <p className="mt-4 leading-7">
          Российский разработчик офисного программного обеспечения. Ключевым
          продуктом компании является офисный пакет «Р7-Офис», который входит в
          Единый реестр Минкомсвязи российских программ.
        </p>
        <p className="mt-4 leading-7">
          «Р7-Офис» — это офисный продукт для бизнеса и учреждений образования.
          Представлен в десктоп-версии, серверной версии и как облачный офис.
        </p>
        <p className="mt-4 leading-7">В состав решения входят:</p>
        <ul className="list-disc pl-6 mt-2 leading-7">
          <li>
            Редакторы текстовых документов, таблиц и презентаций, совместимые со
            всеми популярными форматами
          </li>
          <li>Платформа для совместной работы</li>
          <li>Средство просмотра изображений и видео</li>
          <li>Корпоративный мессенджер</li>
          <li>Система управления проектами</li>
          <li>Органайзер с календарем и электронной почтой</li>
          <li>CRM</li>
          <li>Платформа для создания корпоративной соцсети</li>
        </ul>
        <p className="mt-4 leading-7">
          Серверная и облачная версии обеспечивают многопользовательский доступ,
          совместное редактирование и рецензирование.
        </p>
        <p className="mt-4 leading-7">
          «Р7-Офис» неоднократно становился победителем премий Cnews Award,
          Tadviser Prize, Приоритет в различных номинациях.
        </p>
        <p className="mt-4 leading-7">
          Разработчиком Р7-Офис является компания «Р7» из Нижнего Новгорода.
        </p>
        <h3 className="mt-8 mb-2 text-xl font-bold text-gray-700">
          Контактная информация:
        </h3>
        <p className="leading-7">
          АО «Р7», Россия, 603152, г. Нижний Новгород, ул. Ларина, д. 22 лит. Д.
        </p>
        <p className="leading-7 underline">
          <a href="tel:+78314224830">+7 831 422 48 30</a>
        </p>
        <p className="leading-7 underline">
          <a href="tel:+74951204677">+7 495 120 46 77</a>
        </p>
      </div>
    </div>
  )
}

export default R7
