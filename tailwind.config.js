/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#241D15', 
          600: '#5C2913'
        },
        yellow: {
          500: '#C9C0B0',
        },
        new: {
          500: '#F2EBDE',
          600: '#FFFAF0',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

