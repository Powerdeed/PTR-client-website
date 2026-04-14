"use client";

import { useContext, useEffect } from "react";
import { articleTopicContext } from "../../context/ArticleTopicContext";
import { articlePostContext } from "../context/ArticlePostContext";
import { getArticleContent } from "../../utils/articles";

export default function useArticleContent() {
  const articleTopicState = useContext(articleTopicContext);
  const articlePostState = useContext(articlePostContext);

  if (!articleTopicState || !articlePostState)
    throw new Error("Context must be within a provider");

  const { articleId } = articleTopicState;
  const { setArticleContent } = articlePostState;

  useEffect(() => {
    if (!articleId) return;

    const setContent = () =>
      setArticleContent(getArticleContent(articleId) || null);

    setContent();
  }, [articleId, setArticleContent]);
  return {};
}
