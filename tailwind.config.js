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
        'bebas': ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'],
        'barlow': ['var(--font-barlow)', 'Barlow Condensed', 'sans-serif'],
        'jp': ['var(--font-noto-jp)', 'Hiragino Kaku Gothic ProN', 'Yu Gothic UI', 'Meiryo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
