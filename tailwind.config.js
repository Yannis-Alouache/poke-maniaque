/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zyzol: "Zyzol",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
    base: false,
  }
}

