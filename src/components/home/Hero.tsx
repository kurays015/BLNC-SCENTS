"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { GoldShimmerText } from "@/components/ui/GoldShimmerText";
import { products } from "@/data/products";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const featured = products[0];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden grain-overlay">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.4em] text-amber/60"
          >
            Extrait de Parfum
          </motion.p>
          <motion.div variants={item}>
            <GoldShimmerText
              variant="hero"
              className="mt-4 text-5xl leading-tight md:text-7xl lg:text-8xl"
            >
              {featured.name}
            </GoldShimmerText>
          </motion.div>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-md font-serif text-lg italic text-amber/80 lg:mx-0"
          >
            Strength in Balance
          </motion.p>
          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-amber/70 lg:mx-0"
          >
            {featured.description}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button href={`/products/${featured.slug}`} variant="primary">
              Discover
            </Button>
            <Button href="/products" variant="outline">
              View Collection
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-sm shadow-2xl">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -right-4 hidden rounded-sm bg-cream/90 px-4 py-3 shadow-lg backdrop-blur-sm lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber/50">
              Inspired by
            </p>
            <p className="font-serif text-sm text-amber">
              {featured.inspiredBy.fragrance}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
