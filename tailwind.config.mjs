const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans Variable'],
        inter: ['Inter Variable'],
        noto: ['Noto Sans']
      },
      screens: {
        xs: '480px'
      },
      colors: {
        primary: {
          100: '#F0EEFF',
          200: '#C7C8FA',
          300: '#989EF5',
          400: '#6E6FF5',
          500: '#4a3efa'
        }
      }
    }
  },
  plugins: []
}
