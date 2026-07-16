"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { SanityProduct } from "@/sanity/types";
import { cn } from "@/lib/utils";

type ProductCatalogProps = {
  products: SanityProduct[];
  filters: string[];
};

export function ProductCatalog({ products, filters }: ProductCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? products.filter((p) =>
        p.dominantAccords.some(
          (a) => a.toLowerCase() === activeFilter.toLowerCase(),
        ),
      )
    : products;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
              BLNC SCENTS
            </p>
            <h1 className="mt-3 font-serif text-4xl text-amber md:text-5xl">
              The Collection
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-amber/70">
              Five extrait de parfum signatures — each inspired by a legendary
              fragrance, refined through balance.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className={cn(
                "px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all",
                activeFilter === null
                  ? "bg-amber text-cream"
                  : "border border-amber/30 text-amber/70 hover:border-amber hover:text-amber",
              )}
            >
              All
            </button>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all",
                  activeFilter === filter
                    ? "bg-amber text-cream"
                    : "border border-amber/30 text-amber/70 hover:border-amber hover:text-amber",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}
