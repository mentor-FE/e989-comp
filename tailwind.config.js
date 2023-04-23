module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      default: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      h1: "5rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      golden: "#f1c303",
      citrine: "#ECCB02",
      turmeric: "#F1C303",
      "nice-blue": "#1C88B1",
      "сadet-grey": "#8AA7B2",
      "heavy-metal": "#262A2B",
      "grey-chateau": "#A6A9AB",
      "pumpkin-orange": "#ef7f1a",
      "dark-slate-grey": "#202F37",
      "twilight-lavender": "#875173",
      "R7-main-grey": "#F8F8F8",
      "R7-accent-red": "#FF6A6A",
    },
    align: {
      left: "left",
      center: "center",
      right: "right",
      justify: "justify",
      inherit: "inherit",
    },
    screens: {
      'xl': { 'max': '1365px' }, // 1024+
      'lg': { 'max': '1023px' }, // 768+
      'md': { 'max': '767px' }, // 576+
      'sm': { 'max': '575px' }, // 375+
      'xs': { 'max': '374px' }, // 320+
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
