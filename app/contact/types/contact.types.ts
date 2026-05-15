import { FeaturedImageLink } from "@/app/utils/asset-images";

export interface Contacts {
  Hero: {
    image: FeaturedImageLink | null;
    title: string;
    subtitle: string;
  };
  Location: {
    Address: string;
    City: string;
    Town: string;
    Country: string;
  };
  ContactInformation: {
    Phone: string[];
    Email: string[];
  };
  "working-hours": {
    [key: string]: {
      from: string;
      to: string;
    } | null;
  };
  Socials: { name: string; url: string }[];
}
