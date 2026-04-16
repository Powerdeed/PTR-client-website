"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";
import { Contacts } from "../types/contact.types";

type ContactState = {
  contacts: Contacts | null;
  setContacts: Dispatch<SetStateAction<Contacts | null>>;

  formData: DEFAULT_FORM_DATA;
  setFormData: Dispatch<SetStateAction<DEFAULT_FORM_DATA>>;

  submitStatus: "submitted" | "idle" | "submitting" | "Failed";
  setSubmitStatus: Dispatch<
    SetStateAction<"submitted" | "idle" | "submitting" | "Failed">
  >;

  fetchingContacts: boolean;
  setFetchingContacts: Dispatch<SetStateAction<boolean>>;

  fetchingContactsError: string;
  setFetchingContactsError: Dispatch<SetStateAction<string>>;
};

export const contactContext = createContext<ContactState | null>(null);
