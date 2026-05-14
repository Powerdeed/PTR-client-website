import Image, { type ImageProps } from "next/image";

import {
  getAssetImageSrc,
  isVisualAsset,
  type AssetImageRef,
} from "@/app/utils/asset-images";

type AssetImageProps = Omit<ImageProps, "src" | "alt"> & {
  asset?: AssetImageRef;
  alt: string;
};

export default function AssetImage({ asset, alt, ...props }: AssetImageProps) {
  const src = getAssetImageSrc(asset);

  if (!src || !isVisualAsset(asset)) return null;

  return <Image src={src} alt={alt} {...props} />;
}
