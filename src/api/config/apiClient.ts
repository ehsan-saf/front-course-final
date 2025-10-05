import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { getErrorMessage } from "@/utils";

const apiClient = axios.create({
  baseURL: "https://nest.navaxcollege.com/api",
  timeout: 120000,
});

export interface errorDataType {
  error: {
    message: string;
    name: string;
    status: number;
  };
}

export default apiClient;

apiClient.interceptors.request.use(function (config) {
  const auth_token =
    typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

  if (auth_token) {
    config.headers.Authorization = `Bearer ${auth_token}`;
  }
  return config;
});

// Add a response interceptor
apiClient.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error: AxiosError<errorDataType>) {
    const msg = getErrorMessage(error);
    toast.error(msg);
    return Promise.reject(error);
  },
);
