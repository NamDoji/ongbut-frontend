import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        hostname: "img.giaoduc.net.vn",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
