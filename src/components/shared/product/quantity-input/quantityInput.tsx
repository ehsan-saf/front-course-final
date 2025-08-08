import { useState } from "react";
import { IconBox } from "@/components";

export function QuantityInput() {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity((q) => q + 1);
  }

  function decrement() {
    setQuantity((q) => q - 1);
  }

  return (
    <>
      {/* <!-- ----- Add Product button and Number input ----- --> */}
      <button
        className="add-btn flex items-center justify-center gap-2.5 rounded-sm bg-[#DEF9EC] p-1.5 text-brand-1 hover:bg-brand-2 hover:text-white md:px-2.5 md:py-1"
        style={{
          display: `${quantity < 1 ? "flex" : "none"}`,
        }}
        onClick={increment}
      >
        <span className="hidden text-sm md:inline">Add</span>
        <IconBox icon="plus" size={{ mobile: 10, nonMobile: 14 }}></IconBox>
      </button>
      {/* <!-- Input number when added ---- --> */}
      <div
        className="input-container h-6 w-6 items-center justify-between rounded-sm border-[1px] border-brand-1 md:h-7 md:w-16"
        style={{
          display: `${quantity > 0 ? "flex" : "none"}`,
        }}
      >
        <input
          type="number"
          value={quantity}
          min={0}
          className="no-spinner h-full w-full text-center text-sm text-brand-1"
        />
        <div className="hidden flex-col gap-1 pr-1.5 text-brand-1 md:flex">
          <button onClick={increment}>
            <IconBox icon="chevron-up" size={{ mobile: 10, nonMobile: 10 }} />
          </button>
          <button onClick={decrement}>
            <IconBox icon="chevron-down" size={{ mobile: 10, nonMobile: 10 }} />
          </button>
        </div>
      </div>
    </>
  );
}
