import { Dispatch, SetStateAction, useState } from "react";
import { PriceRange } from "./priceRange";
import { IconBox } from "@/components/shared";
import { ProductFilters } from "@/types";
import { CheckList } from "./checkList";

interface Props {
  setEnabledFilters: Dispatch<SetStateAction<ProductFilters>>;
}

const usedForCheckList = [
  { id: 0, name: "Appetizer", isChecked: false },
  { id: 1, name: "Salad", isChecked: false },
  { id: 2, name: "Eat fresh", isChecked: false },
  { id: 3, name: "Juice", isChecked: false },
  { id: 4, name: "Smoothie", isChecked: false },
];

export function ItemFilter({ setEnabledFilters }: Props) {
  const [pendingFilters, setPendingFilters] = useState<ProductFilters>({
    $or: [
      { price: { $gte: 0, $lte: 50000 } },
      { sell_price: { $gte: 0, $lte: 50000 } },
    ],
  });

  const enablePendingFilters = () => {
    console.log(pendingFilters);
    setEnabledFilters({ ...pendingFilters });
  };

  return (
    <div className="rounded-2xl p-3.5 shadow">
      <div className="flex flex-col">
        <h4 className="mb-6 border-b-1 border-b-border pb-3.5">Filter items</h4>
        <div className="mb-7 flex flex-col gap-6">
          <div className="flex gap-5 font-lato text-text-muted">
            <span>Price Range:</span>
            <span className="font-quicksand text-xl text-brand-1">
              ${pendingFilters.$or![0].price?.$gte} -{" "}
              {pendingFilters.$or![0].price?.$lte}
            </span>
          </div>
          <PriceRange
            setPendingFilters={setPendingFilters}
            defaultValues={{ min: 0, max: 50000 }}
          />
        </div>
        <div className="mb-7 flex flex-col gap-4">
          <h5 className="font-lato text-text-muted">Used for:</h5>
          <CheckList listItems={usedForCheckList} />
        </div>
        <button
          onClick={enablePendingFilters}
          className="flex cursor-pointer items-center justify-items-center gap-1 self-start rounded-sm bg-btn-green-bg px-7 py-3 text-brand-1"
        >
          <IconBox icon="filter" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}
