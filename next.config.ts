import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Allow any HTTPS image source — no more config changes needed when adding new movies
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
