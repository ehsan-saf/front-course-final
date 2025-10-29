import { IconBox, ImageView } from "@/components";
import { useCart } from "@/hooks";
import { useUser } from "@/store";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const { user } = useUser();
  const { cartItems } = useCart();

  const [checkedMethod, setCheckedMethod] = useState<"direct" | "on-delivery">(
    "direct",
  );

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  const getSubtotalPrice = (item: CartItemType, isFormatted: boolean) => {
    const realPrice = item.product.data.attributes.sell_price
      ? item.product.data.attributes.sell_price
      : item.product.data.attributes.price;
    const subtotalPrice = (realPrice || 0) * item.quantity;
    return isFormatted ? formatPrice(subtotalPrice) : subtotalPrice;
  };

  return (
    <div className="container mt-10">
      <div className="flex flex-col gap-5">
        <div className="flex-1">
          <div>
            <h1 className="text-2xl md:text-[40px]">Checkout</h1>
            <p>
              There are <span className="mt-5 text-brand-1">3</span> products in
              your cart
            </p>
          </div>
          {/* Log in and Apply coupon */}
          <div className="mt-11 flex flex-1 flex-col gap-7 md:flex-row">
            <div className="flex-1 rounded-[10px] border border-border p-3 shadow">
              {user ? (
                <div>
                  Hello <span className="text-brand-1">{user.username}</span>!
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center font-lato lg:flex-row lg:gap-2">
                  <IconBox icon="user" />
                  <p className="text-body">Already have an account?</p>
                  <Link href="/log-in" className="text-brand-1">
                    Click here to login
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-1">
              <input
                placeholder="Coupon Code"
                className="flex-2 rounded-l-[10px] border border-r-0 border-border p-2 placeholder:font-lato placeholder:text-text-muted md:px-6 md:py-3"
              />
              <button className="flex-1 rounded-r-[10px] bg-heading p-2 text-white md:px-6 md:py-3.5">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Order Items */}
          <div className="flex-1 rounded-[15px] border border-border p-7">
            <div className="mb-6 flex justify-between border-b border-b-border pb-7">
              <h2 className="text-heading">Your Orders</h2>
              <div className="text-text-muted">Subtotal</div>
            </div>
            <div className="flex flex-col gap-8">
              {cartItems.map((item, index) => {
                return (
                  <div className="grid grid-cols-3" key={index}>
                    <div className="max-w-[170px]">
                      {item.product.data.attributes.title}
                    </div>
                    <div className="justify-self-center text-text-muted">
                      X {item.quantity}
                    </div>
                    <div className="justify-self-end text-brand-1">
                      ${getSubtotalPrice(item, true)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="mb-7 text-2xl">Payment</h2>
            <label
              htmlFor="direct-transfer"
              className="flex gap-2.5 font-lato text-body has-checked:text-heading"
            >
              <input
                type="radio"
                id="direct-transfer"
                name="pay-method"
                checked={checkedMethod === "direct"}
                onClick={() => setCheckedMethod("direct")}
              />
              Direct bank transfer
            </label>
            <label
              htmlFor="cash-transfer"
              className="mt-3.5 flex gap-2.5 font-lato text-body has-checked:text-heading"
            >
              <input
                type="radio"
                id="cash-transfer"
                name="pay-method"
                checked={checkedMethod === "on-delivery"}
                onClick={() => setCheckedMethod("on-delivery")}
              />
              Cash on delivery
            </label>
            <div className="mt-5 flex items-center gap-2.5">
              <ImageView
                src="/icons/paypal.svg"
                width={80}
                height={20}
                wrapperClassName="w-[80px] h-5"
              />
              <ImageView
                src="/icons/visa.svg"
                width={80}
                height={20}
                wrapperClassName="w-[80px] h-6"
              />
              <ImageView
                src="/icons/mastercard.svg"
                width={80}
                height={20}
                wrapperClassName="w-6 h-5"
              />
              <ImageView
                src="/icons/zapper.svg"
                width={80}
                height={20}
                wrapperClassName="w-[80px] h-5"
              />
            </div>
          </div>
          <button className="flex items-center justify-center gap-3 self-stretch rounded-sm bg-brand-1 px-12 py-3.5 text-white md:self-start">
            <span>Place an Order</span>
            <IconBox icon="log-in" />
          </button>
        </div>
      </div>
    </div>
  );
}
