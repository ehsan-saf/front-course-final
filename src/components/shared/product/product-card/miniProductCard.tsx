import { Product } from "@/types/Product";
import { ImageView, RatingStars, ProductPrice } from "@/components";
import Link from "next/link";

interface Props {
  data: Product;
}

export function MiniProductCard({ data }: Props) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link href={"#"}>
        <ImageView
          wrapperClassName="max-[88px] max-[88px] rounded-xl md:h-[120px] md:w-[120px]"
          width={120}
          height={120}
          src={data.image}
          alt=""
        />
      </Link>
      <div className="flex max-w-40 flex-col gap-1 md:max-w-60">
        <Link href={"#"}>
          <h4 className="ellipsis-2 overflow-hidden text-xs text-ellipsis whitespace-nowrap md:text-base md:whitespace-normal">
            {data.title}
          </h4>
        </Link>
        <RatingStars rating={data.rating} />
        <ProductPrice price={data.price} sale_price={data.sale_price} />
      </div>
    </div>
  );
}
