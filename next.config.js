/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ibb.co'],
    formats: ['image/webp'],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
