import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/api/apple-app-site-association",
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
