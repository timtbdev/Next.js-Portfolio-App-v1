/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.dub.co", "pbs.twimg.com"],
  },
  transpilePackages:
    process.env.NODE_ENV !== "production" ? ["next-mdx-remote"] : undefined,
};

export default nextConfig;
