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
}

export async function getProductsApi({
  populate,
  filters,
  sort,
  pagination,
}: Props = {}): Promise<ApiResponse<ProductType>> {
  const response = await apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: filters || {},
      sort: sort?.join(","),
      pagination,
    },
  });

  return response.data;
}

interface SingleProductProps {
  id: string;
}

export async function getSingleProductApi({
  id,
}: SingleProductProps): Promise<ApiResponseSingle<ProductType>> {
  const response = await apiClient.get(`products/${id}`, {
    params: {
      populate: ["categories", "thumbnail", "gallery"],
    },
  });

  return response.data;
}
