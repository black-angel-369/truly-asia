import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { RouteLine } from "@/components/route-line";
import { Tilt } from "@/components/tilt";
import { company, defaultWhatsAppMessage } from "@/data/company";

const facts = [
  { value: company.founded, label: "Founded" },
  { value: "Peshawar", label: "Based in Pakistan" },
  { value: "Indonesia", label: "Currently sourcing from" },
];

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-port-950">
        <div className="relative flex min-h-[82vh] flex-col justify-end overflow-hidden pb-24 sm:min-h-[86vh] sm:pb-28">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="International trade and sourcing operations for Truly Asia Global Trade"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Duotone-style overlay to unify imagery with the brand palette */}
          <div className="absolute inset-0 bg-gradient-to-t from-port-950 via-port-950/70 to-port-950/20" />
          <div className="absolute inset-0 bg-port-900/20 mix-blend-multiply" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-clay-400/20 blur-3xl animate-float-slow"
          />

          <div className="relative mx-auto w-full max-w-content px-6 lg:px-8">
            <RouteLine from="Indonesia" to="Peshawar, Pakistan" tone="light" className="max-w-sm" />

            <h1 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Connecting Asian supply with{" "}
              <span className="italic text-clay-300">local markets.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-sand-100/80">
              Truly Asia Global Trade sources quality products from across
              Asia and connects reliable supply with wholesalers and
              businesses in local markets.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaButton href="/products" size="lg">
                Explore Products
              </CtaButton>
              <CtaButton
                href="/contact"
                variant="outline-light"
                size="lg"
                showArrow={false}
              >
                Contact Us
              </CtaButton>
              <WhatsAppButton
                phone={company.whatsapp[0].international}
                message={defaultWhatsAppMessage}
                variant="ghost"
                className="!px-0 !text-clay-300 hover:!text-clay-200"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping fact card — bridges the hero into the next section */}
      <div className="relative z-10 mx-auto -mt-16 w-[92%] max-w-4xl px-0 sm:-mt-14">
        <Tilt strength={3} className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border-2 border-white/15 bg-port-900 shadow-lifted">
          {facts.map((fact) => (
            <div key={fact.label} className="px-4 py-6 text-center sm:px-8 sm:py-8">
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {fact.value}
              </p>
              <p className="mt-1 text-xs text-sand-100/60 sm:text-sm">{fact.label}</p>
            </div>
          ))}
        </Tilt>
      </div>
    </>
  );
}
