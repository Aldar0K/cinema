import axios from "axios";

import { notifyErr } from "@/shared/utils";

export function handleError(error: any) {
  if (error?.error?.data?.message) {
    notifyErr(error.error.data.message);
  } else if (error?.error?.data?.message[0]) {
    notifyErr(error.error.data.message[0]);
  } else if (axios.isAxiosError(error) && error.response) {
    const errorMessage = error.response.data.message;
    notifyErr(errorMessage);
  } else {
    notifyErr("Что-то пошло не так");
  }
}
