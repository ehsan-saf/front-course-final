"use client";

import { cartApiCall, updateCartApiCall, uuid2UserApiCall } from "@/api/cart";
import { CartItemType, UpdateCartDataType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCart() {
  const queryClient = useQueryClient();

  const { data: cartData, isLoading: isCartLoading } = useQuery({
    queryKey: ["get-cart"],
    queryFn: ({ signal }: { signal?: AbortSignal }) => cartApiCall({ signal }),
  });

  const cartMutation = useMutation({
    mutationKey: ["update-cart"],
    mutationFn: ({
      data,
      signal,
    }: {
      data: UpdateCartDataType;
      signal?: AbortSignal;
    }) => updateCartApiCall(data, signal),
  });

  const uuid2UserMutation = useMutation({
    mutationFn: ({ uuid, signal }: { uuid: string; signal?: AbortSignal }) =>
      uuid2UserApiCall(uuid, signal),
    onSuccess: () => {
      window.localStorage.removeItem("uuid");
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
  });

  const cartItems = cartData?.data.attributes.basket_items ?? [];

  const addItemHandler = (productId: number) => {
    const prepareUpdateData = cartItems.map((item) => ({
      product: {
        connect: [{ id: item.product.data.id }],
      },
      quantity: item.quantity,
    }));

    prepareUpdateData.push({
      product: {
        connect: [{ id: productId }],
      },
      quantity: 1,
    });

    const updatedData: UpdateCartDataType = {
      basket_items: prepareUpdateData,
    };

    cartMutation.mutate(
      { data: updatedData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["get-cart"] });
        },
      },
    );
  };

  // =========== Update item quantity ===========

  const updateItemHandler = (
    productId: number,
    operation: "increment" | "decrement" | "remove",
  ) => {
    const getNewQuantity = (
      item: CartItemType,
      productId: number,
      operation: string,
    ) => {
      if (productId !== item.product.data.id) return item.quantity;
      console.log(operation);
      switch (operation) {
        case "increment":
          return item.quantity + 1;
        case "decrement":
          return item.quantity - 1;
        default:
          return 0;
      }
    };

    const prepareUpdateData = cartItems.map((item) => ({
      product: {
        connect: [{ id: item.product.data.id }],
      },
      quantity: getNewQuantity(item, productId, operation),
    }));

    console.log(prepareUpdateData);

    const updatedData: UpdateCartDataType = {
      basket_items: prepareUpdateData,
    };

    cartMutation.mutate(
      { data: updatedData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["get-cart"] });
        },
      },
    );
  };

  // =============== Remove cart item ==============

  const removeItemHandler = (productId: number) => {
    updateItemHandler(productId, "remove");
  };

  // =============== Get cart item ==============

  const getItemHandler = (productId: number): CartItemType | undefined => {
    return cartItems.find((item) => item.product.data.id === productId);
  };

  const uuid2UserHandler = () => {
    const token = window.localStorage.getItem("token");
    const uuid = window.localStorage.getItem("uuid");

    if (token && uuid) {
      if (cartItems.length > 0) {
        uuid2UserMutation.mutate({ uuid });
      } else {
        window.localStorage.removeItem("uuid");
        queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      }
    }
  };

  return {
    cartItems,
    isCartLoading,
    isCartUpdating: cartMutation.isPending,
    getItem: getItemHandler,
    addItem: addItemHandler,
    updateItem: updateItemHandler,
    removeItem: removeItemHandler,
    uuid2User: uuid2UserHandler,
  };
}
