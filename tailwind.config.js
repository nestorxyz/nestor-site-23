const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8840ff',
          50: '#f5f1ff',
          100: '#ece5ff',
          200: '#dacfff',
          300: '#c0a8ff',
          400: '#a377ff',
          500: '#8840ff',
          600: '#7d19ff',
          700: '#7008f9',
          800: '#5e06d1',
          900: '#420690',
        },
        secondary: {
          DEFAULT: '#ff1b5a',
          50: '#ffeff3',
          100: '#ffdbe5',
          200: '#ffbed0',
          300: '#ff90af',
          400: '#ff5181',
          500: '#ff1b5a',
          600: '#ff0047',
          700: '#de003e',
          800: '#b70033',
          900: '#690420',
        },
        black: {
          DEFAULT: '#313131',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#777777',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
      },
      fontFamily: {
        heebo: ['var(--font-heebo)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
