"use client";

import { useContext, useEffect } from "react";

import { testimonialsContext } from "../context/TestimonialsContext";

import { execute } from "@/lib/api/execute";

import { getTestimonials } from "../services/testimonials.service";

export default function useTestimonialsApi() {
  const testimonialsState = useContext(testimonialsContext);

  if (!testimonialsState)
    throw new Error("Testimoinials context must be within a provider.");

  const {
    setTestimonials,
    setFetchingTestimonials,
    setFetchingTestimonialsError,
  } = testimonialsState;

  useEffect(() => {
    const fetchTestimonials = async () =>
      await execute(getTestimonials, {
        setLoading: setFetchingTestimonials,
        setError: setFetchingTestimonialsError,
        onSuccess: (testimonials) => setTestimonials(testimonials),
      });

    fetchTestimonials();
  }, [setFetchingTestimonials, setFetchingTestimonialsError, setTestimonials]);

  return {};
}
