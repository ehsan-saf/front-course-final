import Image from "next/image";

interface Props {
  src?: string | null;
  alt?: string | null;
  width?: number;
  height?: number;
  fill?: boolean;
  imageClassName?: string;
  wrapperClassName?: string;
}

export function ImageView({
  src = "",
  alt = "",
  width,
  height,
  fill,
  imageClassName = "",
  wrapperClassName = "",
}: Props) {
  if (src === undefined || src === null) return null;

  const getImageSrc = (src: string | null) => {
    if (src) {
      if (src.startsWith("/uploads")) {
        return `https://nest.navaxcollege.com${src}`;
      }
      return src;
    } else {
      return "";
    }
  };

  return (
    <div className={wrapperClassName}>
      <Image
        className={imageClassName}
        src={getImageSrc(src)}
        alt={alt ? alt : ""}
        width={width}
        height={height}
        fill={fill}
      />
    </div>
  );
}
