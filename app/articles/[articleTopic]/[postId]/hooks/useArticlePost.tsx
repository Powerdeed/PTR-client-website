"use client";

import useArticleSidePanel from "../../hooks/useArticleSidePanel";
import useArticleTopicState from "../../hooks/useArticleTopicState";
import useArticleContent from "./useArticleContent";
import useArticlePostState from "./useArticlePostState";
import useComment from "./comments/useComment";
import useCommentApi from "./comments/useCommentApi";
import useComments from "./comments/useComments";

export function useArticlePost() {
  // States
  const articleTopicState = useArticleTopicState();
  const articleState = useArticlePostState();

  // actions
  const content = useArticleContent();
  const comments = useComments();
  const comment = useComment();
  const sidepanel = useArticleSidePanel();
  const commentApi = useCommentApi();

  return {
    state: { ...articleTopicState, ...articleState },
    articleActions: {
      ...content,
      ...comments,
      ...comment,
      ...sidepanel,
      ...commentApi,
    },
  };
}
