import {
  QuantityInput,
  ProductLabel,
  RatingStars,
  ImageView,
  ProductPrice,
  ProductActions,
} from "@/components";
import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  data: Product;
}

export function SimpleProductCard({ data }: Props) {
  return (
    <div className="product-card group flex flex-col gap-1.5 p-3 md:p-4 md:pt-14">
      <ProductLabel
        label={data.label}
        price={data.price}
        sale_price={data.sale_price}
      />
      <div className="relative flex h-24 justify-center md:h-44">
        <Link href="/">
          <ImageView
            src={data.image}
            width={200}
            height={200}
            alt="product image"
            wrapperClassName="w-[130px] h-[130px] lg:w-[160px] lg:h-[160px]"
          />
        </Link>
        <ProductActions />
      </div>
      <h3 className="font-lato text-xs text-body">{data.category}</h3>
      <Link href="/">
        <h4 className="ellipsis-2 text-xs md:text-base">{data.title}</h4>
      </Link>
      <RatingStars rating={data.rating} showNumber />
      <div
        aria-label="weight of the product"
        className="font-lato text-xs text-body"
      >
        {`${data.weight} ${data.unit}s`}
      </div>
      <div className="datas-center mt-auto flex justify-between">
        <ProductPrice price={data.price} sale_price={data.sale_price} />
        <QuantityInput />
      </div>
    </div>
  );
}
