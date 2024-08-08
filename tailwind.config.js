/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1440px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      'primary': '#4591C4',
      'shade-1': '#367197',
      'shade-2': '#26506b',
      'shade-3': '#162f3f',
      'shade-4': '#060e13',
      'tint-1': '#6faad1',
      'tint-2': '#99c3de',
      'tint-3': '#c3dceb',
      'tint-4': '#ecf4f9',
      'neutral-1': '#0C0E19',
      'neutral-2': '#1C2035',
      'neutral-3': '#303651',
      'neutral-4': '#4A516D',
      'neutral-5': '#697089',
      'neutral-6': '#989EB3',
      'neutral-7': '#C7CBD8',
      'neutral-8': '#E6E8F0',
      'neutral-9': '#F4F6F9',
      'white': '#FAFBFC',
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
