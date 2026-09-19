import { MessageCircle } from "lucide-react";
import { cx } from "@/lib/utils";

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  phone,
  message,
  children,
  variant = "solid",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "group inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold tracking-wide transition-[transform,background-color,border-color,color] duration-200 will-change-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        variant === "solid" &&
          "bg-clay-500 text-white hover:bg-clay-600 hover:shadow-glow active:bg-clay-700",
        variant === "outline" &&
          "border border-white/25 text-white hover:border-clay-400 hover:bg-clay-500 hover:text-white",
        variant === "ghost" &&
          "text-white hover:text-clay-300",
        className
      )}
    >
      <MessageCircle
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      />
      {children}
    </a>
  );
}
