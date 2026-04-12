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
