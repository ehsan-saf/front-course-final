import {
  CheckBox,
  IconBox,
  ImageView,
  ProductQuantityInput,
} from "@/components";
import { useCart } from "@/hooks";
import { CartItemType } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const { cartItems, removeItem } = useCart();
  const [isChecked, setIsChecked] = useState(false);

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
  const getSubtotalPrice = (item: CartItemType) => {
    const realPrice = item.product.data.attributes.sell_price
      ? item.product.data.attributes.sell_price
      : item.product.data.attributes.price;
    const subtotalPrice = (realPrice || 0) * item.quantity;
    return formatPrice(subtotalPrice);
  };

  if (itemsCount < 1) {
    return (
      <div className="mt-16 flex flex-col items-center gap-4">
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
    <div className="container">
      <div className="flex">
        <div>
          <h1 className="text-3xl lg:text-[40px]">Your Cart</h1>
          <div aria-label="number of products in your cart">
            There are <span className="text-brand-1">{itemsCount}</span>{" "}
            products in your cart
          </div>
          <table>
            <thead>
              <tr className="bg-muted pr-8 pl-6">
                <th scope="col" className="rounded-l-2xl px-4">
                  <CheckBox
                    isChecked={isChecked}
                    changeChecked={() => setIsChecked((s) => !s)}
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
                    <td className="pt-6 align-middle">
                      <CheckBox
                        isChecked={isChecked}
                        changeChecked={() => setIsChecked((s) => !s)}
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
                      {getSubtotalPrice(item)}
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
      </div>
    </div>
  );
}
