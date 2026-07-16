import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { InspiredByBadge } from "@/components/products/InspiredByBadge";
import { ScentProfileChart } from "@/components/products/ScentProfileChart";
import { Button } from "@/components/ui/Button";
import { GoldShimmerText } from "@/components/ui/GoldShimmerText";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/sanity/queries";
import { resolveProductImageUrl } from "@/lib/imageResolver";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const imageUrl = resolveProductImageUrl(product.image, 1200, slug, product.legacyImageUrl);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | BLNC SCENTS`,
      description: product.description,
      images: [{ url: imageUrl, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const imageSrc = resolveProductImageUrl(product.image, 800, slug, product.legacyImageUrl);

  return (
    <div className="grain-overlay">
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll direction="left">
              <div className="relative mx-auto aspect-[3/4] max-w-lg overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
            </RevealOnScroll>

            <div className="flex flex-col gap-8">
              <RevealOnScroll>
                <div className="flex items-center gap-4">
                  <span className="h-px flex-1 bg-gold/40" />
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                    Now Available
                  </p>
                  <span className="h-px flex-1 bg-gold/40" />
                </div>
                <GoldShimmerText className="mt-6 text-5xl md:text-6xl lg:text-7xl">
                  {product.name}
                </GoldShimmerText>
                <p className="mt-4 text-sm leading-relaxed text-amber/70">
                  {product.description}
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <InspiredByBadge
                  brand={product.inspiredBy.brand}
                  fragrance={product.inspiredBy.fragrance}
                />
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button href="#" variant="primary">
                    Shop Now
                  </Button>
                  <Button href="/products" variant="outline">
                    View Collection
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <RevealOnScroll>
              <ScentProfileChart accords={product.accords} />
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
                  Details
                </h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-amber/50">
                      Concentration
                    </p>
                    <p className="mt-1 font-serif text-xl text-amber">
                      Extrait de Parfum
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-amber/50">
                      Volume
                    </p>
                    <p className="mt-1 font-serif text-xl text-amber">
                      50 mL / 1.7 fl oz
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-amber/50">
                      Notes
                    </p>
                    <p className="mt-2 font-mono text-sm text-amber/80">
                      {(product.notes ?? []).map((n) => `· ${n}`).join("  ")}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-amber/50">
                      Philosophy
                    </p>
                    <p className="mt-1 text-sm italic text-amber/70">
                      Strength in Balance
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
