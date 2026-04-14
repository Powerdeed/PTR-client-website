"use client";

import { useContext } from "react";

import { articlePostContext } from "../../context/ArticlePostContext";

import { COMMENTS_VISIBILITY_COUNT } from "../../constants/commentsVisibilityCount";

export default function useComments() {
  const articlePostStates = useContext(articlePostContext);

  if (!articlePostStates)
    throw new Error("Article Post context must be within a provider");

  const { setVisibleCount } = articlePostStates;

  const addCommentsVisibilityCount = () =>
    setVisibleCount((prev) => prev + COMMENTS_VISIBILITY_COUNT);

  return { addCommentsVisibilityCount };
}
