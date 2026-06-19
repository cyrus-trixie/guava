import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add images.pexels.com to the allowed image domains
  images: {
    domains: ["images.pexels.com"],
    // Optional: Add remote patterns for more flexibility
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.pexels.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
  
  // Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optional: Ignore TypeScript errors during production builds (use cautiously)
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  
  /* config options here */
};

export default nextConfig;