/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "chestnut-50": "#fcf5f4",
        "chestnut-100": "#fae8e6",
        "chestnut-200": "#f6d5d2",
        "chestnut-300": "#efb7b2",
        "chestnut-400": "#e48d85",
        "chestnut-500": "#d6675d",
        "chestnut-600": "#c4544a",
        "chestnut-700": "#a23c33",
        "chestnut-800": "#86352e",
        "chestnut-900": "#70322c",
        "chestnut-950": "#3c1613",
        tan: "#fdf0d1",
        charcoal: "#36454f",
      },
      fontFamily: {
        js: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
