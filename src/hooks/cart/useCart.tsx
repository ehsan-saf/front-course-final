import { cartApiCall, updateCartApiCall } from "@/api/cart";
import { CartItemType, UpdateCartDataType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useCart() {
  const queryClient = useQueryClient();

  const { data: cartData } = useQuery({
    queryKey: ["get-cart"],
    queryFn: cartApiCall,
  });

  const cartMutation = useMutation({
    mutationKey: ["update-cart"],
    mutationFn: updateCartApiCall,
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

    cartMutation.mutate(updatedData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      },
    });
  };

  // =========== Update item quantity ===========

  const updateItemHandler = (
    productId: number,
    operation: "increment" | "decrement",
  ) => {
    const prepareUpdateData = cartItems.map((item) => ({
      product: {
        connect: [{ id: item.product.data.id }],
      },
      quantity:
        productId === item.product.data.id
          ? operation === "increment"
            ? item.quantity + 1
            : item.quantity - 1
          : item.quantity,
    }));

    const updatedData: UpdateCartDataType = {
      basket_items: prepareUpdateData,
    };

    cartMutation.mutate(updatedData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      },
    });
  };

  // =============== Get cart item ==============

  const getItemHandler = (productId: number): CartItemType | undefined => {
    return cartItems.find((item) => item.product.data.id === productId);
  };

  return {
    cartItems,
    getItem: getItemHandler,
    addItem: addItemHandler,
    updateItem: updateItemHandler,
  };
}
