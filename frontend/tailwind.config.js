/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },

  plugins: [
    require('tailwind-scrollbar'),
    // require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),


  ],
}
