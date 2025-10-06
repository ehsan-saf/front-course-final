import { useState } from "react";
import { PriceRange } from "./priceRange";

interface Props {}

export function ItemFilter({}: Props) {
  const [priceFilter, setPriceFilter] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({ minPrice: 0, maxPrice: 100 });

  return (
    <div className="rounded-2xl p-3.5 shadow">
      <div className="flex flex-col">
        <h4 className="mb-6 border-b-1 border-b-border pb-3.5">Filter items</h4>
        <div className="flex flex-col gap-6">
          <div>
            Price Range:{" "}
            <span className="text-xl text-brand-1">
              ${priceFilter.minPrice} - ${priceFilter.maxPrice}
            </span>
          </div>
          <PriceRange setPriceFilter={setPriceFilter} />
        </div>
      </div>
    </div>
  );
}
