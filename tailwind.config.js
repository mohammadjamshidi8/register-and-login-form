/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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

