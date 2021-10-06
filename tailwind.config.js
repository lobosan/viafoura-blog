const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ["Roboto", ...defaultTheme.fontFamily.sans],
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
    extend: {
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
