import { IconBox } from "@/components";
import { Entity, ProductType } from "@/types";
import { useCart } from "@/hooks";
import PendingDots from "../../ui/indicators/pendingDots";

interface Props {
  className?: string;
  showAddToCart?: boolean;
  data: Entity<ProductType>;
}

export function QuantityInput({ showAddToCart = false, data }: Props) {
  const { getItem, addItem, updateItem, isCartLoading, isCartUpdating } =
    useCart();
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
        className={`flex items-center justify-center gap-2.5 rounded-sm ${showAddToCart ? "bg-brand-1 p-2.5 text-white" : "bg-btn-green-bg p-1.5 hover:text-white md:px-2.5 md:py-1"} text-brand-1 hover:bg-brand-2`}
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
        className="flex h-8 w-24 items-center justify-between rounded-sm shadow"
        style={{
          display: `${quantity > 0 ? "flex" : "none"}`,
        }}
      >
        {isCartLoading || isCartUpdating ? (
          <div className="mx-auto">
            <PendingDots />
          </div>
        ) : (
          <>
            <button onClick={decrement}>
              {quantity === 1 ? (
                <IconBox icon="trash-2" size={{ mobile: 16, nonMobile: 20 }} />
              ) : (
                <IconBox icon="minus" size={{ mobile: 16, nonMobile: 20 }} />
              )}
            </button>
            <span className="flex-1 text-center text-base text-brand-1 md:text-xl">
              {quantity}
            </span>
            <button onClick={increment}>
              <IconBox icon="plus" size={{ mobile: 16, nonMobile: 20 }} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
