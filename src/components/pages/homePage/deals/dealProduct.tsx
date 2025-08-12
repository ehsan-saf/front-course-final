import {
  ImageView,
  ProductPrice,
  QuantityInput,
  RatingStars,
} from "@/components";
import { CountDown } from "@/components";
import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  data: Product;
}

export function DealProduct({ data }: Props) {
  return (
    <div className="w-fit">
      <ImageView
        wrapperClassName="h-[200px] w-full max-w-sm rounded-2xl lg:h-[328px]"
        width={378}
        height={335}
        src={data.image}
        alt=""
      />

      <div className="-mt-[50%] flex flex-col gap-3">
        {data.deadline && <CountDown endDate={data.deadline} />}
        <div className="mx-auto flex w-10/12 flex-col gap-1.5 rounded-[10px] bg-white p-6 shadow-[5px_5px_15px_0px_rgba(24,24,24,0.05)]">
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
          <div className="flex items-center justify-between">
            <ProductPrice price={data.price} sale_price={data.price} />
            <QuantityInput />
          </div>
        </div>
      </div>
    </div>
  );
}
