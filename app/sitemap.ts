import { MetadataRoute } from "next";

import {
  articlesMeta,
  articleTopics,
} from "@/app/articles/[articleTopic]/[postId]/types/articles";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://powerdeed.co.ke"
).replace(/\/$/, "");

const toUrl = (path: string) => `${baseUrl}${path}`;

const toLastModified = (date: string) => {
  const lastModified = new Date(date);

  return Number.isNaN(lastModified.getTime()) ? new Date() : lastModified;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: toUrl("/home"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: toUrl("/services"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toUrl("/about/overview"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toUrl("/about/structure"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toUrl("/about/certificates"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const articleTopicPages: MetadataRoute.Sitemap = articleTopics.map(
    ({ topic }) => ({
      url: toUrl(`/articles/${encodeURIComponent(topic)}`),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  const articlePages: MetadataRoute.Sitemap = articlesMeta.map((article) => ({
    url: toUrl(
      `/articles/${encodeURIComponent(article.topic)}/${encodeURIComponent(
        article.id,
      )}`,
    ),
    lastModified: toLastModified(article.createdAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...articleTopicPages, ...articlePages];
}
