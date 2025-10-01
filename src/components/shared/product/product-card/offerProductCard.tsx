import {
  QuantityInput,
  ProductLabel,
  RatingStars,
  ImageView,
  ProductActions,
  LinearBar,
  Price,
} from "@/components";
import { Entity, ProductType } from "@/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  data: Entity<ProductType>;
  showSaveLabel?: boolean;
  className?: string;
  priceDirection?: "vertical" | "horizontal";
}

export function OfferProductCard({
  data,
  showSaveLabel = false,
  className,
  priceDirection = "horizontal",
}: Props) {
  const productPageLink = `product/${data.id}`;

  return (
    <div
      className={twMerge(
        "product-card group flex w-full flex-col justify-between gap-1.5 p-3 md:p-4 md:pt-14",
        className,
      )}
    >
      <ProductLabel
        label={data.attributes.label}
        price={data.attributes.price}
        sale_price={data.attributes.sell_price}
        showSaveText={showSaveLabel}
      />
      <div className="relative flex h-24 justify-center md:h-44">
        <Link href={productPageLink}>
          <ImageView
            src={data.attributes.thumbnail?.data?.attributes.url}
            width={data.attributes.thumbnail?.data?.attributes.width}
            height={data.attributes.thumbnail?.data?.attributes.height}
            alt={data.attributes.thumbnail?.data?.attributes.alternativeText}
            wrapperClassName="w-[130px] h-[130px] lg:w-[160px] lg:h-[160px]"
          />
        </Link>
        <ProductActions />
      </div>
      {data.attributes.categories?.data[0] && (
        <h3 className="font-lato text-xs text-body">
          {data.attributes.categories?.data[0]?.attributes.title}
        </h3>
      )}
      <Link href={productPageLink}>
        <h4 className="ellipsis-2 text-xs md:text-base">
          {data.attributes.title}
        </h4>
      </Link>
      <RatingStars rating={data.attributes.rate} showNumber />
      <div
        aria-label="weight of the product"
        className="font-lato text-xs text-body"
      >
        {data.attributes.weight &&
          data.attributes.unit &&
          `${data.attributes.weight} ${data.attributes.unit}s`}
      </div>
      {!(data.attributes.total && data.attributes.sold) ? (
        <div className="mt-auto flex items-center justify-between">
          <Price
            price={data.attributes.price}
            sale_price={data.attributes.sell_price}
            direction={priceDirection}
          />
          <QuantityInput data={data} />
        </div>
      ) : (
        <>
          <Price
            price={data.attributes.price}
            sale_price={data.attributes.sell_price}
            direction={priceDirection}
          />
          <div className="flex w-full flex-col gap-3">
            <LinearBar
              current={data.attributes.sold}
              total={data.attributes.total}
            />
            <div className="font-lato text-xs text-heading">
              Sold: {`${data.attributes.sold}/${data.attributes.total}`}
            </div>
            <QuantityInput showAddToCart data={data} />
          </div>
        </>
      )}
    </div>
  );
}
