import { ApiResponseSingle, CartType, UpdateCartDataType } from "@/types";
import apiClient from "./config/apiClient";

export async function cartApiCall(): Promise<ApiResponseSingle<CartType>> {
  const token = window.localStorage.getItem("token");
  const uuid = window.localStorage.getItem("uuid");
  if (!token && !uuid) {
    const response: ApiResponseSingle<CartType> = (
      await apiClient.post("/my-basket")
    ).data;
    window.localStorage.setItem("uuid", response.data.attributes.uuid!);
  }
  if (uuid) {
    return (
      await apiClient.get("/my-basket", {
        params: {
          uuid,
        },
      })
    ).data;
  }
  return (await apiClient.get("my-basket")).data;
}

export async function updateCartApiCall(
  data: UpdateCartDataType,
): Promise<ApiResponseSingle<CartType>> {
  const uuid = window.localStorage.getItem("uuid");

  if (uuid) {
    return await apiClient.put(
      "my-basket",
      {
        data,
      },
      {
        params: {
          uuid,
        },
      },
    );
  }

  const response = await apiClient.put("/my-basket", { data });

  return response.data;
}
