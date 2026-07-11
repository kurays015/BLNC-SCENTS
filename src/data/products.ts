export type Accord = {
  name: string;
  intensity: number;
  color: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline?: string;
  inspiredBy: { brand: string; fragrance: string };
  notes: string[];
  accords: Accord[];
  image: string;
  description: string;
  dominantAccords: string[];
};

export const products: Product[] = [
  {
    slug: "players-code",
    name: "Player's Code",
    inspiredBy: { brand: "Versace", fragrance: "Eros" },
    notes: ["vanilla", "aromatic", "green", "fresh spicy", "amber"],
    dominantAccords: ["vanilla", "aromatic", "fresh"],
    accords: [
      { name: "vanilla", intensity: 100, color: "#F5E6A3" },
      { name: "aromatic", intensity: 88, color: "#2A9D8F" },
      { name: "green", intensity: 76, color: "#4CAF50" },
      { name: "fresh spicy", intensity: 68, color: "#8BC34A" },
      { name: "amber", intensity: 60, color: "#C45C3E" },
      { name: "fruity", intensity: 52, color: "#E53935" },
      { name: "citrus", intensity: 44, color: "#9E9D24" },
      { name: "woody", intensity: 36, color: "#5D4037" },
      { name: "sweet", intensity: 28, color: "#B71C1C" },
      { name: "fresh", intensity: 20, color: "#81D4FA" },
    ],
    image: "/images/products/players-code.png",
    description:
      "A magnetic extrait built on creamy vanilla and aromatic freshness — bold, confident, and unmistakably seductive. Inspired by the iconic energy of Eros, refined through BLNC SCENTS' lens of balance.",
  },
  {
    slug: "monarch",
    name: "Monarch",
    inspiredBy: { brand: "Creed", fragrance: "Aventus" },
    notes: ["fruity", "sweet", "woody", "leather", "citrus"],
    dominantAccords: ["fruity", "woody", "sweet"],
    accords: [
      { name: "fruity", intensity: 100, color: "#E65100" },
      { name: "sweet", intensity: 85, color: "#C2185B" },
      { name: "woody", intensity: 72, color: "#6D4C41" },
      { name: "leather", intensity: 60, color: "#4E342E" },
      { name: "citrus", intensity: 50, color: "#AED581" },
      { name: "smoky", intensity: 42, color: "#757575" },
      { name: "musky", intensity: 34, color: "#7B1FA2" },
      { name: "fresh", intensity: 26, color: "#4FC3F7" },
      { name: "tropical", intensity: 18, color: "#FFB300" },
      { name: "mossy", intensity: 10, color: "#33691E" },
    ],
    image: "/images/products/monarch.png",
    description:
      "Regal and commanding — a fruity-woody extrait with a smoky leather backbone. Monarch channels the legendary presence of Aventus into a fragrance that rules with quiet confidence.",
  },
  {
    slug: "br-540",
    name: "BR 540",
    inspiredBy: {
      brand: "Maison Francis Kurkdjian",
      fragrance: "Baccarat Rouge 540",
    },
    notes: ["woody", "amber", "warm spicy", "metallic", "fresh spicy"],
    dominantAccords: ["woody", "amber", "warm spicy"],
    accords: [
      { name: "woody", intensity: 100, color: "#6D4C41" },
      { name: "amber", intensity: 90, color: "#E65100" },
      { name: "warm spicy", intensity: 78, color: "#8D2B0B" },
      { name: "metallic", intensity: 65, color: "#607D8B" },
      { name: "fresh spicy", intensity: 55, color: "#558B2F" },
      { name: "aromatic", intensity: 45, color: "#00695C" },
      { name: "white floral", intensity: 35, color: "#B0BEC5" },
      { name: "animalic", intensity: 25, color: "#424242" },
      { name: "fresh", intensity: 15, color: "#64B5F6" },
    ],
    image: "/images/products/br-540.png",
    description:
      "Radiant amber and crystalline woods woven into an extrait of luminous warmth. BR 540 captures the ethereal brilliance of Baccarat Rouge 540 with BLNC SCENTS' signature restraint.",
  },
  {
    slug: "tropical-f",
    name: "Tropical F*",
    inspiredBy: {
      brand: "Stéphane Humbert Lucas 777",
      fragrance: "God of Fire",
    },
    notes: ["fruity", "tropical", "sweet", "citrus", "fresh"],
    dominantAccords: ["fruity", "tropical", "citrus"],
    accords: [
      { name: "fruity", intensity: 100, color: "#FF6F00" },
      { name: "tropical", intensity: 88, color: "#FDD835" },
      { name: "sweet", intensity: 75, color: "#D32F2F" },
      { name: "citrus", intensity: 62, color: "#AED581" },
      { name: "fresh", intensity: 50, color: "#26C6DA" },
      { name: "woody", intensity: 40, color: "#795548" },
      { name: "fresh spicy", intensity: 30, color: "#33691E" },
      { name: "musky", intensity: 22, color: "#7E57C2" },
      { name: "terpenic", intensity: 14, color: "#F9A825" },
      { name: "oud", intensity: 8, color: "#424242" },
    ],
    image: "/images/products/tropical-f.png",
    description:
      "A sun-drenched extrait bursting with tropical fruit and golden citrus. Tropical F* channels the fiery opulence of God of Fire into a vibrant, wearable statement of strength in balance.",
  },
  {
    slug: "s-intense",
    name: "S. Intense",
    inspiredBy: { brand: "Dior", fragrance: "Sauvage" },
    notes: [
      "fresh spicy",
      "citrus",
      "amber",
      "lavender",
      "musky",
      "aromatic",
      "herbal",
    ],
    dominantAccords: ["fresh spicy", "citrus", "amber"],
    accords: [
      { name: "fresh spicy", intensity: 100, color: "#2E7D32" },
      { name: "citrus", intensity: 85, color: "#CDDC39" },
      { name: "amber", intensity: 72, color: "#E65100" },
      { name: "lavender", intensity: 60, color: "#9575CD" },
      { name: "musky", intensity: 50, color: "#78909C" },
      { name: "aromatic", intensity: 42, color: "#00897B" },
      { name: "herbal", intensity: 34, color: "#689F38" },
      { name: "anis", intensity: 26, color: "#8D6E63" },
      { name: "soft spicy", intensity: 18, color: "#D84315" },
      { name: "floral", intensity: 10, color: "#F48FB1" },
    ],
    image: "/images/products/s-intense.png",
    description:
      "Raw, radiant, and refined — a fresh-spicy extrait with amber depth and aromatic edge. S. Intense distills the untamed spirit of Sauvage into BLNC SCENTS' philosophy of controlled power.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllAccordFilters(): string[] {
  const accords = new Set<string>();
  products.forEach((p) => p.dominantAccords.forEach((a) => accords.add(a)));
  return Array.from(accords).sort();
}
