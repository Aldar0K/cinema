import { User } from "@/entities/user";

export type Session = {
  user: User;
};

export type AuthState = {
  status: "loading" | "authenticated" | "unauthenticated";
  session: Session | null;
};
