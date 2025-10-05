import { getProductsApi, getSingleProductApi } from "@/api/product";
import {
  AvailabilityLabel,
  ImageView,
  ProductDescription,
  ProductPrice,
  RatingStars,
  Section,
  SimpleProductSlider,
  ProductQuantityInput,
} from "@/components";
import { ApiResponse, ApiResponseSingle, ProductType } from "@/types";
import { GetServerSideProps } from "next";

interface ProductPageProps {
  productResponse: ApiResponseSingle<ProductType>;
  product: ProductType;
  relatedProducts: ApiResponse<ProductType>;
}

export default function ProductPage({
  productResponse,
  product,
  relatedProducts,
}: ProductPageProps) {
  //   const { data } = useQuery({
  //     queryKey: [`product-${id}`],
  //     queryFn: () => getSingleProductApi({ id }),
  //   });

  //   const { data: relatedProducts } = useQuery({
  //     queryKey: [`related-${data?.data.attributes.title}`],
  //     queryFn: () =>
  //       getProductsApi({
  //         filters: {
  //           categories: {
  //             id: {
  //               $in: data?.data.attributes.categories?.data.map((cat) => cat.id),
  //             },
  //           },
  //           id: {
  //             $ne: data?.data.id,
  //           },
  //         },
  //         populate: ["thumbnail", "categories"],
  //       }),
  //     enabled: !!data?.data.attributes.categories?.data,
  //   });

  return (
    <div className="container">
      <div className="mt-16 flex flex-col items-center justify-center gap-10 lg:flex-row">
        <ImageView
          src={product.thumbnail?.data.attributes.url}
          width={product.thumbnail?.data.attributes.width}
          height={product.thumbnail?.data.attributes.height}
          wrapperClassName="h-fit border p-4 border-border rounded-2xl"
        />
        <div className="flex max-w-[600px] flex-col gap-5">
          <AvailabilityLabel totalNumber={product.quantity} />
          <h2 className="text-xl lg:text-[40px]">{product?.title}</h2>
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
            <ProductQuantityInput data={productResponse.data} showAddToCart />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const productResponse = await getSingleProductApi({ id: id as string });
  const product = productResponse.data.attributes;

  const relatedProducts = await getProductsApi({
    filters: {
      categories: {
        id: {
          $in: productResponse?.data.attributes.categories?.data.map(
            (cat) => cat.id,
          ),
        },
      },
      id: {
        $ne: productResponse?.data.id,
      },
    },
    populate: ["thumbnail", "categories"],
  });

  return {
    props: {
      productResponse,
      product,
      relatedProducts,
    },
  };
};
