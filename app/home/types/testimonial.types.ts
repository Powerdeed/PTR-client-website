import { FeaturedImageLink } from "@/app/utils/asset-images";

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  industry: string;
  testimonial: string;
  profilePic: FeaturedImageLink;
}
