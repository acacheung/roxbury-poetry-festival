module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#030303",
        },
      },
      fontFamily: {
        sans: ["Plex", "sans-serif"],
        mono: ["Plex Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
