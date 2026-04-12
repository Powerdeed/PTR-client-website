import { NAVIGATION } from "@/features/nav";

export const flattenedNavigation = NAVIGATION.flatMap(
  ({ href, label, subLinks }) => {
    const parent = href ? [{ href, label }] : [];

    const children =
      subLinks?.map(({ href, label }) => ({ href, label })) ?? [];

    return [...parent, ...children];
  },
);
