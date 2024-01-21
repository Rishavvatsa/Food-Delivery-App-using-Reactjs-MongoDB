/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        'sm': {'max':'400px'},
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}