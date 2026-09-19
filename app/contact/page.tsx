import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactCard } from "@/components/contact-card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Truly Asia Global Trade for wholesale inquiries and sourcing opportunities. WhatsApp, email, and office details for Peshawar, Pakistan and Jakarta, Indonesia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-port-950 py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-clay-400/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-content px-6 lg:px-8">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-clay-300">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-5xl font-medium tracking-tight text-white sm:text-6xl">
            Let&apos;s talk <span className="italic text-clay-300">business.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100/70">
            Whether you&apos;re looking for current wholesale products or want
            to discuss sourcing opportunities, get in touch with Truly Asia
            Global Trade.
          </p>
        </div>
      </section>

      <section className="bg-port-900 py-12 sm:py-16">
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal>
              <ContactCard icon={Phone} title="WhatsApp">
                {company.whatsapp.map((wa) => (
                  <a
                    key={wa.international}
                    href={`https://wa.me/${wa.international}?text=${encodeURIComponent(
                      "Hello Truly Asia Global Trade, I would like to discuss wholesale supply."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-medium text-white transition-colors hover:text-clay-300"
                  >
                    {wa.display}
                    <span className="block text-xs font-normal text-sand-100/60">
                      {wa.label}
                    </span>
                  </a>
                ))}
              </ContactCard>
            </Reveal>

            <Reveal delay={70}>
              <ContactCard icon={Mail} title="Email">
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-white transition-colors hover:text-clay-300"
                >
                  {company.email}
                </a>
                <p className="text-xs text-sand-100/60">
                  For wholesale inquiries and general questions.
                </p>
                {company.PHONE_NUMBER ? (
                  <a
                    href={`tel:${company.PHONE_NUMBER}`}
                    className="block text-xs text-sand-100/60 transition-colors hover:text-clay-300"
                  >
                    {company.PHONE_NUMBER}
                  </a>
                ) : (
                  <p className="text-xs text-sand-100/60">
                    A telephone number will be added here soon.
                  </p>
                )}
              </ContactCard>
            </Reveal>
          </div>

          <div className="mt-14">
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-clay-300">
              Our offices
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
              Where to find us
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {company.offices.map((office, index) => (
                <Reveal key={office.country} delay={index * 70}>
                  <Tilt strength={5} className="h-full rounded-2xl border border-white/10 bg-port-950 p-7 shadow-card hover:shadow-glow hover:border-clay-400/40">
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

          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-port-950 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Prefer to message us directly?
                </h2>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-sand-100/70">
                  Send a WhatsApp message and we&apos;ll get back to you about
                  current products and wholesale availability.
                </p>
              </div>
              <WhatsAppButton
                phone={company.whatsapp[0].international}
                message="Hello Truly Asia Global Trade, I would like to discuss wholesale supply."
                size="lg"
                className="shrink-0"
              >
                WhatsApp Us
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
