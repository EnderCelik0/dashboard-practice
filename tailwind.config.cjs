/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': ' hsl(226, 43%, 10%)',
        'dark-blue': ' hsl(235, 46%, 20%)',
        'desaturated-blue': ' hsl(235, 45%, 61%)',
        'pale-blue': ' hsl(236, 100%, 87%)',
        'blue-primary': 'hsl(246, 80%, 60%)',

        lime: {
          200: '#ff8c66',
          300: '#56c2e6',
          400: '#ff5c7c',
          500: '#4acf81',
          600: '#7536d3',
          700: '#f1c65b',
        },
      },
    },
  },
  plugins: [],
};
