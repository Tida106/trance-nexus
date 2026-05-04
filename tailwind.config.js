/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0500',
        'dark-bg2': '#110800',
        'dark-bg3': '#0f0a03',
        'accent-orange': '#ff6a00',
        'accent-red': '#e5001c',
        'accent-amber': '#ffb400',
        'accent-fire': '#ff3c00',
        'text-light': '#f0e0c8',
        'text-muted': '#6b4e2a',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
