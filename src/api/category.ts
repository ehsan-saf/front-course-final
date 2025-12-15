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
}

export async function getCategory({
  id,
}: categoryProps): Promise<ApiResponseSingle<CategoryType>> {
  const response = await apiClient.get(`/categories/${id}`);
  return response.data;
}
