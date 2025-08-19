import { CategoryType, Entity, ImageType, Populate } from "@/types";

export interface ProductType {
  title: string;
  description: string | null;
  quantity: number | null;
  price: number;
  sell_price: number | null;
  discount_expire_date: string | null;
  rate: number;
  weight: number;
  is_popular: boolean;
  is_top_selling: boolean;
  is_trending: boolean;
  SKU: string;
  label: string | null;
  unit: string;
  total: number;
  sold: number;
  is_popular_fruit: boolean;
  is_best_seller: boolean;
  thumbnail: {
    data: Entity<ImageType>;
  };
  categories: {
    data: Populate<CategoryType>;
  };
  gallery: Populate<ImageType>;
}

export interface ProductFilters {
  [key: string]: {
    $eq: boolean | string | number;
  };
}
