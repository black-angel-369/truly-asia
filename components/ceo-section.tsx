import Image from "next/image";
import { Tilt } from "@/components/tilt";
import { cx } from "@/lib/utils";

interface CeoSectionProps {
  compact?: boolean;
  tone?: "dark" | "light";
  ctaSlot?: React.ReactNode;
}

const bio =
  "Mehboob Ali Khan is a Pakistani entrepreneur and the Founder & CEO of Truly Asia Global Trade. With business experience across international markets, he brings a globally informed approach to sourcing, trade, and business development. His entrepreneurial journey includes operating a food-chain business in the Kingdom of Saudi Arabia, giving him valuable experience in international business and customer-focused operations. Through Truly Asia Global Trade, he is focused on building reliable trade relationships, sourcing quality products from Asia, and connecting international suppliers with local markets.";

const shortBio =
  "Mehboob Ali Khan brings international business experience — including operating a food-chain business in Saudi Arabia — to building Truly Asia Global Trade's sourcing and trade relationships.";

export function CeoSection({ compact = false, tone = "dark", ctaSlot }: CeoSectionProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cx(
        "grid items-start gap-10 lg:gap-16",
        compact ? "lg:grid-cols-[240px_1fr]" : "lg:grid-cols-[260px_1fr]"
      )}
    >
      <div className="relative mx-auto w-full max-w-[240px] lg:mx-0">
        <Tilt strength={10} className="group">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border-[6px] border-clay-500 bg-port-950 shadow-lifted">
            <Image
              src="/images/ceo/mehboob-ali-khan.jpg"
              alt="Mehboob Ali Khan, Founder & CEO of Truly Asia Global Trade"
              fill
              sizes="240px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        </Tilt>
      </div>

      <div>
        <span
          className={cx(
            "font-display text-5xl leading-none sm:text-6xl",
            isLight ? "text-clay-400/50" : "text-clay-400/40"
          )}
        >
          &ldquo;
        </span>
        <p
          className={cx(
            "mt-1 font-display text-2xl italic leading-snug sm:-mt-4 sm:text-[1.75rem]",
            isLight ? "text-white" : "text-port-900"
          )}
        >
          Building reliable trade relationships between Asia and local
          markets.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-8 bg-clay-500" />
          <p className={cx("text-sm font-medium", isLight ? "text-clay-300" : "text-clay-600")}>
            Founder & CEO
          </p>
        </div>
        <h3
          className={cx(
            "mt-2 font-display text-2xl font-semibold sm:text-3xl",
            isLight ? "text-white" : "text-port-900"
          )}
        >
          Mehboob Ali Khan
        </h3>
        <p
          className={cx(
            "mt-5 text-base leading-relaxed",
            isLight ? "text-sand-100/70" : "text-ink-500"
          )}
        >
          {compact ? shortBio : bio}
        </p>
        {ctaSlot && <div className="mt-6">{ctaSlot}</div>}
      </div>
    </div>
  );
}
