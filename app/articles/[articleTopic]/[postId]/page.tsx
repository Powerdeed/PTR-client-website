import ArticleTopicProvider from "../context/ArticleTopicProvider";
import ArticlePostView from "./components/ArticlePostView";
import ArticlePostProvider from "./context/ArticlePostProvider";

export default async function Post({
  params,
}: {
  params: Promise<{
    articleTopic: string;
    postId: string;
  }>;
}) {
  const { articleTopic, postId } = await params;

  return (
    <ArticleTopicProvider>
      <ArticlePostProvider>
        <ArticlePostView articleTopic={articleTopic} postId={postId} />
      </ArticlePostProvider>
    </ArticleTopicProvider>
  );
}
