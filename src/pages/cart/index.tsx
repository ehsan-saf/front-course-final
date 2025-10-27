import {
  CheckBox,
  ClearCartButton,
  IconBox,
  ImageView,
  Input,
  ProductQuantityInput,
  QuantityInput,
} from "@/components";
import { useCart } from "@/hooks";
import { CartItemType } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const { cartItems, removeItem } = useCart();
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [cartSubtotal, setCartSubtotal] = useState<number>(0);

  useEffect(() => {
    const newCheckedItems = { ...checkedItems };

    cartItems.forEach((item) => {
      newCheckedItems[item.id] = isAllChecked;
    });

    setCheckedItems(newCheckedItems);
  }, [isAllChecked]);

  useEffect(() => {
    const newCheckedItems = { ...checkedItems };
    let newCartSubtotal = 0;
    cartItems.forEach((item) => {
      if (!(item.id in newCheckedItems)) {
        newCheckedItems[item.id] = false;
      }
      newCartSubtotal += getSubtotalPrice(item, false) as number;
    });
    setCheckedItems(newCheckedItems);
    setCartSubtotal(newCartSubtotal);
  }, [cartItems]);

  const handleChecked = (item: CartItemType) =>
    setCheckedItems((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));

  const handleClearCart = () => {
    const removeIdList = [];
    console.log(checkedItems);
    cartItems.forEach((item) => {
      if (checkedItems[item.id]) {
        removeIdList.push(item.product.data.id);
      }
    });
  };

  const itemsCount = cartItems.length;
  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };
  const getRealPrice = (item: CartItemType) => {
    const realPrice = item.product.data.attributes.sell_price
      ? item.product.data.attributes.sell_price
      : item.product.data.attributes.price;
    return formatPrice(realPrice || 0);
  };
  const getSubtotalPrice = (item: CartItemType, isFormatted: boolean) => {
    const realPrice = item.product.data.attributes.sell_price
      ? item.product.data.attributes.sell_price
      : item.product.data.attributes.price;
    const subtotalPrice = (realPrice || 0) * item.quantity;
    return isFormatted ? formatPrice(subtotalPrice) : subtotalPrice;
  };

  if (itemsCount < 1) {
    return (
      <div className="mt-11 flex flex-col items-center gap-4 lg:mt-16">
        <IconBox icon="frown" size={{ mobile: 24, nonMobile: 30 }} />
        <h1 className="text-3xl">You cart is empty</h1>

        <Link href="/" className="flex items-center gap-2.5 text-brand-1">
          Start Shopping{" "}
          <IconBox icon="shopping-cart" size={{ mobile: 24, nonMobile: 30 }} />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-6 lg:mt-11">
      <div className="flex flex-col gap-10 md:flex-row md:justify-center">
        <div className="flex max-w-[1000px] flex-1 flex-col">
          <h1 className="text-3xl lg:text-[40px]">Your Cart</h1>
          <div className="mt-5 hidden justify-between md:flex">
            <div aria-label="number of products in your cart">
              There are <span className="text-brand-1">{itemsCount}</span>{" "}
              products in your cart
            </div>
            <ClearCartButton onClick={handleClearCart} />
          </div>
          {/* Cart Items */}
          <table className="mt-12 mb-6 hidden md:block">
            <thead>
              <tr className="bg-muted pr-8 pl-6">
                <th scope="col" className="rounded-l-2xl px-4">
                  <CheckBox
                    isChecked={isAllChecked}
                    changeChecked={() => setIsAllChecked((s) => !s)}
                  />
                </th>
                <th scope="col" className="px-4 py-4">
                  Products
                </th>
                <th scope="col" className="px-4">
                  Unit Price
                </th>
                <th scope="col" className="px-4">
                  Quantity
                </th>
                <th scope="col" className="px-4">
                  Subtotal
                </th>
                <th scope="col" className="rounded-r-2xl px-4">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 pt-6 align-middle">
                      <CheckBox
                        isChecked={checkedItems[item.id]}
                        changeChecked={() => handleChecked(item)}
                      />
                    </td>
                    <td className="px-4 pt-6">
                      <ImageView
                        src={
                          item.product.data.attributes.thumbnail?.data
                            .attributes.url
                        }
                        width={
                          item.product.data.attributes.thumbnail?.data
                            .attributes.width
                        }
                        height={
                          item.product.data.attributes.thumbnail?.data
                            .attributes.height
                        }
                      />
                    </td>
                    <td className="px-4 pt-6 text-sm text-body md:text-xl lg:text-2xl">
                      ${getRealPrice(item)}
                    </td>
                    <td className="px-4 pt-6">
                      <ProductQuantityInput data={item.product.data} />
                    </td>
                    <td className="px-4 pt-6 text-sm text-brand-1 md:text-xl lg:text-2xl">
                      {getSubtotalPrice(item, true)}
                    </td>
                    <td className="flex justify-center px-4 pt-6">
                      <button
                        className="cursor-pointer text-text-muted"
                        onClick={() => removeItem(item.product.data.id)}
                      >
                        <IconBox
                          icon="circle-x"
                          size={{ mobile: 20, nonMobile: 24 }}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Cart Items Card (mobile) */}
          <div className="mt-12 mb-6 flex flex-col gap-4 md:hidden">
            {cartItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-border p-2.5"
                >
                  <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
                    <div>Product</div>
                    <div className="text-right text-body">
                      {item.product.data.attributes.title}
                    </div>
                  </div>
                  <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
                    <div>Unit Price</div>
                    <div className="text-body">${getRealPrice(item)}</div>
                  </div>
                  <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
                    <div>Quantity</div>
                    <ProductQuantityInput
                      data={item.product.data}
                      className="max-w-[120px] flex-1"
                    />
                  </div>
                  <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
                    <div>Subtotal</div>
                    <div className="text-brand-1">
                      ${getSubtotalPrice(item, true)}
                    </div>
                  </div>
                  <button
                    className="flex cursor-pointer items-center justify-center gap-2.5 text-danger"
                    onClick={() => removeItem(item.product.data.id)}
                  >
                    Remove Item
                    <IconBox
                      icon="circle-x"
                      size={{ mobile: 20, nonMobile: 24 }}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          {/* Continue shopping And Update Cart buttons  */}
          <div className="flex flex-col-reverse justify-between gap-3.5 border-t border-t-border pt-10 md:flex-row">
            <Link
              className="flex items-center justify-center gap-3.5 rounded-sm bg-brand-2 p-3.5 text-white"
              href="/"
            >
              <IconBox icon="move-left" />
              <span>Continue Shopping</span>
            </Link>
            <button className="flex cursor-pointer items-center justify-center gap-3.5 rounded-sm bg-brand-1 p-3.5 text-white">
              <IconBox icon="refresh-ccw" />
              <span>Update Cart</span>
            </button>
          </div>
          {/* Calculate Shipping and Apply Coupon */}
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="mt-10 flex flex-col gap-4 rounded-[15px] border-1 border-border p-10">
              <h2 className="text-xl text-heading md:text-2xl">
                Calculate Shipping
              </h2>
              <div
                aria-label="flat rate"
                className="flex gap-1 font-lato text-body"
              >
                Flat rate:
                <span className="text-brand-1">%5</span>
              </div>
              <select
                name="cities"
                className="rounded-[10px] border border-border p-5 font-lato text-text-muted"
              >
                <option value="">Select your location</option>
                <option value="uk">United Kingdom</option>
                <option value="us">United States</option>
                <option value="uae">United Arab Emirates</option>
              </select>
              <div className="flex flex-col justify-between gap-5 md:flex-row">
                <input
                  type="text"
                  placeholder="State / City"
                  className="flex-1 rounded-[10px] border border-border p-5 font-lato placeholder:text-text-muted"
                />
                <input
                  type="text"
                  placeholder="Postcode / ZIP"
                  className="flex-3 rounded-[10px] border border-border p-5 font-lato placeholder:text-text-muted"
                />
              </div>
            </div>
            <div className="lg:mt-12">
              <h2 className="text-xl text-heading md:text-2xl">
                Calculate Shipping
              </h2>
              <div className="mt-3.5 mb-7 font-lato text-body">
                Using A Promo Code?
              </div>
              <div className="flex">
                <input
                  placeholder="Coupon Code"
                  className="rounded-l-[10px] border border-r-0 border-border px-6 py-3 placeholder:font-lato placeholder:text-text-muted"
                />
                <button className="rounded-r-[10px] bg-brand-1 px-6 py-3.5 text-white">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout button */}
        <div className="flex h-fit max-w-[480px] flex-1 flex-col rounded-[15px] px-4 py-6 shadow md:px-10 md:py-11">
          <div className="mb-9 flex items-center justify-between gap-3 border-b border-b-border pb-6">
            <div className="text-text-muted">Subtotal</div>
            <div className="text-brand-1 md:text-2xl">
              ${formatPrice(cartSubtotal)}
            </div>
          </div>
          <div className="mb-8 flex items-center justify-between gap-3">
            <div className="text-text-muted">Shipping</div>
            <div className="text-base text-heading md:text-xl">
              Free Shipping
            </div>
          </div>
          <div className="mb-9 flex items-center justify-between gap-3 border-b border-b-border pb-6">
            <div className="text-text-muted">Estimate for</div>
            <div className="text-base text-heading md:text-xl">
              United Kingdom
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="text-text-muted">Total</div>
            <div className="text-brand-1 md:text-2xl">
              ${formatPrice(cartSubtotal)}
            </div>
          </div>
          <Link
            href="/checkout"
            className="flex items-center justify-center gap-2 rounded-sm bg-brand-1 p-3.5 text-white"
          >
            <span>Proceed to Checkout</span>
            <IconBox icon="log-out" />
          </Link>
        </div>
      </div>
    </div>
  );
}
