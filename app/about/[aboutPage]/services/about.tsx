import { apiRequest } from "@/lib/api/apiRequest";
import { AboutUs } from "../types/about.types";

export const certificates = [
  "/images/certifications/Change-of-particulars.png",
  "/images/certifications/Participating-license.png",
  "/images/certifications/Registration-NCA.png",
];

export const getAboutUs = () =>
  apiRequest<{ sections: AboutUs[] }>({
    method: "GET",
    url: "/about-us",
  });
