import type { SanityProduct } from "@/sanity/types";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

type ProductGridProps = {
  products: SanityProduct[];
  className?: string;
};

export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          priority={index < 3}
        />
      ))}
    </div>
  );
}
