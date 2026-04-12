"use client";

import { useContext } from "react";

import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";

import { contactContext } from "../context/ContactContext";

export default function useReachUsForm() {
  const contactState = useContext(contactContext);

  if (!contactState)
    throw new Error("Contact context must be within a provider");

  const { setFormData, setSubmitStatus } = contactState;

  const clearForm = () => {
    setFormData(DEFAULT_FORM_DATA);
  };

  const formSubmittion = () => {
    // Store form to database
    // Send email to office
  };

  const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitStatus("submitting");

    formSubmittion();

    clearForm();

    setSubmitStatus("submitted");

    setTimeout(() => {
      setSubmitStatus("idle");
    }, 2000);
  };

  const handleUpdateFormData = <K extends keyof DEFAULT_FORM_DATA>(
    key: K,
    value: DEFAULT_FORM_DATA[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { submitContact, handleUpdateFormData };
}
