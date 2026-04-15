"use client";

import useServicesApi from "./useServicesApi";

import useServicesStates from "./useServicesStates";

export default function useServices() {
  const state = useServicesStates();
  const api = useServicesApi();

  return { state, actions: { ...api } };
}
