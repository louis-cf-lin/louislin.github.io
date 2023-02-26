const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/louis-cf-lin.github.io/" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  publicPath: "/",
};

module.exports = nextConfig;
