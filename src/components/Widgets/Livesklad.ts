import React, { useEffect } from "react";

interface LiveskladProps {
  api_key?: string;
  title?: string;
  placeholder?: string;
  name_placeholder?: string;
  button_text?: string;
  width?: string;
  height?: string;
  color?: string;
  columns?: string[];
  hide_given?: boolean;
  currency?: string;
}

const Livesklad: React.FC<LiveskladProps> = ({
  api_key = "tB5HIm77UqMixqIGFRaP",
  title = "Мои заказы",
  placeholder = "Номер телефона +7 или заказа",
  name_placeholder = "Фамилия",
  button_text = "Открыть заказы",
  width = "100%",
  height = "220px",
  color = "#4F76E6",
  columns = ["number", "device", "brand", "status", "price"],
  hide_given = true,
  currency = "руб",
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `//my.livesklad.com/static/widget.js?key=${api_key}&title=${title}&placeholder=${placeholder}&name_placeholder=${name_placeholder}&button_text=${button_text}&width=${width}&height=${height}&color=${color}&columns=${columns.join(
      ","
    )}&hide_given=${hide_given}&currency=${currency}`;
    document.getElementsByTagName("head")[0].appendChild(script);
  }, [
    api_key,
    title,
    placeholder,
    name_placeholder,
    button_text,
    width,
    height,
    color,
    columns,
    hide_given,
    currency,
  ]);

  return null;
};

export default Livesklad;
