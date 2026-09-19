"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { company, buildWhatsAppUrl } from "@/data/company";
import { cx } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      className={cx(
        "fixed inset-0 z-50 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cx(
          "absolute inset-0 bg-port-950/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cx(
          "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-port-950 shadow-lifted transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="font-body text-sm font-semibold uppercase tracking-wider text-white">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-1.5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cx(
                "rounded-xl px-3 py-3 font-display text-lg font-medium transition-colors",
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-sand-100/70 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 px-6 py-6">
          <a
            href={buildWhatsAppUrl(
              company.whatsapp[0].international,
              "Hello Truly Asia Global Trade, I would like to know more about your products."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-clay-500 px-5 py-3 font-body text-sm font-semibold tracking-wide text-white transition-colors hover:bg-clay-600"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
