import ArticlePostClient from "@/app/articles/[articleTopic]/components/ArticlePostClient";

export default async function Post({
  params,
}: {
  params: Promise<{
    articleTopic: string;
    postId: string;
  }>;
}) {
  const { articleTopic, postId } = await params;

  return <ArticlePostClient articleTopic={articleTopic} postId={postId} />;
}
