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
        'primary-hover': '#FF0D00',
        'secondary': '#2E66F6',
        'black': '#263238',
        'grey': '#78889B',
        'light-grey': '#A0A0A0',
        'soft': '#f5f7f9',
        'tabs': '#eaeef6'
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
    }),
  ],
}

