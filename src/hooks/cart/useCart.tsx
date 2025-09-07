import { cartApiCall } from "@/api/cart";
import { useQuery } from "@tanstack/react-query";

export function useCart() {
  const { data: cartData } = useQuery({
    queryKey: ["get-cart"],
    queryFn: cartApiCall,
  });

  const cartItems = cartData?.data.attributes.basket_items ?? [];
  return { cartItems };
}
