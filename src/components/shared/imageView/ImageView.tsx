import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  width?: number | undefined;
  height?: number | undefined;
  fill?: boolean | undefined;
  imageClassName?: string;
  wrapperClassName?: string;
}

export function ImageView({
  src,
  alt = "",
  width,
  height,
  fill,
  imageClassName = "",
  wrapperClassName = "",
}: Props) {
  const getImageSrc = (src: string) => {
    console.log(src);
    if (src.startsWith("/uploads")) {
      return `https://nest.navaxcollege.com${src}`;
    }
    return src;
  };

  return (
    <div className={wrapperClassName}>
      <Image
        className={imageClassName}
        src={getImageSrc(src)}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
      />
    </div>
  );
}
