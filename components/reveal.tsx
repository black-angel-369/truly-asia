"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      onAnimationEnd={() => setSettled(true)}
      className={cx(
        // Once the reveal animation finishes, drop the animate-fade-up
        // class entirely rather than leaving it applied. A CSS transform
        // left on an element (even the animation's resting transform:
        // translateY(0) scale(1)) turns that element into the positioning
        // anchor for any `position: fixed` descendant instead of the
        // viewport — which breaks fullscreen overlays like the image
        // lightbox on smaller screens. Settling back to a plain, static
        // class avoids that entirely.
        settled ? "opacity-100" : "opacity-0",
        visible && !settled && "animate-fade-up",
        className
      )}
    >
      {children}
    </Tag>
  );
}
