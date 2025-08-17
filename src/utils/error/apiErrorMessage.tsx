import { AxiosError } from "axios";

export function getErrorMessage(error: AxiosError) {
  let message = "";
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
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
