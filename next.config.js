/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Low cache time in development so replaced images show up almost
    // immediately after a browser refresh, instead of waiting for the
    // optimizer's cache to expire. Safe to raise again once the site's
    // real photos are finalized and won't be swapped often.
    minimumCacheTTL: 0,
  },
};

module.exports = nextConfig;
