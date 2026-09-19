import { Product } from "@/data/products";
import { ProductCard } from "@/components/product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} priority={index === 0} />
      ))}
    </div>
  );
}
