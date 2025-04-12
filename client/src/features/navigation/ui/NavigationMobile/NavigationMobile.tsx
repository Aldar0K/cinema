"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import { authorizedNavigationLinks } from "@/shared/constants";
import { cn } from "@/shared/utils";

type NavigationMobileProps = {
  isOpen: boolean;
  onCloseMenu: () => void;
  className?: string;
};

export const NavigationMobile: FC<NavigationMobileProps> = (props) => {
  const { isOpen, onCloseMenu, className } = props;
  const pathname = usePathname();

  if (isOpen) {
    return (
      <div className="md:hidden border-t">
        <nav className={cn("flex flex-col p-4 space-y-3", className)}>
          {authorizedNavigationLinks.map(({ link, title, Icon }) => (
            <Link
              key={link}
              href={link}
              className={cn(
                "px-2 py-1 rounded-md transition-colors",
                pathname === link ? "bg-muted font-medium" : "hover:bg-muted",
              )}
              onClick={onCloseMenu}
            >
              {Icon && <Icon className="mr-2 h-4 w-4" />}
              {title}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
};
