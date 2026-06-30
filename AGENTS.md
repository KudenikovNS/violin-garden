<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Images (responsive srcset on static export)

The site is statically exported, so the default image optimizer is unavailable.
Instead `next/image` uses a **custom loader** (`lib/imageLoader.ts`) that points at
**pre-generated width variants** `name-w256.webp` / `name-w384.webp`; larger slots
fall back to the base `name.webp` (already capped to display×2/retina).

**When you add or replace an image:**
1. Put the source `.webp` in `public/images/…`.
2. Run `node scripts/optimize-images.mjs` — it re-optimizes bases and (re)generates
   the `-w{256,384}.webp` variants (originals are kept in `image-originals-backup/`).
3. **Commit the generated variant files** in `public/images/` — they are deployed
   (the `scripts/` folder itself is gitignored and stays local).

Notes:
- Render images via `next/image` so the loader adds the `srcSet`. Raw references
  (e.g. the Hero `<video poster>`) use the base `name.webp` — keep base files.
- The width ladder is shared by three places that must stay in sync: `VARIANT_WIDTHS`
  in the script, `VARIANTS` in `lib/imageLoader.ts`, and `images.deviceSizes` /
  `imageSizes` in `next.config.ts`.
