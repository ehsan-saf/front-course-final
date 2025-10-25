import {
  CheckBox,
  ClearCartButton,
  IconBox,
  ImageView,
  ProductQuantityInput,
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
          <div className="mt-5 flex justify-between">
            <div aria-label="number of products in your cart">
              There are <span className="text-brand-1">{itemsCount}</span>{" "}
              products in your cart
            </div>
            <ClearCartButton onClick={handleClearCart} />
          </div>
          <table className="mt-12">
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
        </div>
        <div className="flex max-w-[480px] flex-1 flex-col rounded-[15px] px-4 py-6 shadow md:px-10 md:py-11">
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
