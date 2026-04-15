"use client";

import useHomeApi from "./useHomeApi";
import useHomeStates from "./useHomeStates";
import useQuickNavs from "./useQuickNavs";
import useTestimonials from "./useTestimonials";
import useTestimonialsApi from "./useTestimonialsApi";
import useTestimonialsState from "./useTestimonialsState";

export default function useHome() {
  // states
  const homeState = useHomeStates();
  const testimonialsState = useTestimonialsState();

  // apis
  const homeApi = useHomeApi();
  const testimonialsApi = useTestimonialsApi();

  // actions
  const quickNav = useQuickNavs();
  const testimonials = useTestimonials();

  return {
    state: { ...homeState, ...testimonialsState },
    actions: { ...quickNav, ...testimonials, ...homeApi, ...testimonialsApi },
  };
}
