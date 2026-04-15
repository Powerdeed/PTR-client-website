"use client";

import { useContext } from "react";

import { serviceContext } from "../context/ServicesContext";

export default function useServicesStates() {
  const servicesState = useContext(serviceContext);

  if (!servicesState)
    throw new Error("Services context must be within a provider");

  return { ...servicesState };
}
