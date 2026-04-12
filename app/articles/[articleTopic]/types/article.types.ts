import { DraftifyDocument } from "draftify";

export interface ArticleMeta {
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
  tags: string[];
  comments: number;
}

export interface ArticleContent {
  id: string;
  articleDoc: DraftifyDocument;
}

export interface ArticleTopic {
  id: string;
  topic: string;
  description: string;
  image: string;
}

export type ArticleTopics = ArticleTopic[];

export interface Comment {
  docId: string;
  id: string;
  comment: string;
  likes: number;
}
