import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FlameEmblem } from "@/components/ui/FlameEmblem";

const pillars = [
  {
    title: "Extrait de Parfum",
    description:
      "The highest concentration of fragrance oils — rich, long-lasting, and unmistakably luxurious.",
  },
  {
    title: "50 mL / 1.7 fl oz",
    description:
      "Perfectly sized for daily wear and travel. A statement bottle designed to last.",
  },
  {
    title: "Inspired, Not Imitated",
    description:
      "Each scent draws from legendary fragrances, reinterpreted with BLNC SCENTS' philosophy of balance.",
  },
];

export function BrandPhilosophy() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <FlameEmblem className="mb-6 h-16 w-16 text-gold" />
            <h2 className="font-serif text-4xl text-amber md:text-5xl">
              Strength in Balance
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-amber/70">
              BLNC SCENTS exists at the intersection of power and poise. We
              believe the most compelling fragrances are those that hold
              tension — bold yet refined, familiar yet surprising. Every bottle
              is an extrait de parfum, concentrated and deliberate.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-amber/70">
              Set against sun-warmed stone and shadowed palms, our collection
              invites you to find your own equilibrium.
            </p>
          </RevealOnScroll>

          <div className="flex flex-col gap-8">
            {pillars.map((pillar, index) => (
              <RevealOnScroll key={pillar.title} delay={index * 0.1} direction="right">
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-serif text-xl text-amber">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber/70">
                    {pillar.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
