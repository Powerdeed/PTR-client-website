"use client";

import useHomeStates from "./useHomeStates";
import useQuickNavs from "./useQuickNavs";
import useTestimonials from "./useTestimonials";

export default function useHome() {
  const state = useHomeStates();
  const quickNav = useQuickNavs();
  const testimonials = useTestimonials();

  return { state, actions: { ...quickNav, ...testimonials } };
}
