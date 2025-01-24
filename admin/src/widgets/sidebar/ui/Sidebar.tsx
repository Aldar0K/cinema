import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { adminNavigationLinks } from "@/shared/constants";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils";

const Sidebar: FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 border-r" data-testid="sidebar">
      <div className="mx-auto max-w-7xl p-4 space-y-2">
        {adminNavigationLinks.map((route) => (
          <Button
            key={route.link}
            variant={location.pathname === route.link ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              location.pathname === route.link && "bg-primary",
            )}
            asChild
            onMouseEnter={() => {
              route.preloadFn?.();
            }}
          >
            <Link to={route.link}>{route.title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
