import { Entity, ImageType, ProductType } from "@/types";
import { createContext, ReactNode, useState } from "react";
import { Immer } from "";
import { produce } from "immer";

interface Props {
  children: ReactNode;
}

interface CartItemType {
  id: number;
  title: string;
  price: number;
  sell_price: number | null;
  img?: Entity<ImageType>;
  SKU: string | null;
  unit: string;
  quantity: number;
  maxQuantity: number; // from product.quantity
}

interface CartContextType {
  cartItems: Array<CartItemType>;
  addItem: (product: Entity<ProductType>) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  deleteItem: () => {},
});

export function CartContextProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<Array<CartItemType>>([]);

  const addItemHandler = (product: Entity<ProductType>) => {
    const cartItem: CartItemType = {
      id: product.id,
      title: product.attributes.title,
      price: product.attributes.price!,
      sell_price: product.attributes.sell_price,
      img: product.attributes.thumbnail?.data,
      SKU: product.attributes.SKU,
      unit: product.attributes.unit,
      quantity: 1,
      maxQuantity: product.attributes.quantity || 0,
    };

    setCartItems((prevItems) => [...prevItems, cartItem]);
  };

  const incrementItemHandler = (productId: number) => {
    setCartItems(
      produce((prevItems) => {
        const item = prevItems.find((item) => item.id === productId);
        if (item && item.quantity < item.maxQuantity) {
          item.quantity++;
        }
      }),
    );
  };
  const decrementItemHandler = (productId: number) => {
    setCartItems(
      produce((prevItems) => {
        const item = prevItems.find((item) => item.id === productId);
        if (item) {
          if (item.quantity === 1) {
            deleteItemHandler(item.id);
          } else {
            item.quantity--;
          }
        }
      }),
    );
  };
  const deleteItemHandler = (productId: number) => {
    setCartItems(
      produce((prevItems) => {
        return prevItems.filter((item) => item.id !== productId);
      }),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem: addItemHandler,
        incrementItem: incrementItemHandler,
        decrementItem: decrementItemHandler,
        deleteItem: deleteItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
