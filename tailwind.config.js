/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        phthalo: {
          50: '#f5f8f8',
          100: '#ddeae9',
          200: '#bad5d4',
          300: '#90b8b7',
          400: '#689999',
          500: '#4e7d7e',
          600: '#3d6264',
          700: '#335152',
          800: '#2c4243',
          900: '#253435',
          950: '#131f20'
        },
        fuzz: {
          '50': '#fff4ed',
          '100': '#ffe6d5',
          '200': '#ffbe98',
          '300': '#ffa272',
          '400': '#fd713a',
          '500': '#fc4c13',
          '600': '#ed3109',
          '700': '#c4210a',
          '800': '#9c1c10',
          '900': '#7d1a11',
          '950': '#440a06',
      },
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

