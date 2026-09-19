"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { company, buildWhatsAppUrl } from "@/data/company";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollProgress } from "@/components/scroll-progress";
import { cx } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cx(
          "sticky top-0 z-40 border-b transition-all duration-300 relative",
          scrolled
            ? "border-white/10 bg-port-950/95 shadow-[0_1px_0_rgba(0,0,0,0.2)] backdrop-blur"
            : "border-transparent bg-port-950"
        )}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt={company.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="font-display text-base font-semibold leading-tight text-white">
              Truly Asia
              <span className="block text-[11px] font-medium tracking-wide text-sand-100/60">
                Global Trade
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cx(
                    "group relative py-1 font-body text-sm font-medium transition-colors",
                    active ? "text-white" : "text-sand-100/70 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cx(
                      "absolute -bottom-1 left-0 h-[2px] rounded-full bg-clay-500 transition-all duration-300 ease-out",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {company.PHONE_NUMBER && (
              <a
                href={`tel:${company.PHONE_NUMBER}`}
                className="flex items-center gap-2 text-sm font-medium text-sand-100/70 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.PHONE_NUMBER}
              </a>
            )}
            <a
              href={buildWhatsAppUrl(
                company.whatsapp[0].international,
                "Hello Truly Asia Global Trade, I would like to know more about your products."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-clay-500 px-5 py-2.5 font-body text-sm font-semibold tracking-wide text-white transition-colors hover:bg-clay-600"
            >
              WhatsApp Us
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ScrollProgress />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
