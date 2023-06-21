/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  screens: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },

    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
