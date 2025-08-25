import { ImageView } from "@/components/shared";
import { Entity, ProductType } from "@/types";

interface Props {
  data: Entity<ProductType>;
}

export function SearchItem({ data }: Props) {
  console.log(data);
  return (
    <div className="flex cursor-pointer items-center justify-between hover:bg-gray-100">
      <ImageView
        src={data.attributes.thumbnail?.data?.attributes.url}
        alt={data.attributes.thumbnail?.data?.attributes.alternativeText}
        width={data.attributes.thumbnail?.data?.attributes.width}
        height={data.attributes.thumbnail?.data?.attributes.height}
        wrapperClassName="w-[50px] h-[50px]"
        imageClassName="rounded-[6px]"
      />
      <p>{data.attributes.title}</p>
    </div>
  );
}
