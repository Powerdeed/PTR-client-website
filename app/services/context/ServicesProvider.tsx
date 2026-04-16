"use client";

import { ReactNode, useState } from "react";

import { Service } from "../types/service.types";

import { serviceContext } from "./ServicesContext";

export default function ServicesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [services, setServices] = useState<Service[]>([]);

  const [fetchingServices, setFetchingServices] = useState(false);

  const [fetchingServicesError, setFetchingServicesError] = useState("");

  return (
    <serviceContext.Provider
      value={{
        services,
        fetchingServices,
        fetchingServicesError,
        setServices,
        setFetchingServices,
        setFetchingServicesError,
      }}
    >
      {children}
    </serviceContext.Provider>
  );
}
