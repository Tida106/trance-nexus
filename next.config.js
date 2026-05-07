/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // BASE_PATH is set by configure-pages action (e.g. '/trance-nexus' for project pages,
  // '' for custom domains). Required so assets resolve correctly on GitHub Pages.
  basePath: process.env.BASE_PATH ?? '',
  assetPrefix: process.env.BASE_PATH ?? '',
  // Surface the basePath to client code so fetch('/search-index.json') etc.
  // can prefix it correctly. Next's <Link>/<Image> handle this automatically;
  // raw fetch/script src does not.
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? '',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
