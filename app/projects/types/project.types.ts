import { AssetImageRef, AssetLink } from "@/app/utils/asset-images";

export interface Project {
  _id: string;
  category: string;
  name: string;
  featuredImage: AssetImageRef;
  images: Array<string | AssetLink>;
  description: string;
  status: "Ongoing" | "Completed";
  featured: boolean;
}

export interface CategoryGroup {
  id: string;
  category: string;
  projects: Project[];
}
