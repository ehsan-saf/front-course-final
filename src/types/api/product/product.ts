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

export type ProductFilters = {
  [K in keyof ProductType]?: {
    $eq?: ProductType[K];
    $eqi?: string;
    $ne?: ProductType[K] | null;
    $nei?: string;
    $lt?: number;
    $lte?: number;
    $gt?: number;
    $gte?: number;
    $in?: ProductType[K][];
    $notIn?: ProductType[K][];
    $contains?: string;
    $notContains?: string;
    $containsi?: string;
    $notContainsi?: string;
    $null?: boolean;
    $notNull?: boolean;
    $between?: [number, number];
    $startsWith?: string;
    $startsWithi?: string;
    $endsWith?: string;
    $endsWithi?: string;
  };
} & {
  $or?: ProductFilters[];
  $and?: ProductFilters[];
  $not?: ProductFilters;
};
