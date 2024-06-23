/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["cdn.discordapp.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
