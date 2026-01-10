import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // <--- WAJIB ADA UNTUK COOLIFY/DOCKER
  reactStrictMode: true,
  typedRoutes: true
};

export default nextConfig;
