import { ApiResponse, MenuType } from "@/types";
import apiClient from "./config/apiClient";

export async function getMenuApi(): Promise<ApiResponse<MenuType>> {
  const response = await apiClient.get("/menus", {
    params: {
      populate: "*",
    },
  });
  return response.data;
}
