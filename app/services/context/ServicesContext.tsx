"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { Service } from "../types/service.types";

type ServiceState = {
  services: Service[];
  setServices: Dispatch<SetStateAction<Service[]>>;

  fetchingServices: boolean;
  setFetchingServices: Dispatch<SetStateAction<boolean>>;

  fetchingServicesError: string;
  setFetchingServicesError: Dispatch<SetStateAction<string>>;
};

export const serviceContext = createContext<ServiceState | null>(null);
