"use client";

import useFooterState from "./useFooterState";

export default function useFooter() {
  const state = useFooterState();

  return { state, actions: {} };
}
