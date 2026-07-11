import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Explore all five BLNC SCENTS extrait de parfum signatures — Player's Code, Monarch, BR 540, Tropical F*, and S. Intense.",
};

export default function ProductsPage() {
  return <ProductCatalog />;
}
