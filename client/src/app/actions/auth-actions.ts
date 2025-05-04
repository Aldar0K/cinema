"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAuthCookie(token: string) {
  cookies().set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
    sameSite: "lax",
  });
}

export async function clearAuthCookie() {
  cookies().delete("auth-token");
}

export async function redirectToLogin(callbackUrl?: string) {
  const url = callbackUrl
    ? `/auth/login?callbackUrl=${encodeURIComponent(callbackUrl)}`
    : "/auth/login";

  redirect(url);
}

export async function redirectToHome() {
  redirect("/");
}
