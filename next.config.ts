import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.ongbut.edu.vn",
      },
      {
        protocol: "https",
        hostname: "api.ongbut.edu.vn",
      },
      {
        protocol: "https",
        hostname: "*.ongbut.edu.vn",
      },
    ],
  },
};

export default nextConfig;
