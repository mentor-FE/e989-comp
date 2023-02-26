import React, { useEffect } from 'react';

interface LiveSkladWidgetProps {
  api_key: string;
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

const LiveSkladWidget: React.FC<LiveSkladWidgetProps> = ({
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
}) => {
  useEffect(() => {
    const extendedWindow = window as ExtendedWindow;
    extendedWindow.liveskladOptions = {
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
    };
    // ...код для добавления скрипта
  }, [api_key, title, placeholder, name_placeholder, button_text, width, height, color, columns, hide_given, currency]);

  return (
    <div id="livesklad-widget"></div>
  );
}

export default LiveSkladWidget;
