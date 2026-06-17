import { apiRequest } from "@/lib/api/apiRequest";
import { Contacts } from "../types/contact.types";

export const getContacts = () =>
  apiRequest<Contacts>({
    method: "GET",
    url: "/contacts",
  });
