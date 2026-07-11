import { FlameEmblem } from "@/components/ui/FlameEmblem";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type InspiredByBadgeProps = {
  brand: string;
  fragrance: string;
};

export function InspiredByBadge({ brand, fragrance }: InspiredByBadgeProps) {
  return (
    <RevealOnScroll>
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <FlameEmblem className="h-14 w-14 text-gold" />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
            Inspired by
          </p>
          <p className="mt-1 font-serif text-2xl text-amber md:text-3xl">
            {fragrance}
          </p>
          <p className="mt-1 text-sm uppercase tracking-widest text-amber/70">
            {brand}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}
