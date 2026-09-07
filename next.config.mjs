/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages serves a static export (an `out/` folder), not the
  // Node server build `next build` produces by default.
  output: "export",
  images: {
    // Static export has no server to run Next's image optimizer on, so
    // images are served as-is at their original remote URL.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
