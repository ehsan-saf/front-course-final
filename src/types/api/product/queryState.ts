export interface ProductFiltersQuery {
  minPrice?: number;
  maxPrice?: number;
  brands?: string[];
  usedFor?: string[];
  page?: number;
}
