import { comments } from "@/data/dummyData";

export const getSpecificArticleComments = (id: string) =>
  comments.filter((comment) => comment.id === id);
