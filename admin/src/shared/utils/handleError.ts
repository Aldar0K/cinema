import axios from "axios";

import { notify } from "@/shared/utils";

export function handleError(error: any) {
  if (error?.error?.data?.message) {
    notify.error(error.error.data.message);
  } else if (error?.error?.data?.message[0]) {
    notify.error(error.error.data.message[0]);
  } else if (axios.isAxiosError(error) && error.response) {
    const errorMessage = error.response.data.message;
    notify.error(errorMessage);
  } else {
    notify.error("Что-то пошло не так");
  }
}
