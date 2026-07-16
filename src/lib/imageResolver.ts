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
  legacyImageUrl?: string,
): string {
  // 1. If it's a valid Sanity image reference, build CDN URL
  if (image && typeof image !== "string") {
    try {
      return urlFor(image).width(width).auto("format").url();
    } catch {
      // fall through to fallbacks
    }
  }

  // 2. If legacyImageUrl exists as a string in the Sanity document, use it
  if (legacyImageUrl) {
    return legacyImageUrl;
  }

  // 3. If image itself is a legacy string path
  if (typeof image === "string") {
    return image;
  }

  // 4. Default fallback using slug
  if (fallbackSlug) {
    return `/images/products/${fallbackSlug}.png`;
  }
  return "/images/products/placeholder.png";
}
