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

  return (
    <serviceContext.Provider value={{ services, setServices }}>
      {children}
    </serviceContext.Provider>
  );
}
