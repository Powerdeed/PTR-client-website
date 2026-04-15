export interface Project {
  id: string;
  name: string;
  images: string[];
  description: string;
  category: string;
  status: "Ongoing" | "Completed";
  featured: boolean;
}

export interface CategoryGroup {
  id: string;
  category: string;
  projects: Project[];
}
