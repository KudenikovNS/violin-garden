"use client";

import Image from "next/image";
import Flower from "./Flower";
import { useT } from "@/lib/i18n/useT";
import styles from "./ViolinSlideshow.module.css";

// Shared violin visual used on the collection grid and the for-sale list:
//   - >1 image → cross-fading slideshow (flower → front → back),
//   - 1 image  → static illustration,
//   - 0 images → decorative SVG flower.
export default function ViolinSlideshow({
  illustration,
  photos,
  flowerVariant,
  name,
  sizes,
  single,
  priority = false,
  rounded = false,
  flowerSize = 150,
}: {
  illustration?: string;
  photos?: string[];
  flowerVariant: number;
  name: string;
  /** `sizes` for the `fill` slideshow images (page-specific layout). */
  sizes: string;
  /** Intrinsic size for the single-image case (page-specific). */
  single: { width: number; height: number };
  priority?: boolean;
  rounded?: boolean;
  flowerSize?: number;
}) {
  const t = useT();
  const alt = t.a11y.floralIllustration(name);
  const slides = [illustration, ...(photos ?? [])].filter(Boolean) as string[];

  if (slides.length > 1) {
    return (
      <div className={`${styles.slideshow} ${rounded ? styles.rounded : ""}`}>
        {slides.slice(0, 3).map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={styles.slide}
            priority={priority && i === 0}
          />
        ))}
      </div>
    );
  }

  if (slides.length === 1) {
    return (
      <Image
        src={slides[0]}
        alt={alt}
        width={single.width}
        height={single.height}
        className={`${styles.illustration} ${rounded ? styles.rounded : ""}`}
      />
    );
  }

  return <Flower variant={flowerVariant} size={flowerSize} />;
}
