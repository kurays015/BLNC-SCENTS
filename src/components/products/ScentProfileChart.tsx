"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Accord } from "@/data/products";
import { formatAccordName } from "@/lib/utils";

type ScentProfileChartProps = {
  accords: Accord[];
  className?: string;
};

export function ScentProfileChart({ accords, className }: ScentProfileChartProps) {
  const prefersReducedMotion = useReducedMotion();
  const sorted = [...accords].sort((a, b) => b.intensity - a.intensity);

  return (
    <div className={className}>
      <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
        Scent Profile
      </h3>
      <div className="flex flex-col gap-2">
        {sorted.map((accord, index) => (
          <div key={accord.name} className="group flex items-center gap-3">
            <motion.div
              className="relative h-7 overflow-hidden rounded-sm"
              initial={{ width: prefersReducedMotion ? `${accord.intensity}%` : 0 }}
              whileInView={{ width: `${accord.intensity}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: accord.color,
                minWidth: "60px",
                maxWidth: "100%",
              }}
            >
              <span className="absolute inset-y-0 left-2 flex items-center text-xs font-medium capitalize text-charcoal/80 mix-blend-multiply">
                {formatAccordName(accord.name)}
              </span>
            </motion.div>
            <span className="w-8 text-right text-xs text-amber/50 opacity-0 transition-opacity group-hover:opacity-100">
              {accord.intensity}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
