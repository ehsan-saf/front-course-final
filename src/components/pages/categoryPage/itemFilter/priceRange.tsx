import { ProductFilters } from "@/types";
import { produce } from "immer";
import { Dispatch, SetStateAction } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  pendingFilters: ProductFilters;
  setPendingFilters: Dispatch<SetStateAction<ProductFilters>>;
}

export function PriceRange({ pendingFilters, setPendingFilters }: Props) {
  const SLIDER_MIN = 0;
  const SLIDER_MAX = 10000;

  const currentMin = pendingFilters.$or?.[0]?.price?.$gte;
  const currentMax = pendingFilters.$or?.[0]?.price?.$lte;

  const changeHandler = (range: [number, number]) => {
    setPendingFilters(
      produce((draft) => {
        draft.$or = [
          { price: { $gte: range[0], $lte: range[1] } },
          { sell_price: { $gte: range[0], $lte: range[1] } },
        ];
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
