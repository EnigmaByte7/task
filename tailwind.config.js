/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js, jsx}",
    './public/index.html',"./components/**/*.{html,js, jsx}"
  ],
  theme: {
    extend: {
      colors:{
       'bg-primary' : '#ECECEC',
       'form-input' : '#F6F6F6',
       'success' : '#2e7d32',
       'discard' : '#d32f2f',
       'discard-hv' : '#f3c8c8',
       'success-hv' : '#afe1b1',
       'primary' :'#A974FF',
       'gray' : '#E3E3E3'
      },
      gridTemplateColumns:{
        'card' : '30% 70%'
      }
    },
  },
  plugins: [],
}

