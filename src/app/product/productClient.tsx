"use client";

import { getProductsApi, getSingleProductApi } from "@/api/product";
import {
  AvailabilityLabel,
  ImageView,
  ProductDescription,
  ProductPrice,
  ProductQuantityInput,
  RatingStars,
  Section,
  SimpleProductSlider,
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

  const { data: relatedProducts } = useQuery({
    queryKey: [`related-${data?.data.attributes.title}`],
    queryFn: () =>
      getProductsApi({
        filters: {
          categories: {
            id: {
              $in: data?.data.attributes.categories?.data.map((cat) => cat.id),
            },
          },
        },
        populate: ["thumbnail", "categories"],
      }),
    enabled: !!data?.data.attributes.title,
  });

  if (!data) return null;
  const product = data.data.attributes;

  return (
    <div className="container">
      <div className="mt-16 flex justify-center">
        <ImageView
          src={product.thumbnail?.data.attributes.url}
          width={product.thumbnail?.data.attributes.width}
          height={product.thumbnail?.data.attributes.height}
          wrapperClassName="h-fit"
        />
        <div className="flex max-w-[600px] flex-col gap-5">
          <AvailabilityLabel totalNumber={product.quantity} />
          <h2 className="text-[40px]">{product?.title}</h2>
          <RatingStars rating={product?.rate} showNumber />
          <ProductPrice
            price={product?.price}
            sale_price={product?.sell_price}
            direction="horizontal"
          />
          <p className="max-w-xl text-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            totam quo minima optio deleniti voluptatum ipsam, est veritatis
            autem voluptate repudiandae eos itaque. Libero ducimus soluta nihil
            laudantium itaque rerum.
          </p>
          <div className="">
            <ProductQuantityInput data={data.data} showAddToCart />
          </div>
          <div className="font-lato text-lg">
            SKU: <span className="text-text-muted">{product.SKU}</span>
          </div>
        </div>
      </div>

      {/* --- Description --- */}
      <ProductDescription product={product} />

      <Section className="mt-11 text-3xl">
        <h2 className="mb-10 text-center">Related products</h2>
        {relatedProducts && (
          <SimpleProductSlider
            sliderData={relatedProducts?.data}
            showButtons={false}
          />
        )}
      </Section>
    </div>
  );
}
