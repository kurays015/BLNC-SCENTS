import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CTABanner() {
  return (
    <section className="bg-beige py-20 grain-overlay">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
            Now Available
          </p>
          <h2 className="mt-4 font-serif text-3xl text-amber md:text-4xl">
            Find Your Signature
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-amber/70">
            Explore the full BLNC SCENTS collection and discover the extrait
            that speaks to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/products" variant="primary">
              Shop Collection
            </Button>
            <Button href="/about" variant="outline">
              Our Story
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
