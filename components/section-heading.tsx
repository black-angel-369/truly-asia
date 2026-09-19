import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  supporting?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  heading,
  supporting,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cx(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-port-900" : "text-white"
        )}
      >
        {heading}
      </h2>
      {supporting && (
        <p
          className={cx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-500" : "text-sand-100/80"
          )}
        >
          {supporting}
        </p>
      )}
    </div>
  );
}
