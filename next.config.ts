import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // <- ignora ESLint durante o build
  },
};

export default nextConfig;
