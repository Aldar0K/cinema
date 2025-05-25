"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import type {
  AuthState,
  LoginFormValues,
  RegisterFormValues,
} from "@/entities/session";
import { User } from "@/entities/user";
import { SignInResponse, SignUpResponse } from "./types";

// Your backend API URL
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface AuthContextType extends AuthState {
  login: (data: LoginFormValues) => Promise<User | null>;
  register: (data: RegisterFormValues) => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [state, setState] = useState<AuthState>({
    status: "loading",
    session: null,
  });

  // Fetch session on initial load
  useEffect(() => {
    fetchSession();
  }, []);

  const fetchSession = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`,
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to login");
      }

      const user = (await response.json()) as User;

      if (user) {
        setState({
          status: "authenticated",
          session: {
            user,
          },
        });
      } else {
        setState({
          status: "unauthenticated",
          session: null,
        });
      }
    } catch (error) {
      console.error("Failed to fetch session:", error);
      setState({
        status: "unauthenticated",
        session: null,
      });
    }
  };

  const login = async (data: LoginFormValues): Promise<User | null> => {
    try {
      setState((prev) => ({ ...prev, status: "loading" }));

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-in`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to login");
      }

      const { user } = (await response.json()) as SignInResponse;

      setState({
        status: "authenticated",
        session: {
          user,
        },
      });

      return user;
    } catch (error) {
      console.error("Login error:", error);
      setState({ status: "unauthenticated", session: null });
      return null;
    }
  };

  const register = async (data: RegisterFormValues): Promise<User | null> => {
    try {
      setState((prev) => ({ ...prev, status: "loading" }));

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-up`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to register");
      }

      const { user } = (await response.json()) as SignUpResponse;

      setState({
        status: "authenticated",
        session: {
          user,
        },
      });

      return user;
    } catch (error) {
      console.error("Registration error:", error);
      setState({ status: "unauthenticated", session: null });
      return null;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      setState({ status: "unauthenticated", session: null });

      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
