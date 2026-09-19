export type ProductAvailability = "AVAILABLE" | "UNAVAILABLE";

export interface Product {
  slug: string;
  name: string;
  origin?: string;
  availability: ProductAvailability;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
  whatsappMessage: string;
}

// Add future products to this array — product cards, the products page,
// and the homepage preview are all generated from this single list.
export const products: Product[] = [
  {
    slug: "broomsticks",
    name: "Broomsticks",
    origin: "Indonesia",
    availability: "AVAILABLE",
    summary:
      "High-quality broomsticks made with durable materials, sourced from Indonesia.",
    description:
      "High-quality broomsticks made with durable materials sourced from Indonesia. Strong, lightweight, and designed for comfortable everyday use. Ideal for household and commercial cleaning applications.",
    image: "/images/products/broomsticks.jpg",
    imageAlt: "Broomsticks imported from Indonesia by Truly Asia Global Trade",
    gallery: [
      { src: "/images/products/broomsticks.jpg", alt: "Broomsticks, front view" },
      { src: "/images/products/broomsticks-2.jpg", alt: "Broomsticks, detail view" },
    ],
    whatsappMessage:
      "Hello Truly Asia Global Trade, I am interested in wholesale supply of your broomsticks. Please share the current details and availability.",
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    availability: "UNAVAILABLE",
    summary: "A naturally sourced agricultural commodity for wholesale markets.",
    description:
      "A naturally sourced agricultural commodity intended for wholesale and commercial markets.",
    image: "/images/products/turmeric.jpg",
    imageAlt: "Turmeric sourced for wholesale supply",
    whatsappMessage:
      "Hello Truly Asia Global Trade, I would like to know about the current sourcing and availability of turmeric.",
  },
  {
    slug: "coffee-beans",
    name: "Coffee Beans",
    availability: "UNAVAILABLE",
    summary: "Raw coffee beans intended for wholesale and commercial supply.",
    description:
      "Raw coffee beans intended for wholesale and commercial supply.",
    image: "/images/products/coffee-beans.jpg",
    imageAlt: "Raw coffee beans sourced for wholesale supply",
    whatsappMessage:
      "Hello Truly Asia Global Trade, I would like to know about the current sourcing and availability of coffee beans.",
  },
  {
    slug: "raw-cacao-cocoa",
    name: "Raw Cacao / Cocoa",
    availability: "UNAVAILABLE",
    summary: "Raw cacao/cocoa sourced for commercial and wholesale applications.",
    description:
      "Raw cacao/cocoa sourced for commercial and wholesale applications.",
    image: "/images/products/cacao.jpg",
    imageAlt: "Raw cacao and cocoa sourced for wholesale supply",
    whatsappMessage:
      "Hello Truly Asia Global Trade, I would like to know about the current sourcing and availability of raw cacao/cocoa.",
  },
];

export const featuredProduct = products.find((p) => p.availability === "AVAILABLE")!;
export const otherProducts = products.filter((p) => p.slug !== featuredProduct.slug);
