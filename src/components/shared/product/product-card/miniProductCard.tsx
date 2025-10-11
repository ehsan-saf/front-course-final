import { Entity, ProductType } from "@/types";
import { ImageView, RatingStars, Price } from "@/components";
import Link from "next/link";

interface Props {
  data: Entity<ProductType>;
}

export function MiniProductCard({ data }: Props) {
  const productLink = `/product/${data.id}`;

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link href={productLink}>
        <ImageView
          wrapperClassName="max-w-[88px] rounded-xl md:h-[120px] md:w-[120px]"
          imageClassName="w-full"
          width={data.attributes.thumbnail?.data?.attributes?.height}
          height={data.attributes.thumbnail?.data?.attributes?.height}
          src={data.attributes.thumbnail?.data?.attributes.url}
          alt=""
        />
      </Link>
      <div className="flex max-w-40 flex-col items-start gap-1 md:max-w-60">
        <Link href={productLink}>
          <h4 className="ellipsis-2 overflow-hidden text-xs text-ellipsis whitespace-nowrap md:text-base md:whitespace-normal">
            {data.attributes.title}
          </h4>
        </Link>
        <RatingStars rating={data.attributes.rate} />
        <Price
          price={data.attributes.price}
          sale_price={data.attributes.sell_price}
        />
      </div>
    </div>
  );
}
