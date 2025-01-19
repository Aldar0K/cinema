import { FC } from "react";

import { Navigation, ThemeSwitch, ViewerProfile } from "@/features";
import { cn } from "@/shared/utils";

export type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={cn(
        "w-full px-4",
        "bg-background",
        "flex justify-between items-center gap-[16px]",
        className,
      )}
      data-testid="Header"
    >
      <Navigation />

      <div className="flex items-center gap-[16px]">
        <ThemeSwitch />
        <ViewerProfile />
      </div>
    </div>
  );
};

export default Header;
