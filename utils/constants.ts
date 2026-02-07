import { NavItem } from "@/lib/types/types";

export const BUSINESS_NAME = "";

export const NAVIGATION: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    href: "",
    label: "About Us",
    subLinks: [
      { href: "/about/overview", label: "Overview" },
      { href: "/about/structure", label: "Structure" },
      { href: "/about/certificates", label: "Certificates & Licenses" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/articles/electrical", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export const DEFAULT_FORM_DATA = {
  "first-name": "",
  "last-name": "",
  "phone-number": "",
  email: "",
  servicesInterested: [] as string[],
  propertyType: [] as string[],
  additionalInfo: "",
  hearAboutUs: "",
};

export const PERSONAL_INFO_FIELDS = [
  { label: "First Name", id: "first-name", type: "text" },
  { label: "Last Name", id: "last-name", type: "text" },
  { label: "Phone Number", id: "phone-number", type: "number" },
  { label: "Email Address", id: "email", type: "email" },
];
