import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit every route as <path>/index.html (directory-based) so static hosts
  // (Apache/cPanel) serve them natively as a DirectoryIndex. Without this, a
  // locale home like /en collides with the /en/ directory of its sub-pages and
  // returns 404. Canonical/sitemap URLs are kept trailing-slashed to match.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
