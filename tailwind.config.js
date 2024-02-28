/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#4461F2',
        'secondary' : '#ACADAC',
        'danger': '#f24444',
        'input-bg': '#EAF0F7',
        'succes': 'rgb(110,231,183)',
        'darkBlue': '#14162e',
      },
      fontFamily: {
        ubuntu : ['Ubuntu'],
      },
      boxShadow: {
        'btn': '0 3px 16px -10px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
}

