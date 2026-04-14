"use client";

import useArticles from "./useArticles";
import useArticleSidePanel from "./useArticleSidePanel";
import useArticleTopicState from "./useArticleTopicState";
import useSearchArticles from "./useSearchArticles";

export const useArticleTopic = () => {
  const topicState = useArticleTopicState();
  const search = useSearchArticles();
  const articles = useArticles();
  const sidepanel = useArticleSidePanel();

  return {
    topicState,
    topicActions: {
      ...search,
      ...articles,
      ...sidepanel,
    },
  };
};
