import type { NextConfig } from "next";

const basePath = '/snuffs';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
