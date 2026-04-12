type PERSONAL_INFO_FIELDS = {
  label: string;
  id: string;
  type: string;
  autocomplete: string;
}[];

export const PERSONAL_INFO_FIELDS: PERSONAL_INFO_FIELDS = [
  {
    label: "First Name",
    id: "first-name",
    type: "text",
    autocomplete: "given-name",
  },
  {
    label: "Last Name",
    id: "last-name",
    type: "text",
    autocomplete: "family-name",
  },
  {
    label: "Phone Number",
    id: "phone-number",
    type: "number",
    autocomplete: "email",
  },
  {
    label: "Email Address",
    id: "email",
    type: "email",
    autocomplete: "tel",
  },
];
