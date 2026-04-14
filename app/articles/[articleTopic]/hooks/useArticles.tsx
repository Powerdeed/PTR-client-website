"use client";

import { useContext, useEffect } from "react";
import { articleTopicContext } from "../context/ArticleTopicContext";
import { getArticleFromTopic, getTopicArticles } from "../utils/articles";

export default function useArticles() {
  const topicState = useContext(articleTopicContext);

  if (!topicState) throw new Error("Topic context must be within a provider");

  const {
    articleTopic,
    setCurrentTopic,
    setArticleTopicObj,
    selectedTopic,
    currentTopic,
    setArticles,
  } = topicState;

  /* ---------- sync searched topic ---------- */
  useEffect(() => {
    if (!articleTopic) return;

    const getCurrentTopic = () => setCurrentTopic(articleTopic);
    getCurrentTopic();
  }, [articleTopic, setCurrentTopic]);

  /* ---------- sync selected topic ---------- */
  useEffect(() => {
    if (!selectedTopic) return;

    const getCurrentTopic = () =>
      setCurrentTopic(selectedTopic.toLocaleLowerCase());
    getCurrentTopic();
  }, [selectedTopic, setCurrentTopic]);

  /* ---------- get desired topic object and articles belonging to the topic ---------- */
  useEffect(() => {
    if (!currentTopic) return;

    const setBlogData = () => {
      setArticleTopicObj(getArticleFromTopic(currentTopic) ?? null);
      setArticles(getTopicArticles(currentTopic) ?? null);
    };

    setBlogData();
  }, [currentTopic, setArticleTopicObj, setArticles]);
  return {};
}
