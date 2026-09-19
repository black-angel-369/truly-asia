"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Tilt } from "@/components/tilt";

interface GalleryImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: GalleryImage[];
}

export function Lightbox({ images }: LightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <Tilt key={image.src} strength={6} className="rounded-xl">
            <button
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-square w-full overflow-hidden rounded-xl border-2 border-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500"
              aria-label={`View larger image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-port-950/0 transition-colors group-hover:bg-port-950/20">
                <Expand
                  className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </button>
          </Tilt>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-port-950/90 p-4 sm:p-10"
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 rounded-full p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-8"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() => setOpenIndex((openIndex - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
              >
                <ChevronLeft className="h-7 w-7" aria-hidden="true" />
              </button>
              <button
                onClick={() => setOpenIndex((openIndex + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
              >
                <ChevronRight className="h-7 w-7" aria-hidden="true" />
              </button>
            </>
          )}

          <div className="relative h-[70vh] w-full max-w-3xl">
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
