import { Loader } from "lucide-react";
import { FC } from "react";

import { cn } from "@/shared/utils";

export const RouteLoader: FC = () => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full z-50",
        "pointer-events-none",
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full",
          "bg-background backdrop-blur",
        )}
      />
      <Loader
        height={32}
        width={32}
        className={cn(
          "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]",
          "animate-spin text-foreground",
        )}
      />
    </div>
  );
};
