import { Hero } from "@/components/home/Hero";
import { CollectionPreview } from "@/components/home/CollectionPreview";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionPreview />
      <BrandPhilosophy />
      <CTABanner />
    </>
  );
}
