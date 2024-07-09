import { getEmail, useAppSelect } from "@/shared/store";

export const useAuth = () => {
  const email = useAppSelect(getEmail);

  return !!email;
};
