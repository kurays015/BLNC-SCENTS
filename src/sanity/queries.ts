import { defineQuery } from "next-sanity";
import { client } from "./client";
import { sanityFetch } from "./live";
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
  const { data } = (await sanityFetch({ query: PRODUCTS_QUERY })) as {
    data: SanityProduct[];
  };
  return data || [];
}

export async function getProductBySlug(
  slug: string,
): Promise<SanityProduct | null> {
  const { data } = (await sanityFetch({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug },
  })) as { data: SanityProduct | null };
  return data;
}

export async function getFeaturedProduct(): Promise<SanityProduct | null> {
  const { data: settings } = (await sanityFetch({
    query: HERO_SETTINGS_QUERY,
  })) as { data: { featuredProduct: SanityProduct | null } | null };
  return settings?.featuredProduct ?? null;
}

/**
 * Used exclusively by generateStaticParams() at build time.
 * Must use client.fetch() directly — sanityFetch() calls draftMode()
 * which is not available without an HTTP request context.
 */
export async function getAllProductSlugs(): Promise<{ slug: string }[]> {
  const SLUGS_QUERY = defineQuery(
    `*[_type == "product" && defined(slug.current)][].slug.current`,
  );
  const slugs = await client.fetch<string[]>(SLUGS_QUERY, {}, { next: { revalidate: false } });
  return slugs.filter(Boolean).map((slug) => ({ slug }));
}

export async function getAllAccordFilters(): Promise<string[]> {
  const products = await getProducts();
  const accords = new Set<string>();
  products.forEach((p) =>
    (p.dominantAccords ?? []).forEach((a: string) => accords.add(a)),
  );
  return Array.from(accords).sort();
}
