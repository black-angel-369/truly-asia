import { cx } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

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
        "group inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold tracking-wide transition-[transform,background-color,border-color,color] duration-200 will-change-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        variant === "solid" &&
          "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lifted active:bg-blue-800",
        variant === "outline" &&
          "border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white",
        variant === "ghost" &&
          "text-blue-400 hover:text-blue-300",
        className
      )}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
      {children}
    </a>
  );
}
