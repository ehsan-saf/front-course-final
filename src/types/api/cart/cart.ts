import { Entity, ImageType } from "@/types";

export interface CartType {
  uuid: string | null;
  basket_items: Array<CartItemType>;
}

export interface CartItemType {
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

export interface CartRequestType {
  data: {
    basket_items: Array<{
      product: {
        connect: [{ id: number }];
      };
      quantity: number;
    }>;
  };
}
