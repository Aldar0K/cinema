"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { clearAuthCookie, setAuthCookie } from "@/app/actions/auth-actions";
import type {
  AuthState,
  LoginFormValues,
  RegisterFormValues,
  User,
} from "@/entities/session";

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
      const res = await fetch(`/api/auth/session`, {
        method: "GET",
        // credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch session");
      }

      const user = await res.json();

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

      // Make direct API request to your backend
      const res = await fetch(`${API_URL}/auth/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include", // Important for cookies if your API is on the same domain
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to login");
      }

      const responseData = await res.json();

      // Store the token in an HTTP-only cookie using server action
      // if (responseData.token) {
      //   await setAuthCookie(responseData.token);
      // }

      // Update state with user data
      const user = responseData; // Adjust based on your API response

      setState({
        status: "authenticated",
        session: {
          user,
        },
      });

      router.refresh();
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

      // Make direct API request to your backend
      const res = await fetch(`${API_URL}/auth/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include", // Important for cookies if your API is on the same domain
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to register");
      }

      const responseData = await res.json();

      // Store the token in an HTTP-only cookie using server action
      // if (responseData.token) {
      //   await setAuthCookie(responseData.token);
      // }

      // Update state with user data
      const user = responseData.user || responseData; // Adjust based on your API response

      setState({
        status: "authenticated",
        session: {
          user,
        },
      });

      router.refresh();
      return user;
    } catch (error) {
      console.error("Registration error:", error);
      setState({ status: "unauthenticated", session: null });
      return null;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      // Clear the auth cookie using server action
      await clearAuthCookie();

      setState({ status: "unauthenticated", session: null });
      router.refresh();
      router.push("/");
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
