"use client";

import { ReactNode, useState } from "react";

import { articleTopicContext } from "./ArticleTopicContext";
import { ArticleMeta, ArticleTopic } from "../types/article.types";

export default function ArticleTopicProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [articleTopic, setArticleTopic] = useState("");

  const [articleTopicObj, setArticleTopicObj] = useState<ArticleTopic | null>(
    null,
  );

  const [articleId, setArticleId] = useState("");

  const [compressed, setCompressed] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState<string>(articleTopic);

  const [searchedArticle, setSearchedArticle] = useState("");

  const [currentTopic, setCurrentTopic] = useState("");

  const [articles, setArticles] = useState<ArticleMeta[]>([]);

  return (
    <articleTopicContext.Provider
      value={{
        articleTopic,
        setArticleTopic,
        articleTopicObj,
        setArticleTopicObj,
        articleId,
        setArticleId,
        compressed,
        setCompressed,
        selectedTopic,
        setSelectedTopic,
        searchedArticle,
        setSearchedArticle,
        currentTopic,
        setCurrentTopic,
        articles,
        setArticles,
      }}
    >
      {children}
    </articleTopicContext.Provider>
  );
}
