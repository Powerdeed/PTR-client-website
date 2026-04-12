"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";
import { Contacts } from "../types/contact.types";

type ContactState = {
  contacts: Contacts;
  setContacts: Dispatch<SetStateAction<Contacts>>;

  formData: DEFAULT_FORM_DATA;
  setFormData: Dispatch<SetStateAction<DEFAULT_FORM_DATA>>;

  submitStatus: "submitted" | "idle" | "submitting" | "Failed";
  setSubmitStatus: Dispatch<
    SetStateAction<"submitted" | "idle" | "submitting" | "Failed">
  >;
};

export const contactContext = createContext<ContactState | null>(null);
