import { apiRequest } from "@/lib/api/apiRequest";
import { Testimonial } from "../types/testimonial.types";

export const getTestimonials = () =>
  apiRequest<Testimonial[]>({
    method: "GET",
    url: "/testimonials",
  });
