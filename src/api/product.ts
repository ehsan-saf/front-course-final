import apiClient from "@/api/config/apiClient";
import { ApiResponse, ProductFilters, ProductType } from "@/types";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: ProductFilters;
}

export async function getProductsApi({
  populate,
  filters,
}: Props = {}): Promise<ApiResponse<ProductType>> {
  const response = await apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: filters || {},
    },
  });

  return response.data;
}
