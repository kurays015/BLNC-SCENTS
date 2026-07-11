"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  priority?: boolean;
};

export function ProductCard({ product, className, priority = false }: ProductCardProps) {
  return (
    <motion.div
      className={cn("group", className)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-sm bg-cream shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-amber/50">
              Inspired by {product.inspiredBy.fragrance}
            </p>
            <h3 className="mt-1 font-serif text-xl text-amber transition-colors group-hover:text-gold">
              {product.name}
            </h3>
            <p className="mt-2 font-mono text-xs text-amber/60">
              {product.notes.slice(0, 3).join(" · ")}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
