"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function ParallaxShadow() {
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -left-20 top-0 h-[120%] w-[70%] opacity-[0.12]"
        style={{ transform: `translateY(${offset}px)` }}
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0 C60 80, 40 160, 80 240 C120 320, 60 400, 100 480 C140 560, 80 600, 120 600 L0 600 L0 0 Z"
          fill="#3D2B1F"
        />
        <path
          d="M60 40 C100 120, 80 200, 120 280 C160 360, 100 440, 140 520"
          stroke="#3D2B1F"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M100 80 C140 160, 120 240, 160 320 C200 400, 140 480, 180 560"
          stroke="#3D2B1F"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
