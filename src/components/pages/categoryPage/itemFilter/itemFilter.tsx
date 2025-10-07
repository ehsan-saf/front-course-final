import { useState } from "react";
import { PriceRange } from "./priceRange";
import { IconBox } from "@/components/shared";

interface Props {}

export function ItemFilter({}: Props) {
  const [priceFilter, setPriceFilter] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({ minPrice: 0, maxPrice: 10000 });

  return (
    <div className="rounded-2xl p-3.5 shadow">
      <div className="flex flex-col">
        <h4 className="mb-6 border-b-1 border-b-border pb-3.5">Filter items</h4>
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 font-lato text-text-muted">
            <span>Price Range:</span>
            <span className="font-quicksand text-xl text-brand-1">
              ${priceFilter.minPrice} - ${priceFilter.maxPrice}
            </span>
          </div>
          <PriceRange
            setPriceFilter={setPriceFilter}
            defaultValues={{ min: 0, max: 10000 }}
          />
        </div>
        <button className="flex cursor-pointer items-center justify-items-center gap-1 self-start rounded-sm bg-btn-green-bg px-7 py-3 text-brand-1">
          <IconBox icon="filter" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}
