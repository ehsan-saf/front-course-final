import { errorDataType } from "@/api/config/apiClient";
import { AxiosError } from "axios";

export function getErrorMessage(error: AxiosError<errorDataType>) {
  let message = "";

  if (error.response?.data.error.name) {
    const errorName = error.response?.data.error.name;
    if (errorName === "ValidationError") {
      message = "Username or Password is wrong";
    } else {
      message = error.response.data.error.message;
    }
  } else if (error.request) {
    message = "No Connection With The Server";
  } else {
    message = "unknown Error";
  }

  return message;
}
