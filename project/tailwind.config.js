/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFBF7',
          100: '#F9F6E9',
          200: '#F2ECD6',
          300: '#E6DCC0',
          400: '#D9CCA9',
          500: '#CCBC93',
          600: '#BFA97D',
          700: '#B29667',
          800: '#A58451',
          900: '#98713B',
        },
      },
    },
  },
  plugins: [],
};