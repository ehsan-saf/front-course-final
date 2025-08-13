import { Product } from "@/types/Product";
import {
  ImageView,
  MiniProductCard,
  ProductPrice,
  RatingStars,
} from "@/components";

interface Props {
  title: string;
  data: Array<Product>;
}

export function ProductVerticalList({ title, data }: Props) {
  return (
    <>
      <h2 className="mb-4 text-base md:mb-10 md:text-2xl">{title}</h2>
      <div className="flex flex-col gap-6">
        {data.map((item, index) => {
          return <MiniProductCard key={index} data={item} />;
        })}
      </div>
    </>
  );
}
