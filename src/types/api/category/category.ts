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
