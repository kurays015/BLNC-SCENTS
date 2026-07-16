import { urlFor, type SanityImageSource } from "@/sanity/image";

/**
 * Resolves a product image to a URL string.
 * Handles three cases:
 *  1. Sanity image asset reference → builds CDN URL via urlFor
 *  2. Legacy string path (e.g. "/images/products/foo.png") → returns as-is
 *  3. null/undefined → falls back to /images/products/{slug}.png
 */
export function resolveProductImageUrl(
  image: SanityImageSource | string | null | undefined,
  width = 800,
  fallbackSlug?: string,
): string {
  // Null / undefined — fall back to legacy public path
  if (!image) {
    if (fallbackSlug) {
      return `/images/products/${fallbackSlug}.png`;
    }
    return "/images/products/placeholder.png";
  }

  // Legacy string path from old static data
  if (typeof image === "string") {
    return image;
  }

  // Sanity image asset reference
  try {
    return urlFor(image).width(width).auto("format").url();
  } catch {
    // If urlFor fails (e.g. malformed ref), fall back
    if (fallbackSlug) {
      return `/images/products/${fallbackSlug}.png`;
    }
    return "/images/products/placeholder.png";
  }
}
