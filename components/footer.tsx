import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { company, buildWhatsAppUrl } from "@/data/company";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = [
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
] as const;

export function Footer() {
  const activeSocial = socialIcons.filter(
    ({ key }) => company.social[key]
  );

  return (
    <footer className="border-t border-port-800 bg-port-950 text-sand-100">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.png"
                alt={company.name}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-base font-semibold text-white">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/70">
              {company.tagline} An import and wholesale trading company based
              in {company.city}, sourcing quality products from across Asia.
            </p>

            {activeSocial.length > 0 && (
              <div className="mt-6 flex gap-3">
                {activeSocial.map(({ key, Icon, label }) => (
                  <a
                    key={key}
                    href={company.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sand-100/80 transition-colors hover:border-clay-400 hover:text-clay-400"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-clay-400/90">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-100/70 transition-colors hover:text-clay-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-clay-400/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
              {company.whatsapp.map((wa) => (
                <li key={wa.international}>
                  <a
                    href={buildWhatsAppUrl(
                      wa.international,
                      "Hello Truly Asia Global Trade, I would like to know more about your products."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 transition-colors hover:text-clay-400"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {wa.display}
                      <span className="block text-xs text-sand-100/50">
                        WhatsApp — {wa.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-clay-400"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              {company.PHONE_NUMBER && (
                <li>
                  <a
                    href={`tel:${company.PHONE_NUMBER}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-clay-400"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {company.PHONE_NUMBER}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-clay-400/90">
              Offices
            </h3>
            <ul className="mt-4 space-y-4">
              {company.offices.map((office) => (
                <li key={office.country} className="flex items-start gap-2.5 text-sm leading-relaxed text-sand-100/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {office.address}
                    <span className="block text-xs text-sand-100/50">
                      {office.label}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs text-sand-100/50">
          © {company.founded} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
