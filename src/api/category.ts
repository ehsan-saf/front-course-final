import { ApiResponse, ApiResponseSingle, CategoryType } from "@/types";
import apiClient from "@/api/config/apiClient";

export async function getFeaturedCategories(): Promise<
  ApiResponse<CategoryType>
> {
  const response = await apiClient.get("/categories", {
    params: {
      populate: "thumbnail",
      filters: {
        is_featured: {
          $eq: true,
        },
      },
    },
  });

  return response.data;
}

interface categoryProps {
  id: number | string;
  signal?: AbortSignal;
}

export async function getCategory({
  id,
  signal,
}: categoryProps): Promise<ApiResponseSingle<CategoryType>> {
  const response = await apiClient.get(`/categories/${id}`, { signal });
  return response.data;
}
