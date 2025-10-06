import { Dispatch, SetStateAction } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  setPriceFilter: Dispatch<
    SetStateAction<{ minPrice: number; maxPrice: number }>
  >;
}

export function PriceRange({ setPriceFilter }: Props) {
  const changeHandler = (range: [number, number]) => {
    setPriceFilter({ minPrice: range[0], maxPrice: range[1] });
  };

  return (
    <div>
      <RangeSlider min={5} max={100} onInput={changeHandler} />
    </div>
  );
}
