"use client";

import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";

import { useAuth } from "../model/auth-context";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { status } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(
        `/auth/login?callbackUrl=${encodeURIComponent(pathname ?? "")}`,
      );
    }
  }, [status, router, pathname]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
