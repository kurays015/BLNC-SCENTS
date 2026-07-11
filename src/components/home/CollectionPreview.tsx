import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { products } from "@/data/products";

export function CollectionPreview() {
  return (
    <section className="bg-cream py-24 grain-overlay">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
              The Collection
            </p>
            <h2 className="mt-3 font-serif text-4xl text-amber md:text-5xl">
              Five Signatures
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-amber/70">
              Each extrait is crafted with intention — inspired by iconic
              fragrances, refined through the lens of balance.
            </p>
          </div>
        </RevealOnScroll>

        <ProductGrid products={products} />

        <RevealOnScroll className="mt-12 text-center">
          <Link
            href="/products"
            className="text-xs font-medium uppercase tracking-[0.2em] text-amber underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            View Full Collection
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
