"use client";

import useHomeApi from "./useHomeApi";
import useHomeStates from "./useHomeStates";
import useQuickNavs from "./useQuickNavs";
import useTestimonials from "./useTestimonials";

export default function useHome() {
  const state = useHomeStates();
  const api = useHomeApi();
  const quickNav = useQuickNavs();
  const testimonials = useTestimonials();

  return { state, actions: { ...quickNav, ...testimonials, ...api } };
}
