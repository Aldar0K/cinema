export type User = {
  id: string;
  email: string;
};

export type Session = {
  user: User;
};

export type AuthState = {
  status: "loading" | "authenticated" | "unauthenticated";
  session: Session | null;
};
