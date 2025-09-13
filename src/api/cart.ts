import { ApiResponseSingle, CartType, UpdateCartDataType } from "@/types";
import apiClient from "./config/apiClient";

export async function cartApiCall(): Promise<ApiResponseSingle<CartType>> {
  const response = await apiClient.get("/my-basket");

  return response.data;
}

export async function updateCartApiCall(
  data: UpdateCartDataType,
): Promise<ApiResponseSingle<CartType>> {
  const response = await apiClient.put("/my-basket", { data });

  return response.data;
}
