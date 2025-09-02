import { errorDataType } from "@/api/config/apiClient";
import { AxiosError } from "axios";

export function getErrorMessage(error: AxiosError<errorDataType>) {
  let message = "";

  if (error.response?.data.error.name) {
    const errorName = error.response?.data.error.name;
    if (errorName === "ValidationError") {
      message = "Username or Password is wrong";
    }
  } else if (error.response?.data) {
    const status = error.response.status;
    if (status === 400) {
      message = "Bad Request";
    } else if (status === 401) {
      message = "Unauthorized Access";
    } else if (status === 403) {
      message = "Forbidden";
    } else if (status === 404) {
      message = "Data was not found";
    }
  } else if (error.request) {
    message = "No Connection With The Server";
  } else {
    message = "unknown Error";
  }

  return message;
}
