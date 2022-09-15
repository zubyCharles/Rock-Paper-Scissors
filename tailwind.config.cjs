/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: 'hsl(217, 16%, 45%)',
        dark: 'hsl(229, 25%, 31%)',
        blue: 'hsl(229, 64%, 46%)',
      },
    },
  },
  plugins: [],
};
