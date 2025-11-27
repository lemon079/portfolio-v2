import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Target modern browsers to avoid unnecessary polyfills
    reactRemoveProperties: true,
  },
  // Optimize for modern browsers
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },
};

export default nextConfig;
