/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}"
  ],
  theme: {
    fontFamily:{
      'quicksand':['Quicksand', 'sans-serif'],
      'nunito':['Nunito', 'sans-serif'],
      'tinos':['Tinos','sans-serif'],
      'Libre-Baskerville':['Libre Baskerville','sans-serid']
    },
    extend: {
      colors:{
        'theme':{
          'orange':'f18f01',
          'black':'#393B2C',
          'vanilla':'ece4b7'
        }
      },
      backgroundImage:{
        'first-part':"https://wallpapershome.com/images/pages/pic_h/12115.jpg"
      }
    },
  },
  plugins: [],
}

