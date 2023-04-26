/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#FF0D00',
        'accent': '#2E66F6',
        'black': '#263238',
        'grey': '#78889B',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
    }),
  ],
}

