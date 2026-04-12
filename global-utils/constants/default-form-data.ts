export type DEFAULT_FORM_DATA = {
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
