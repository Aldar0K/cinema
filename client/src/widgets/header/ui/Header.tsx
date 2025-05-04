"use client";

import { useState } from "react";

import { useAuth } from "@/features/auth";
import {
  ButtonMobile,
  Navigation,
  NavigationMobile,
} from "@/features/navigation";
import { ThemeToggle } from "@/features/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status, session } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <ButtonMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Navigation />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {status === "authenticated" && session?.user && (
            <p>{session.user.email}</p>
          )}
        </div>
      </div>

      <NavigationMobile
        isOpen={isMenuOpen}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
