import { User } from "@/entities/user";

export type SignInResponse = {
  user: User;
  success: boolean;
};

export type SignUpResponse = {
  user: User;
  success: boolean;
};
