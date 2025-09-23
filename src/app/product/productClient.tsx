"use client";

import { getSingleProductApi } from "@/api/product";
import {
  ImageView,
  ProductPrice,
  ProductQuantityInput,
  RatingStars,
} from "@/components";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id: string;
}

export function ProductClient({ id }: Props) {
  const { data } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getSingleProductApi({ id }),
  });
  if (!data) return null;
  const product = data.data.attributes;

  return (
    <div className="container">
      <div className="flex">
        <div>
          <ImageView
            src={product.thumbnail?.data.attributes.url}
            width={product.thumbnail?.data.attributes.width}
            height={product.thumbnail?.data.attributes.height}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[40px]">{product?.title}</h2>
          <RatingStars rating={product?.rate} showNumber />
          <ProductPrice
            price={product?.price}
            sale_price={product?.sell_price}
            direction="horizontal"
          />
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            totam quo minima optio deleniti voluptatum ipsam, est veritatis
            autem voluptate repudiandae eos itaque. Libero ducimus soluta nihil
            laudantium itaque rerum.
          </p>
          <div className="">
            <ProductQuantityInput data={data.data} showAddToCart />
          </div>
        </div>
      </div>
    </div>
  );
}
