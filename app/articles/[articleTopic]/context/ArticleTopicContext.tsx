"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { ArticleMeta, ArticleTopic } from "../types/article.types";

type ArticleTopicState = {
  articleTopic: string;
  setArticleTopic: Dispatch<SetStateAction<string>>;

  articleTopicObj: ArticleTopic | null;
  setArticleTopicObj: Dispatch<SetStateAction<ArticleTopic | null>>;

  articleId: string;
  setArticleId: Dispatch<SetStateAction<string>>;

  compressed: boolean;
  setCompressed: Dispatch<SetStateAction<boolean>>;

  selectedTopic: string;
  setSelectedTopic: Dispatch<SetStateAction<string>>;

  searchedArticle: string;
  setSearchedArticle: Dispatch<SetStateAction<string>>;

  currentTopic: string;
  setCurrentTopic: Dispatch<SetStateAction<string>>;

  articles: ArticleMeta[];
  setArticles: Dispatch<SetStateAction<ArticleMeta[]>>;
};

export const articleTopicContext = createContext<ArticleTopicState | null>(
  null,
);
