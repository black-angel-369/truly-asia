import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cx } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outline-light" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

export function CtaButton({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  showArrow = true,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cx(
    "group inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold tracking-wide transition-[transform,background-color,border-color] duration-200 will-change-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500",
    size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
    variant === "solid" && "bg-white text-port-900 hover:bg-sand-100 hover:shadow-lifted",
    variant === "outline" &&
      "border border-white/30 text-white hover:border-white hover:bg-white/10",
    variant === "outline-light" &&
      "border border-white/30 text-white hover:border-white hover:bg-white/10",
    variant === "ghost" && "text-white hover:text-clay-300",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
