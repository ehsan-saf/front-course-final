import apiClient from "@/api/config/apiClient";
import {
  ApiResponse,
  ApiResponseSingle,
  PaginationProp,
  ProductFilters,
  ProductSort,
  ProductType,
} from "@/types";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: ProductFilters;
  sort?: ProductSort;
  pagination?: PaginationProp;
  signal?: AbortSignal;
}

export async function getProductsApi({
  populate,
  filters,
  sort,
  pagination,
  signal,
}: Props): Promise<ApiResponse<ProductType>> {
  const response = await apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: filters || {},
      sort: sort?.join(","),
      pagination,
    },
    signal,
  });

  return response.data;
}

interface SingleProductProps {
  id: string;
  signal: AbortSignal;
}

export async function getSingleProductApi({
  id,
  signal,
}: SingleProductProps): Promise<ApiResponseSingle<ProductType>> {
  const response = await apiClient.get(`products/${id}`, {
    params: {
      populate: ["categories", "thumbnail", "gallery"],
    },
    signal,
  });

  return response.data;
}
