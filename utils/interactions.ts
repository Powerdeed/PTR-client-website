export const handleScroll = (
  refs: React.RefObject<Record<string, HTMLDivElement | null>>,
  direction: "left" | "right",
  id: string,
) => {
  const container = refs.current[id];

  if (!container) return;

  const scrollAmount = container.offsetWidth;
  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};
