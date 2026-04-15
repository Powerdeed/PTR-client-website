"use client";

import { useContext } from "react";

import { testimonialsContext } from "../context/TestimonialsContext";

export default function useTestimonialsState() {
  const testimonialsState = useContext(testimonialsContext);

  if (!testimonialsState)
    throw new Error("Homepage context must be within a provider.");

  return { ...testimonialsState };
}
