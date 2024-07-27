import { FC } from "react";

import { cn } from "@/shared/utils";

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={cn("flex items-center", className)}
      data-testid="Navigation"
    >
      Navigation
    </div>
  );
};
