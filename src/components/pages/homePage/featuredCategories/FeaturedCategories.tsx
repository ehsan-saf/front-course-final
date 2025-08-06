import { ImageView } from "@/components";
import { FeaturedCategory } from "@/types/FeaturedCategory";
import { FeaturedCategoriesMock } from "@/mock/featuredCategories";
import Link from "next/link";

export function FeaturedCategories() {
  return (
    <>
      <h2 className="mb-11 text-base md:text-3xl">Feautred Categories</h2>
      <div className="grid grid-cols-3 lg:grid-cols-9 gap-5">
        {FeaturedCategoriesMock.map((cat: FeaturedCategory, index) => {
          return (
            <Link
              key={index}
              href={cat.link}
              className="category"
              style={{
                backgroundColor: cat.color,
              }}
            >
              <ImageView src={cat.img} width={120} height={120} />
              <div aria-label="category" className="text-xs text-center">
                {cat.title}
              </div>
              <div
                aria-label="items"
                className="font-lato text-xs text-text-muted"
              >
                {`${cat.items} items`}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
