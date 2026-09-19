import type { Metadata } from "next";
import Image from "next/image";
import { Circle } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Lightbox } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { products } from "@/data/products";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Truly Asia Global Trade sources broomsticks, turmeric, coffee beans, and raw cacao from Asian markets for wholesale and commercial supply.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-port-950 py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-clay-400/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-content px-6 lg:px-8">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-clay-300">
            Catalog
          </p>
          <h1 className="mt-3 font-display text-5xl font-medium tracking-tight text-white sm:text-6xl">
            Our <span className="italic text-clay-300">products</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100/70">
            We source products from Asian markets for wholesale and
            commercial supply. Product availability may vary based on current
            sourcing and market demand.
          </p>
        </div>
      </section>

      <section className="bg-port-900 py-12 sm:py-16">
        <div className="mx-auto flex max-w-content flex-col gap-10 px-6 lg:px-8">
          {products.map((product, index) => {
            const isAvailable = product.availability === "AVAILABLE";
            const reversed = index % 2 === 1;

            return (
              <Reveal key={product.slug}>
                <div
                  className={cx(
                    "grid gap-10 rounded-2xl border border-white/10 bg-port-950 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14"
                  )}
                >
                  <div
                    className={cx(
                      "order-1",
                      reversed && "lg:order-2"
                    )}
                  >
                    {product.gallery && product.gallery.length > 1 ? (
                      <Lightbox images={product.gallery} />
                    ) : (
                      <Tilt strength={5} className="group relative mx-auto aspect-[4/3] max-w-sm overflow-hidden rounded-2xl border-2 border-white/15">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        {product.origin && (
                          <span className="absolute left-4 top-4 rounded-full bg-port-900/90 px-3 py-1.5 text-xs font-medium text-white">
                            Imported from {product.origin}
                          </span>
                        )}
                      </Tilt>
                    )}
                  </div>

                  <div
                    className={cx(
                      "order-2 flex flex-col justify-center",
                      reversed && "lg:order-1"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Circle
                        className={cx(
                          "h-2 w-2 shrink-0",
                          isAvailable
                            ? "fill-clay-400 text-clay-400"
                            : "fill-white/30 text-white/30"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={cx(
                          "text-sm font-medium",
                          isAvailable ? "text-clay-300" : "text-sand-100/60"
                        )}
                      >
                        Availability:{" "}
                        {isAvailable ? "Available" : "Currently Unavailable"}
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                      {product.name}
                    </h2>
                    {product.origin && (
                      <p className="mt-1 text-sm font-medium text-sand-100/60">
                        Imported from {product.origin}
                      </p>
                    )}
                    <p className="mt-5 max-w-md text-base leading-relaxed text-sand-100/70">
                      {product.description}
                    </p>

                    <div className="mt-7">
                      {isAvailable ? (
                        <WhatsAppButton
                          phone={company.whatsapp[0].international}
                          message={product.whatsappMessage}
                          size="lg"
                        >
                          Request Wholesale Information
                        </WhatsAppButton>
                      ) : (
                        <p className="max-w-sm text-sm leading-relaxed text-sand-100/60">
                          Availability may vary. Contact us for current
                          sourcing and wholesale availability.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
