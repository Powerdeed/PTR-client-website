"use client";

import { ArticleContent } from "@/lib/types/types";
import { getArticleContent, getArticleMetas } from "@/services/articles";
import { useEffect, useRef, useState } from "react";

export const useArticle = (postId: string, articleTopic: string) => {
  const browseArea = useRef<HTMLDivElement | null>(null);
  const [smallScreen, setSmallScreen] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>(articleTopic);
  const [blogContent, setArticleContent] = useState<ArticleContent>();
  const [searchedArticle, setSearchedArticle] = useState<string | null>(null);
  const [addCommentCheck, setAddCommentCheck] = useState<boolean>(true);
  const [commentAddStatus, setCommentAddStatus] = useState(false);

  /* ---------- get blog content and store it ---------- */
  useEffect(() => {
    if (!postId) return;

    const setContent = () => setArticleContent(getArticleContent(postId));

    setContent();
  }, [postId]);

  /* ---------- trigger on small screen sizes ---------- */
  useEffect(() => {
    const screenSizeSetter = () => setSmallScreen(window.innerWidth < 768);

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, []);

  useEffect(() => {
    const runCompressOnSmallScreen = () => setCompressed(true);
    runCompressOnSmallScreen();
  }, [smallScreen]);

  /* ---------- get artlicles that match the searched text ---------- */
  const articlesMatchingSearch = () => {
    if (!searchedArticle) return [];

    const search = searchedArticle.toLowerCase();

    const metas = getArticleMetas();

    const filteredMetas = metas.filter((meta) => {
      const searchableText = (
        meta.title +
        " " +
        meta.description +
        " " +
        meta.topic +
        " " +
        meta.tags.join(" ")
      ).toLowerCase();

      return searchableText.includes(search);
    });

    return filteredMetas;
  };

  /* ---------- highliting the searched text ---------- */
  function highlightMatch(text: string, query: string) {
    if (!query) return text;

    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();

    const start = lowerText.indexOf(lowerQuery);
    if (start === -1) return text;

    const end = start + query.length;

    return (
      <>
        {text.slice(0, start)}
        <span className="text-(--secondary-blue) font-semibold">
          {text.slice(start, end)}
        </span>
        {text.slice(end)}
      </>
    );
  }

  return {
    searchedArticle,
    setSearchedArticle,
    browseArea,
    smallScreen,
    setSmallScreen,
    selectedTopic,
    setSelectedTopic,
    blogContent,
    compressed,
    setCompressed,
    articlesMatchingSearch,
    highlightMatch,
    addCommentCheck,
    commentAddStatus,
  };
};
