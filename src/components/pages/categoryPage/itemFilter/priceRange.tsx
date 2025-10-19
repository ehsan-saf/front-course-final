import { ProductFiltersQuery } from "@/types";
import { produce } from "immer";
import { Dispatch, SetStateAction } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  pendingFilters: ProductFiltersQuery;
  setPendingFilters: Dispatch<SetStateAction<ProductFiltersQuery>>;
}

export function PriceRange({ pendingFilters, setPendingFilters }: Props) {
  const SLIDER_MIN = 0;
  const SLIDER_MAX = 10000;

  const currentMin = pendingFilters.minPrice;
  const currentMax = pendingFilters.maxPrice;

  const changeHandler = (range: [number, number]) => {
    setPendingFilters(
      produce((draft) => {
        draft.minPrice = range[0];
        draft.maxPrice = range[1];
      }),
    );
  };

  return (
    <div>
      <RangeSlider
        min={SLIDER_MIN}
        max={SLIDER_MAX}
        value={[currentMin ?? SLIDER_MIN, currentMax ?? SLIDER_MAX]}
        onInput={changeHandler}
      />
    </div>
  );
}
