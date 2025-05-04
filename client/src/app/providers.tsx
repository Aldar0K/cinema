"use client";

import type React from "react";

import { AuthProvider } from "@/features/auth";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/shared/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        storageKey="theme"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}
