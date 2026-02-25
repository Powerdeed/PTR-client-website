import { DraftifyBlock, DraftifyDocument } from "draftify";

export type AboutUs = {
  title: string;
  description: DraftifyBlock[];
};

export type AboutIntro = {
  title: string;
  description: string;
  image: string;
  flipped: boolean;
};

export type CoreValue = {
  name: string;
  description: string;
  color: string;
};

export type CoreValuesData = {
  values: {
    [key: string]: CoreValue;
  };
};

export type UniqueFeatures = {
  benefit: string;
  color1: string;
  color2: string;
};

export type Testimonial = {
  id: string;
  name: string;
  position: string;
  industry: string;
  testimonial: string;
  profilePic: string;
};

export type Service = {
  id: string;
  name: string;
  images: string[];
  description: string;
};

export type Project = {
  id: string;
  name: string;
  images: string[];
  description: string;
  category: string;
  status: "Ongoing" | "Completed";
  featured: boolean;
};

export type Projects = Project[];

export type CategoryGroup = {
  id: string;
  category: string;
  projects: Project[];
};

export type ArticleMeta = {
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
  tags: string[];
  comments: number;
};

export type ArticleContent = {
  id: string;
  articleDoc: DraftifyDocument;
};

export type ArticleTopic = {
  id: string;
  topic: string;
  description: string;
  image: string;
};

export type ArticleTopics = ArticleTopic[];

export type Comment = {
  docId: string;
  id: string;
  comment: string;
  likes: number;
};

export type Contacts = {
  general: {
    location: string;
    phone: string | string[];
    email: string;
    "working-hours": string;
  };
  socials: {
    [key: string]: {
      link: string;
    };
  };
};

export type FormFillingOptions = {
  [key: string]: string[];
};
