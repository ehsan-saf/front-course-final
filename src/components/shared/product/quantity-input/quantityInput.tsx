import { IconBox } from "@/components";
import { Entity, ProductType } from "@/types";
import { useCart } from "@/hooks";

interface Props {
  showAddToCart?: boolean;
  data: Entity<ProductType>;
}

export function QuantityInput({ showAddToCart = false, data }: Props) {
  const { getItem, addItem, updateItem } = useCart();
  const item = getItem(data.id);
  const quantity = item?.quantity || 0;

  const add = () => {
    addItem(data.id);
  };

  function increment() {
    updateItem(data.id, "increment");
  }

  function decrement() {
    updateItem(data.id, "decrement");
  }

  return (
    <>
      {/* <!-- ----- Add Product button and Number input ----- --> */}
      <button
        className={`flex items-center justify-center gap-2.5 rounded-sm ${showAddToCart ? "bg-brand-1 p-2 p-2.5 text-white" : "bg-[#DEF9EC] p-1.5 hover:text-white md:px-2.5 md:py-1"} text-brand-1 hover:bg-brand-2`}
        style={{
          display: `${quantity < 1 ? "flex" : "none"}`,
        }}
        onClick={add}
      >
        {!showAddToCart ? (
          <>
            <span className="hidden text-sm md:inline">Add</span>
            <IconBox icon="plus" size={{ mobile: 10, nonMobile: 14 }}></IconBox>
          </>
        ) : (
          <>
            <span className="hidden text-sm md:inline">Add To Cart</span>
            <IconBox
              icon="shopping-cart"
              size={{ mobile: 16, nonMobile: 16 }}
            ></IconBox>
          </>
        )}
      </button>
      {/* <!-- Input number when added ---- --> */}
      <div
        className="flex h-7 w-16 items-center justify-between rounded-sm border border-brand-1"
        style={{
          display: `${quantity > 0 ? "flex" : "none"}`,
        }}
      >
        <span className="flex-1 text-center text-sm text-brand-1">
          {quantity}
        </span>
        <div className="flex flex-col gap-1 pr-1.5 text-brand-1">
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
