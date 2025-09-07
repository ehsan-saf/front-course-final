import { ApiResponseSingle, CartRequestType, CartType } from "@/types";
import apiClient from "./config/apiClient";

export async function cartApiCall(): Promise<ApiResponseSingle<CartType>> {
  const response = await apiClient.get("/my-basket");

  return response.data;
}

export async function cartApiRequest(
  data: CartRequestType,
): Promise<ApiResponseSingle<CartType>> {
  const response = await apiClient.post("/my-basket", data);

  return response.data;
}
