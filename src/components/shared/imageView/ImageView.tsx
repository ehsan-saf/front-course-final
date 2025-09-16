import Image from "next/image";
import { CSSProperties } from "react";

interface Props {
  src?: string | null;
  alt?: string | null;
  width?: number;
  height?: number;
  fill?: boolean;
  imageClassName?: string;
  wrapperClassName?: string;
  placeholderStyle?: CSSProperties;
}

export function ImageView({
  src = "",
  alt = "",
  width,
  height,
  fill,
  imageClassName = "",
  wrapperClassName = "",
  placeholderStyle = {},
}: Props) {
  const hasValidSrc = src && src.trim().length > 0;

  if (!hasValidSrc && !width && !height && !fill) return null;

  const getImageSrc = (src: string) => {
    if (src.startsWith("/uploads")) {
      return `https://nest.navaxcollege.com${src}`;
    }
    return src;
  };

  return (
    <div className={wrapperClassName}>
      {hasValidSrc ? (
        <Image
          className={imageClassName}
          src={getImageSrc(src)}
          alt={alt ? alt : ""}
          width={width}
          height={height}
          fill={fill}
        />
      ) : (
        <div
          className={`bg-gray-200 ${imageClassName}`}
          style={{ width, height, ...placeholderStyle }}
        />
      )}
    </div>
  );
}
