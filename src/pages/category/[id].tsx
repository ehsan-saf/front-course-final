import { getCategory } from "@/api/category";
import { getProductsApi } from "@/api/product";
import { SimpleProductCard } from "@/components";
import { ItemFilter } from "@/components/pages/categoryPage";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function CategoryClient() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data: category } = useQuery({
    queryKey: [`category-${id}`],
    queryFn: () => getCategory({ id }),
  });

  const { data } = useQuery({
    queryKey: [`category-products-${id}`],
    queryFn: () =>
      getProductsApi({
        filters: {
          categories: {
            id: {
              $eq: 12,
            },
          },
        },
        populate: ["thumbnail", "categories"],
      }),
  });

  if (!data) return null;
  const products = data.data;
  console.log(category);
  console.log(data);

  return (
    <div className="container mt-8">
      <div className="relative h-24 overflow-hidden rounded-xl md:h-40 2xl:h-52">
        <div className="absolute inset-0 -z-1 h-full bg-[url(/images/category-hero.png)] bg-cover bg-center bg-no-repeat opacity-10"></div>
        <div className="absolute inset-0 -z-2 h-full bg-[#d8f4e4] opacity-80"></div>
        <h1 className="mt-7 ml-7 text-2xl md:mt-16 md:ml-16 lg:text-5xl">
          {category?.data.attributes.title}
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <ItemFilter />
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-2.5">
          {products &&
            products.map((item, index) => {
              return <SimpleProductCard data={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
