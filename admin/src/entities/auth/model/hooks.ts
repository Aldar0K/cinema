import Cookies from "js-cookie";

import { CookieNames } from "@/shared/constants";

export const useAuth = () => {
  const token = Cookies.get(CookieNames.ACCESS_TOKEN);

  return !!token;
};
