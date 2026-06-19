import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/violin-garden",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
};

export default nextConfig;
