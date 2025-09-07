import { Entity, ImageType, ProductType } from "@/types";

export interface CartType {
  uuid: string | null;
  basket_items: Array<CartItemType>;
}

export interface CartItemType {
  quantity: number;
  id: number;
  product: { data: Entity<ProductType> };
  // title: string;
  // price: number;
  // sell_price: number | null;
  // img?: Entity<ImageType>;
  // SKU: string | null;
  // unit: string;
  // maxQuantity: number; // from product.quantity
}

export interface UpdateCartDataType {
  basket_items: Array<{
    product: {
      connect: Array<{ id: number }>;
    };
    quantity: number;
  }>;
}
