import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required for `output: export` — emit a static file at build time.
export const dynamic = "force-static";

// Static export emits this as out/robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
