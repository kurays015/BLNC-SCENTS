import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { getProducts, getAllAccordFilters } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Explore all five BLNC SCENTS extrait de parfum signatures — Player's Code, Monarch, BR 540, Tropical F*, and S. Intense.",
};

export default async function ProductsPage() {
  const [products, filters] = await Promise.all([
    getProducts(),
    getAllAccordFilters(),
  ]);

  return <ProductCatalog products={products} filters={filters} />;
}
