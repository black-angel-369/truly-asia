import type { Metadata } from "next";
import Image from "next/image";
import { FileCheck2, MessageSquareText, Handshake, Award, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RouteLine } from "@/components/route-line";
import { CeoSection } from "@/components/ceo-section";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Truly Asia Global Trade was founded in 2025 in Peshawar, Pakistan, to source products from Asian markets and supply them to local wholesalers and businesses.",
  alternates: { canonical: "/about" },
};

const approachPoints = [
  {
    icon: FileCheck2,
    title: "Dependable sourcing",
    description:
      "Working to build sourcing relationships that businesses can rely on over time.",
  },
  {
    icon: Award,
    title: "Product quality",
    description:
      "Prioritizing products that hold up to the demands of wholesale and commercial use.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent communication",
    description:
      "Straightforward conversations about availability, sourcing, and supply.",
  },
  {
    icon: Handshake,
    title: "Wholesale relationships",
    description:
      "Built for long-term business connections, not one-off retail transactions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-port-950 py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-clay-400/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-content px-6 lg:px-8">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-clay-300">
            About us
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Sourcing from Asia.{" "}
            <span className="italic text-clay-300">Building reliable trade.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100/70">
            Truly Asia Global Trade was founded in 2025 to connect quality
            products from Asian markets with wholesalers and businesses in
            Pakistan.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-port-900 py-14 sm:py-20">
        <div className="mx-auto grid max-w-content items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <Tilt strength={4} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/15">
              <Image
                src="/images/hero/about-story.jpg"
                alt="Truly Asia Global Trade's sourcing and supply operations"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </Tilt>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading heading="Our story" tone="light" />
            <p className="mt-6 text-base leading-relaxed text-sand-100/70">
              Truly Asia Global Trade was founded in {company.founded} in{" "}
              {company.city}, with a clear focus: import products from Asian
              markets and supply them to wholesalers and businesses in the
              local market.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sand-100/70">
              The company&apos;s current sourcing activity centers on Indonesia,
              where it imports broomsticks for supply to wholesalers across
              Pakistan. From this starting point, Truly Asia Global Trade is
              working to develop trade and supply relationships across other
              Asian markets, including Thailand.
            </p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <RouteLine from="Indonesia" to="Pakistan" tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our offices */}
      <section className="border-t border-white/10 bg-port-950 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <SectionHeading
            heading="Our offices"
            supporting="A local presence in Pakistan and a sourcing office in Indonesia."
            tone="light"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {company.offices.map((office, index) => (
              <Reveal key={office.country} delay={index * 70}>
                <Tilt strength={5} className="h-full rounded-2xl border border-white/10 bg-port-900 p-7 shadow-card hover:shadow-glow hover:border-clay-400/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay-500/15 text-clay-300">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-medium text-clay-300">
                    {office.country}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {office.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
                    {office.address}
                  </p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-t border-white/10 bg-port-900 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <SectionHeading
            heading="Our approach"
            supporting="The way Truly Asia Global Trade sources and supplies products is guided by a few consistent principles."
            tone="light"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 70}>
                <Tilt strength={5} className="h-full rounded-2xl border border-white/10 bg-port-950 p-7 shadow-card hover:shadow-glow hover:border-clay-400/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay-500/15 text-clay-300">
                    <point.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
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

      {/* Founder & CEO */}
      <section className="bg-port-900 py-14 sm:py-20">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p className="mb-10 font-body text-xs font-semibold uppercase tracking-wider text-clay-300">
            Founder & CEO
          </p>
          <CeoSection tone="light" />
        </div>
      </section>

      {/* Business vision */}
      <section className="border-t border-port-800 bg-port-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p className="text-sm font-medium text-clay-400">
            Vision statement
          </p>
          <blockquote className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            To build strong connections between Asian suppliers and local
            markets by making quality products accessible through dependable
            trade relationships.
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-port-950 py-12 sm:py-16">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-6 lg:px-8">
          <p className="max-w-md font-display text-xl font-semibold text-white">
            Interested in sourcing or wholesale opportunities?
          </p>
          <CtaButton href="/contact" variant="outline-light" size="lg">
            Contact Us
          </CtaButton>
        </div>
      </section>
    </>
  );
}
