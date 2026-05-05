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
};

module.exports = nextConfig;
