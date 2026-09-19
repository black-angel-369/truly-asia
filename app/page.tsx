import Image from "next/image";
import Link from "next/link";
import { Compass, ShieldCheck, Handshake, Globe2 } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaButton } from "@/components/cta-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ProductCard } from "@/components/product-card";
import { CeoSection } from "@/components/ceo-section";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { featuredProduct, otherProducts } from "@/data/products";
import { company } from "@/data/company";

const pillars = [
  {
    icon: Compass,
    title: "Asian sourcing",
    description: "Sourcing products from trusted Asian markets.",
  },
  {
    icon: Handshake,
    title: "Wholesale supply",
    description: "Providing products for wholesalers and local business markets.",
  },
  {
    icon: ShieldCheck,
    title: "Quality focus",
    description: "Prioritizing durable and dependable products.",
  },
  {
    icon: Globe2,
    title: "International experience",
    description: "Business experience across international markets.",
  },
];

const workingPoints = [
  {
    title: "Reliable sourcing",
    description:
      "Products are sourced with a focus on consistency, so wholesalers know what to expect.",
  },
  {
    title: "International perspective",
    description:
      "An outlook shaped by business experience across more than one country.",
  },
  {
    title: "Wholesale focus",
    description:
      "Built for wholesalers and businesses, not individual retail purchases.",
  },
  {
    title: "Direct communication",
    description:
      "Reach the business directly over WhatsApp, email, or in person in Peshawar.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust / Company introduction */}
      <section className="border-t border-white/10 bg-port-950 pb-14 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto grid max-w-content items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <Tilt strength={4} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/15">
              <Image
                src="/images/hero/hero-secondary.jpg"
                alt="Truly Asia Global Trade sourcing and logistics"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </Tilt>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading heading="Built around reliable trade" tone="light" />
            <p className="mt-6 text-base leading-relaxed text-sand-100/70">
              Truly Asia Global Trade is an import and wholesale trading
              company based in Peshawar, Pakistan. The company focuses on
              sourcing products from Asian markets and supplying them to
              wholesalers and businesses in the local market.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sand-100/70">
              Every part of the business is built around a straightforward
              idea: source quality products from Asia, and make them
              dependably available to businesses that need them locally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Business focus pillars */}
      <section className="bg-port-900 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12">
            <div>
              <SectionHeading heading="What we focus on" tone="light" />
              <p className="mt-5 max-w-sm text-base leading-relaxed text-sand-100/70">
                Four principles guide how Truly Asia Global Trade sources and
                supplies products.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 70}>
                  <Tilt strength={3} className="group flex items-start gap-6 py-7 sm:gap-10">
                    <span className="font-display text-3xl font-medium text-clay-400/70 transition-colors group-hover:text-clay-400 sm:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <pillar.icon
                          className="h-4 w-4 shrink-0 text-clay-300"
                          aria-hidden="true"
                        />
                        <h3 className="font-display text-xl font-semibold text-white">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-sand-100/70">
                        {pillar.description}
                      </p>
                    </div>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="relative overflow-hidden bg-port-gradient py-14 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-clay-500/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-content px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <Reveal className="order-2 lg:order-1">
              <p className="text-sm font-medium text-clay-300">
                Currently available
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featuredProduct.name}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-sand-100/75">
                {featuredProduct.description}
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  phone={company.whatsapp[0].international}
                  message={featuredProduct.whatsappMessage}
                  size="lg"
                >
                  Wholesale Inquiry
                </WhatsAppButton>
              </div>
            </Reveal>
            <Reveal delay={80} className="order-1 lg:order-2">
              <Tilt strength={4} className="mx-auto max-w-md lg:max-w-none">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/15 shadow-lifted">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-port-950/50 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    Imported from {featuredProduct.origin}
                  </span>
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other products preview */}
      <section className="bg-port-950 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              heading="Our broader sourcing portfolio"
              supporting="Alongside broomsticks, we are developing sourcing relationships for the following products."
              tone="light"
              className="max-w-xl"
            />
            <Link
              href="/products"
              className="font-body text-sm font-semibold text-clay-300 underline decoration-clay-400/40 underline-offset-4 hover:text-clay-200 hover:decoration-clay-300"
            >
              View all products
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CEO preview */}
      <section className="border-t border-white/10 bg-port-900 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <CeoSection
            compact
            tone="light"
            ctaSlot={
              <CtaButton href="/about" variant="outline-light">
                Meet Our Founder
              </CtaButton>
            }
          />
        </div>
      </section>

      {/* Why work with us */}
      <section className="relative overflow-hidden bg-port-gradient py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-clay-500/10 blur-3xl"
        />
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <SectionHeading
            heading="Why work with us"
            tone="light"
            className="max-w-xl"
          />
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {workingPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 70}>
                <Tilt strength={4} className="group border-t border-white/15 pt-5 hover:border-clay-400/70">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/70">
                    {point.description}
                  </p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-port-950 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 text-center lg:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Looking for reliable wholesale supply?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sand-100/70 sm:text-lg">
            Talk to Truly Asia Global Trade about current products, wholesale
            availability, and sourcing opportunities.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              phone={company.whatsapp[0].international}
              message="Hello Truly Asia Global Trade, I would like to discuss wholesale supply."
              size="lg"
            >
              WhatsApp Us
            </WhatsAppButton>
            <CtaButton href="/contact" variant="outline-light" size="lg">
              Contact Us
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
