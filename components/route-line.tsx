"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

interface RouteLineProps {
  from: string;
  to: string;
  tone?: "dark" | "light";
  className?: string;
}

// A restrained line motif standing in for the sourcing route between an
// origin market and the local market — used only where the content is
// genuinely about that relationship, not as decoration. Draws itself in
// once, on mount, rather than looping.
export function RouteLine({ from, to, tone = "dark", className }: RouteLineProps) {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDrawn(true), reduced ? 0 : 150);
    return () => clearTimeout(t);
  }, []);

  const textTone = tone === "dark" ? "text-ink-500" : "text-sand-100/70";
  const lineTone = tone === "dark" ? "stroke-port-900/20" : "stroke-white/25";
  const nodeTone = tone === "dark" ? "bg-clay-500" : "bg-clay-400";

  return (
    <div className={cx("flex items-center gap-3", className)}>
      <span className={cx("h-1.5 w-1.5 shrink-0 rounded-full", nodeTone)} />
      <span className={cx("text-sm font-medium", textTone)}>{from}</span>
      <svg className="h-px flex-1 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 1">
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          strokeWidth="1"
          className={lineTone}
          strokeDasharray="100"
          style={{
            strokeDashoffset: drawn ? 0 : 100,
            transition: "stroke-dashoffset 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </svg>
      <span className={cx("h-1.5 w-1.5 shrink-0 rounded-full", nodeTone)} />
      <span className={cx("text-sm font-medium", textTone)}>{to}</span>
    </div>
  );
}
