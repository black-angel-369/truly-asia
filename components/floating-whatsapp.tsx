"use client";

import { MessageCircle } from "lucide-react";
import { company, buildWhatsAppUrl, defaultWhatsAppMessage } from "@/data/company";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(company.whatsapp[0].international, defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Truly Asia Global Trade on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-clay-500 text-white shadow-lifted transition-transform duration-200 hover:scale-105 hover:bg-clay-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-port-900 motion-safe:before:absolute motion-safe:before:inset-0 motion-safe:before:-z-10 motion-safe:before:animate-ping motion-safe:before:rounded-full motion-safe:before:bg-clay-500/50 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
