export const BUSINESS_NAME = "POWERDEED TECHNOLOGY RESOURCES LTD.";

export const NAV_DISPLAY_BUSINESS_NAME_1 = "POWERDEED";
export const NAV_DISPLAY_BUSINESS_NAME_2 = "TECHNOLOGY RESOURCES LTD.";

type NavItem = {
  href: string;
  label: string;
  subLinks?: NavItem[];
};

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

type QuickNav = {
  [key: string]: {
    icon: string[];
    iconDescription: string;
  };
};

export const QUICKNAVS: QuickNav = {
  nav1: {
    icon: ["fas", "charging-station"],
    iconDescription: "an electrical installation",
  },
  nav2: {
    icon: ["fas", "solar-panel"],
    iconDescription: "a solar installation",
  },
  nav3: {
    icon: ["fas", "receipt"],
    iconDescription: "to request a receipt",
  },
  nav4: {
    icon: ["far", "comments"],
    iconDescription: "a consultation",
  },
  nav5: {
    icon: ["far", "hard-drive"],
    iconDescription: "a machine installation",
  },
};

type DEFAULT_FORM_DATA = {
  "first-name": string;
  "last-name": string;
  "phone-number": string;
  email: string;
  servicesInterested: string[];
  propertyType: string[];
  additionalInfo: string;
  hearAboutUs: string;
};

export const DEFAULT_FORM_DATA: DEFAULT_FORM_DATA = {
  "first-name": "",
  "last-name": "",
  "phone-number": "",
  email: "",
  servicesInterested: [] as string[],
  propertyType: [] as string[],
  additionalInfo: "",
  hearAboutUs: "",
};

type PERSONAL_INFO_FIELDS = {
  label: string;
  id: string;
  type: string;
}[];

export const PERSONAL_INFO_FIELDS: PERSONAL_INFO_FIELDS = [
  { label: "First Name", id: "first-name", type: "text" },
  { label: "Last Name", id: "last-name", type: "text" },
  { label: "Phone Number", id: "phone-number", type: "number" },
  { label: "Email Address", id: "email", type: "email" },
];
