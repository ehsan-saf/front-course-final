import { ImageView, ProductPrice } from "@/components";
import { QuantityInput } from "@/components";
import { RatingStars } from "@/components";
import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  data: Product;
}

export function SimpleProductCard({ data }: Props) {
  return (
    <div className="flex flex-col gap-1.5 p-3 md:p-4 md:pt-14">
      {data.label && (
        <div className="product-label bg-brand-1">{data.label}</div>
      )}
      <div className="relative flex h-24 justify-center md:h-44">
        <Link href="/">
          <ImageView
            src={data.image}
            width={200}
            height={200}
            alt="product image"
            wrapperClassName="w-[150px] h-[150px]"
          />
        </Link>
        <div className="absolute top-1/2 left-1/2 hidden w-24 -translate-x-1/2 -translate-y-1/2 grid-cols-3 rounded-[5px] border-[1px] border-greenBorder bg-white text-brand-1 group-hover:grid">
          <button className="cursor-pointer border-r-[1px] border-[inherit]">
            <span className="fi-rs-shuffle mt-1.5 inline-block text-sm"></span>
          </button>
          <button className="cursor-pointer border-r-[1px] border-[inherit]">
            <span className="fi-rs-heart mt-1.5 inline-block text-sm"></span>
          </button>
          <button className="cursor-pointer">
            <span className="fi-rs-eye mt-1.5 inline-block text-sm"></span>
          </button>
        </div>
      </div>
      <h3 className="font-lato text-xs text-body">{data.category}</h3>
      <Link href="/">
        <h4 className="ellipsis-2 text-xs md:text-base">{data.title}</h4>
      </Link>
      <RatingStars rating={data.rating} />
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
