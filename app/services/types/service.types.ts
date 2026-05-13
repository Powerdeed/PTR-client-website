import { AssetLink } from "@/app/utils/asset-images";

export interface Service {
  _id: string;
  name: string;
  description: string;
  images: Array<string | AssetLink>;
  status: boolean;
}
