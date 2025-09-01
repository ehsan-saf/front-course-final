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
): Promise<AuthResponseType> {
  const response = await apiClient.post("/auth/local/register", data);

  return response.data;
}

export async function LoginApiCall(
  data: LoginProps,
): Promise<AuthResponseType> {
  const response = await apiClient.post("/auth/local", data);

  return response.data;
}
