/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {
      colors: {
        'primary' : '#4461F2',
        'secondary' : '#ACADAC',
        'danger': '#f24444',
        'input-bg': '#EAF0F7',
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

