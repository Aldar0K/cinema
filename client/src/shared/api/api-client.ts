"use client";

// Your backend API URL
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface FetchOptions extends RequestInit {
  token?: string;
}

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export async function apiClient<T = any>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<ApiResponse<T>> {
  try {
    const url = endpoint.startsWith("http")
      ? endpoint
      : `${API_URL}${endpoint}`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: "include", // Important for cookies if your API is on the same domain
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || data.error || "Something went wrong",
      };
    }

    return { data };
  } catch (error) {
    console.error("API client error:", error);
    return {
      error: "Network error. Please try again.",
    };
  }
}

// Convenience methods
export const api = {
  get: <T = any>(endpoint: string, options?: FetchOptions) =>
    apiClient<T>(endpoint, { ...options, method: "GET" }),

  post: <T = any>(endpoint: string, body: any, options?: FetchOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: <T = any>(endpoint: string, body: any, options?: FetchOptions) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    }),

  delete: <T = any>(endpoint: string, options?: FetchOptions) =>
    apiClient<T>(endpoint, { ...options, method: "DELETE" }),
};
