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
  return (
    <div className={wrapperClassName}>
      <Image
        className={imageClassName}
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
      />
    </div>
  );
}
