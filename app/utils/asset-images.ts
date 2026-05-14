import { projectImages } from "@/data/dummyData";

export type AssetType = "image" | "video" | "document" | "diagram";
export type AssetLink = [
  assetId: string,
  fileName: string,
  fileUrl: string,
  assetType: AssetType,
];
export type LegacyAssetLink = [
  assetId: string,
  fileName: string,
  fileUrl: string,
];
export type AssetTuple = AssetLink | LegacyAssetLink;
export interface FeaturedImageLink {
  assetId: string;
  fileName: string;
  fileUrl: string;
  assetType: AssetType;
}
export type AssetImageRef =
  | string
  | AssetTuple
  | FeaturedImageLink
  | null
  | undefined;

export const isAssetLink = (image: AssetImageRef): image is AssetTuple =>
  Array.isArray(image);

export const isFeaturedImageLink = (
  image: AssetImageRef,
): image is FeaturedImageLink =>
  typeof image === "object" &&
  image !== null &&
  !Array.isArray(image) &&
  typeof image.assetId === "string";

const isRemoteImageSrc = (src: string) => {
  try {
    const url = new URL(src);

    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const normalizeImageSrc = (src?: string) => {
  if (!src) return undefined;

  const trimmedSrc = src.trim();

  if (!trimmedSrc) return undefined;

  if (trimmedSrc in projectImages) {
    return projectImages[trimmedSrc as keyof typeof projectImages];
  }

  if (trimmedSrc.startsWith("/")) return trimmedSrc;
  if (isRemoteImageSrc(trimmedSrc)) return trimmedSrc;

  return undefined;
};

export const getAssetImageSrc = (image?: AssetImageRef) => {
  if (!image) return undefined;

  if (isAssetLink(image)) return normalizeImageSrc(image[2]);
  if (isFeaturedImageLink(image)) return normalizeImageSrc(image.fileUrl);

  return normalizeImageSrc(image);
};

export const getAssetType = (image?: AssetImageRef) => {
  if (!image) return undefined;
  if (isAssetLink(image)) return image[3];
  if (isFeaturedImageLink(image)) return image.assetType;

  return undefined;
};

export const isVisualAsset = (image?: AssetImageRef) => {
  const assetType = getAssetType(image);
  return !assetType || assetType === "image" || assetType === "diagram";
};

export const getAssetImageKey = (image: AssetImageRef, index: number) => {
  if (!image) return `asset-${index}`;

  if (isAssetLink(image)) return image[0] || `${image[1]}-${index}`;
  if (isFeaturedImageLink(image)) {
    return image.assetId || `${image.fileName}-${index}`;
  }

  return `${image}-${index}`;
};
