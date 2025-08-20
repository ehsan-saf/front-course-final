import { CategoryType, Entity, ImageType, Populate } from "@/types";

export interface ProductType {
  title: string;
  description: string;
  quantity: number | null;
  price: number | null;
  sell_price: number | null;
  discount_expire_date: string;
  rate: number;
  weight: number | null;
  is_popular: boolean;
  is_top_selling: boolean;
  is_trending: boolean;
  SKU: string | null;
  label: string | null;
  unit: string;
  total: number | null;
  sold: number | null;
  is_popular_fruit: boolean;
  is_best_seller: boolean;
  thumbnail?: {
    data: Entity<ImageType>;
  };
  categories?: Populate<CategoryType>;
  gallery: Populate<ImageType>;
}

export interface ProductFilters {
  [key: string]: {
    $eq: boolean | string | number;
  };
}
