"use client";

import { useContext } from "react";

import { articleTopicContext } from "../../../context/ArticleTopicContext";
import { articlePostContext } from "../../context/ArticlePostContext";

import { CommentType } from "../../../types/article.types";

export default function useCommentApi() {
  const topicStates = useContext(articleTopicContext);
  const postStates = useContext(articlePostContext);

  if (!topicStates || !postStates)
    throw new Error("Topic and post states must be within a provider");

  const { articleId } = topicStates;

  const { setComments, setCommentAddStatus, commentTxt, setCommentTxt } =
    postStates;

  const handleAddComment = () => {
    if (!commentTxt.trim()) return;

    setCommentAddStatus(true);

    const newComment: CommentType = {
      docId: crypto.randomUUID(),
      id: articleId,
      comment: commentTxt,
      likes: 0,
    };

    setComments((prev) => [...prev, newComment]);

    setCommentTxt("");
    setCommentAddStatus(false);
  };

  return { handleAddComment };
}
