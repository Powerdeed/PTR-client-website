"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type AboutCertificatesStates = {
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
};

export const aboutCertificatesContext =
  createContext<AboutCertificatesStates | null>(null);
