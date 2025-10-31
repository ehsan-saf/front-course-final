import { IconBox } from "@/components";
import { Entity, ProductType } from "@/types";
import { useCart } from "@/hooks";
import { twMerge } from "tailwind-merge";
import PendingDots from "@/components/shared/ui/indicators/pendingDots";

interface Props {
  className?: string;
  showAddToCart?: boolean;
  data: Entity<ProductType>;
}

export function ProductQuantityInput({
  showAddToCart = false,
  data,
  className = "",
}: Props) {
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
        className={twMerge(
          "flex items-center justify-center gap-2.5 rounded-sm bg-brand-1 px-6 py-3.5 text-white hover:bg-brand-2",
          className,
        )}
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
        className={twMerge(
          "flex h-9 items-center justify-between rounded-sm border border-brand-1 px-2 lg:h-12 lg:w-28",
          className,
        )}
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
            <span className="text- brand-1 flex-1 text-center text-xl md:text-2xl lg:text-xl">
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
