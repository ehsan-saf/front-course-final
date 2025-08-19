import { ApiResponse, CategoryType } from "@/types";
import apiClient from "./config/apiClient";

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
