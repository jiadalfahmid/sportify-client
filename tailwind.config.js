/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}
