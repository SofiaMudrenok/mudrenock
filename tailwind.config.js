/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'nardo-black':'#050505',
        'creamy':'#FFFDE2',
      }
    },
  },
  plugins: [],
}
