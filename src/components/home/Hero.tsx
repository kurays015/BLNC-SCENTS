import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { GoldShimmerText } from "@/components/ui/GoldShimmerText";
import { HeroMotion } from "./HeroMotion";
import { getFeaturedProduct, getProducts } from "@/sanity/queries";
import { resolveProductImageUrl } from "@/lib/imageResolver";

/**
 * Hero is a Server Component — it fetches the featured product from Sanity.
 * The motion/animation wrapper is extracted into HeroMotion (client component).
 */
export async function Hero() {
  // Try heroSettings first; fall back to first product in collection
  let featured = await getFeaturedProduct();
  if (!featured) {
    const products = await getProducts();
    featured = products[0] ?? null;
  }

  if (!featured) return null;

  const imageSrc = resolveProductImageUrl(featured.image, 800, featured.slug, featured.legacyImageUrl);

  return (
    <section className="relative min-h-[90vh] overflow-hidden grain-overlay">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <HeroMotion
          name={featured.name}
          description={featured.description}
          slug={featured.slug}
          inspiredByFragrance={featured.inspiredBy.fragrance}
        />

        <div className="relative z-10">
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-sm shadow-2xl">
            <Image
              src={imageSrc}
              alt={featured.name}
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
