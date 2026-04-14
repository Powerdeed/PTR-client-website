"use client";

import { useContext, useEffect } from "react";

import {
  getSpecificArticleComments,
  getSpecificComment,
} from "../../../services/comments";

import { articleTopicContext } from "../../../context/ArticleTopicContext";
import { articlePostContext } from "../../context/ArticlePostContext";

import { CommentType } from "../../../types/article.types";

export default function useComment() {
  const topicStates = useContext(articleTopicContext);
  const postStates = useContext(articlePostContext);

  if (!topicStates || !postStates)
    throw new Error("Topic and post states must be within a provider");

  const { articleId } = topicStates;
  const { comments, setComments, setBounce, liked, setLiked } = postStates;

  useEffect(() => {
    const commentsSetter = () => {
      setComments(getSpecificArticleComments(articleId));
    };

    commentsSetter();
  }, [articleId, setComments]);

  const triggerBounce = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 200);
  };

  const handleArticleLike = (comment: CommentType) => {
    const newLikes = liked ? comment.likes - 1 : comment.likes + 1;

    setLiked(!liked);
    handleCommentLike(comment.id, newLikes);

    const likedComments = JSON.parse(
      localStorage.getItem("likedComments") || "[]",
    );

    if (!liked) {
      const updated = [...likedComments, comment.id];
      localStorage.setItem("likedComments", JSON.stringify(updated));
    } else {
      const updated = likedComments.filter((c: string) => c !== comment.id);
      localStorage.setItem("likedComments", JSON.stringify(updated));
    }
  };

  const handleCommentLike = (commentId: string, likes: number) => {
    const comment = getSpecificComment(commentId);

    if (comment) {
      const updatedComment = { ...comment, likes: likes };

      const updatedComments = comments.map((comment) =>
        comment.docId === commentId ? updatedComment : comment,
      );

      setComments(updatedComments as CommentType[]);
    }
  };

  return { handleCommentLike, handleArticleLike, triggerBounce };
}
