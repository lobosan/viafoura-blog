const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      sky: colors.sky,
      fuchsia: colors.fuchsia,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
