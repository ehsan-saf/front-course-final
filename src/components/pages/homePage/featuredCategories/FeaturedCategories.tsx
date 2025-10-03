"use client";

import { ImageView } from "@/components";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { getFeaturedCategories } from "@/api/category";
import { ApiResponse, CategoryType } from "@/types";

export function FeaturedCategories() {
  const { data: categories } = useQuery<ApiResponse<CategoryType>>({
    queryKey: [getFeaturedCategories.name],
    queryFn: getFeaturedCategories,
  });

  return (
    <div className="grid grid-cols-3 gap-5 lg:grid-cols-9">
      {categories &&
        categories.data.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/category/${item.id}`}
              className="category-link flex flex-col items-center rounded-[10px] p-2.5 pt-0 transition-all duration-150 ease-out hover:scale-110 hover:shadow-md"
              style={{
                backgroundColor: item.attributes.color,
              }}
            >
              {item.attributes.thumbnail?.data && (
                <ImageView
                  src={item.attributes.thumbnail.data?.attributes.url ?? ""}
                  alt={
                    item.attributes.thumbnail.data?.attributes.alternativeText
                  }
                  width={120}
                  height={120}
                />
              )}
              <div className="mt-auto flex flex-col items-center">
                <div aria-label="category" className="text-center text-xs">
                  {item.attributes.title}
                </div>
                <div
                  aria-label="items"
                  className="font-lato text-xs text-text-muted"
                >
                  {`${item.attributes.product_count} items`}
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );

  // return (
  //   <>
  //     <div className="grid grid-cols-3 gap-5 lg:grid-cols-9">
  //       {FeaturedCategoriesMock.map((cat, index) => {
  //         return (
  //           <>
  //             <Link
  //               key={index}
  //               href={cat.link}
  //               className="category-link flex flex-col items-center rounded-[10px] p-2.5 pt-0 transition-all duration-150 ease-out hover:scale-110 hover:shadow-md"
  //               style={{
  //                 backgroundColor: cat.color,
  //               }}
  //             >
  //               <ImageView src={cat.img} width={120} height={120} />
  //               <div aria-label="category" className="text-center text-xs">
  //                 {cat.title}
  //               </div>
  //               <div
  //                 aria-label="items"
  //                 className="font-lato text-xs text-text-muted"
  //               >
  //                 {`${cat.items} items`}
  //               </div>
  //             </Link>
  //           </>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
}
