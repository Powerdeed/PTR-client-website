"use client";

// modules
import { DraftifyBlocksReader } from "draftify-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import BrowseArea from "../../components/browse-area/BrowseArea";
import Comments from "./comments/Comments";

// hooks
import { useArticlePost } from "../hooks/useArticlePost";
import { useEffect } from "react";

export default function ArticlePostView({
  articleTopic,
  postId,
}: {
  articleTopic: string;
  postId: string;
}) {
  const { state } = useArticlePost();

  /* ---------- set article topic and id ---------- */
  useEffect(() => {
    const articleSetter = () => {
      state.setArticleTopic(articleTopic);
      state.setSelectedTopic(articleTopic);
      if (postId) state.setArticleId(postId);
    };

    articleSetter();
  }, [articleTopic, postId, state]);

  return (
    <div className="md:flex">
      <BrowseArea />

      <div className="text-style__body px-5 py-20 lg:p-25 min-h-[calc(100vh-350px)] flex-1 flex flex-col items-center gap-2.5">
        <div className="flex flex-col gap-2.5 items-center w-full lg:max-w-260 min-h-150 h-full px-5 py-10 md:px-20 md:py-25 bg-white">
          {state.articleContent && (
            <DraftifyBlocksReader
              blocksData={state.articleContent.articleDoc.blocks}
              fontFamily="Open Sans"
            />
          )}
        </div>

        <div className="flex gap-2.5 items-center">
          <span>Was this helpful?</span>

          <FontAwesomeIcon
            className="cursor-pointer"
            icon={["far", "thumbs-up"]}
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={["far", "thumbs-down"]}
          />
        </div>

        <Comments />
      </div>
    </div>
  );
}
