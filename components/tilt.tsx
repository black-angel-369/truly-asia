"use client";

import { useRef, type ReactNode } from "react";
import { cx } from "@/lib/utils";

interface TiltProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

// GPU-only transform (no layout/paint cost) applied while the pointer is
// over the element. Listeners are attached only for the duration of the
// hover, and disabled entirely for touch/coarse pointers and reduced motion.
export function Tilt({ children, className, strength = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = ref.current;
    if (!node) return;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      node.style.transform = `perspective(900px) rotateX(${(-py * strength).toFixed(
        2
      )}deg) rotateY(${(px * strength).toFixed(2)}deg) translateY(-4px)`;
    });
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cx("will-change-transform transition-transform duration-200 ease-out", className)}
    >
      {children}
    </div>
  );
}
