export interface Project {
  _id: string;
  category: string;
  name: string;
  featuredImage: string;
  images: string[];
  description: string;
  status: "Ongoing" | "Completed";
  featured: boolean;
}

export interface CategoryGroup {
  id: string;
  category: string;
  projects: Project[];
}
