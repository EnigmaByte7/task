/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       'bg-primary' : '#ECECEC',
       'form-input' : '#F6F6F6'
      }
    },
  },
  plugins: [],
}

