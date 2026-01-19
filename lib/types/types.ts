export interface Service {
  id: string;
  name: string;
  images: string[];
  description: string;
}

export interface Project {
  id?: string;
  name: string;
  images: string[];
  description: string;
  category?: string;
}

export interface CategoryGroup {
  id: string;
  category: string;
  projects: Project[];
}
