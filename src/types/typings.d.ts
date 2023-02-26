interface ExtendedWindow extends Window {
  liveskladOptions?: {
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
  };
}
