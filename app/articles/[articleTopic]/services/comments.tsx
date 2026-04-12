import { comments } from "../[postId]/types/articles";

export const getSpecificArticleComments = (id: string) =>
  comments.filter((comment) => comment.id === id);

export const getSpecificComment = (id: string) =>
  comments.find((comment) => comment.docId === id);
