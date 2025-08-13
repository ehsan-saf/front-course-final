import { Product } from "@/types/Product";
import { ImageView, RatingStars, ProductPrice } from "@/components";

interface Props {
  data: Product;
}

export function MiniProductCard({ data }: Props) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <ImageView
        wrapperClassName="max-h-[88px] max-w-[88px] rounded-xl md:max-h-[120px] md:max-w-[120px]"
        width={120}
        height={120}
        src={data.image}
        alt=""
      />
      <div className="flex max-w-40 flex-col gap-1 md:max-w-60">
        <h4 className="ellipsis-2 overflow-hidden text-xs text-ellipsis whitespace-nowrap md:text-base md:whitespace-normal">
          {data.title}
        </h4>
        <RatingStars rating={data.rating} />
        <ProductPrice price={data.price} sale_price={data.sale_price} />
      </div>
    </div>
  );
}
