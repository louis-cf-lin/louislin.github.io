const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/" : "",
  reactStrictMode: true,
  /** @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
