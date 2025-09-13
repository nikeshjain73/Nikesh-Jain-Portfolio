import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚨 Not recommended for production, only use if you can't fix errors yet
  },
};

export default nextConfig;
