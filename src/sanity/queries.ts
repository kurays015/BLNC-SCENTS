import { defineQuery } from "next-sanity";
import { client } from "./client";
import type { SanityProduct } from "./types";

// ---------------------------------------------------------------------------
// GROQ queries
// ---------------------------------------------------------------------------

const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(order asc, name asc) {
    "slug": slug.current,
    name,
    tagline,
    inspiredBy,
    notes,
    accords,
    image,
    legacyImageUrl,
    description,
    dominantAccords
  }
`);

const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    "slug": slug.current,
    name,
    tagline,
    inspiredBy,
    notes,
    accords,
    image,
    legacyImageUrl,
    description,
    dominantAccords
  }
`);

const HERO_SETTINGS_QUERY = defineQuery(`
  *[_id == "heroSettings"][0] {
    featuredProduct-> {
      "slug": slug.current,
      name,
      tagline,
      inspiredBy,
      notes,
      accords,
      image,
      legacyImageUrl,
      description,
      dominantAccords
    }
  }
`);

// ---------------------------------------------------------------------------
// Data-access functions
// ---------------------------------------------------------------------------

export async function getProducts(): Promise<SanityProduct[]> {
  return client.fetch(PRODUCTS_QUERY);
}

export async function getProductBySlug(
  slug: string,
): Promise<SanityProduct | null> {
  return client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
}

export async function getFeaturedProduct(): Promise<SanityProduct | null> {
  const settings = await client.fetch(HERO_SETTINGS_QUERY);
  return settings?.featuredProduct ?? null;
}

export async function getAllProductSlugs(): Promise<{ slug: string }[]> {
  const products = await getProducts();
  return products
    .filter((p): p is SanityProduct & { slug: string } => Boolean(p?.slug))
    .map((p) => ({ slug: p.slug! }));
}

export async function getAllAccordFilters(): Promise<string[]> {
  const products = await getProducts();
  const accords = new Set<string>();
  products.forEach((p) =>
    (p.dominantAccords ?? []).forEach((a: string) => accords.add(a)),
  );
  return Array.from(accords).sort();
}
