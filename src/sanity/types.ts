import type { SanityImageSource } from "./image";

/**
 * A product document as returned from Sanity via GROQ.
 * Mirrors the legacy Product type in src/data/products.ts
 * but image is now a Sanity image reference object (or a plain string path
 * for backwards compat with the old /public images).
 */
export type SanityAccord = {
  name: string;
  intensity: number;
  color: string;
};

export type SanityProduct = {
  slug: string;
  name: string;
  tagline?: string;
  inspiredBy: { brand: string; fragrance: string };
  notes: string[];
  accords: SanityAccord[];
  /** Either a Sanity image asset reference or a legacy string path */
  image: SanityImageSource | string;
  description: string;
  dominantAccords: string[];
};
