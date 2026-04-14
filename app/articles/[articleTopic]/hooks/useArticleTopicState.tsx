"use client";

import { useContext } from "react";

import { articleTopicContext } from "../context/ArticleTopicContext";

export default function useArticleTopicState() {
  const articleTopicState = useContext(articleTopicContext);

  if (!articleTopicState)
    throw new Error("Article Topic state must be within a provider");

  return { ...articleTopicState };
}
