import { blogsContent, blogsMeta, blogTopics } from "@/data/dummyData";
import { BlogMeta } from "@/lib/types/types";
import { shuffleArray } from "@/utils/conversions";

export const groupedBlogs = blogsMeta.reduce<Record<string, BlogMeta[]>>(
  (acc, blog) => {
    if (!acc[blog.topic]) acc[blog.topic] = [];

    acc[blog.topic].push(blog);
    return acc;
  },
  {},
);

export const getBlogTopic = (currentTopic: string) =>
  blogTopics.find((t) => t.topic === currentTopic);

export const getTopicBlogs = (currentTopic: string) =>
  groupedBlogs[currentTopic] ?? [];

export const getBlogContent = (blogSelected: string) =>
  blogsContent.find((blog) => blog.id === blogSelected);

export function getRandomTopBlogs() {
  const shuffled = [...blogsMeta];
  shuffleArray(shuffled);
  return shuffled.slice(0, 10);
}

export const getBlogTopicsList = () =>
  blogTopics.map((blogTopic) => blogTopic.topic);
