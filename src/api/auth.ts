import { AuthResponseType } from "@/types";
import apiClient from "./config/apiClient";

interface RegisterProps {
  username: string;
  email: string;
  password: string;
}

interface LoginProps {
  identifier: string;
  password: string;
}

export async function registerApiCall(
  data: RegisterProps,
  signal?: AbortSignal,
): Promise<AuthResponseType> {
  const response = await apiClient.post("/auth/local/register", data, {
    signal,
  });

  return response.data;
}

export async function loginApiCall(
  data: LoginProps,
  signal?: AbortSignal,
): Promise<AuthResponseType> {
  const response = await apiClient.post("/auth/local", data, { signal });

  return response.data;
}
