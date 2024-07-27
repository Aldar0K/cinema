import { FC } from "react";

import { Navigation, ViewerProfile } from "@/features";
import { cn } from "@/shared/utils";

export type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={cn(
        "w-full bg-background",
        "flex justify-between items-center gap-[16px]",
        className,
      )}
      data-testid="Header"
    >
      <Navigation />
      <ViewerProfile />
    </div>
  );
};

export default Header;
