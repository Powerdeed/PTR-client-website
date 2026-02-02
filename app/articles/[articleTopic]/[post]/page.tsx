import BlogPostClient from "@/components/features/articles/articlePostClient";

export default async function Post({
  params,
}: {
  params: Promise<{
    articleTopic: string;
    post: string;
  }>;
}) {
  const { articleTopic, post } = await params;

  return <BlogPostClient articleTopic={articleTopic} post={post} />;
}
