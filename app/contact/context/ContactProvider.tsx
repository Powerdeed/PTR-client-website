"use client";

import { ReactNode, useState } from "react";

import { contactContext } from "./ContactContext";
import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";
import { contacts as contObj } from "../services/contact";

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState(contObj);

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "submitted" | "Failed"
  >("idle");

  return (
    <contactContext.Provider
      value={{
        contacts,
        setContacts,
        formData,
        setFormData,
        submitStatus,
        setSubmitStatus,
      }}
    >
      {children}
    </contactContext.Provider>
  );
}
