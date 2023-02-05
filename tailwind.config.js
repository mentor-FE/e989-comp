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
    },
    colors: {
      logo: "#ef7f1a",
      "base-1": "#F1C303",
      "base-2": "#A6A9AB",
      "base-3": "#875173",
      "base-4": "#8AA7B2",
      "base-5": "#202F37",
      "base-6": "#262A2B",
      "base-7": "#1C88B1",
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
