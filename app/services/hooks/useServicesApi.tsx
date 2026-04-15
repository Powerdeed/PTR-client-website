"use client";

import { useContext, useEffect } from "react";

import { serviceContext } from "../context/ServicesContext";

import { services as s } from "../services/services";

export default function useServicesApi() {
  const servicesState = useContext(serviceContext);

  if (!servicesState)
    throw new Error("Services context must be within a provider");

  const { setServices } = servicesState;

  useEffect(() => {
    const serviceSetter = () => setServices(s);

    serviceSetter();
  }, [setServices]);
  return {};
}
