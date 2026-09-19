import Image from "next/image";
import { Circle } from "lucide-react";
import { Product } from "@/data/products";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Tilt } from "@/components/tilt";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority }: ProductCardProps) {
  const isAvailable = product.availability === "AVAILABLE";

  return (
    <Tilt
      strength={4}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-white/15 shadow-card hover:shadow-lifted hover:border-clay-400/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-port-950">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-950 via-port-950/40 to-transparent" />

        {product.origin && (
          <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {product.origin}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
          <div className="flex items-center gap-2">
            <Circle
              className={cx(
                "h-1.5 w-1.5 shrink-0",
                isAvailable ? "fill-clay-400 text-clay-400" : "fill-white/40 text-white/40"
              )}
              aria-hidden="true"
            />
            <span
              className={cx(
                "text-[11px] font-medium",
                isAvailable ? "text-clay-300" : "text-white/60"
              )}
            >
              {isAvailable ? "Currently Available" : "Currently Unavailable"}
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold text-white">
            {product.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-port-900 p-5">
        <p className="flex-1 text-sm leading-relaxed text-sand-100/70">
          {product.summary}
        </p>

        <div className="mt-5">
          {isAvailable ? (
            <WhatsAppButton
              phone={company.whatsapp[0].international}
              message={product.whatsappMessage}
              variant="outline"
              className="w-full"
            >
              Request Wholesale Information
            </WhatsAppButton>
          ) : (
            <p className="text-xs leading-relaxed text-sand-100/60">
              Availability may vary. Contact us for current sourcing and
              wholesale availability.
            </p>
          )}
        </div>
      </div>
    </Tilt>
  );
}
