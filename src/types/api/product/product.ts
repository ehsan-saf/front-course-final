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
    /** Equal */
    $eq?: ProductType[K];
    /** Equal (case-insensitive) */
    $eqi?: string;
    /** Not equal */
    $ne?: ProductType[K] | null;
    /** Not equal (case-insensitive) */
    $nei?: string;
    /** Less than */
    $lt?: number;
    /** Less than or equal to */
    $lte?: number;
    /** Greater than */
    $gt?: number;
    /** Greater than or equal to */
    $gte?: number;
    /** Included in an array */
    $in?: ProductType[K][];
    /** Not included in an array */
    $notIn?: ProductType[K][];
    /** Contains */
    $contains?: string;
    /** Does not contain */
    $notContains?: string;
    /** Contains (case-insensitive) */
    $containsi?: string;
    /** Does not contain (case-insensitive) */
    $notContainsi?: string;
    /** Is null */
    $null?: boolean;
    /** Is not null */
    $notNull?: boolean;
    /** Is between two values */
    $between?: [number, number];
    /** Starts with */
    $startsWith?: string;
    /** Starts with (case-insensitive) */
    $startsWithi?: string;
    /** Ends with */
    $endsWith?: string;
    /** Ends with (case-insensitive) */
    $endsWithi?: string;
  };
} & {
  categories?: {
    id?: { $eq?: number; $in?: number[] };
    title?: { $eq?: string; $containsi?: string };
    slug?: { $eq?: string; $in?: string[] };
  };
  /** Joins the filters in an "or" expression */
  $or?: ProductFilters[];
  /** Joins the filters in an "and" expression */
  $and?: ProductFilters[];
  /** Joins the filters in a "not" expression */
  $not?: ProductFilters;
};

export type ProductSort = Array<`${keyof ProductType}:${"asc" | "desc"}`>;

export type PaginationProp =
  | { start: number; limit: number; withCount?: boolean }
  | { page: number; pageSize: number; withCount?: boolean };
