import { NavItem } from "../types/navigation.types";

export const NAVIGATION: NavItem[] = [
  { href: "/home", label: "Home" },
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
