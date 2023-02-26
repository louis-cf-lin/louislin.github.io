const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable */
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/",
  },
  basePath: "",
};

module.exports = nextConfig;
