"use client";

import { ReactNode, useState } from "react";

import { contactContext } from "./ContactContext";
import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";
import { contacts as contObj } from "../services/contact";
import { Contacts } from "../types/contact.types";

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contacts | null>(null);

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "submitted" | "Failed"
  >("idle");

  const [fetchingContacts, setFetchingContacts] = useState(false);

  const [fetchingContactsError, setFetchingContactsError] = useState("");

  return (
    <contactContext.Provider
      value={{
        contacts,
        setContacts,
        formData,
        setFormData,
        submitStatus,
        setSubmitStatus,
        fetchingContacts,
        setFetchingContacts,
        fetchingContactsError,
        setFetchingContactsError,
      }}
    >
      {children}
    </contactContext.Provider>
  );
}
