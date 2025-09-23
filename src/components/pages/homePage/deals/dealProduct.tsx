import { ImageView, Price, QuantityInput, RatingStars } from "@/components";
import { CountDown } from "@/components";
import { Entity, ProductType } from "@/types";
import Link from "next/link";

interface Props {
  data: Entity<ProductType>;
}

export function DealProduct({ data }: Props) {
  console.log(data);
  return (
    <div className="mx-auto w-fit">
      <ImageView
        wrapperClassName="h-[200px] rounded-2xl lg:h-[328px]"
        imageClassName="w-full h-full"
        width={data.attributes.thumbnail?.data?.attributes.width || 300}
        height={data.attributes.thumbnail?.data?.attributes.height || 300}
        src={data.attributes.thumbnail?.data?.attributes.url}
        alt=""
      />

      <div className="-mt-[50%] flex flex-col gap-3">
        {data.attributes.discount_expire_date && (
          <CountDown endDate={data.attributes.discount_expire_date} />
        )}
        <div className="mx-auto flex max-w-[300px] flex-col gap-1.5 rounded-[10px] bg-white p-6 shadow-[5px_5px_15px_0px_rgba(24,24,24,0.05)] lg:max-w-[325px]">
          <Link href="/">
            <h4 className="ellipsis-2 text-xs md:text-base">
              {data.attributes.title}
            </h4>
          </Link>
          <RatingStars rating={data.attributes.rate} showNumber />
          <div
            aria-label="weight of the product"
            className="font-lato text-xs text-body"
          >
            {`${data.attributes.weight} ${data.attributes.unit}s`}
          </div>
          <div className="flex items-center justify-between">
            <Price
              price={data.attributes.price}
              sale_price={data.attributes.sell_price}
            />
            <QuantityInput data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
