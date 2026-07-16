"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GoldShimmerText } from "@/components/ui/GoldShimmerText";

type HeroMotionProps = {
  name: string;
  description: string;
  slug: string;
  inspiredByFragrance: string;
};

/**
 * Client component that wraps the hero text in Framer Motion animations.
 * Separated from Hero (Server Component) so data fetching stays server-side.
 */
export function HeroMotion({
  name,
  description,
  slug,
  inspiredByFragrance,
}: HeroMotionProps) {
  const prefersReducedMotion = useReducedMotion();

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
          {name}
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
        {description}
      </motion.p>
      <motion.div
        variants={item}
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
      >
        <Button href={`/products/${slug}`} variant="primary">
          Discover
        </Button>
        <Button href="/products" variant="outline">
          View Collection
        </Button>
      </motion.div>
    </motion.div>
  );
}
