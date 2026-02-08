import { articlesContent, articlesMeta, articleTopics } from "@/data/dummyData";
import { ArticleMeta } from "@/lib/types/types";
import { shuffleArray } from "@/utils/conversions";

export const groupedArticles = articlesMeta.reduce<
  Record<string, ArticleMeta[]>
>((acc, blog) => {
  if (!acc[blog.topic]) acc[blog.topic] = [];

  acc[blog.topic].push(blog);
  return acc;
}, {});

export const getArticleTopic = (currentTopic: string) =>
  articleTopics.find((t) => t.topic === currentTopic);

export const getTopicArticles = (currentTopic: string) =>
  groupedArticles[currentTopic] ?? [];

export const getArticleContent = (blogSelected: string) =>
  articlesContent.find((blog) => blog.id === blogSelected);

export const getRandomTopArticles = () => {
  const shuffled = [...articlesMeta];
  shuffleArray(shuffled);
  return shuffled.slice(0, 10);
};

export const getArticleTopicsList = () =>
  articleTopics.map((blogTopic) => blogTopic.topic);

export const getArticleMetas = () => articlesMeta;

export const getArticleMetaById = (id: string) =>
  articlesMeta.find((article) => article.id === id);
