/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: config => {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["cdn.salla.network"],
  },
};

module.exports = nextConfig;
