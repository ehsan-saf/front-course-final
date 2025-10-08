import { ProductFilters } from "@/types";
import { produce } from "immer";
import { Dispatch, SetStateAction } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  defaultValues: { min: number; max: number };
  setPendingFilters: Dispatch<SetStateAction<ProductFilters>>;
}

export function PriceRange({ defaultValues, setPendingFilters }: Props) {
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
        min={0}
        max={50000}
        defaultValue={[defaultValues.min, defaultValues.max]}
        onInput={changeHandler}
      />
    </div>
  );
}
