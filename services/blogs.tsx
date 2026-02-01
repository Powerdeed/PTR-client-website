import { blogs, blogTopics } from "@/data/dummyData";

import { Blogs, BlogTopics } from "@/lib/types/types";

export const groupedBlogs = blogs.reduce<Record<string, Blogs>>((acc, blog) => {
  if (!acc[blog.topic]) acc[blog.topic] = [];

  acc[blog.topic].push(blog);
  return acc;
}, {});

export const topics: BlogTopics = blogTopics;
