import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FlameEmblem } from "@/components/ui/FlameEmblem";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the philosophy behind BLNC SCENTS — luxury extrait de parfum crafted with strength in balance.",
};

export default function AboutPage() {
  return (
    <div className="grain-overlay">
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <RevealOnScroll>
            <FlameEmblem className="mx-auto mb-8 h-16 w-16 text-gold" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-amber/60">
              BLNC SCENTS
            </p>
            <h1 className="mt-4 font-serif text-4xl text-amber md:text-5xl">
              Strength in Balance
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <RevealOnScroll>
            <p className="text-sm leading-relaxed text-amber/80">
              BLNC SCENTS was born from a simple conviction: the most powerful
              fragrances are those that find equilibrium. Not loud for the sake
              of attention, not quiet to the point of disappearance — but held in
              perfect tension between the two.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="mt-6 text-sm leading-relaxed text-amber/80">
              Each of our five extrait de parfum signatures draws inspiration
              from legendary fragrances that have defined generations. We do not
              replicate — we reinterpret. Every bottle is a conversation between
              the iconic and the original, filtered through sun-warmed stone,
              shadowed palms, and the quiet confidence of natural luxury.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="mt-6 text-sm leading-relaxed text-amber/80">
              Our extrait concentration ensures depth and longevity. At 50 mL,
              each bottle is sized for the ritual of daily wear — a personal
              signature that evolves on skin throughout the day.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <p className="font-serif text-xl italic text-amber">
                &ldquo;We believe fragrance should feel like balance — bold when
                it needs to be, restrained when it matters most.&rdquo;
              </p>
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl text-amber">
              Experience the Collection
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-amber/70">
              Five signatures. One philosophy. Find the extrait that speaks to
              you.
            </p>
            <div className="mt-8">
              <Button href="/products" variant="primary">
                Explore Collection
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
