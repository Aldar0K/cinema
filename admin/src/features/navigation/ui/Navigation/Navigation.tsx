import { FC } from "react";
import { Link } from "react-router-dom";

import { adminNavigationLinks } from "@/shared/constants";
import { cn } from "@/shared/utils";

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn("flex", className)} data-testid="Navigation">
      <ul className="flex items-center gap-[16px]">
        {adminNavigationLinks.map(({ link, title, preloadFn }) => (
          <Link
            key={link}
            to={link}
            onMouseEnter={preloadFn}
            onFocus={preloadFn}
          >
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
