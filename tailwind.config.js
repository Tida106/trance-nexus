/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  // hoverOnlyWhenSupported gates `hover:` utilities behind `@media(hover:hover)`,
  // so touch devices don't get the "stuck hover" state after a tap. This is
  // both a UX and a paint-perf win: less invalidation churn on mobile.
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0E4D6E',
        'dark-bg2': '#12597D',
        'dark-bg3': '#0B4260',
        'dark-header': '#0B4260',
        'accent-orange': '#ff6a00',
        'accent-red': '#e5001c',
        'accent-amber': '#ffb400',
        'accent-fire': '#ff3c00',
        'text-light': '#EAF4F7',
        'text-muted': '#B9D3DC',
      },
      fontFamily: {
        'bebas': ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'],
        'barlow': ['var(--font-barlow)', 'Barlow Condensed', 'sans-serif'],
        'jp': ['Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic UI', 'Meiryo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
