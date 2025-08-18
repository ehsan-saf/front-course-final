import { ApiResponse, Menu } from "@/types";
import apiClient from "./config/apiClient";

export async function getMenuApi(): Promise<ApiResponse<Menu>> {
  const response = await apiClient.get("/menus", {
    params: {
      populate: "*",
    },
  });
  return response.data;
}
