import apiClient from "./config/apiClient";

export async function getMenuApi() {
  const response = await apiClient.get("/menus", {
    params: {
      populate: "*",
    },
  });

  return response.data;
}
