import { RegisterResponseType } from "@/types";
import apiClient from "./config/apiClient";

interface Props {
  username: string;
  email: string;
  password: string;
}

export async function registerApiCall(
  data: Props,
): Promise<RegisterResponseType> {
  const response = await apiClient.post("/auth/local/register", data);

  return response.data;
}
