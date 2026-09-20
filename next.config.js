/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Note: minimumCacheTTL is intentionally left at Next.js's default here.
    // A very low value (e.g. 0) forces the image optimizer to be invoked
    // far more often, which is fine for local development but is a bad
    // idea in production on Vercel: it can lead to individual image
    // requests occasionally failing or being throttled under normal
    // browsing. Production doesn't need it anyway — each new deployment
    // gets a fresh cache automatically, so replaced images always show up
    // correctly once you redeploy. If images seem slow to update while
    // running `npm run dev` locally, do a hard refresh (Ctrl/Cmd+Shift+R)
    // instead of changing this value.
  },
};

module.exports = nextConfig;
