"use client";

import { useContext } from "react";
import { articlePostContext } from "../context/ArticlePostContext";

export default function useArticlePostState() {
  const articlePostState = useContext(articlePostContext);

  if (!articlePostState)
    throw new Error("Article post must be within a provider.");

  return { ...articlePostState };
}
