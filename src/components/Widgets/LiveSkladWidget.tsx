import React, { useEffect } from 'react';

interface LiveskladOptions {
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

interface Props {
  options: LiveskladOptions;
}

declare global {
  interface Window {
    liveskladOptions?: LiveskladOptions;
  }
}

const LiveskladWidget: React.FC<Props> = ({ options }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `${
      document.location.protocol === 'https:' ? 'https://' : 'http://'
    }my.livesklad.com/static/widget.js`;

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
    return () => {
      head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.liveskladOptions = options;
  }, [options]);

  return <div id="livesklad-widget" className="widget" />;
};

export default LiveskladWidget;
