import { Dispatch, SetStateAction } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  defaultValues: { min: number; max: number };
  setPriceFilter: Dispatch<
    SetStateAction<{ minPrice: number; maxPrice: number }>
  >;
}

export function PriceRange({ defaultValues, setPriceFilter }: Props) {
  const changeHandler = (range: [number, number]) => {
    setPriceFilter({ minPrice: range[0], maxPrice: range[1] });
  };

  return (
    <div>
      <RangeSlider
        min={0}
        max={3000}
        defaultValue={[defaultValues.min, defaultValues.max]}
        onInput={changeHandler}
      />
    </div>
  );
}
