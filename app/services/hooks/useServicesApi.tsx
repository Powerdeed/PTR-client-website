"use client";

import { useContext, useEffect } from "react";

import { serviceContext } from "../context/ServicesContext";

import { getServices } from "../services/services";

import { execute } from "@/lib/api/execute";

export default function useServicesApi() {
  const servicesState = useContext(serviceContext);

  if (!servicesState)
    throw new Error("Services context must be within a provider");

  const { setServices, setFetchingServices, setFetchingServicesError } =
    servicesState;

  useEffect(() => {
    const fetchData = async () =>
      await execute(getServices, {
        setLoading: setFetchingServices,
        setError: setFetchingServicesError,
        onSuccess: (homepages) => setServices(homepages),
      });

    fetchData();
  }, [setFetchingServices, setFetchingServicesError, setServices]);

  return {};
}
