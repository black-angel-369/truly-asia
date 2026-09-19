import { LucideIcon } from "lucide-react";
import { Tilt } from "@/components/tilt";
import { cx } from "@/lib/utils";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContactCard({ icon: Icon, title, children, className }: ContactCardProps) {
  return (
    <Tilt
      strength={6}
      className={cx(
        "rounded-2xl border border-white/10 bg-port-950 p-6 shadow-card hover:shadow-lifted hover:border-clay-400/40",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-clay-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-white">
        {title}
      </h3>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-sand-100/70">
        {children}
      </div>
    </Tilt>
  );
}
