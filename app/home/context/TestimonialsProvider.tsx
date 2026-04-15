"use client";

import { ReactNode, useState } from "react";
import { testimonialsContext } from "./TestimonialsContext";
import { Testimonial } from "../types/testimonial.types";

export default function TestimonialsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [fetchingTestimonials, setFetchingTestimonials] = useState(false);

  const [fetchingTestimonialsError, setFetchingTestimonialsError] =
    useState("");

  return (
    <testimonialsContext.Provider
      value={{
        testimonials,
        setTestimonials,
        fetchingTestimonials,
        setFetchingTestimonials,
        fetchingTestimonialsError,
        setFetchingTestimonialsError,
      }}
    >
      {children}
    </testimonialsContext.Provider>
  );
}
