"use client";

import { useRef } from "react";

export default function useTestimonials() {
  const testimonialEl = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<Record<string, HTMLDivElement | null>>({
    testimonials: null,
  });

  const setTestimonials = (el: HTMLDivElement) => {
    containerRef.current["testimonials"] = el;
  };

  return { testimonialEl, containerRef, setTestimonials };
}
