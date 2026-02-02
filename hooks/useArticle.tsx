"use client";

import { BlogContent } from "@/lib/types/types";
import { getBlogContent } from "@/services/blogs";
import { useEffect, useRef, useState } from "react";

export const useArticle = (post: string, articleTopic: string) => {
  const browseArea = useRef<HTMLDivElement | null>(null);
  const [smallScreen, setSmallScreen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>(articleTopic);
  const [blogContent, setBlogContent] = useState<BlogContent>();
  const [fixedProperty, setFixedProperty] = useState(false);

  /* ---------- get blog content and store it ---------- */
  useEffect(() => {
    if (!post) return;

    const setContent = () => setBlogContent(getBlogContent(post));

    setContent();
  }, [post]);

  /* ---------- trigger on small screen sizes ---------- */
  useEffect(() => {
    const screenSizeSetter = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, []);

  /* ---------- handle scroll on small screen sizes ---------- */
  useEffect(() => {
    if (!smallScreen) return;

    const handleScroll = () => {
      setFixedProperty(window.scrollY >= 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [smallScreen]);

  return {
    browseArea,
    fixedProperty,
    smallScreen,
    setSmallScreen,
    selectedTopic,
    setSelectedTopic,
    blogContent,
  };
};
