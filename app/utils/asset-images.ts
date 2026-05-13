import { projectImages } from "@/data/dummyData";

export type AssetLink = [assetId: string, fileName: string, fileUrl: string];
export type AssetImageRef = string | AssetLink;

export const fallbackProjectImage =
  "/images/projects-images/Electrical-engineering-jobs-in-the-construction-industry.jpg";

export const isAssetLink = (image: AssetImageRef): image is AssetLink =>
  Array.isArray(image);

export const getAssetImageSrc = (
  image?: AssetImageRef,
  fallback = fallbackProjectImage,
) => {
  if (!image) return fallback;

  if (isAssetLink(image)) return image[2] || fallback;

  return projectImages[image as keyof typeof projectImages] || image || fallback;
};

export const getAssetImageKey = (image: AssetImageRef, index: number) => {
  if (isAssetLink(image)) return image[0] || `${image[1]}-${index}`;

  return `${image}-${index}`;
};

