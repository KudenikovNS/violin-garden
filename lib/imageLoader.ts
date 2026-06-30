// Custom next/image loader for the static export (`output: export` forbids the
// default optimizer). It maps an image to a pre-generated width variant produced
// by scripts/optimize-images.mjs, e.g. /images/x.webp + width 384 → /images/x-w384.webp.
// Must stay a pure function — it is bundled to the client.

// Only smaller variants are pre-generated (mobile / small slots); for larger
// requested widths we fall back to the base image, which the script already
// caps at the display size (×2 retina) — so big slots get no needless variant.
// Keep in sync with VARIANT_WIDTHS in scripts/optimize-images.mjs.
const VARIANTS = [256, 384];

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Only our pre-processed local webp images have variants.
  if (!src.endsWith(".webp")) return src;
  const w = VARIANTS.find((candidate) => candidate >= width);
  return w ? src.replace(/\.webp$/, `-w${w}.webp`) : src;
}
