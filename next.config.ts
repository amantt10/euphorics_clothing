import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
