"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { authorizedNavigationLinks } from "@/shared/constants";
import { cn } from "@/shared/utils";

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = (props) => {
  const { className } = props;
  const pathname = usePathname();

  return (
    <nav className={cn("hidden md:flex items-center gap-6 text-sm", className)}>
      {authorizedNavigationLinks.map(({ link, title, Icon }) => (
        <Link
          key={link}
          href={link}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === link
              ? "text-foreground font-medium"
              : "text-foreground/60",
          )}
        >
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {title}
        </Link>
      ))}
    </nav>
  );
};
