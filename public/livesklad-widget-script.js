window.liveskladOptions = {
    // Ключ апи, индивидуально сгенерированный для вас
    api_key: "tB5HIm77UqMixqIGFRaP",
    // Название, отображаемое в заголовке виджета. По умолчанию: "Мои заказы"
    title: "Мои заказы",
    // Название, отображаемое в поле ввода текста. По умолчанию: "Номер телефона или заказа"
    placeholder: "Номер телефона +7 или заказа",
    // Название, отображаемое в поле проверки пользователя. По умолчанию: "Фамилия"
    name_placeholder: "Фамилия",
    // Текст на кнопке. По умолчанию: "Открыть заказы"
    button_text: "Открыть заказы",
    // Ширина окна. По умолчанию: "300px"
    width: "100%",
    // Высота окна. По умолчанию: "230px"
    height: "220px",
    // Цвет фона кнопки. Если его задать, эффект при наведении РАБОТАТЬ НЕ БУДЕТ!
    color: "#4F76E6",
    // Колонки в таблице заказов. По умолчанию: ["number", "device", "brand", "status", "price"],
    // что соответствует:
    // № Заказа | Тип устр. | Устройство | Статус | Цена
    columns: ["number", "device", "brand", "status", "price"],
    // Скрывать уже выданные заказы? По умолчанию: Скрывать (true)
    hide_given: true,
    // Указанная в виджете валюта
    currency: "руб"
  };
  (function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
      'my.livesklad.com/static/widget.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  })();