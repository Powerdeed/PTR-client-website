"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Testimonial } from "../types/testimonial.types";

type TestimonialsState = {
  testimonials: Testimonial[];
  setTestimonials: Dispatch<SetStateAction<Testimonial[]>>;

  fetchingTestimonials: boolean;
  setFetchingTestimonials: Dispatch<SetStateAction<boolean>>;

  fetchingTestimonialsError: string;
  setFetchingTestimonialsError: Dispatch<SetStateAction<string>>;
};

export const testimonialsContext = createContext<TestimonialsState | null>(
  null,
);
