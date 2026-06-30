import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit every route as <path>/index.html (directory-based) so static hosts
  // (Apache/cPanel) serve them natively as a DirectoryIndex. Without this, a
  // locale home like /en collides with the /en/ directory of its sub-pages and
  // returns 404. Canonical/sitemap URLs are kept trailing-slashed to match.
  trailingSlash: true,
  images: {
    // Static export can't use the default optimizer; a custom loader serves
    // pre-generated width variants (scripts/optimize-images.mjs) so next/image
    // still emits a responsive srcset. Sizes match the loader's width ladder.
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    // Small widths map to pre-generated variants; larger ones fall back to the
    // (display-capped) base image in the loader.
    deviceSizes: [384, 768, 1200],
    imageSizes: [256],
  },
};

export default nextConfig;
