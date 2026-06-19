import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/violin-garden",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
