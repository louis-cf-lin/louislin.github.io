/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/louis-cf-lin.github.io/" : "",
};

module.exports = nextConfig;
