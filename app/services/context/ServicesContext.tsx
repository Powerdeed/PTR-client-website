"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { Service } from "../types/service.types";

type ServiceState = {
  services: Service[];
  setServices: Dispatch<SetStateAction<Service[]>>;
};

export const serviceContext = createContext<ServiceState | null>(null);
