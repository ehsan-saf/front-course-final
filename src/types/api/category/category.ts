import { Entity, ImageType } from "@/types";

export interface CategoryType {
  title: string;
  description: string | null;
  slug: string;
  is_featured: boolean;
  icon_name: string | null;
  color: string;
  product_count: number;
  link: string;
  thumbnail: {
    data?: Entity<ImageType>;
  };
}

export type CategoryFilters = {
  [K in keyof CategoryType]?: {
    $eq?: CategoryType[K];
    $eqi?: string;
    $ne?: CategoryType[K] | null;
    $nei?: string;
    $lt?: number;
    $lte?: number;
    $gt?: number;
    $gte?: number;
    $in?: CategoryType[K][];
    $notIn?: CategoryType[K][];
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
  id?: {
    $eq?: number;
    $ne?: number;
  };
  $or?: CategoryFilters[];
  $and?: CategoryFilters[];
  $not?: CategoryFilters;
};
