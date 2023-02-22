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
      "h1": "5rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      "pumpkin-orange": "#ef7f1a",
      "golden": "#f1c303",
      citrine: "#ECCB02",
      "twilight-lavender": "#875173",
      "сadet-grey": "#8AA7B2",
      "dark-slate-grey": "#202F37",
      "heavy-metal": "#262A2B",
      "nice-blue": "#1C88B1",
      "grey-chateau": "#A6A9AB",
      white: "#fff",
      black: "#000",
    },
    align: {
      left: "left",
      center: "center",
      right: "right",
      justify: "justify",
      inherit: "inherit",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
