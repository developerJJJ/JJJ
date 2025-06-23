import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
