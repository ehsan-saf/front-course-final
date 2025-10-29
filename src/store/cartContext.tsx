"use client";

import { CartItemType, Entity, ProductType } from "@/types";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { produce } from "immer";

interface Props {
  children: ReactNode;
}

interface CartContextType {
  cartItems: Array<CartItemType>;
  addItem: (product: Entity<ProductType>) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  deleteItem: (id: number) => void;
  getItem: (id: number) => undefined | CartItemType;
}

type CartAction =
  | { type: "ADD_ITEM"; item: CartItemType }
  | { type: "INCREMENT_ITEM"; id: number }
  | { type: "DECREMENT_ITEM"; id: number }
  | { type: "DELETE_ITEM"; id: number };

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  deleteItem: () => {},
  getItem: () => undefined,
});

export const useCart = () => useContext(CartContext);

function cartReducer(
  state: CartItemType[],
  action: CartAction,
): CartItemType[] {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "INCREMENT_ITEM":
      return produce(state, (draft) => {
        const item = draft.find((item) => item.id === action.id);
        if (item?.product.data.attributes.quantity)
          if (item && item.quantity < item.product.data.attributes.quantity) {
            item.quantity++;
          }
      });
    case "DECREMENT_ITEM":
      return produce(state, (draft) => {
        const item = draft.find((item) => item.id === action.id);
        if (item) {
          if (item.quantity === 1) {
            return draft.filter((item) => item.id !== action.id);
          } else {
            item.quantity--;
          }
        }
      });
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export function CartContextProvider({ children }: Props) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

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

    dispatch({ type: "ADD_ITEM", item: cartItem });
  };

  const incrementItemHandler = (productId: number) => {
    dispatch({ type: "INCREMENT_ITEM", id: productId });
  };

  const decrementItemHandler = (productId: number) => {
    dispatch({ type: "DECREMENT_ITEM", id: productId });
  };
  const deleteItemHandler = (productId: number) => {
    dispatch({ type: "DELETE_ITEM", id: productId });
  };

  const getItemHandler = (productId: number) => {
    return cartItems.find((item) => item.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem: addItemHandler,
        incrementItem: incrementItemHandler,
        decrementItem: decrementItemHandler,
        deleteItem: deleteItemHandler,
        getItem: getItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
