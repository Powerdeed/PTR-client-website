"use client";

import useMenuInteractions from "./useMenuInteractions";
import useNavState from "./useNavState";
import useScreenSize from "./useScreenSize";

export default function useNav() {
  const state = useNavState();
  const menu = useMenuInteractions();
  const screenSize = useScreenSize();

  return { state, actions: { ...menu, ...screenSize } };
}
