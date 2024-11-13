import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["package-name"],
  images: {
    domains: [
      "pvbmhhohojpmitrzufzv.supabase.co",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
    ],
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
