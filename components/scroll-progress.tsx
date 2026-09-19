"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-clay-500 to-clay-300 transition-[width] duration-150 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}
