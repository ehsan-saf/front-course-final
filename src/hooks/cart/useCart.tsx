import { cartApiCall, updateCartApiCall } from "@/api/cart";
import { UpdateCartDataType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
        console.log(response);
      },
    });
  };

  return { cartItems, addItem: addItemHandler };
}
