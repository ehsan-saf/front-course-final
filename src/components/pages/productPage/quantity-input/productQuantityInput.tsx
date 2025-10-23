import { IconBox } from "@/components";
import { Entity, ProductType } from "@/types";
import { useCart } from "@/hooks";

interface Props {
  className?: string;
  showAddToCart?: boolean;
  data: Entity<ProductType>;
}

export function ProductQuantityInput({ showAddToCart = false, data }: Props) {
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
        className={`flex items-center justify-center gap-2.5 rounded-sm bg-brand-1 px-6 py-3.5 text-white hover:bg-brand-2`}
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
            <IconBox
              icon="shopping-cart"
              size={{ mobile: 16, nonMobile: 16 }}
            ></IconBox>
            <span className="hidden text-sm md:inline">Add To Cart</span>
          </>
        )}
      </button>
      {/* <!-- Input number when added ---- --> */}
      <div
        className="flex h-9 items-center justify-between rounded-sm border border-brand-1 lg:h-12 lg:w-28"
        style={{
          display: `${quantity > 0 ? "flex" : "none"}`,
        }}
      >
        <span className="flex-1 text-center text-base text-brand-1 lg:text-xl">
          {quantity}
        </span>
        <div className="flex h-full flex-col justify-between gap-1 p-1 pr-1.5 text-brand-1">
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
