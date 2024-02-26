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
      },
      fontFamily: {
        ubuntu : ['Ubuntu'],
      }
    },
  },
  plugins: [],
}

