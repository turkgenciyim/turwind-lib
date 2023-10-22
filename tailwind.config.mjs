const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans Variable'],
        dela: ['Dela Gothic One'],
        inter: ['Inter Variable']
      },
      colors: {
        light: {
          50: '#FFF',
          100: '#F8FAFC',
          200: '#F7FAFC',
          300: '#F9FAFC',
          400: '#F1F5F9',
          500: '#F9FAFB',
          600: '#FAFAFA',
          700: '#FAFAF9',
          800: '#F6F6F8',
          900: '#F7F7F9'
        },
        dark: {
          50: '#000',
          100: '#2F2F2F',
          200: '#202020',
          300: '#1C1C1C',
          400: '#1A1A1A',
          500: '#191919',
          600: '#161616',
          700: '#121212',
          800: '#101010',
          900: '#111111'
        }

        // ...
      },
      screens: {
        xs: '480px',
        print: { raw: 'print' }
      }
    }
  },
  plugins: []
}
