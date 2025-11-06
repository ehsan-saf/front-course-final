import { ApiResponseSingle, CartType, UpdateCartDataType } from "@/types";
import apiClient from "./config/apiClient";

export async function cartApiCall({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<ApiResponseSingle<CartType>> {
  const token = window.localStorage.getItem("token");
  const uuid = window.localStorage.getItem("uuid");
  if (!token && !uuid) {
    const response: ApiResponseSingle<CartType> = (
      await apiClient.post("/my-basket", {
        params: {
          populate: ["thumbnail", "categories"],
        },
        signal,
      })
    ).data;
    window.localStorage.setItem("uuid", response.data.attributes.uuid!);
    return response;
  } else if (uuid) {
    return (
      await apiClient.get("/my-basket", {
        params: {
          populate: ["thumbnail", "categories"],
          uuid,
        },
        signal,
      })
    ).data;
  }

  return (
    await apiClient.post("/my-basket", {
      params: {
        populate: ["thumbnail", "categories"],
      },
      signal,
    })
  ).data;
}

export async function updateCartApiCall(
  data: UpdateCartDataType,
  signal?: AbortSignal,
): Promise<ApiResponseSingle<CartType>> {
  const uuid = window.localStorage.getItem("uuid");

  if (uuid) {
    return await apiClient.put(
      "/my-basket",
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

  const response = await apiClient.put("/my-basket", { data }, { signal });

  return response.data;
}

export async function uuid2UserApiCall(uuid: string, signal?: AbortSignal) {
  return await apiClient.put(`/basket2User/${uuid}`, {}, { signal });
}
