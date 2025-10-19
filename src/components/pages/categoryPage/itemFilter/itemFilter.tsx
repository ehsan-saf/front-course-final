import { useState } from "react";
import { PriceRange } from "./priceRange";
import { IconBox } from "@/components/shared";
import { ProductFiltersQuery } from "@/types";
import { CheckList } from "./checkList";
import { FilterModal } from "./filterModal";

interface Props {
  filters: { minPrice: number; maxPrice: number; brands: string[] };
  setFilters: (filters: ProductFiltersQuery) => void;
}

const usedForCheckList = [
  { id: 0, name: "Appetizer", isChecked: false },
  { id: 1, name: "Salad", isChecked: false },
  { id: 2, name: "Eat fresh", isChecked: false },
  { id: 3, name: "Juice", isChecked: false },
  { id: 4, name: "Smoothie", isChecked: false },
];

const brandList = [
  { id: 0, name: "Cobblestone", isChecked: false },
  { id: 1, name: "McVitie's", isChecked: false },
  { id: 2, name: "Tastykake", isChecked: false },
  { id: 3, name: "Warburtons", isChecked: false },
  { id: 4, name: "Wonder Bread", isChecked: false },
];

export function ItemFilter({ filters, setFilters }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enablePendingFilters = () => {
    setFilters({
      minPrice: pendingFilters.minPrice,
      maxPrice: pendingFilters.maxPrice,
    });
    setIsModalOpen(false);
  };

  const [pendingFilters, setPendingFilters] = useState<ProductFiltersQuery>({
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  });

  const filterContent = (
    <div className="flex flex-col">
      <div className="mb-7 flex flex-col gap-6">
        <div className="flex gap-5 font-lato text-text-muted">
          <span>Price Range:</span>
          <span className="font-quicksand text-xl text-brand-1">
            ${pendingFilters.minPrice} - {pendingFilters.maxPrice}
          </span>
        </div>
        <PriceRange
          pendingFilters={pendingFilters}
          setPendingFilters={setPendingFilters}
        />
      </div>
      <div className="mb-7 flex flex-col gap-4">
        <h5 className="font-lato text-text-muted">Used for:</h5>
        <CheckList listItems={usedForCheckList} />
      </div>
      <div className="mb-7 flex flex-col gap-4">
        <h5 className="font-lato text-text-muted">Brand</h5>
        <CheckList listItems={brandList} />
      </div>
      <button
        onClick={enablePendingFilters}
        className="flex cursor-pointer items-center justify-items-center gap-1 self-start rounded-sm bg-btn-green-bg px-7 py-3 text-brand-1"
      >
        <IconBox icon="filter" />
        <span>Filter</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile: Filter Button */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-btn-green-bg px-4 py-2 text-brand-1"
        >
          <IconBox icon="filter" />
          <span>Filter</span>
        </button>
      </div>

      {/* Desktop: Original Filter Panel */}
      <div className="hidden md:block">
        <div className="rounded-2xl p-3.5 shadow">
          <h4 className="mb-6 border-b-1 border-b-border pb-3.5">
            Filter items
          </h4>
          {filterContent}
        </div>
      </div>

      {/* Modal for Mobile */}
      {isModalOpen && (
        <FilterModal title="Filter items" onClose={() => setIsModalOpen(false)}>
          {filterContent}
        </FilterModal>
      )}
    </>
  );
}
