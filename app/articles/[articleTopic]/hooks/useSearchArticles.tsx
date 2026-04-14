"use client";

import { useContext } from "react";
import { getArticleMetas } from "../utils/articles";
import { articleTopicContext } from "../context/ArticleTopicContext";

export default function useSearchArticles() {
  const articleTopicState = useContext(articleTopicContext);

  if (!articleTopicState) throw new Error("Context must be within a provider");

  const { searchedArticle } = articleTopicState;

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
  return { articlesMatchingSearch, highlightMatch };
}
