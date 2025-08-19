import apiClient from "@/api/config/apiClient";
import { ApiResponse, ProductFilters, ProductType } from "@/types";

interface Props {
  populate?: Array<"categories" | "thumbnail" | "gallery">;
  filters?: {
    is_popular?: boolean;
    is_trending?: boolean;
    is_top_selling?: boolean;
    is_best_seller?: boolean;
  };
}

export async function getProductsApi({
  populate,
  filters,
}: Props = {}): Promise<ApiResponse<ProductType>> {
  const customFilters: ProductFilters = {};

  if (filters) {
    for (const [key, value] of Object.entries(filters)) {
      customFilters[key] = {
        $eq: value,
      };
    }
  }

  const response = await apiClient.get("/products", {
    params: {
      populate: populate?.join(","),
      filters: customFilters,
    },
  });

  return response.data;
}
