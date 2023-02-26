const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Tell Next.js where the `public` folder is */
  assetPrefix: isProd ? "" : "",
  reactStrictMode: true,
  /** @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable */
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
