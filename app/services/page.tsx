"use client";

import ServicesView from "./components/ServicesView";

import ServicesProvider from "./context/ServicesProvider";

export default function Services() {
  return (
    <ServicesProvider>
      <ServicesView />
    </ServicesProvider>
  );
}
