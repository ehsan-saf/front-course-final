import { getCategory } from "@/api/category";
import { getProductsApi } from "@/api/product";
import { ProductVerticalList, SimpleProductCard } from "@/components";
import { ItemFilter } from "@/components/pages/categoryPage";
import { ApiResponse, ProductFilters, ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CategoryClient() {
  const router = useRouter();
  const id = router.query.id as string;

  const [enabledFilters, setEnabledFilters] = useState<ProductFilters>({});

  const { data: category } = useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategory({ id }),
  });

  const { data, refetch } = useQuery({
    queryKey: [`category-products-${id}`],
    queryFn: () =>
      getProductsApi({
        filters: {
          categories: {
            id: {
              $eq: 12,
            },
          },
          ...enabledFilters,
        },
        populate: ["thumbnail", "categories"],
      }),
  });

  const { data: popularProducts } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "popular_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { is_popular: { $eq: true } },
      }),
  });

  useEffect(() => {
    console.log(enabledFilters);
    refetch();
  }, [enabledFilters]);

  if (!data) return null;
  const products = data.data;

  return (
    <div className="container mt-8">
      <div className="relative h-24 overflow-hidden rounded-xl md:h-40 2xl:h-52">
        <div className="absolute inset-0 -z-1 h-full bg-[url(/images/category-hero.png)] bg-cover bg-center bg-no-repeat opacity-10"></div>
        <div className="absolute inset-0 -z-2 h-full bg-[#d8f4e4] opacity-80"></div>
        <h1 className="mt-7 ml-7 text-2xl md:mt-16 md:ml-16 lg:text-5xl">
          {category?.data.attributes.title}
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="col-span-1 flex flex-col gap-14">
          <ItemFilter setEnabledFilters={setEnabledFilters} />
          <div className="hidden max-h-[700px] flex-col gap-9 overflow-y-auto rounded-2xl p-6 shadow md:flex">
            <h2 className="border-b-1 border-grey-1 pb-3.5 text-2xl">
              Popular Items
            </h2>
            {popularProducts && (
              <ProductVerticalList data={popularProducts?.data} />
            )}
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products.map((item, index) => {
              return <SimpleProductCard data={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
