import { DraftifyDocument } from "draftify";

export interface CoreValue {
  name: string;
  description: string;
  color: string;
}

export interface CoreValuesData {
  values: {
    [key: string]: CoreValue;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  testimonial: string;
  profilePic: string;
}

export interface Service {
  id: string;
  name: string;
  images: string[];
  description: string;
}

export interface Project {
  id: string;
  name: string;
  images: string[];
  description: string;
  category: string;
}

export type Projects = Project[];

export interface CategoryGroup {
  id: string;
  category: string;
  projects: Project[];
}

export type Blog = {
  id: number;
  topic: string;
  blogDoc: DraftifyDocument;
};

export type Blogs = Blog[];
