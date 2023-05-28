/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#36095C",
        light: "#FEFEFE",
        lowlight: "#B4ACAC",
        greyish: "#EEF2F2",
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
        '150': '39rem',
      }
    },
  },
  plugins: [],
}

