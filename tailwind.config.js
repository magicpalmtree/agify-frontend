/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      'regular': 400,
      'semi': 600,
      'bold': 700,
      'black': 900,
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': {
          8: 'rgba(3, 94, 201, 0.08)',
          16: 'rgba(4, 113, 240, 0.16)',
          500: '#0571F0',
          600: '#035EC9',
          700: '#024BA1'
        },
        'gray' : {
          100: '#FCFCFC',
          200: '#F9F9F9',
          300: '#F3F3F3',
          400: '#E5E5E5',
          500: '#C0C0C0',
          600: '#A3A3A3',
          700: '#797979',
          800: '#464646',
          900: '#252525'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}