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
        },
        yellow: {
          500: '#C9C0B0',
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

